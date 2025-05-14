import { Button } from "@/components/ui/button";
import lumeLogo from "@assets/lume_credit_transparent_optimized.png";
import { ChevronDown, Menu, LogOut, User as UserIcon } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";

interface HeaderProps {
  spotsRemaining: number;
  totalSpots: number;
}

export default function Header({ spotsRemaining, totalSpots }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  
  // User might be undefined or null, so use optional chaining
  const userProfile = user as any; // Type assertion to avoid TypeScript errors
  
  const scrollToForm = () => {
    const formSection = document.getElementById("reserve-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close the mobile menu if open
    }
  };
  
  const handleNavLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close the mobile menu
    }
  };
  
  const handleLogout = () => {
    // Replit Auth uses GET for logout
    window.location.href = '/api/logout';
  };

  return (
    <div className="header-container">
      <div className="bg-[#003366] text-white py-1.5 text-center fixed top-0 left-0 right-0 z-50">
        <div className="container-custom flex items-center justify-center">
          <span className="h-2 w-2 rounded-full bg-[#F5C518] mr-2"></span>
          <span className="text-sm font-semibold">LAUNCHING SEPTEMBER 01, 2025</span>
        </div>
      </div>
      <header className="fixed top-7 left-0 right-0 z-40 bg-white border-b border-slate-100 py-4 shadow-sm">
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
                  <a href="#totalboost" className="block px-4 py-2 text-sm text-[#003366] font-bold bg-[#F5C518]/10 hover:bg-[#F5C518]/20 border-l-2 border-[#F5C518]">
                    TotalBoost+™ Bundle
                  </a>
                  <a href="#flexcredit" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                    FlexCredit™ Revolving
                  </a>
                  <a href="#steadybuild" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                    SteadyBuild™ Installment
                  </a>
                  <a href="#hometrack" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                    HomeTrack™ Rent Reporting
                  </a>
                  <a href="#families" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                    LumeStart™ for Families
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
          <div className="flex items-center gap-4">
            <Button 
              onClick={scrollToForm}
              className="hidden md:flex bg-black hover:bg-slate-800 text-white font-medium rounded-lg px-5 py-2.5"
            >
              Reserve Now
            </Button>
            
            {/* User Profile and Logout Button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    onClick={handleLogout} 
                    variant="ghost" 
                    size="icon"
                    className="hidden md:flex text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  >
                    {userProfile?.profileImageUrl ? (
                      <img 
                        src={userProfile.profileImageUrl} 
                        alt="User Profile" 
                        className="h-6 w-6 rounded-full mr-1" 
                      />
                    ) : (
                      <UserIcon className="h-5 w-5 mr-1" />
                    )}
                    <LogOut className="h-4 w-4 ml-1" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{userProfile?.firstName ? `${userProfile.firstName} (Logout)` : 'Logout'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            {/* Mobile Menu Button */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6 text-slate-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <div className="p-4 border-b border-slate-100">
                  <span className="font-bold text-slate-900">Menu</span>
                </div>
                
                <div className="flex flex-col p-4 space-y-4">
                  <a 
                    href="#how-it-works" 
                    className="text-slate-700 hover:text-slate-900 font-medium py-2 border-b border-slate-100"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      handleNavLinkClick('how-it-works');
                      setOpen(false); // Close menu after click
                    }}
                  >
                    How It Works
                  </a>
                  
                  <div className="space-y-2">
                    <div className="text-slate-700 font-medium">Products</div>
                    <div className="pl-4 space-y-2">
                      <a 
                        href="#totalboost" 
                        className="block text-sm text-[#003366] font-bold"
                        onClick={(e) => { 
                          e.preventDefault(); 
                          handleNavLinkClick('totalboost');
                          setOpen(false); // Close menu after click
                        }}
                      >
                        TotalBoost+™ Bundle
                      </a>
                      <a 
                        href="#flexcredit" 
                        className="block text-sm text-slate-700"
                        onClick={(e) => { 
                          e.preventDefault(); 
                          handleNavLinkClick('flexcredit');
                          setOpen(false); // Close menu after click
                        }}
                      >
                        FlexCredit™ Revolving
                      </a>
                      <a 
                        href="#steadybuild" 
                        className="block text-sm text-slate-700"
                        onClick={(e) => { 
                          e.preventDefault(); 
                          handleNavLinkClick('steadybuild');
                          setOpen(false); // Close menu after click
                        }}
                      >
                        SteadyBuild™ Installment
                      </a>
                      <a 
                        href="#hometrack" 
                        className="block text-sm text-slate-700"
                        onClick={(e) => { 
                          e.preventDefault(); 
                          handleNavLinkClick('hometrack');
                          setOpen(false); // Close menu after click
                        }}
                      >
                        HomeTrack™ Rent Reporting
                      </a>
                      <a 
                        href="#families" 
                        className="block text-sm text-slate-700"
                        onClick={(e) => { 
                          e.preventDefault(); 
                          handleNavLinkClick('families');
                          setOpen(false); // Close menu after click
                        }}
                      >
                        LumeStart™ for Families
                      </a>
                    </div>
                  </div>
                  
                  <a 
                    href="#visa-card" 
                    className="text-slate-700 hover:text-slate-900 font-medium py-2 border-b border-slate-100"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      handleNavLinkClick('visa-card');
                      setOpen(false); // Close menu after click
                    }}
                  >
                    Visa Card
                  </a>
                  
                  <a 
                    href="/faq" 
                    className="text-slate-700 hover:text-slate-900 font-medium py-2 border-b border-slate-100"
                    onClick={() => {
                      // The FAQ page is a separate page, so we'll close the menu
                      // but let the default navigation happen
                      setOpen(false);
                    }}
                  >
                    FAQ
                  </a>
                  
                  <Button 
                    onClick={() => {
                      scrollToForm();
                      setOpen(false); // Make sure to close the menu
                    }}
                    className="mt-4 bg-[#F5C518] hover:bg-[#e5b616] text-[#003366] font-bold"
                  >
                    Reserve Now
                  </Button>
                  
                  <Button 
                    onClick={handleLogout}
                    className="mt-4 bg-transparent hover:bg-slate-100 border border-slate-300 text-slate-700 flex items-center gap-2"
                  >
                    {userProfile?.profileImageUrl ? (
                      <img 
                        src={userProfile.profileImageUrl} 
                        alt="User Profile" 
                        className="h-4 w-4 rounded-full" 
                      />
                    ) : (
                      <UserIcon className="h-4 w-4" />
                    )}
                    <span className="ml-1">
                      {userProfile?.firstName ? `Logout (${userProfile.firstName})` : 'Logout'}
                    </span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
