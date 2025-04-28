import { Card, CardContent } from "@/components/ui/card";
import { Lock, TrendingUp, DollarSign } from "lucide-react";

import AnimateOnScroll from "./AnimateOnScroll";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitProps) => {
  return (
    <AnimateOnScroll animation="fadeIn" delay={0.2} duration={0.8} threshold={0.2}>
      <div className="feature-card flex flex-col items-center p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
        <div className="w-14 h-14 bg-[#F5C518]/10 rounded-full flex items-center justify-center mb-6 transition-all duration-300 hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center">
          {title}
        </h3>
        <p className="text-slate-600 text-center">
          {description}
        </p>
      </div>
    </AnimateOnScroll>
  );
};

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <AnimateOnScroll animation="fadeIn" threshold={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-[#00336610] px-3 py-1 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#F5C518] mr-2"></span>
              <span className="text-sm font-medium text-slate-700">LumeCredit Products</span>
            </div>
            <h2 className="section-title">
              Why This Deal Is <span className="text-[#F5C518]">Exceptional</span>
            </h2>
            <p className="section-subtitle">
              Unlock premium benefits at a fraction of the regular price,
              available only for our first 250 members
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<Lock className="h-7 w-7 text-[#003366]" />}
            title="Lifetime Access"
            description="Pay once and enjoy all premium features forever. No recurring fees or hidden charges."
          />
          <BenefitCard 
            icon={<TrendingUp className="h-7 w-7 text-[#003366]" />}
            title="Two Credit Lines"
            description="Get bundled access to our premium credit-building subscriptions to boost your score faster."
          />
          <BenefitCard 
            icon={<DollarSign className="h-7 w-7 text-[#003366]" />}
            title="Massive Savings"
            description="Worth over $1,200 annually. Early adopters save thousands over the lifetime of the subscription."
          />
        </div>
        
        <AnimateOnScroll animation="fadeIn" delay={0.3} threshold={0.1}>
          <div className="mt-16 bg-gradient-to-r from-[#003366] to-[#001a35] p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-3">The Lume<span className="text-[#F5C518]">Credit</span> Advantage</h3>
            <p className="text-slate-200 mb-6 max-w-3xl mx-auto">
              Our innovative credit solution offers a unique advantage over traditional credit building methods,
              with a perfect mix of credit types that maximize your FICO® potential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="text-[#F5C518] font-bold text-lg mb-2">FlexCredit™</h4>
                <p className="text-white/80 text-sm">Revolving credit line that reports to all major bureaus, improving your credit mix and utilization.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="text-[#F5C518] font-bold text-lg mb-2">SteadyBuild™</h4>
                <p className="text-white/80 text-sm">Installment credit line that demonstrates your ability to make consistent payments over time.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="text-[#F5C518] font-bold text-lg mb-2">HomeTrack™</h4>
                <p className="text-white/80 text-sm">Rent reporting service that adds valuable payment history to your credit record at no extra cost.</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
