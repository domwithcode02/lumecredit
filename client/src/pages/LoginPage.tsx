import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import lumeLogo from "@assets/lume_credit_transparent_optimized.png";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [_, setLocation] = useLocation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Error",
        description: "Please enter both username and password",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await apiRequest("POST", "/api/login", { username, password });
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Success",
          description: "Login successful!",
        });
        console.log("Login successful, redirecting to app...");
        setTimeout(() => {
          setLocation("/");
        }, 500);
      } else {
        toast({
          title: "Error",
          description: data.message || "Login failed. Please check your credentials.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="w-full max-w-sm">
        <Card className="w-full bg-white border-none shadow-none">
          <div className="pt-6 pb-2 px-4 text-center">
            <div className="mx-auto w-32 mb-1">
              <img 
                src={lumeLogo} 
                alt="LumeCredit Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <CardTitle className="text-lg font-bold text-slate-800 mt-3">Welcome Back</CardTitle>
            <CardDescription className="text-slate-600 text-xs">
              Sign in to access LumeCredit
            </CardDescription>
          </div>
          <div className="px-4 pt-2">
            <form onSubmit={handleLogin} className="space-y-3">
              <div>
                <label htmlFor="username" className="block text-xs text-slate-600 mb-1 pl-1">
                  Username
                </label>
                <Input 
                  id="username"
                  type="text" 
                  placeholder="Enter your username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-9 border-slate-200 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-xs text-slate-600 mb-1 pl-1">
                  Password
                </label>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-9 border-slate-200 text-sm"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-slate-800 hover:bg-slate-700 text-white h-9 mt-1"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </div>
          <div className="text-center mt-3 pb-3">
            <p className="text-xs text-slate-400">Launching September 01, 2025</p>
          </div>
        </Card>
      </div>
    </div>
  );
}