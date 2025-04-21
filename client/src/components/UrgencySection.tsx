import { AlertTriangle, Check, Star, TrendingUp, Shield, Clock, Lock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UrgencySectionProps {
  spotsRemaining: number;
}

export default function UrgencySection({ spotsRemaining }: UrgencySectionProps) {
  const scrollToForm = () => {
    const formSection = document.getElementById("reserve-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="features" className="py-16 bg-white">
      {/* Deal Section */}
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 mb-4">
            <AlertTriangle className="h-3.5 w-3.5 text-[#F5C518] mr-2" />
            <span className="text-sm font-medium text-slate-700">First 250 Users Only</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            <span className="text-[#F5C518]">TotalBoost+</span> 5-Year Credit Tradeline Bundle
          </h2>
          <p className="text-slate-600 text-lg mb-6">
            Unlock the power of all three premium tradeline types to supercharge your credit journey
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-6">
            <div className="flex items-start gap-3">
              <div className="bg-[#003366]/10 p-2 rounded-full mt-1">
                <Lock className="h-5 w-5 text-[#003366]" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-slate-900">5-Year Access</h3>
                <p className="text-slate-600 text-sm">Pay once, enjoy for 5 years. No recurring fees.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-[#003366]/10 p-2 rounded-full mt-1">
                <TrendingUp className="h-5 w-5 text-[#003366]" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-slate-900">Three Credit Lines</h3>
                <p className="text-slate-600 text-sm">All tradeline types to maximize score potential.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-[#003366]/10 p-2 rounded-full mt-1">
                <DollarSign className="h-5 w-5 text-[#003366]" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-slate-900">Massive Savings</h3>
                <p className="text-slate-600 text-sm">$3,485+ value ($697/year × 5 years).</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Revolving Tradeline Card */}
          <div className="md:col-span-4 bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="p-8">
              <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp size={24} className="text-[#003366]" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Revolving Credit Tradeline
              </h3>
              
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">Builds revolving credit history similar to credit cards</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">Improves credit utilization, a key factor in scoring</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">5 years of monthly reporting to all three bureaus</p>
                </li>
              </ul>
              
              <div className="rounded-lg bg-[#003366]/5 p-4">
                <div className="flex items-center text-[#003366] font-semibold mb-1">
                  <Star size={16} className="mr-2" />
                  TYPICAL RESULT:
                </div>
                <p className="text-slate-600">+40-70 points in your first 60 days</p>
              </div>
            </div>
          </div>
          
          {/* Installment Tradeline Card */}
          <div className="md:col-span-4 bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="p-8">
              <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0-.83-.83-.83-2.17 0-3L12 9" />
                  <path d="M17.64 15L22 10.64" />
                  <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Installment Loan Tradeline
              </h3>
              
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">Shows ability to manage fixed payment loans</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">Diversifies your credit mix for optimal scoring</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">5 years of on-time payments reported to bureaus</p>
                </li>
              </ul>
              
              <div className="rounded-lg bg-[#003366]/5 p-4">
                <div className="flex items-center text-[#003366] font-semibold mb-1">
                  <Star size={16} className="mr-2" />
                  SCORING IMPACT:
                </div>
                <p className="text-slate-600">Improves 10% of your FICO® credit score factors</p>
              </div>
            </div>
          </div>
          
          {/* Retail/Utility Tradeline Card */}
          <div className="md:col-span-4 bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="p-8">
              <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Retail/Utility Tradeline
              </h3>
              
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">Establishes regular payment history records</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">Strengthens the most important score factor (35%)</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">5 years of recurring payments on your reports</p>
                </li>
              </ul>
              
              <div className="rounded-lg bg-[#003366]/5 p-4">
                <div className="flex items-center text-[#003366] font-semibold mb-1">
                  <Star size={16} className="mr-2" />
                  KEY BENEFIT:
                </div>
                <p className="text-slate-600">Most trusted account type by mortgage lenders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Price Box */}
        <div className="bg-gradient-to-r from-[#002244] to-[#003366] rounded-2xl overflow-hidden shadow-2xl border border-[#003366]/40">
          <div className="grid md:grid-cols-12 gap-0">
            <div className="md:col-span-8 p-8 md:p-12">
              <div className="inline-flex items-center rounded-full bg-[#F5C518]/20 px-3 py-1 mb-5">
                <Clock className="h-3.5 w-3.5 text-[#F5C518] mr-2" />
                <span className="text-sm font-bold text-[#F5C518]">WHY THIS DEAL IS EXCEPTIONAL</span>
              </div>
            
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 flex items-center">
                <span className="mr-2 tracking-tight">Only</span> 
                <span className="bg-[#F5C518] text-[#003366] px-2 py-1 rounded-md">{spotsRemaining}</span> 
                <span className="ml-2 tracking-tight">founding memberships left</span>
              </h3>
              
              <div className="flex gap-6 mb-6">
                <div className="flex flex-col items-center bg-white/5 rounded-lg p-3 min-w-[100px]">
                  <span className="text-3xl font-bold text-white">200<sup className="text-lg">$</sup></span>
                  <span className="text-white/70 text-sm">one time</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="text-3xl font-bold">vs</span>
                </div>
                <div className="flex flex-col items-center bg-white/5 rounded-lg p-3 min-w-[100px]">
                  <span className="text-2xl font-bold text-white/60 line-through">697<sup className="text-lg">$</sup></span>
                  <span className="text-white/50 text-sm">per year</span>
                </div>
              </div>
              
              <p className="text-white/80 mb-8 max-w-2xl text-lg border-l-4 border-[#F5C518] pl-4">
                After the first 250 members, the price will <span className="font-bold text-white">permanently increase</span>. 
                Lock in your <span className="font-bold text-[#F5C518]">5-year access</span> now and <span className="underline decoration-[#F5C518] decoration-2 underline-offset-4">pay just once</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button 
                  onClick={scrollToForm}
                  className="bg-[#F5C518] hover:bg-[#e5b616] text-[#003366] font-extrabold text-base px-8 py-4 h-auto rounded-xl shadow-md shadow-[#F5C518]/20"
                >
                  SECURE MY SPOT NOW
                </Button>
                
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-[#F5C518] rounded-full animate-pulse mr-3"></div>
                  <span className="text-white/80 font-medium">
                    <span className="text-[#F5C518] font-semibold">{spotsRemaining}</span> of 250 spots remaining
                  </span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4 bg-[#001a33] p-8 md:p-12 relative">
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute transform rotate-45 bg-[#F5C518] text-[#003366] text-xs font-bold py-1 px-6 right-[-20px] top-[15px] shadow-md">
                  TOTALBOOST+
                </div>
              </div>
              
              <div className="relative h-full flex flex-col justify-center">
                <div className="text-white mb-5">
                  <div className="text-4xl font-extrabold">$200</div>
                  <div className="text-[#F5C518] text-sm font-bold mt-1">5-YEAR ACCESS</div>
                </div>
                
                <div className="mb-5 py-2 px-3 bg-[#F5C518]/10 rounded-lg border border-[#F5C518]/20">
                  <div className="flex items-center">
                    <span className="text-[#F5C518] font-extrabold mr-2">SAVE:</span>
                    <span className="text-white font-bold">$3,285+</span>
                  </div>
                </div>
                
                <div className="text-white text-sm space-y-3">
                  <p className="flex items-start">
                    <Check size={16} className="text-[#F5C518] mr-2 mt-1 shrink-0" />
                    <span><span className="font-bold">Revolving</span> Credit Tradeline</span>
                  </p>
                  <p className="flex items-start">
                    <Check size={16} className="text-[#F5C518] mr-2 mt-1 shrink-0" />
                    <span><span className="font-bold">Installment</span> Loan Tradeline</span>
                  </p>
                  <p className="flex items-start">
                    <Check size={16} className="text-[#F5C518] mr-2 mt-1 shrink-0" />
                    <span><span className="font-bold">Retail/Utility</span> Tradeline</span>
                  </p>
                  <p className="flex items-start">
                    <Check size={16} className="text-[#F5C518] mr-2 mt-1 shrink-0" />
                    <span><span className="font-bold">All 3 Bureaus</span> Monthly Reporting</span>
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
