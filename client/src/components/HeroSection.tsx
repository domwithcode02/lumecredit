import { Button } from "@/components/ui/button";
import { Check, CreditCard, TrendingUp, Shield } from "lucide-react";

interface HeroSectionProps {
  onButtonClick: () => void;
}

export default function HeroSection({ onButtonClick }: HeroSectionProps) {
  return (
    <section className="bg-white pt-20 pb-16 sm:pt-24 sm:pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#4A90E2] mr-2"></span>
              <span className="text-sm font-medium text-slate-700">Limited Time Offer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              The credit building tool that gets results<span className="text-[#4A90E2]">.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl">
              For the first 250 early adopters only: Lock in lifetime access to our premium credit line subscriptions for a one-time payment of just $200.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <Button 
                className="btn-primary text-base sm:text-lg px-8 py-6 h-auto w-full sm:w-auto"
                onClick={onButtonClick}
              >
                Reserve Your Spot
              </Button>
              
              <div className="bg-[#F5C518] text-slate-900 font-medium rounded-lg px-6 py-3 flex items-center justify-center">
                <span className="mr-2">$200</span>
                <span className="text-sm">Lifetime Access</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center text-sm text-slate-600">
                <Check size={16} className="text-[#4A90E2] mr-2" />
                <span>No monthly fees</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Check size={16} className="text-[#4A90E2] mr-2" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Check size={16} className="text-[#4A90E2] mr-2" />
                <span>30-day money back</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-50 w-[500px] h-[500px] rounded-full -z-10"></div>
            <div className="grid grid-cols-1 gap-6 relative">
              <div className="feature-card translate-x-12">
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <CreditCard className="text-[#4A90E2] h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Instant Credit Line</h3>
                    <p className="text-slate-600 text-sm">Get approved and start building credit immediately.</p>
                  </div>
                </div>
              </div>
              
              <div className="feature-card -translate-x-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <TrendingUp className="text-[#4A90E2] h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Score Improvement</h3>
                    <p className="text-slate-600 text-sm">Track your progress with real-time credit monitoring.</p>
                  </div>
                </div>
              </div>
              
              <div className="feature-card translate-x-8">
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Shield className="text-[#4A90E2] h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Secure & Protected</h3>
                    <p className="text-slate-600 text-sm">Your data is encrypted and never shared with third parties.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
