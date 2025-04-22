import { Button } from "@/components/ui/button";
import lumeLogo from "@assets/lume_credit_transparent_optimized.png";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
          <a href="/" className="h-20 w-auto">
            <img 
              src={lumeLogo} 
              alt="LumeCredit Logo" 
              className="h-full w-auto object-contain"
              style={{ maxHeight: '100%' }}
            />
          </a>
        </div>
        
        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            How It Works
          </a>
          
          {/* Products Dropdown - Using CSS hover */}
          <div className="relative group">
            <a href="#products" className="text-slate-600 hover:text-slate-900 font-medium transition-colors flex items-center gap-1">
              Products <ChevronDown size={16} />
            </a>
            
            <div className="invisible absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="py-1">
                <a href="#flexcredit" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                  FlexCredit™ Revolving
                </a>
                <a href="#steadybuild" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                  SteadyBuild™ Installment
                </a>
                <a href="#hometrack" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                  HomeTrack™ Rent Reporting
                </a>
              </div>
            </div>
          </div>
          
          <a href="#visa-card" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            Visa Card
          </a>
          
          <a href="/faq" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            FAQ
          </a>
        </div>
        
        {/* Actions */}
        <div className="flex items-center">
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
