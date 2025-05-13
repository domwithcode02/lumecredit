import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import lumeLogo from "@assets/lume_credit_transparent_optimized.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Lock, User, Info } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        window.location.href = "/";
      } else {
        const data = await response.json();
        throw new Error(data.message || "Invalid credentials");
      }
    } catch (error: any) {
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input 
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="pl-10"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#F5C518] hover:bg-[#e5b616] text-[#003366] font-bold"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col bg-slate-50 border-t">
            <div className="flex items-start space-x-2 text-sm text-slate-600 mb-4">
              <Info className="h-4 w-4 text-[#003366] mt-0.5 flex-shrink-0" />
              <span>For demonstration purposes, you can use one of the following accounts:</span>
            </div>
            
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="py-2 font-medium">Admin</TableCell>
                  <TableCell className="py-2">username: <span className="font-mono bg-slate-100 px-1">admin</span></TableCell>
                  <TableCell className="py-2">password: <span className="font-mono bg-slate-100 px-1">secretpassword123</span></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-2 font-medium">Staff</TableCell>
                  <TableCell className="py-2">username: <span className="font-mono bg-slate-100 px-1">rebekah</span></TableCell>
                  <TableCell className="py-2">password: <span className="font-mono bg-slate-100 px-1">virginia123</span></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}