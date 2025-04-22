import { Check, AlertCircle } from "lucide-react";
import familyImage from "@assets/ChatGPT Image Apr 21, 2025, 10_58_13 PM.png";

export default function FamiliesSection() {

  return (
    <section id="families" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              <span className="text-[#003366]">LumeStart™</span>: Credit Before 18
            </h2>
            
            <div className="bg-[#F5C518]/10 px-4 py-3 rounded-lg border-l-4 border-[#F5C518] mb-6 relative">
              <div className="absolute -top-4 -right-4">
                <div className="bg-[#F5C518] text-[#003366] text-xs font-bold py-1 px-3 rounded-lg">
                  COMING SOON
                </div>
              </div>
              <p className="text-slate-700 font-medium">
                Give your children the gift of excellent credit the moment they turn 18
              </p>
            </div>
            
            <p className="text-slate-600 mb-6 text-lg">
              Most young adults start with zero credit history, forcing them to struggle for years to build their score. 
              With <span className="font-semibold text-[#003366]">LumeStart™</span>, we change the game through 
              authorized backdated credit reporting that builds history <span className="italic">before</span> they turn 18.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
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
              
              <div className="flex items-start">
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
              
              <div className="flex items-start">
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
            
            <div className="bg-[#003366]/5 p-6 rounded-xl border border-[#003366]/10 mb-8">
              <h3 className="text-xl font-bold text-[#003366] mb-3">
                LumeStart™ Advantage 
              </h3>
              <p className="text-md text-slate-700 mb-4">
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
              
              <div className="flex flex-wrap gap-3">
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
          
          <div className="relative order-1 md:order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#F5C51810] to-[#00336610] w-[450px] h-[450px] rounded-full -z-10"></div>
            
            <div className="relative">              
              <img 
                src={familyImage} 
                alt="Family with LumeCredit" 
                className="w-full max-w-md mx-auto drop-shadow-xl"
              />
              
              <div className="absolute -bottom-10 md:bottom-0 md:right-0 bg-white py-3 px-5 rounded-2xl shadow-xl border border-[#F5C518]/20 max-w-xs">
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-12 bg-[#F5C518]/20 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-[#003366]">18</span>
                  </div>
                  <p className="text-slate-700 font-medium">
                    "My daughter started college with a 720 credit score - thank you LumeCredit!"
                  </p>
                </div>
              </div>
              
              <div className="absolute top-10 left-0 md:-left-10 bg-[#F5C518]/90 py-2 px-4 rounded-lg shadow-lg text-[#003366] font-bold transform rotate-[-5deg]">
                <span>COMING SOON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}