import { Card, CardContent } from "@/components/ui/card";

type Benefit = {
  icon: string;
  title: string;
  description: string;
};

export default function BenefitsSection() {
  const benefits: Benefit[] = [
    {
      icon: "🔒",
      title: "Lifetime Access",
      description: "Pay once and enjoy all premium features forever. No recurring fees or hidden charges."
    },
    {
      icon: "📈",
      title: "Two Credit Lines",
      description: "Get bundled access to our premium credit-building subscriptions to boost your score faster."
    },
    {
      icon: "💰",
      title: "Massive Savings",
      description: "Worth over $1,200 annually. Early adopters save thousands over the lifetime of the subscription."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="font-['Poppins',sans-serif] font-bold text-2xl sm:text-3xl text-center mb-12">
          Why This Deal Is Exceptional
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-[#4A90E2] text-xl">{benefit.icon}</span>
                </div>
                <h3 className="font-['Poppins',sans-serif] font-semibold text-xl text-center mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
