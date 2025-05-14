import { Button } from "@/components/ui/button";
import lumeLogo from "@assets/lume_credit_transparent_optimized.png";
import { ChevronDown, Menu, LogOut, User } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  spotsRemaining: number;
  totalSpots: number;
}

export default function Header({ spotsRemaining, totalSpots }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [, setLocation] = useLocation();
  
  // Get current user details
  const getUserName = () => {
    try {
      // Check if authenticated
      const isAuthenticated = localStorage.getItem("isAuthenticated");
      if (!isAuthenticated) return null;
      
      // Try to get user data
      const userData = localStorage.getItem("userData");
      if (userData) {
        const user = JSON.parse(userData);
        return user.name || user.username || "User";
      }
      
      return "User";
    } catch (error) {
      console.error("Error getting user data:", error);
      return "User";
    }
  };
  
  const userName = getUserName();
  
  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userData");
    localStorage.removeItem("adminToken");
    
    // Redirect to login page
    setLocation("/login");
  };
  
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
              <a href="#tradelines" className="text-slate-600 hover:text-slate-900 font-medium transition-colors flex items-center gap-1">
                Products <ChevronDown size={16} />
              </a>
              
              <div className="invisible absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <div className="py-1">
                  <a href="#tradelines" className="block px-4 py-2 text-sm text-[#003366] font-bold bg-[#F5C518]/10 hover:bg-[#F5C518]/20 border-l-2 border-[#F5C518]" onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('tradelines');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}>
                    TotalBoost+™ Bundle
                  </a>
                  <a href="#flexcredit" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('flexcredit');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}>
                    FlexCredit™ Revolving
                  </a>
                  <a href="#steadybuild" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('steadybuild');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}>
                    SteadyBuild™ Installment
                  </a>
                  <a href="#hometrack" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('hometrack');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}>
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
            {/* User Profile Dropdown */}
            {userName && (
              <div className="hidden md:block">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2">
                      <User size={16} />
                      <span className="hidden sm:inline">{userName}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {localStorage.getItem("adminToken") && (
                      <DropdownMenuItem onClick={() => setLocation("/admin/login-logs")}>
                        Login Logs
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
            
            <Button 
              onClick={scrollToForm}
              className="hidden md:flex bg-black hover:bg-slate-800 text-white font-medium rounded-lg px-5 py-2.5"
            >
              Reserve Now
            </Button>
            
            {/* Mobile Menu Button */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6 text-slate-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-slate-900">Menu</span>
                  {userName && (
                    <div className="text-sm text-slate-600 flex items-center gap-2">
                      <User size={14} className="text-slate-500" />
                      <span>{userName}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col p-4 space-y-4">
                  <button 
                    className="text-left text-slate-700 hover:text-slate-900 font-medium py-2 border-b border-slate-100"
                    onClick={() => { 
                      const element = document.getElementById('how-it-works');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      setOpen(false); // Close menu after click
                    }}
                  >
                    How It Works
                  </button>
                  
                  <div className="space-y-2">
                    <div className="text-slate-700 font-medium">Products</div>
                    <div className="pl-4 space-y-2">
                      <button 
                        className="text-left w-full block text-sm text-[#003366] font-bold"
                        onClick={() => {
                          // Close the menu first
                          setOpen(false);
                          // Then scroll to the element with a slight delay to ensure menu is closed
                          setTimeout(() => {
                            const element = document.getElementById('tradelines');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        }}
                      >
                        TotalBoost+™ Bundle
                      </button>
                      <button 
                        className="text-left w-full block text-sm text-slate-700"
                        onClick={() => {
                          // Close the menu first
                          setOpen(false);
                          // Then scroll to the element with a slight delay to ensure menu is closed
                          setTimeout(() => {
                            // This targets exactly the FlexCredit card with the green header
                            const element = document.getElementById('flexcredit');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        }}
                      >
                        FlexCredit™ Revolving
                      </button>
                      <button 
                        className="text-left w-full block text-sm text-slate-700"
                        onClick={() => {
                          // Close the menu first
                          setOpen(false);
                          // Then scroll to the element with a slight delay to ensure menu is closed
                          setTimeout(() => {
                            const element = document.getElementById('steadybuild');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        }}
                      >
                        SteadyBuild™ Installment
                      </button>
                      <button 
                        className="text-left w-full block text-sm text-slate-700"
                        onClick={() => {
                          // Close the menu first
                          setOpen(false);
                          // Then scroll to the element with a slight delay to ensure menu is closed
                          setTimeout(() => {
                            const element = document.getElementById('hometrack');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        }}
                      >
                        HomeTrack™ Rent Reporting
                      </button>
                      <button 
                        className="text-left w-full block text-sm text-slate-700"
                        onClick={() => {
                          // Close the menu first
                          setOpen(false);
                          // Then scroll to the element with a slight delay to ensure menu is closed
                          setTimeout(() => {
                            const element = document.getElementById('families');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        }}
                      >
                        LumeStart™ for Families
                      </button>
                    </div>
                  </div>
                  
                  <button 
                    className="text-left text-slate-700 hover:text-slate-900 font-medium py-2 border-b border-slate-100"
                    onClick={() => { 
                      const element = document.getElementById('visa-card');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      setOpen(false); // Close menu after click
                    }}
                  >
                    Visa Card
                  </button>
                  
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
                    className="mt-4 bg-black hover:bg-slate-800 text-white font-bold"
                  >
                    Reserve Now
                  </Button>
                  
                  {/* Admin option */}
                  {localStorage.getItem("adminToken") && (
                    <Button 
                      onClick={() => {
                        setLocation("/admin/login-logs");
                        setOpen(false);
                      }}
                      variant="outline"
                      className="mt-2"
                    >
                      View Login Logs
                    </Button>
                  )}
                  
                  {/* Logout button */}
                  {userName && (
                    <Button 
                      onClick={() => {
                        handleLogout();
                        setOpen(false);
                      }}
                      variant="ghost"
                      className="mt-4 border-t border-slate-200 pt-4 text-red-600 hover:text-red-700 hover:bg-red-50 font-medium"
                    >
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
