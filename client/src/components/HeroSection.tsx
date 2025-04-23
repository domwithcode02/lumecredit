import { Button } from "@/components/ui/button";
import { Check, CreditCard, TrendingUp, Shield } from "lucide-react";
import mascotImage from "@assets/ChatGPT Image Apr 12, 2025, 10_10_34 PM.png";
import creditMixImage from "@assets/161df62e-8ed6-42dc-9cac-0568d4c47b82.png";
import speechBubbleImage from "@assets/ChatGPT Image Apr 22, 2025, 10_44_33 PM.png";

interface HeroSectionProps {
  onButtonClick: () => void;
}

export default function HeroSection({ onButtonClick }: HeroSectionProps) {
  return (
    <section className="bg-white pt-44 pb-6 sm:pt-44 sm:pb-8 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>

            

            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              <span className="text-[#F5C518]">TotalBoost+</span>, the Perfect <span className="text-[#003366]">Credit</span> Mix for only $50/month
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-6 max-w-xl">
              Get Lume Credit's Premium Bundle with both essential tradeline types to build your credit history - a revolving and an installment line for $25 each, plus free rent reporting when bundled!
            </p>
            
            {/* Limited Time Offer Benefits */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#003366] mb-3">Exclusive Bundle Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center text-sm text-slate-700 bg-slate-50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-[#41c99e]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <CreditCard size={16} className="text-[#41c99e]" />
                  </div>
                  <span><b>FlexCredit™</b> Revolving</span>
                </div>
                <div className="flex items-center text-sm text-slate-700 bg-slate-50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-[#4aade3]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Shield size={16} className="text-[#4aade3]" />
                  </div>
                  <span><b>SteadyBuild™</b> Installment</span>
                </div>
                <div className="flex items-center text-sm text-slate-700 bg-slate-50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-[#ffc829]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <TrendingUp size={16} className="text-[#ffc829]" />
                  </div>
                  <span><b>HomeTrack™</b> Rent Reporting</span>
                </div>
              </div>
            </div>
            
            {/* Special Bundle Offer */}
            <div className="mb-8 bg-gradient-to-r from-[#003366]/10 to-[#F5C518]/10 p-6 rounded-xl border border-[#003366]/10 relative">
              <div className="absolute top-0 right-0">
                <div className="bg-[#F5C518] text-[#003366] text-xs font-bold py-1 px-3 rounded-bl-lg">
                  LIMITED TIME OFFER
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">Special Offer - 5 Year Credit Bundle</h3>
              <p className="text-md text-slate-700 mb-4">
                For the first 250 users only: Get the full TotalBoost+ bundle for 5 full years with just one payment of $200 instead of $3,000+ over the same period!
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center bg-white px-3 py-1.5 rounded-full text-sm text-slate-700">
                  <Check size={14} className="text-[#003366] mr-1.5" />
                  <span>Just $200 One-time Payment</span>
                </div>
                <div className="flex items-center bg-white px-3 py-1.5 rounded-full text-sm text-slate-700">
                  <Check size={14} className="text-[#003366] mr-1.5" />
                  <span>5 Years of Credit Reporting</span>
                </div>
                <div className="flex items-center bg-white px-3 py-1.5 rounded-full text-sm text-slate-700">
                  <Check size={14} className="text-[#003366] mr-1.5" />
                  <span>3 Tradeline Types</span>
                </div>
                <div className="flex items-center bg-white px-3 py-1.5 rounded-full text-sm text-slate-700">
                  <Check size={14} className="text-[#003366] mr-1.5" />
                  <span>All 3 Credit Bureaus</span>
                </div>
              </div>
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
                
                <div className="absolute top-0 right-16 -translate-y-80 z-10">
                  {/* Comic style speech bubble using direct image */}
                  <div className="relative w-[350px]">
                    <img 
                      src={speechBubbleImage} 
                      alt="Speech Bubble" 
                      className="w-full h-auto"
                    />
                    
                    {/* Text overlay on speech bubble */}
                    <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: '25px' }}>
                      <p className="font-bold text-white text-2xl text-center drop-shadow-md" 
                         style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                        You gotta have credit bro!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
