import SpotCounter from "@/components/SpotCounter";
import { Button } from "@/components/ui/button";
import lumeLogo from "@assets/lume_credit_transparent_optimized.png";

interface HeaderProps {
  spotsRemaining: number;
  totalSpots: number;
}

export default function Header({ spotsRemaining, totalSpots }: HeaderProps) {
  const scrollToForm = () => {
    const formSection = document.getElementById("reserve-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 py-4 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-20 w-auto">
            <img 
              src={lumeLogo} 
              alt="LumeCredit Logo" 
              className="h-full w-auto object-contain"
              style={{ maxHeight: '100%' }}
            />
          </div>
        </div>
        
        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            Deal
          </a>
          <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            How It Works
          </a>
          <a href="#tradelines" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            Tradelines
          </a>
          <a href="#visa-card" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            Visa Card
          </a>
        </div>
        
        {/* Actions */}
        <div className="flex items-center space-x-4">
          <SpotCounter spotsRemaining={spotsRemaining} totalSpots={totalSpots} />
          <Button 
            onClick={scrollToForm}
            className="hidden md:flex bg-black hover:bg-slate-800 text-white font-medium rounded-lg px-5 py-2.5"
          >
            Reserve Now
          </Button>
        </div>
      </div>
    </header>
  );
}
