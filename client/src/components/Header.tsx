import { Button } from "@/components/ui/button";
import lumeLogo from "@assets/credibro.jpeg";
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

import credibro from "@assets/credibro.jpeg";

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
          <span className="text-sm font-semibold">LAUNCHING NOVEMBER 01, 2025</span>
        </div>
      </div>
      <header className="fixed top-7 left-0 right-0 z-40 bg-white border-b border-slate-100 py-4 shadow-sm pt-[0px] pb-[0px]">
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="h-28 w-auto">
              <img 
                src={credibro} 
                alt="CreditBro Logo" 
                className="h-20 w-auto object-contain ml-[0px] mr-[0px] mt-[13px] mb-[13px]"
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
                  <a href="#totalboost-bundle" className="block px-4 py-2 text-sm text-[#003366] font-bold bg-[#F5C518]/10 hover:bg-[#F5C518]/20 border-l-2 border-[#F5C518]" onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('totalboost-bundle');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}>
                    TotalBoost+™ Bundle
                  </a>
                  <a href="#flexcredit-product" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" onClick={(e) => {
                    e.preventDefault();
                    // Direct scroll to the specific product section
                    const element = document.getElementById('flexcredit-product');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}>
                    FlexCredit™ Revolving
                  </a>
                  <a href="#steadybuild-product" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" onClick={(e) => {
                    e.preventDefault();
                    // Direct scroll to the specific product section
                    const element = document.getElementById('steadybuild-product');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}>
                    SteadyBuild™ Installment
                  </a>
                  <a href="#hometrack-product" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" onClick={(e) => {
                    e.preventDefault();
                    // Direct scroll to the specific product section
                    const element = document.getElementById('hometrack-product');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}>
                    HomeTrack™ Rent Reporting
                  </a>
                  <a href="#lumestart-section" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" onClick={(e) => {
                    e.preventDefault();
                    // Direct scroll to the specific LumeStart section
                    const element = document.getElementById('lumestart-section');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}>
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
              className="hidden md:flex bg-[#F5C518] hover:bg-[#e5b616] text-[#003366] font-bold rounded-lg px-5 py-2.5"
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
                      // Close menu first
                      setOpen(false);
                      // Scroll with delay for mobile
                      setTimeout(() => {
                        const element = document.getElementById('how-it-works');
                        if (element) {
                          // Scroll with a fallback mechanism
                          try {
                            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          } catch (e) {
                            // Fallback to simpler scrolling if needed
                            window.scrollTo({
                              top: element.offsetTop - 100,
                              behavior: 'smooth'
                            });
                          }
                        }
                      }, 300); // Increased delay for mobile
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
                          // Then scroll to the element with a slightly longer delay on mobile
                          setTimeout(() => {
                            const element = document.getElementById('totalboost-bundle');
                            if (element) {
                              // Scroll with a fallback mechanism
                              try {
                                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              } catch (e) {
                                // Fallback to simpler scrolling if needed
                                window.scrollTo({
                                  top: element.offsetTop - 100,
                                  behavior: 'smooth'
                                });
                              }
                            }
                          }, 300); // Increased delay for mobile
                        }}
                      >
                        TotalBoost+™ Bundle
                      </button>
                      <button 
                        className="text-left w-full block text-sm text-slate-700"
                        onClick={() => {
                          // Close the menu first
                          setOpen(false);
                          // Then scroll to the element with a slightly longer delay on mobile
                          setTimeout(() => {
                            // Direct scroll to the specific product section 
                            const element = document.getElementById('flexcredit-product');
                            if (element) {
                              // Scroll with a fallback mechanism
                              try {
                                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              } catch (e) {
                                // Fallback to simpler scrolling if needed
                                window.scrollTo({
                                  top: element.offsetTop - 100,
                                  behavior: 'smooth'
                                });
                              }
                            }
                          }, 300); // Increased delay for mobile
                        }}
                      >
                        FlexCredit™ Revolving
                      </button>
                      <button 
                        className="text-left w-full block text-sm text-slate-700"
                        onClick={() => {
                          // Close the menu first
                          setOpen(false);
                          // Then scroll to the element with a slightly longer delay on mobile
                          setTimeout(() => {
                            // Direct scroll to the specific product section
                            const element = document.getElementById('steadybuild-product');
                            if (element) {
                              // Scroll with a fallback mechanism
                              try {
                                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              } catch (e) {
                                // Fallback to simpler scrolling if needed
                                window.scrollTo({
                                  top: element.offsetTop - 100,
                                  behavior: 'smooth'
                                });
                              }
                            }
                          }, 300); // Increased delay for mobile
                        }}
                      >
                        SteadyBuild™ Installment
                      </button>
                      <button 
                        className="text-left w-full block text-sm text-slate-700"
                        onClick={() => {
                          // Close the menu first
                          setOpen(false);
                          // Then scroll to the element with a slightly longer delay on mobile
                          setTimeout(() => {
                            // Direct scroll to the specific product section
                            const element = document.getElementById('hometrack-product');
                            if (element) {
                              // Scroll with a fallback mechanism
                              try {
                                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              } catch (e) {
                                // Fallback to simpler scrolling if needed
                                window.scrollTo({
                                  top: element.offsetTop - 100,
                                  behavior: 'smooth'
                                });
                              }
                            }
                          }, 300); // Increased delay for mobile
                        }}
                      >
                        HomeTrack™ Rent Reporting
                      </button>
                      <button 
                        className="text-left w-full block text-sm text-slate-700"
                        onClick={() => {
                          // Close the menu first
                          setOpen(false);
                          // Then scroll to the element with a slightly longer delay on mobile
                          setTimeout(() => {
                            const element = document.getElementById('lumestart-section');
                            if (element) {
                              // Scroll with a fallback mechanism
                              try {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              } catch (e) {
                                // Fallback to simpler scrolling if needed
                                window.scrollTo({
                                  top: element.offsetTop - 80,
                                  behavior: 'smooth'
                                });
                              }
                            }
                          }, 300); // Increased delay for mobile
                        }}
                      >
                        LumeStart™ for Families
                      </button>
                    </div>
                  </div>
                  
                  <button 
                    className="text-left text-slate-700 hover:text-slate-900 font-medium py-2 border-b border-slate-100"
                    onClick={() => { 
                      // Close menu first
                      setOpen(false);
                      // Scroll with delay for mobile
                      setTimeout(() => {
                        const element = document.getElementById('visa-card');
                        if (element) {
                          // Scroll with a fallback mechanism
                          try {
                            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          } catch (e) {
                            // Fallback to simpler scrolling if needed
                            window.scrollTo({
                              top: element.offsetTop - 100,
                              behavior: 'smooth'
                            });
                          }
                        }
                      }, 300); // Increased delay for mobile
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
                      // Close menu first
                      setOpen(false);
                      // Scroll with delay for mobile
                      setTimeout(() => {
                        // Try to scroll to the form with enhanced mobile compatibility
                        try {
                          const element = document.getElementById('reservation-form');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          } else {
                            // Fallback to original function if element not found
                            scrollToForm();
                          }
                        } catch (e) {
                          // Further fallback if scrollIntoView fails
                          const element = document.getElementById('reservation-form');
                          if (element) {
                            window.scrollTo({
                              top: element.offsetTop - 100,
                              behavior: 'smooth'
                            });
                          } else {
                            scrollToForm();
                          }
                        }
                      }, 300); // Increased delay for mobile
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
