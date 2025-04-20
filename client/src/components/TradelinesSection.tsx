import { CreditCard, Calculator, Home } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TradelinesSection() {
  return (
    <section id="tradelines" className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center rounded-full bg-[#003366]/10 px-3 py-1 mb-4">
            <span className="text-sm font-medium text-[#003366]">Our Products</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Premium Tradelines for Your Credit Success
          </h2>
          <p className="text-slate-600 text-lg">
            Build and maintain excellent credit with our specialized tradeline products designed for your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* FlexCredit Tradeline */}
          <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-[#003366]" />
              </div>
              <CardTitle className="text-xl font-bold">FlexCredit Revolving Tradeline</CardTitle>
              <CardDescription className="text-slate-600 mt-2">
                The foundation of excellent credit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2 font-bold">✓</span>
                  <span><strong>Problem:</strong> Limited or no revolving credit history makes it hard to qualify for credit cards and loans.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2 font-bold">✓</span>
                  <span><strong>Solution:</strong> Builds revolving credit history similar to a credit card, improving your credit mix.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2 font-bold">✓</span>
                  <span><strong>Benefit:</strong> Lower utilization ratios help boost scores quickly and improve approval odds for premium cards.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* SteadyBuild Tradeline */}
          <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-[#003366]" />
              </div>
              <CardTitle className="text-xl font-bold">SteadyBuild Installment Tradeline</CardTitle>
              <CardDescription className="text-slate-600 mt-2">
                Perfect for diversifying your credit mix
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2 font-bold">✓</span>
                  <span><strong>Problem:</strong> Lack of installment loan history limits your credit score potential and loan approval odds.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2 font-bold">✓</span>
                  <span><strong>Solution:</strong> Adds a positive installment tradeline to your credit report without taking on debt.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2 font-bold">✓</span>
                  <span><strong>Benefit:</strong> Diversifies your credit mix and demonstrates ability to manage different types of credit.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* HomeTrack Tradeline */}
          <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-[#003366]" />
              </div>
              <CardTitle className="text-xl font-bold">HomeTrack Rent Reporting</CardTitle>
              <CardDescription className="text-slate-600 mt-2">
                Turn your rent payments into credit history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2 font-bold">✓</span>
                  <span><strong>Problem:</strong> Your biggest monthly payment (rent) doesn't help your credit score or future home buying goals.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2 font-bold">✓</span>
                  <span><strong>Solution:</strong> Reports your on-time rent payments to major credit bureaus as a positive tradeline.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2 font-bold">✓</span>
                  <span><strong>Benefit:</strong> Builds payment history that can help qualify for mortgages and demonstrates housing payment reliability.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}