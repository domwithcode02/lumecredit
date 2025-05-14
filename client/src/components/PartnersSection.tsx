import galileoLogo from "@assets/galileo_logo_inverted_transparent.png";
// Use SVG icons from lucide-react for the other partners since we don't have their logos
import { CreditCard, BarChart } from "lucide-react";

export default function PartnersSection() {
  return (
    <section className="bg-slate-50 py-6 border-y border-slate-100">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <p className="text-sm text-slate-500 mb-4 text-center">Powered by industry-leading partners</p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-8">
            {/* Galileo */}
            <div className="flex items-center">
              <div className="w-32 h-10 flex items-center justify-center">
                <img 
                  src={galileoLogo} 
                  alt="Galileo" 
                  className="h-6 opacity-85 hover:opacity-100 transition-all" 
                />
              </div>
            </div>
            
            {/* Stripe */}
            <div className="flex items-center">
              <div className="w-32 h-10 flex items-center justify-center bg-slate-100 rounded-md">
                <div className="flex items-center gap-1">
                  <CreditCard size={16} className="text-slate-700" />
                  <span className="font-semibold text-sm text-slate-700">Stripe</span>
                </div>
              </div>
            </div>
            
            {/* Plaid */}
            <div className="flex items-center">
              <div className="w-32 h-10 flex items-center justify-center bg-slate-100 rounded-md">
                <div className="flex items-center gap-1">
                  <BarChart size={16} className="text-slate-700" />
                  <span className="font-semibold text-sm text-slate-700">Plaid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}