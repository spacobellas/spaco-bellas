// src/App.tsx
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Linktree from "@/pages/Linktree";
import Home from "@/pages/Home";
import SpaCelebridades from "@/pages/SpaCelebridades";
import SpaIndividual from "@/pages/SpaIndividual";
import SpaCasal from "@/pages/SpaCasal";
import SpaNoiva from "@/pages/SpaNoiva";
import WhatsAppRedirect from "@/pages/WhatsAppRedirect";
import Empresas from "@/pages/Empresas";
import NaoEncontrado from "@/pages/NaoEncontrado";
import MensalBellas from "@/pages/MensalBellas";

function Router() {
  return (
    <Switch>
      {/* Main page */}
      <Route path="/" component={Linktree} />
      <Route path="/home" component={Home} />

      {/* Spa Day landing pages */}
      <Route path="/spa-celebridades" component={SpaCelebridades} />
      <Route path="/spa-individual" component={SpaIndividual} />
      <Route path="/spa-casal" component={SpaCasal} />
      <Route path="/spa-diadanoiva" component={SpaNoiva} />

      {/* Mulheres VIP Bellas Program */}
      <Route path="/mensal-bellas" component={MensalBellas} />
      {/* Optional alias for marketing/SEO */}
      <Route path="/mulheres-vip-bellas" component={MensalBellas} />

      <Route path="/empresas" component={Empresas} />

      {/* WhatsApp - Direct */}
      <Route path="/whatsapp" component={WhatsAppRedirect} />

      <Route path="/whatsapp/:slug?">
        <WhatsAppRedirect />
      </Route>

      {/* 404 */}
      <Route component={NaoEncontrado} />
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
