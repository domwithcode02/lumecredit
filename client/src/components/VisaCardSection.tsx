import { Button } from "@/components/ui/button";
import cardImage from "@assets/lumecredit_card_in_hand_transparent.png";

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
              The <span className="text-[#003366]">LumeCredit</span> <span className="text-[#F5C518]">Visa®</span> Card
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 max-w-xl">
              Get access to our exclusive Visa® card that comes free when opened with a checking account. 
              Build credit while enjoying premium benefits without the premium costs.
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
                  <h3 className="font-semibold text-slate-900">Free Checking Account</h3>
                  <p className="text-slate-600">Get a free checking account with your card to simplify your banking experience.</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="btn-primary text-base sm:text-lg px-8 py-6 h-auto w-full sm:w-auto flex items-center gap-2 bg-[#003366] hover:bg-[#002244]"
              onClick={scrollToForm}
            >
              <span>Reserve Your Card Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00336610] to-[#F5C51810] rounded-lg blur-lg opacity-75"></div>
              <img 
                src={cardImage} 
                alt="LumeCredit Visa Card" 
                className="relative w-full max-w-md object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}