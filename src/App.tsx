import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Approche from "./pages/Approche.tsx";
import Offres from "./pages/Offres.tsx";
import Socle from "./pages/offres/Socle.tsx";
import Reset from "./pages/offres/Reset.tsx";
import Solo from "./pages/offres/Solo.tsx";
import APropos from "./pages/APropos.tsx";
import FaireLePoint from "./pages/FaireLePoint.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import Blog from "./pages/Blog.tsx";
import LaConversationQuonEvite from "./pages/blog/LaConversationQuonEvite.tsx";
import CestLuiLeProbleme from "./pages/blog/CestLuiLeProbleme.tsx";

const queryClient = new QueryClient();

export const AppShell = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
    </TooltipProvider>
  </QueryClientProvider>
);

export const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/approche" element={<Approche />} />
      <Route path="/offres" element={<Offres />} />
      <Route path="/offres/socle" element={<Socle />} />
      <Route path="/offres/reset" element={<Reset />} />
      <Route path="/offres/solo" element={<Solo />} />
      <Route path="/situations" element={<Navigate to="/blog/" replace />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/faire-le-point" element={<FaireLePoint />} />
      <Route path="/le-point" element={<FaireLePoint />} />
      <Route path="/echelle" element={<Navigate to="/faire-le-point/" replace />} />
      <Route path="/qui-je-suis" element={<Navigate to="/a-propos/" replace />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/la-conversation-quon-evite" element={<LaConversationQuonEvite />} />
      <Route path="/blog/c-est-lui-le-probleme" element={<CestLuiLeProbleme />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <AppShell>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  </AppShell>
);

export default App;
