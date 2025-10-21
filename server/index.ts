import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware de logging
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Função para inicializar a aplicação
async function initializeApp() {
  // Registra as rotas (não retorna mais um server)
  await registerRoutes(app);

  // Error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    console.error(err);
  });

  // Setup de ambiente
  if (process.env.NODE_ENV === "development") {
    // Em desenvolvimento, cria server HTTP e usa Vite
    const { createServer } = await import("http");
    const server = createServer(app);
    await setupVite(app, server);

    const port = parseInt(process.env.PORT || "5000", 10);
    server.listen(port, "0.0.0.0", () => {
      log(`serving on port ${port}`);
    });
  } else {
    // Em produção (Vercel), apenas serve os estáticos
    serveStatic(app);
  }
}

// Inicializa apenas se não for ambiente serverless
if (process.env.VERCEL !== "1") {
  initializeApp().catch((error) => {
    console.error("Failed to initialize app:", error);
    process.exit(1);
  });
}

// Export para Vercel serverless
export default app;
