import { Button } from "@/components/ui/button";
import { Check, CreditCard, TrendingUp, Shield } from "lucide-react";
import mascotImage from "@assets/ChatGPT Image Apr 12, 2025, 10_10_34 PM.png";
import creditMixImage from "@assets/161df62e-8ed6-42dc-9cac-0568d4c47b82.png";

interface HeroSectionProps {
  onButtonClick: () => void;
}

export default function HeroSection({ onButtonClick }: HeroSectionProps) {
  return (
    <section className="bg-white pt-32 pb-6 sm:pt-32 sm:pb-8 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-[#00336610] px-3 py-1 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#F5C518] mr-2"></span>
              <span className="text-sm font-medium text-slate-700">Limited Time Offer - First 250 Users Only!</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              <span className="text-[#F5C518]">TotalBoost+</span> 5-Year <span className="text-[#003366]">Credit</span> Bundle
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-6 max-w-xl">
              Get Lume Credit's Premium Bundle with all three essential tradeline types to build your credit history with monthly reporting to every credit bureau. Just one payment for 5 years of service!
            </p>
            
            <div className="mb-8">
              <img 
                src={creditMixImage} 
                alt="The Perfect Credit Mix" 
                className="max-w-xs md:max-w-sm mx-auto md:mx-0 h-auto object-contain"
              />
            </div>
            
            <div className="flex mb-10">
              <Button 
                className="btn-primary text-base sm:text-lg px-8 py-6 h-auto w-full sm:w-auto flex items-center gap-2"
                onClick={onButtonClick}
              >
                <span>Secure My Spot Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
            
            {/* Limited Time Offer Benefits */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#003366] mb-3">Exclusive Bundle Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center text-sm text-slate-700 bg-slate-50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-[#41c99e]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <CreditCard size={16} className="text-[#41c99e]" />
                  </div>
                  <span>Revolving Credit Tradeline</span>
                </div>
                <div className="flex items-center text-sm text-slate-700 bg-slate-50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-[#4aade3]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Shield size={16} className="text-[#4aade3]" />
                  </div>
                  <span>Installment Loan Tradeline</span>
                </div>
                <div className="flex items-center text-sm text-slate-700 bg-slate-50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-[#ffc829]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <TrendingUp size={16} className="text-[#ffc829]" />
                  </div>
                  <span>Retail/Utility Tradeline</span>
                </div>
              </div>
            </div>
            
            {/* Key Benefits */}
            <div>
              <h3 className="text-md font-medium text-slate-600 mb-2">TotalBoost+ Bundle Benefits:</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-[#003366]/5 px-3 py-1.5 rounded-full text-sm text-slate-700">
                  <Check size={14} className="text-[#003366] mr-1.5" />
                  <span>Just $200 One-time Payment</span>
                </div>
                <div className="flex items-center bg-[#003366]/5 px-3 py-1.5 rounded-full text-sm text-slate-700">
                  <Check size={14} className="text-[#003366] mr-1.5" />
                  <span>5 Years of Credit Reporting</span>
                </div>
                <div className="flex items-center bg-[#003366]/5 px-3 py-1.5 rounded-full text-sm text-slate-700">
                  <Check size={14} className="text-[#003366] mr-1.5" />
                  <span>3 Tradeline Types</span>
                </div>
                <div className="flex items-center bg-[#003366]/5 px-3 py-1.5 rounded-full text-sm text-slate-700">
                  <Check size={14} className="text-[#003366] mr-1.5" />
                  <span>All 3 Credit Bureaus</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#F5C51810] to-[#00336610] w-[550px] h-[550px] rounded-full -z-10"></div>
            
            <div className="relative transform hover:scale-105 transition-transform duration-500 ease-in-out">              
              <div className="mascot-container relative z-0">
                <img 
                  src={mascotImage} 
                  alt="LumeCredit Mascot" 
                  className="w-full max-w-md mx-auto object-contain drop-shadow-2xl"
                />
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-slate-800 rounded-xl p-4 max-w-[80%] shadow-xl border border-[#F5C518]/30">
                  <p className="font-medium text-center">
                    "Drive your credit score higher with LumeCredit!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
