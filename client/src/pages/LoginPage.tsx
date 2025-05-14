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
        toast({
          title: "Login successful",
          description: "Redirecting to the main page...",
        });
        console.log("Login successful, redirecting to app...");
        
        // Let's store auth in localStorage to keep user logged in
        localStorage.setItem("isAuthenticated", "true");
        
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      {/* Login Form Column - Now full width */}
      <div className="w-full max-w-md p-4">
        <Card className="w-full border border-slate-200 shadow-lg">
          <CardHeader className="space-y-2 text-center">
            <div className="mx-auto w-48 mb-4">
              <img 
                src={lumeLogo} 
                alt="LumeCredit Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to access the LumeCredit exclusive offer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <Input 
                  id="username"
                  type="text" 
                  placeholder="Enter your username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#4aade3] hover:bg-[#3089b7] transition-colors"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col text-center text-sm text-slate-600 border-t border-slate-100 pt-4 mt-2">
            <p>Build perfect credit with our revolutionary TotalBoost+ bundle</p>
            <p>Limited to only 250 members</p>
            <div className="mt-4 bg-slate-100 rounded-lg p-3 text-slate-700 text-sm">
              <p className="font-semibold">Special Early Access Offer:</p>
              <p>$200 one-time payment for 5 years of service</p>
              <p className="text-xs opacity-80 mt-1">That's just $3.33 per month!</p>
            </div>
            <p className="mt-4 text-xs font-medium">Launching September 01, 2025</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}