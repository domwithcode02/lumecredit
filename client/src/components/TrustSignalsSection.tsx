import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Award, LockKeyhole, Clock } from "lucide-react";

interface TestimonialProps {
  name: string;
  initials: string;
  achievement: string;
  text: string;
}

const Testimonial = ({ name, initials, achievement, text }: TestimonialProps) => {
  return (
    <Card className="feature-card p-8 hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex items-center mb-5">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-lg font-medium text-[#4A90E2]">
              {initials}
            </div>
          </div>
          <div className="ml-4">
            <div className="text-lg font-medium">{name}</div>
            <div className="text-sm text-slate-500">{achievement}</div>
          </div>
          <div className="ml-auto">
            <div className="flex text-[#F5C518]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-slate-600">
          "{text}"
        </p>
      </CardContent>
    </Card>
  );
};

interface TrustItemProps {
  icon: React.ReactNode;
  label: string;
}

const TrustItem = ({ icon, label }: TrustItemProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
        {icon}
      </div>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </div>
  );
};

export default function TrustSignalsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Trusted by Credit-Builders Nationwide
          </h2>
          <p className="section-subtitle">
            Join thousands of members who have already transformed their credit scores
            with our proven credit-building tools
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <TrustItem 
            icon={<LockKeyhole className="h-7 w-7 text-[#4A90E2]" />}
            label="Secure & Encrypted"
          />
          <TrustItem 
            icon={<Star className="h-7 w-7 text-[#4A90E2]" />}
            label="4.9/5 Star Rating"
          />
          <TrustItem 
            icon={<Shield className="h-7 w-7 text-[#4A90E2]" />}
            label="Bank-Level Security"
          />
          <TrustItem 
            icon={<Clock className="h-7 w-7 text-[#4A90E2]" />}
            label="24/7 Support"
          />
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Testimonial 
            name="Michael Johnson"
            initials="MJ"
            achievement="Credit score increased by 85 points"
            text="I was struggling with a poor credit score for years. Credit Bro helped me establish positive credit history and significantly improve my score in just a few months. The guidance and tools they provide are invaluable."
          />
          <Testimonial 
            name="Sarah Williams"
            initials="SW"
            achievement="Approved for mortgage after 6 months"
            text="Credit Bro's platform made it easy to build my credit score systematically. Their tools helped me qualify for a mortgage with a great rate, something I thought was impossible just months earlier."
          />
        </div>
      </div>
    </section>
  );
}
