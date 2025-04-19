import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TrustSignalsSection() {
  const trustIcons = [
    { icon: "🔒", label: "Secure & Encrypted" },
    { icon: "⭐", label: "4.9/5 Star Rating" },
    { icon: "🛡️", label: "Bank-Level Security" },
    { icon: "🤝", label: "24/7 Support" },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="font-['Poppins',sans-serif] font-semibold text-xl text-center mb-8">
          Trusted by Credit-Builders Nationwide
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {trustIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                <span className="text-gray-600 text-xl">{item.icon}</span>
              </div>
              <span className="text-sm text-gray-600 text-center">{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* Testimonial */}
        <Card className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <CardContent className="p-0">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                  MJ
                </div>
              </div>
              <div className="ml-4">
                <div className="font-medium">Michael J.</div>
                <div className="text-sm text-gray-500">Credit score increased by 85 points</div>
              </div>
              <div className="ml-auto">
                <div className="flex text-[#F5C518]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "I was struggling with a poor credit score for years. LumeCredit helped me establish positive credit history and significantly improve my score in just a few months. The guidance and tools they provide are invaluable."
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
