import { Card, CardContent } from "@/components/ui/card";
import { Lock, TrendingUp, DollarSign } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitProps) => {
  return (
    <div className="feature-card flex flex-col items-center p-8">
      <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center">
        {title}
      </h3>
      <p className="text-slate-600 text-center">
        {description}
      </p>
    </div>
  );
};

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Why This Deal Is Exceptional
          </h2>
          <p className="section-subtitle">
            Unlock premium benefits at a fraction of the regular price,
            available only for our first 250 members
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<Lock className="h-7 w-7 text-[#4A90E2]" />}
            title="Lifetime Access"
            description="Pay once and enjoy all premium features forever. No recurring fees or hidden charges."
          />
          <BenefitCard 
            icon={<TrendingUp className="h-7 w-7 text-[#4A90E2]" />}
            title="Two Credit Lines"
            description="Get bundled access to our premium credit-building subscriptions to boost your score faster."
          />
          <BenefitCard 
            icon={<DollarSign className="h-7 w-7 text-[#4A90E2]" />}
            title="Massive Savings"
            description="Worth over $1,200 annually. Early adopters save thousands over the lifetime of the subscription."
          />
        </div>
      </div>
    </section>
  );
}
