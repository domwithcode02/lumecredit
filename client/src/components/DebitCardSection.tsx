import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, Building2 } from "lucide-react";
import debitCardImage from "../assets/lume-debit-card.png";

import ChatGPT_Image_Jun_20__2025__04_36_54_PM from "@assets/ChatGPT Image Jun 20, 2025, 04_36_54 PM.png";

export default function DebitCardSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("reserve-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="debit-card" className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-[#00336610] px-3 py-1 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#F5C518] mr-2"></span>
              <span className="text-sm font-medium text-slate-700">Free Banking Solution</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              The <span className="text-[#003366]">LumeCredit</span> <span className="text-[#F5C518]">Visa® Debit</span> Card
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 max-w-xl">
              Get access to our free Visa® debit card that comes with opening a free checking account. 
              Manage your money with zero hassle and no hidden fees.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366] shrink-0">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">No Hidden Fees</h3>
                  <p className="text-slate-600">No monthly fees, no minimum balance requirements, and no overdraft fees to worry about.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366] shrink-0">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">50,000+ Free ATMs Nationwide</h3>
                  <p className="text-slate-600">Access your cash for free at over 50,000 ATMs in our nationwide network.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366] shrink-0">
                  <Wallet size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">No Fee Purchases</h3>
                  <p className="text-slate-600">Shop anywhere Visa is accepted with no transaction fees or foreign transaction fees.</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={scrollToForm}
              className="bg-[#003366] hover:bg-[#002347] text-white font-bold px-6 py-3 rounded-lg mb-6"
            >
              Open a Free Account
            </Button>
            
            <div className="bg-white rounded-lg p-4 border border-slate-200 max-w-xl text-xs text-slate-500 space-y-2">
              <p className="font-medium text-slate-700 mb-1">Important Disclosures:</p>
              <p>
                Card issued by Sutton Bank, Member FDIC, pursuant to license from Visa® U.S.A. Inc.
              </p>
              <p>
                Funds in your LumeCredit account are FDIC-insured through our partner bank up to $250,000 per depositor.
              </p>
              <p className="text-[10px] italic">
                The LumeCredit Visa® Debit Card is available with a LumeCredit Checking Account. Terms and conditions apply.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Card image with custom background */}
              <div className="rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out bg-gradient-to-br from-[#003366] to-[#002347] p-0.5">
                <div className="bg-gradient-to-br from-[#003366] to-[#001a35] rounded-2xl p-4">
                  <img 
                    src={ChatGPT_Image_Jun_20__2025__04_36_54_PM} 
                    alt="LumeCredit Visa Debit Card" 
                    className="w-full h-auto drop-shadow-xl"
                  />
                  
                  {/* Golden accent elements */}
                  <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-[#F5C518]/10 blur-xl"></div>
                  <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-[#F5C518]/5 blur-xl"></div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs text-slate-600 shadow-md border border-slate-200 font-medium">
                Card design subject to change
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}