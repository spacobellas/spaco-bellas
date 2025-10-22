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
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Página principal - Linktree style */}
      <Route path="/" component={LinktreeIndex} />
      
      {/* Página institucional completa */}
      <Route path="/institucional" component={Home} />
      
      {/* Landing page do Spa das Celebridades */}
      <Route path="/celebridades" component={SpaCelebridades} />
      
      {/* WhatsApp - Direto */}
      <Route path="/whatsapp" component={WhatsAppRedirect} />
      
      {/* WhatsApp - Grupo VIP do Pré-Lançamento */}
      <Route path="/whatsapp/grupo-vip" component={WhatsAppRedirect} />
      
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
