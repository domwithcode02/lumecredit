import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TradelinesSection() {
  return (
    <section id="tradelines" className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center rounded-full bg-[#003366]/10 px-3 py-1 mb-4">
            <span className="text-sm font-medium text-[#003366]">Our Future Products</span>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 11L9 9" />
                  <path d="M9.5 6C8.8 6.5 8 7.5 9 8.5C10 9.5 11 8.7 11.5 8" />
                  <path d="M14.5 6.5L16.5 8.5L15 11L12 8L11 13" />
                  <path d="M13 13L15 16L13 19" />
                  <path d="M11 16L13 13L7 11L6 15" />
                </svg>
              </div>
              <CardTitle className="text-xl font-bold">FlexCredit Revolving</CardTitle>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0-.83-.83-.83-2.17 0-3L12 9" />
                  <path d="M17.64 15L22 10.64" />
                  <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
                </svg>
              </div>
              <CardTitle className="text-xl font-bold">SteadyBuild Installment</CardTitle>
              <CardDescription className="text-slate-600 mt-2">
                Installment loans for diversifying your credit mix
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
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