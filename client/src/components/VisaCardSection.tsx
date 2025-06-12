import { Button } from "@/components/ui/button";
import cardImage from "@assets/lumecredit_card_in_hand_transparent.png";

import ChatGPT_Image_May_27__2025__10_05_44_AM from "@assets/ChatGPT Image May 27, 2025, 10_05_44 AM.png";

export default function VisaCardSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("reserve-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="visa-card" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center rounded-full bg-[#00336610] px-3 py-1 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#F5C518] mr-2"></span>
              <span className="text-sm font-medium text-slate-700">Included With Your Membership</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              The <span className="text-[#003366]">LumeCredit</span> <span className="text-[#F5C518]">Secured Visa®</span> Card
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 max-w-xl">
              Get access to our exclusive Secured Visa® card that comes free with the purchase of any tradeline. 
              Build credit with just a $100 deposit while enjoying premium benefits without the premium costs.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-[#F5C518] flex items-center justify-center text-white font-bold shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-slate-900">Guaranteed Approval</h3>
                  <p className="text-slate-600">No credit check required - everyone gets approved.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-[#F5C518] flex items-center justify-center text-white font-bold shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-slate-900">Zero Fees</h3>
                  <p className="text-slate-600">No annual fees, no interest fees, and extremely low late fees.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-[#F5C518] flex items-center justify-center text-white font-bold shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-slate-900">No Overdraft Fees</h3>
                  <p className="text-slate-600">We've eliminated costly overdraft fees to help you manage your finances.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-[#F5C518] flex items-center justify-center text-white font-bold shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-slate-900">0% Interest on Balance</h3>
                  <p className="text-slate-600">Because why would we ever charge interest on YOUR OWN money?</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={scrollToForm}
              className="bg-[#F5C518] hover:bg-[#e5b616] text-[#003366] font-bold px-6 py-3 rounded-lg mb-6"
            >
              Get Your Card
            </Button>
            
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 max-w-xl text-xs text-slate-500 space-y-2">
              <p className="font-medium text-slate-700 mb-1">Important Disclosures:</p>
              <p>
                Card issued by Sutton Bank, Member FDIC, pursuant to license from Visa® U.S.A. Inc.
              </p>
              <p>
                Funds in your LumeCredit account are FDIC-insured through our partner bank up to $250,000 per depositor.
              </p>
              <p>
                <span className="font-medium text-slate-600">Fee Disclosure:</span> <span className="font-bold text-[#003366]">No annual fees...ever</span>. No monthly fees. No overdraft charges. No minimum balance requirements. See full terms for details.
              </p>
              <p className="text-[10px] italic">
                The LumeCredit Visa® Card is subject to application and approval. Terms and conditions apply. 
                See cardholder agreement for complete details including pricing and fees.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00336610] to-[#F5C51810] rounded-lg blur-lg opacity-75"></div>
              <img 
                src={ChatGPT_Image_May_27__2025__10_05_44_AM} 
                alt="LumeCredit Visa Card" 
                className="relative w-full max-w-md object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute bottom-0 right-0 bg-white/80 backdrop-blur-sm px-3 py-1 rounded text-xs text-slate-500 shadow-sm border border-slate-200">
                Card design subject to change
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}