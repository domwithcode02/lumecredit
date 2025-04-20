import SpotCounter from "@/components/SpotCounter";
import { Button } from "@/components/ui/button";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 py-3 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        {/* Logo Text Placeholder */}
        <div className="flex items-center">
          <div className="text-2xl md:text-3xl font-bold bg-clip-text bg-gradient-to-r from-[#003366] to-[#000000]">
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F5C518] to-[#F5C518]/80">Lume</span>
              <span className="relative z-10 text-black">Credit</span>
              <span className="absolute -inset-1 bg-opacity-30 filter blur-sm bg-[#F5C518] z-0"></span>
            </span>
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
