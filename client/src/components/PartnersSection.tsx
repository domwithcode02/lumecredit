import galileoLogo from "../assets/partners/galileo-logo.png";
import stripeLogo from "../assets/partners/stripe-logo.png";
import plaidLogo from "../assets/partners/plaid-logo.png";

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
              <div className="w-32 h-10 flex items-center justify-center">
                <img 
                  src={stripeLogo} 
                  alt="Stripe" 
                  className="h-8 opacity-85 hover:opacity-100 transition-all" 
                />
              </div>
            </div>
            
            {/* Plaid */}
            <div className="flex items-center">
              <div className="w-32 h-10 flex items-center justify-center">
                <img 
                  src={plaidLogo} 
                  alt="Plaid" 
                  className="h-8 opacity-85 hover:opacity-100 transition-all" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}