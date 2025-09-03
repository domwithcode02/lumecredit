import { Check, AlertCircle } from "lucide-react";
import familyImage from "@assets/ChatGPT Image Apr 21, 2025, 10_58_13 PM.png";

export default function FamiliesSection() {

  return (
    <section id="families" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-8">
          <div className="flex flex-col items-center mb-2 relative" id="lumestart-section">
            <div className="bg-[#F5C518] text-[#003366] text-xs font-bold py-1 px-3 rounded-lg mb-2">
              COMING SOON
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
              <span className="text-[#003366]">Lil' CreditBro™</span>: Credit Before 18
            </h2>
          </div>
          <div className="relative mb-6 max-w-xl mx-auto">
            <p className="text-lg md:text-xl text-center font-medium text-slate-600 italic px-6 py-2 bg-gradient-to-r from-transparent via-[#F5C518]/10 to-transparent">
              Mom and Dad! Give your teen a head start in life <span className="relative inline-block">
                for real!!
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#F5C518]/50 rounded-full"></span>
              </span>
            </p>
          </div>
          
          <div className="relative max-w-md mx-auto mb-8">
            <img 
              src={familyImage} 
              alt="Family with LumeCredit" 
              className="w-full drop-shadow-xl rounded-lg"
            />
            
            <div className="absolute -bottom-10 right-0 bg-white py-3 px-5 rounded-2xl shadow-xl border border-[#F5C518]/20 max-w-xs">
              <div className="flex gap-3 items-center">
                <p className="text-slate-700 font-medium">
                  "My daughter started college with a 720 credit score - thank you LumeCredit!"
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="bg-[#F5C518]/10 px-6 py-4 rounded-lg border-l-4 border-r-4 border-[#F5C518] mb-6 relative inline-block mx-auto">
              <p className="text-slate-700 font-medium">
                Give your children the gift of excellent credit the moment they turn 18
              </p>
            </div>
            
            <p className="text-slate-600 mb-6 text-lg max-w-3xl mx-auto">
              Most young adults start with zero credit history, forcing them to struggle for years to build their score. 
              With <span className="font-semibold text-[#003366]">Lil' CreditBro™</span>, we change the game through 
              authorized backdated credit reporting that builds history <span className="italic">before</span> they turn 18.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-full">
                <div className="bg-[#F5C518]/20 p-2 rounded-full mr-4 flex-shrink-0">
                  <Check size={20} className="text-[#003366]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Backdated Credit Reporting</h3>
                  <p className="text-slate-600">
                    Special reporting to all 3 major bureaus creates up to 3 years of positive payment history that 
                    activates the moment they turn 18.
                  </p>
                </div>
              </div>
            </div>
              
            <div className="space-y-4">
              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-full">
                <div className="bg-[#F5C518]/20 p-2 rounded-full mr-4 flex-shrink-0">
                  <Check size={20} className="text-[#003366]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Perfect Credit Mix from Day One</h3>
                  <p className="text-slate-600">
                    Your child instantly receives the benefit of revolving and installment credit history with our 
                    proprietary tradeline system.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-[#F5C518]/20 p-2 rounded-full mr-4 flex-shrink-0">
                  <Check size={20} className="text-[#003366]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Financial Education Included</h3>
                  <p className="text-slate-600">
                    Complete credit education portal teaches responsible credit habits before they're on their own.
                  </p>
                </div>
              </div>
            </div>
          </div>
            
          <div className="bg-[#003366]/5 p-6 rounded-xl border border-[#003366]/10 mb-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-[#003366] mb-3 text-center">
              LumeStart™ Advantage 
            </h3>
            <p className="text-md text-slate-700 mb-4 text-center">
              Give your child a 700+ credit score the moment they turn 18 - no other program offers this level of advantage.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r mb-5">
              <div className="flex items-start">
                <AlertCircle size={18} className="text-green-600 mr-2 mt-0.5" />
                <p className="text-sm text-green-800">
                  <span className="font-bold">100% Safe & Legal:</span> Our program uses authorized user tradelines and backdated reporting methods that are fully compliant with all credit regulations and bureau policies.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="flex items-center bg-white px-3 py-1.5 rounded-full text-sm text-slate-700">
                <Check size={14} className="text-[#003366] mr-1.5" />
                <span>Fully legal and authorized</span>
              </div>
              <div className="flex items-center bg-white px-3 py-1.5 rounded-full text-sm text-slate-700">
                <Check size={14} className="text-[#003366] mr-1.5" />
                <span>Up to 3 years backdated</span>
              </div>
              <div className="flex items-center bg-white px-3 py-1.5 rounded-full text-sm text-slate-700">
                <Check size={14} className="text-[#003366] mr-1.5" />
                <span>Parental controlled access</span>
              </div>
              <div className="flex items-center bg-white px-3 py-1.5 rounded-full text-sm text-slate-700">
                <Check size={14} className="text-[#003366] mr-1.5" />
                <span>Bureau-compliant method</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}