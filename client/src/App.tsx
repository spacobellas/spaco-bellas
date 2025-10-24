// src/App.tsx
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Páginas
import LinktreeIndex from "@/pages/LinktreeIndex";
import Home from "@/pages/Home";
import SpaCelebridades from "@/pages/SpaCelebridades";
import WhatsAppRedirect from "@/pages/WhatsAppRedirect";
import EmpresasPage from "@/pages/empresas";
import NotFound from "@/pages/not-found";

// Nova página: Mulheres VIP Bellas
// Certifique-se de ter criado src/pages/mensal-bellas.tsx conforme definido anteriormente.
import MensalBellasPage from "@/pages/mensal-bellas";

function Router() {
  return (
    <Switch>
      {/* Página principal - Linktree style */}
      <Route path="/" component={LinktreeIndex} />

      {/* Página institucional completa */}
      <Route path="/institucional" component={Home} />

      {/* Landing page do Spa das Celebridades */}
      <Route path="/spa-celebridades" component={SpaCelebridades} />

      {/* NOVA: Programa Mulheres VIP Bellas */}
      <Route path="/mensal-bellas" component={MensalBellasPage} />
      {/* Alias opcional para campanhas/SEO */}
      <Route path="/mulheres-vip-bellas" component={MensalBellasPage} />

      <Route path="/empresas" component={EmpresasPage} />

      {/* WhatsApp - Direto */}
      <Route path="/whatsapp" component={WhatsAppRedirect} />

      <Route path="/whatsapp/:slug?"><WhatsAppRedirect /></Route>

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
