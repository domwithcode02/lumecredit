import { CreditCard } from "lucide-react";
import { BarChart3 } from "lucide-react";

export default function PartnersSection() {
  return (
    <section className="bg-slate-50 py-6 border-y border-slate-100">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <p className="text-sm text-slate-500 mb-4 text-center">Powered by industry-leading partners</p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-8">
            {/* Galileo */}
            <div className="flex items-center">
              <div className="w-32 h-10 flex items-center justify-center bg-slate-100 rounded-md">
                <div className="flex items-center gap-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 19C4 19.5523 4.44772 20 5 20H6C6.55228 20 7 19.5523 7 19V5C7 4.44772 6.55228 4 6 4H5C4.44772 4 4 4.44772 4 5V19Z" fill="#1A1A1A"/>
                    <path d="M11 19C11 19.5523 11.4477 20 12 20H13C13.5523 20 14 19.5523 14 19V9C14 8.44772 13.5523 8 13 8H12C11.4477 8 11 8.44772 11 9V19Z" fill="#1A1A1A"/>
                    <path d="M18 19C18 19.5523 18.4477 20 19 20H20C20.5523 20 21 19.5523 21 19V12C21 11.4477 20.5523 11 20 11H19C18.4477 11 18 11.4477 18 12V19Z" fill="#1A1A1A"/>
                  </svg>
                  <span className="font-semibold text-sm text-slate-900">galileo</span>
                </div>
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
                  <BarChart3 size={16} className="text-slate-700" />
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