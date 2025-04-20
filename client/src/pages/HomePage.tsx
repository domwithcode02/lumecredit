import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import UrgencySection from "@/components/UrgencySection";
import TradelinesSection from "@/components/TradelinesSection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
  interface SpotsData {
    spotsRemaining: number;
    totalSpots: number;
  }

  const { data: spotsData, refetch } = useQuery<SpotsData>({
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

  // Set smooth scrolling for the entire page
  useEffect(() => {
    // Handle anchor link clicks for smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        
        const element = e.currentTarget as HTMLAnchorElement;
        const targetId = element.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header spotsRemaining={spotsData?.spotsRemaining || 0} totalSpots={spotsData?.totalSpots || 250} />
      
      <main className="flex-grow">
        <HeroSection onButtonClick={scrollToForm} />
        <BenefitsSection />
        <UrgencySection spotsRemaining={spotsData?.spotsRemaining || 0} />
        <TradelinesSection />
        <FormSection id="reserve-form" onSuccess={refetch} />
      </main>
      
      <Footer />
    </div>
  );
}
