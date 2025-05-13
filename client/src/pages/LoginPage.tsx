import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import lumeLogo from "@assets/lume_credit_transparent_optimized.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Lock, User } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Login attempt with username:", username);

    try {
      console.log("Submitting login request...");
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      console.log("Login response status:", response.status);
      
      if (response.ok) {
        console.log("Login successful, redirecting to homepage");
        const data = await response.json();
        console.log("Response data:", data);
        
        // Wait a moment for the cookie to be set
        setTimeout(() => {
          // Force a hard reload of the page to ensure the cookie is recognized
          window.location.href = data.redirectTo || '/';
          // If the redirect doesn't happen after 1 second, force it
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }, 300);
      } else {
        const data = await response.json();
        console.error("Login failed:", data);
        throw new Error(data.message || "Invalid credentials");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        title: "Login Failed",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <img
            src={lumeLogo}
            alt="LumeCredit Logo"
            className="h-20 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-slate-900">Secure Access</h1>
          <p className="text-slate-600">Please log in to view the LumeCredit landing page</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="space-y-1 bg-[#003366] text-white rounded-t-lg">
            <CardTitle className="text-xl">Authorized Access Only</CardTitle>
            <CardDescription className="text-slate-200">
              This area is restricted to authorized personnel
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {/* Use a regular form submission that posts directly to the server */}
            <form action="/api/login" method="POST" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input 
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#F5C518] hover:bg-[#e5b616] text-[#003366] font-bold"
              >
                Sign in
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}