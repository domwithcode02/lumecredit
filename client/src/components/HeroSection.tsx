import { Button } from "@/components/ui/button";
import { Check, CreditCard, TrendingUp, Shield } from "lucide-react";
import mascotImage from "@assets/ChatGPT Image Apr 12, 2025, 10_10_34 PM.png";

interface HeroSectionProps {
  onButtonClick: () => void;
}

export default function HeroSection({ onButtonClick }: HeroSectionProps) {
  return (
    <section className="bg-white pt-32 pb-8 sm:pt-32 sm:pb-12 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#F5C518] mr-2"></span>
              <span className="text-sm font-medium text-slate-700">Limited Time Offer - First 250 Users Only!</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              You Gotta Have <span className="text-[#003366]">Credit</span>, <span className="text-[#F5C518]">Bro</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl">
              Get Lume Credit's Premium Bundle with two credit line subscriptions to help build your credit history, with continuous reporting and expert guidance. No monthly fees ever again!
            </p>
            
            <div className="flex mb-12">
              <Button 
                className="btn-primary text-base sm:text-lg px-8 py-6 h-auto w-full sm:w-auto flex items-center gap-2"
                onClick={onButtonClick}
              >
                <span>Join the First 250 Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center text-sm text-slate-600">
                <Check size={16} className="text-[#4A90E2] mr-2" />
                <span>FlexCredit™: Revolving Tradeline</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Check size={16} className="text-[#4A90E2] mr-2" />
                <span>SteadyBuild™: Installment Tradeline</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Check size={16} className="text-[#4A90E2] mr-2" />
                <span>HomeTrack™: Rent Reporting</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Check size={16} className="text-[#4A90E2] mr-2" />
                <span>Free Checking Account</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Check size={16} className="text-[#4A90E2] mr-2" />
                <span>LumeCredit Visa® Card Access</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-blue-50 to-[#F5C51820] w-[550px] h-[550px] rounded-full -z-10"></div>
            
            <div className="relative transform hover:scale-105 transition-transform duration-500 ease-in-out">
              <div className="absolute -top-4 -right-4 bg-white text-[#4A90E2] font-bold rounded-full py-2 px-4 shadow-lg transform rotate-12 z-10 border-2 border-[#F5C518]">
                760+ Credit Score!
              </div>
              
              <div className="mascot-container relative z-0">
                <img 
                  src={mascotImage} 
                  alt="LumeCredit Mascot" 
                  className="w-full max-w-md mx-auto object-contain drop-shadow-2xl"
                />
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-slate-800 rounded-xl p-4 max-w-[80%] shadow-xl border border-[#4A90E2]/20">
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
