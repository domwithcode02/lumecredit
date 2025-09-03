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
    <section id="totalboost" className="py-16 bg-gradient-to-b from-white via-[#F5C518]/5 to-white">
      {/* Deal Section */}
      <div className="container-custom">
        <div id="totalboost-bundle" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center rounded-full bg-[#F5C518]/20 px-4 py-2 mb-4 shadow-sm border border-[#F5C518]/30">
            <AlertTriangle className="h-4 w-4 text-[#F5C518] mr-2" />
            <span className="text-sm font-bold text-[#003366]">ONLY {spotsRemaining} SPOTS REMAINING!</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            <span className="text-[#F5C518]">Credit Bro Pro</span> 5-Year Credit Tradeline Bundle
          </h2>
          <div className="max-w-2xl mx-auto p-4 bg-gradient-to-r from-[#003366]/10 to-[#F5C518]/10 rounded-lg mb-6">
            <p className="text-slate-700 text-lg">
              Unlock the <span className="font-bold text-[#003366]">Perfect Credit Mix</span> with all three premium tradeline types to supercharge your credit score
            </p>
          </div>
          
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
          {/* Credit Bro Flex Revolving Tradeline Card */}
          <div id="flexcredit" className="md:col-span-4 bg-gradient-to-b from-[#41c99e]/10 to-white rounded-2xl overflow-hidden shadow-md border border-[#41c99e]/30 hover:shadow-lg transition-shadow">
            <div className="relative">
              <div className="p-5 sm:p-6 md:p-8">
                <div className="w-12 h-12 bg-[#41c99e]/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp size={24} className="text-[#003366]" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">
                  Credit Bro Flex™ Revolving
                </h3>
                
                <div className="mb-4 bg-[#F5C518]/10 rounded-lg p-3 text-center mx-auto">
                  <span className="font-medium text-slate-700">$25/month for $2,500 limit</span>
                </div>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 text-[#F5C518]">
                      <Check size={20} />
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base">Builds revolving credit history</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 text-[#F5C518]">
                      <Check size={20} />
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base">Improves credit utilization ratio</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 text-[#F5C518]">
                      <Check size={20} />
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base"><span className="font-semibold">Essential for:</span> Premium credit cards</p>
                  </li>
                </ul>
                
                <div className="rounded-lg bg-[#003366]/5 p-4">
                  <div className="flex items-center text-[#003366] font-semibold mb-1">
                    <Star size={16} className="mr-2" />
                    TYPICAL RESULT:
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base">+40-70 points in first 60 days</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Credit Bro Build Installment Tradeline Card */}
          <div id="steadybuild" className="md:col-span-4 bg-gradient-to-b from-[#4aade3]/10 to-white rounded-2xl overflow-hidden shadow-md border border-[#4aade3]/30 hover:shadow-lg transition-shadow">
            <div className="relative">
              <div className="p-5 sm:p-6 md:p-8">
                <div className="w-12 h-12 bg-[#4aade3]/20 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0-.83-.83-.83-2.17 0-3L12 9" />
                    <path d="M17.64 15L22 10.64" />
                    <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">
                  Credit Bro Build™ Installment
                </h3>
                
                <div className="mb-4 bg-[#F5C518]/10 rounded-lg p-3 text-center mx-auto">
                  <span className="font-medium text-slate-700">$25/month for $1,000 loan</span>
                </div>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 text-[#F5C518]">
                      <Check size={20} />
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base">Shows fixed payment loan management</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 text-[#F5C518]">
                      <Check size={20} />
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base">Diversifies your credit mix</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 text-[#F5C518]">
                      <Check size={20} />
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base"><span className="font-semibold">Essential for:</span> Mortgage approvals</p>
                  </li>
                </ul>
                
                <div className="rounded-lg bg-[#003366]/5 p-4">
                  <div className="flex items-center text-[#003366] font-semibold mb-1">
                    <Star size={16} className="mr-2" />
                    SCORING IMPACT:
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base">Improves 10% of FICO® score factors</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Credit Bro Track Rent Reporting Card */}
          <div id="hometrack" className="md:col-span-4 bg-gradient-to-b from-[#ffc829]/10 to-white rounded-2xl overflow-hidden shadow-md border border-[#ffc829]/30 hover:shadow-lg transition-shadow">
            <div className="relative">
              <div className="p-5 sm:p-6 md:p-8">
                <div className="w-12 h-12 bg-[#ffc829]/20 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">
                  Credit Bro Track™ Rent Reporting
                </h3>
                
                <div className="mb-4 bg-green-100 rounded-lg p-3 text-center mx-auto">
                  <span className="font-medium text-green-700">FREE with Credit Bro Pro Bundle!</span>
                </div>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 text-[#F5C518]">
                      <Check size={20} />
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base">Establishes payment history</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 text-[#F5C518]">
                      <Check size={20} />
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base">Affects 35% of your credit score</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 text-[#F5C518]">
                      <Check size={20} />
                    </div>
                    <p className="text-slate-700 text-sm sm:text-base"><span className="font-semibold">Essential for:</span> Rental approvals</p>
                  </li>
                </ul>
                
                <div className="rounded-lg bg-[#003366]/5 p-4">
                  <div className="flex items-center text-[#003366] font-semibold mb-1">
                    <Star size={16} className="mr-2" />
                    KEY BENEFIT:
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base">Trusted by mortgage lenders</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-to-r from-[#002244] to-[#003366] rounded-2xl overflow-hidden shadow-2xl border border-[#003366]/40">
          <div className="p-8 md:p-12 text-center">
            <div className="inline-flex items-center rounded-full bg-[#F5C518]/20 px-3 py-1 mb-5">
              <Clock className="h-3.5 w-3.5 text-[#F5C518] mr-2" />
              <span className="text-sm font-bold text-[#F5C518]">COMPARE YOUR OPTIONS</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              <span className="tracking-tight">Choose Your Credit-Building Path</span>
            </h3>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Get the <span className="font-bold text-[#F5C518]">Perfect Credit Mix</span> by combining revolving, installment, and payment history tradelines
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Standard Monthly Option */}
              <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 relative">
                <div className="absolute top-0 right-0">
                  <div className="bg-[#F5C518] text-[#003366] text-xs font-bold py-1 px-3 rounded-bl-lg">
                    COMING SOON
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="text-center mb-4">
                    <h4 className="text-xl md:text-2xl font-bold text-white">Standard Monthly</h4>
                  </div>
                  
                  <div className="mb-8 text-center">
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-3xl font-bold text-white">$50</span>
                      <span className="text-lg text-white/80 mb-1">/month</span>
                    </div>
                  </div>
                  
                  <div className="mb-6 space-y-2 flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-2">
                      <div className="inline-flex items-center bg-white/10 px-3 py-1.5 rounded-full">
                        <span className="text-xs font-bold text-white">Credit Bro Flex™: $25/mo</span>
                      </div>
                      <div className="inline-flex items-center bg-white/10 px-3 py-1.5 rounded-full">
                        <span className="text-xs font-bold text-white">Credit Bro Build™: $25/mo</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center bg-green-400/20 px-3 py-1.5 rounded-full">
                      <span className="text-xs font-bold text-green-300">Credit Bro Track™: Included Free</span>
                    </div>
                  </div>
                  
                  <ul className="mb-6 text-white/80 text-sm space-y-3 text-left">
                    <li className="flex items-start">
                      <Check size={16} className="text-[#F5C518] mr-2 mt-1 shrink-0" />
                      <span className="text-left"><span className="font-bold text-white">Perfect Credit Mix:</span> A balanced combination of revolving, installment, and payment history tradelines that maximizes your credit score potential</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-[#F5C518] mr-2 mt-1 shrink-0" />
                      <span>Get all 3 essential tradeline types for maximum impact</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-[#F5C518] mr-2 mt-1 shrink-0" />
                      <span>Month-to-month flexibility with no commitments</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-[#F5C518] mr-2 mt-1 shrink-0" />
                      <span>All three major credit bureaus reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Special 5-Year Deal */}
              <div className="bg-[#001a33] rounded-xl overflow-hidden border border-[#F5C518]/30 shadow-lg relative">
                <div className="absolute top-0 right-0">
                  <div className="bg-[#F5C518] text-[#003366] text-xs font-bold py-1 px-3 rounded-bl-lg">
                    LIMITED TIME OFFER
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="text-center mb-4">
                    <h4 className="text-xl md:text-2xl font-bold text-white">5-Year Special</h4>
                    <div className="mt-1 bg-[#F5C518]/20 px-3 py-1 rounded-full inline-block">
                      <span className="text-sm text-[#F5C518]">First 250 Only</span>
                    </div>
                  </div>
                  
                  <div className="relative mb-8 text-center">
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-4xl font-extrabold text-white">$200</span>
                      <span className="text-lg text-white/80 mb-1">one-time</span>
                    </div>
                    <div className="mt-2 bg-[#F5C518]/10 inline-flex items-center px-2 py-1 rounded">
                      <span className="text-xs text-white/90">Just $3.33/month over 5 years</span>
                    </div>
                  </div>
                  
                  <div className="mb-6 space-y-2 flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-2">
                      <div className="inline-flex items-center bg-white/10 px-3 py-1.5 rounded-full">
                        <span className="text-xs font-bold text-white">Credit Bro Flex™ Included</span>
                      </div>
                      <div className="inline-flex items-center bg-white/10 px-3 py-1.5 rounded-full">
                        <span className="text-xs font-bold text-white">Credit Bro Build™ Included</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center bg-green-400/20 px-3 py-1.5 rounded-full">
                      <span className="text-xs font-bold text-green-300">Credit Bro Track™ Included Free</span>
                    </div>
                  </div>
                  
                  <ul className="mb-6 text-white/80 text-sm space-y-3 text-left">
                    <li className="flex items-start">
                      <Check size={16} className="text-[#F5C518] mr-2 mt-1 shrink-0" />
                      <span className="text-left"><span className="font-bold text-white">Perfect Credit Mix</span> including Credit Bro Flex, Credit Bro Build, Credit Bro Track...</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-[#F5C518] mr-2 mt-1 shrink-0" />
                      <span>Pay once, <span className="font-bold text-white">enjoy for 5 full years</span></span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-[#F5C518] mr-2 mt-1 shrink-0" />
                      <span><span className="font-bold text-[#F5C518]">Save $2,800+</span> compared to monthly option</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-[#F5C518] mr-2 mt-1 shrink-0" />
                      <span>All three bureaus reporting</span>
                    </li>
                  </ul>
                  
                  <Button 
                    onClick={scrollToForm}
                    className="w-full bg-[#F5C518] hover:bg-[#e5b616] text-[#003366] font-extrabold text-base py-3 h-auto rounded-xl shadow-md shadow-[#F5C518]/20"
                  >
                    SECURE MY SPOT NOW
                  </Button>
                  
                  <div className="mt-4 text-center">
                    <p className="text-white/70 text-xs flex items-center justify-center">
                      <Clock className="h-3 w-3 text-[#F5C518] mr-1" />
                      <span>Limited availability - Act now before all spots are gone!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t border-white/10 pt-8 text-left">
              <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto border-l-4 border-[#F5C518] pl-4">
                <span className="font-bold text-white">Once-in-a-lifetime opportunity:</span> Get ALL THREE credit-building tradelines for 5 YEARS at a price less than <span className="font-bold text-white">4 months</span> of the regular monthly rate. After the first 250 members, <span className="font-bold text-white uppercase tracking-wide">this deal vanishes forever</span>. 
                Lock in your <span className="font-bold text-[#F5C518]">5-year access</span> now at this <span className="underline decoration-[#F5C518] decoration-2 underline-offset-4">exclusive one-time price</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
