import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index";

const Contato = lazy(() => import("./pages/Contato"));
const Termos = lazy(() => import("./pages/Termos"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const FAQ = lazy(() => import("./pages/FAQ"));
const TrabalheConosco = lazy(() => import("./pages/TrabalheConosco"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AgentesIA = lazy(() => import("./pages/AgentesIA"));
const ServicosInternos = lazy(() => import("./pages/ServicosInternos"));
const SitesBlogs = lazy(() => import("./pages/SitesBlogs"));
const MicroSaas = lazy(() => import("./pages/MicroSaas"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/termos" element={<Termos />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
              <Route path="/agentes-ia" element={<AgentesIA />} />
              <Route path="/servicos-internos" element={<ServicosInternos />} />
              <Route path="/sites-blogs" element={<SitesBlogs />} />
              <Route path="/microsaas" element={<MicroSaas />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <WhatsAppButton />
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
