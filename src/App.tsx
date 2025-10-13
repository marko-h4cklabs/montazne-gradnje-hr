import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Garages from "./pages/Garages";
import News from "./pages/News";
import Reviews from "./pages/Reviews";
import DetailedInfo from "./pages/DetailedInfo";
import GarageInquiry from "./pages/GarageInquiry";
import HouseInquiry from "./pages/HouseInquiry";
import HallInquiry from "./pages/HallInquiry";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import GaragesGallery from "./pages/GaragesGallery";
import HousesGallery from "./pages/HousesGallery";
import HallsGallery from "./pages/HallsGallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recenzije" element={<Reviews />} />
          <Route path="/galerija" element={<Garages />} />
          <Route path="/vijesti" element={<News />} />
          <Route path="/detaljne-informacije" element={<DetailedInfo />} />
          <Route path="/garaze-upit" element={<GarageInquiry />} />
          <Route path="/kuce-upit" element={<HouseInquiry />} />
          <Route path="/hale-upit" element={<HallInquiry />} />
          <Route path="/montazne-garaze-galerija" element={<GaragesGallery />} />
          <Route path="/montazne-kuce-galerija" element={<HousesGallery />} />
          <Route path="/montazne-hale-galerija" element={<HallsGallery />} />
          <Route path="/hvala" element={<ThankYou />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
