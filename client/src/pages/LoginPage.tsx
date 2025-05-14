import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import lumeLogo from "@assets/lume_credit_transparent_optimized.png";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Parse response to get user data
        const userData = await response.json();
        
        toast({
          title: "Login successful",
          description: "Redirecting to the main page...",
        });
        console.log("Login successful, redirecting to app...");
        
        // Store auth and user data in localStorage to keep user logged in
        localStorage.setItem("isAuthenticated", "true");
        
        // Store user data (but don't include sensitive info)
        if (userData.user) {
          localStorage.setItem("userData", JSON.stringify(userData.user));
          
          // For admin users, store the admin token for accessing login logs
          if (userData.user.username === "admin") {
            localStorage.setItem("adminToken", "5winners");
          }
        }
        
        // Redirect to home page
        setLocation("/");
      } else {
        const errorData = await response.json();
        toast({
          title: "Login failed",
          description: errorData.message || "Invalid username or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-start sm:items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-50 px-2 py-2 sm:py-4">
      {/* Login Form Column */}
      <div className="w-full max-w-md">
        <Card className="w-full border border-slate-100 bg-white shadow-md rounded-lg overflow-hidden">
          <CardHeader className="py-3 px-4 sm:p-6 space-y-0.5 sm:space-y-2">
            <div className="mx-auto w-36 sm:w-48">
              <img 
                src={lumeLogo} 
                alt="LumeCredit Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold text-slate-800 text-center mt-0.5 sm:mt-2">Welcome Back</CardTitle>
            <CardDescription className="text-slate-600 text-xs sm:text-sm text-center">
              Sign in to access LumeCredit
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <form onSubmit={handleLogin} className="space-y-3 sm:space-y-4">
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="username" className="text-sm font-medium text-slate-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Username
                </label>
                <Input 
                  id="username"
                  type="text" 
                  placeholder="Enter your username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-white border-slate-200 focus:border-slate-300 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Password
                </label>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white border-slate-200 focus:border-slate-300 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-slate-800 hover:bg-slate-700 text-white transition-colors mt-1"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </span>
                ) : "Sign in"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col text-center text-sm text-slate-500 border-t border-slate-100 py-2 sm:pt-4">
            <div className="flex items-center justify-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xs font-medium">Launching September 01, 2025</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}