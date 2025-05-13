
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
              
              <div className="text-center mt-4">
                <a href="/quick-login" className="text-blue-600 hover:underline text-sm">
                  Quick Login (Direct Access)
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
