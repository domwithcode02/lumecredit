import { Clock, AlertTriangle } from "lucide-react";
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
      <div className="container-custom">
        <div className="bg-[#4A90E2] bg-opacity-5 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-12 gap-0">
            <div className="md:col-span-8 p-8 md:p-12">
              <div className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 mb-5">
                <AlertTriangle className="h-3.5 w-3.5 text-[#F5C518] mr-2" />
                <span className="text-sm font-medium text-slate-700">Limited Time Offer</span>
              </div>
            
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Only <span className="text-[#4A90E2]">{spotsRemaining}</span> spots left at this price
              </h3>
              
              <p className="text-slate-600 mb-8 max-w-2xl text-lg">
                Once all 250 spots are filled, the price will increase to our standard rate of $697/year. 
                Lock in your <span className="font-semibold">lifetime access</span> now for just $200 total.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  onClick={scrollToForm}
                  className="btn-secondary font-medium text-base px-6 py-3 h-auto"
                >
                  Reserve Your Spot
                </Button>
                
                <div className="inline-flex items-center">
                  <div className="h-3 w-3 bg-[#4A90E2] rounded-full animate-pulse mr-3"></div>
                  <span className="text-slate-600 font-medium">
                    <span className="text-[#4A90E2] font-semibold">{spotsRemaining}</span> of 250 spots remaining
                  </span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block md:col-span-4 bg-[#4A90E2] p-12 relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%220%200%2050%2050%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M0%200h50v50H0z%22%2F%3E%3Cpath%20d%3D%22M38%2040H22v6h-8v-6H0V20h8v-6h8v6h16v20z%22%20fill%3D%22%23FFF%22%2F%3E%3C%2Fsvg%3E')] bg-50 opacity-20"></div>
              </div>
              
              <div className="relative h-full flex flex-col justify-center">
                <div className="text-white mb-3">
                  <div className="text-4xl font-bold">$200</div>
                  <div className="text-sm opacity-80">One-time payment</div>
                </div>
                
                <div className="text-white/90 text-sm">
                  <p className="mb-2">✓ Lifetime account access</p>
                  <p className="mb-2">✓ All premium features</p>
                  <p className="mb-2">✓ Unlimited credit reports</p>
                  <p>✓ Priority customer support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
