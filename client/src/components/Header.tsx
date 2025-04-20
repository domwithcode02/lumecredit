import SpotCounter from "@/components/SpotCounter";
import { Button } from "@/components/ui/button";
import lumeLogoPath from "@assets/ChatGPT Image Mar 30, 2025, 11_27_13 PM.png";

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
    <header className="bg-white border-b border-slate-100 py-4">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-14 w-auto">
            <img 
              src={lumeLogoPath} 
              alt="LumeCredit Logo" 
              className="h-full w-auto object-contain"
              style={{ filter: 'drop-shadow(0 0 2px rgba(255, 215, 0, 0.3))' }}
            />
          </div>
        </div>
        
        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#benefits" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            Benefits
          </a>
          <a href="#features" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            Testimonials
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
