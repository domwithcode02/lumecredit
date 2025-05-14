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
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-50 px-2">
      {/* Login Form Column - extremely compact for mobile */}
      <div className="w-full max-w-md relative z-10">
        <Card className="w-full border border-slate-100 bg-white shadow-md rounded-lg overflow-hidden">
          <CardHeader className="relative z-10 py-2 px-3 md:p-6">
            <div className="mx-auto w-28 md:w-48">
              <img 
                src={lumeLogo} 
                alt="LumeCredit Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <CardTitle className="text-lg md:text-2xl font-bold text-slate-800 mt-1">Welcome Back</CardTitle>
            <CardDescription className="text-slate-600 text-xs md:text-sm">
              Sign in to access LumeCredit
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10 p-2 md:p-6">
            <form onSubmit={handleLogin} className="space-y-2">
              <div>
                <Input 
                  id="username"
                  type="text" 
                  placeholder="Username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-white border-slate-200 h-8 md:h-10 text-sm"
                  required
                />
              </div>
              <div>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white border-slate-200 h-8 md:h-10 text-sm"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-slate-800 hover:bg-slate-700 text-white transition-colors h-8 md:h-10 text-xs md:text-sm"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin mr-1 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </span>
                ) : "Sign in"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col text-center border-t border-slate-100 py-1 relative z-10">
            <div className="flex items-center justify-center">
              <p className="text-[10px] md:text-xs text-slate-500">Launching September 01, 2025</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}