import galileoLogo from "@assets/5efc0eeb-72e2-41fa-a729-bf422b4726b7.png";
import stripeLogo from "@assets/2055ab1d-b996-4809-9d15-d5e85947621c.png";
import plaidLogo from "@assets/db072a75-184f-4526-bd56-65693626f67a.png";

export default function PartnersSection() {
  return (
    <section className="bg-slate-50 py-6 border-y border-slate-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-sm text-slate-500 mb-4 text-center">Powered by industry-leading partners</p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-24 gap-y-12">
            {/* Galileo */}
            <div className="flex items-center">
              <div className="w-64 h-20 flex items-center justify-center">
                <img 
                  src={galileoLogo} 
                  alt="Galileo" 
                  className="h-24 hover:opacity-90 transition-all" 
                />
              </div>
            </div>
            
            {/* Stripe */}
            <div className="flex items-center">
              <div className="w-64 h-20 flex items-center justify-center">
                <img 
                  src={stripeLogo} 
                  alt="Stripe" 
                  className="h-24 hover:opacity-90 transition-all" 
                />
              </div>
            </div>
            
            {/* Plaid */}
            <div className="flex items-center">
              <div className="w-64 h-20 flex items-center justify-center">
                <img 
                  src={plaidLogo} 
                  alt="Plaid" 
                  className="h-24 hover:opacity-90 transition-all" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}