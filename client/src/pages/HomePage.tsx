import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import UrgencySection from "@/components/UrgencySection";
import FormSection from "@/components/FormSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
  const { data: spotsData, refetch } = useQuery({
    queryKey: ["/api/spots-remaining"],
    refetchOnWindowFocus: false,
    staleTime: 60000, // 1 minute
  });

  // Scroll to form when "Reserve Your Spot Now" button is clicked
  const scrollToForm = () => {
    const formSection = document.getElementById("reserve-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] font-['Inter',sans-serif] text-[#333]">
      <Header spotsRemaining={spotsData?.spotsRemaining || 0} totalSpots={spotsData?.totalSpots || 250} />
      
      <main className="flex-grow">
        <HeroSection onButtonClick={scrollToForm} />
        <BenefitsSection />
        <UrgencySection spotsRemaining={spotsData?.spotsRemaining || 0} />
        <FormSection id="reserve-form" onSuccess={refetch} />
        <TrustSignalsSection />
      </main>
      
      <Footer />
    </div>
  );
}
