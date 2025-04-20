import { AlertTriangle, Check, Star, TrendingUp, Shield, Clock } from "lucide-react";
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
            <span className="text-sm font-medium text-slate-700">Limited Time Deal</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your <span className="text-[#F5C518]">Exclusive</span> Lifetime Credit Bundle
          </h2>
          <p className="text-slate-600 text-lg">
            Unlock the power of two premium tradelines to supercharge your credit journey
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* FlexCredit Card */}
          <div className="md:col-span-6 bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="p-8">
              <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp size={24} className="text-[#003366]" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                FlexCredit™ Revolving Tradeline
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
                  <p className="text-slate-700">Improves your credit mix, a key factor in credit scoring</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">Lower utilization ratios boost your scores faster</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">Reports to all three major credit bureaus monthly</p>
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
          
          {/* FlexLife Card */}
          <div className="md:col-span-6 bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="p-8">
              <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-6">
                <Shield size={24} className="text-[#003366]" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                FlexLife™ Credit Monitoring
              </h3>
              
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">Lifetime access to 3-bureau credit monitoring</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">Real-time alerts for changes on your credit report</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">Intelligent score factors analysis and recommendations</p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 text-[#F5C518]">
                    <Check size={20} />
                  </div>
                  <p className="text-slate-700">Advanced identity theft protection and insurance</p>
                </li>
              </ul>
              
              <div className="rounded-lg bg-[#003366]/5 p-4">
                <div className="flex items-center text-[#003366] font-semibold mb-1">
                  <Star size={16} className="mr-2" />
                  LIFETIME VALUE:
                </div>
                <p className="text-slate-600">$2,400+ (comparable to $19.99/month services)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Price Box */}
        <div className="bg-[#003366] rounded-2xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-12 gap-0">
            <div className="md:col-span-8 p-8 md:p-12">
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 mb-5">
                <Clock className="h-3.5 w-3.5 text-[#F5C518] mr-2" />
                <span className="text-sm font-medium text-white">Limited Time Offer</span>
              </div>
            
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Only <span className="text-[#F5C518]">{spotsRemaining}</span> spots left at this price
              </h3>
              
              <p className="text-white/80 mb-8 max-w-2xl text-lg">
                Once all 250 spots are filled, the price will increase to our standard rate of $697/year. 
                Lock in your <span className="font-semibold text-[#F5C518]">lifetime access</span> now for just $200 total.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  onClick={scrollToForm}
                  className="bg-[#F5C518] hover:bg-[#e5b616] text-[#003366] font-bold text-base px-6 py-3 h-auto"
                >
                  Reserve Your Spot Now
                </Button>
                
                <div className="inline-flex items-center">
                  <div className="h-3 w-3 bg-[#F5C518] rounded-full animate-pulse mr-3"></div>
                  <span className="text-white/80 font-medium">
                    <span className="text-[#F5C518] font-semibold">{spotsRemaining}</span> of 250 spots remaining
                  </span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4 bg-[#00254d] p-8 md:p-12 relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%220%200%2050%2050%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M0%200h50v50H0z%22%2F%3E%3Cpath%20d%3D%22M38%2040H22v6h-8v-6H0V20h8v-6h8v6h16v20z%22%20fill%3D%22%23FFF%22%2F%3E%3C%2Fsvg%3E')] bg-50 opacity-20"></div>
              </div>
              
              <div className="relative h-full flex flex-col justify-center">
                <div className="text-white mb-3">
                  <div className="text-4xl font-bold">$200</div>
                  <div className="text-sm opacity-80">One-time payment</div>
                </div>
                
                <div className="mb-4 mt-2">
                  <div className="flex items-center">
                    <span className="text-white/50 line-through mr-3">$697/year</span>
                    <span className="bg-[#F5C518] text-[#003366] text-xs font-bold px-2 py-0.5 rounded">Save $3,285+</span>
                  </div>
                </div>
                
                <div className="text-white/90 text-sm space-y-2">
                  <p className="flex items-center">
                    <Check size={16} className="text-[#F5C518] mr-2 shrink-0" />
                    <span>FlexCredit™ Revolving Tradeline</span>
                  </p>
                  <p className="flex items-center">
                    <Check size={16} className="text-[#F5C518] mr-2 shrink-0" />
                    <span>FlexLife™ Credit Monitoring</span>
                  </p>
                  <p className="flex items-center">
                    <Check size={16} className="text-[#F5C518] mr-2 shrink-0" />
                    <span>Lifetime access - never pay again!</span>
                  </p>
                  <p className="flex items-center">
                    <Check size={16} className="text-[#F5C518] mr-2 shrink-0" />
                    <span>VIP customer support</span>
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
