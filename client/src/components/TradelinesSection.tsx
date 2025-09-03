import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, TrendingUp, Clock, ArrowUp, PiggyBank, Home, ChevronRight, AlertCircle, CheckCircle2 } from "lucide-react";
import flexingIcon from "@assets/flexing_icon_transparent_outline.png";

export default function TradelinesSection() {
  return (
    <section id="tradelines" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center rounded-full bg-[#003366]/10 px-3 py-1 mb-4">
            <span className="text-sm font-bold text-[#003366]">CREDIT BUILDING 101</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Are <span className="text-[#003366]">Tradelines</span> & Why Do They Matter?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Think of tradelines as the building blocks of your credit history. They're the accounts that appear on your credit report and determine your credit score.
          </p>
        </div>

        {/* Credit Education Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Why Your Credit Score Is Like Your Financial GPA
              </h3>
              <p className="text-slate-600 mb-6">
                Just like your GPA shows how well you performed in school, your credit score tells lenders how well you handle money. The higher your score, the more financial opportunities you unlock.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#003366]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CreditCard size={18} className="text-[#003366]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Better Loan Options</h4>
                    <p className="text-slate-600 text-sm">Better credit = lower interest rates = thousands in savings</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#003366]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Home size={18} className="text-[#003366]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Housing Opportunities</h4>
                    <p className="text-slate-600 text-sm">Qualify for apartments and mortgages with better terms</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#003366]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <PiggyBank size={18} className="text-[#003366]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">More Financial Freedom</h4>
                    <p className="text-slate-600 text-sm">Access better cards with rewards, cash back, and travel perks</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-200 overflow-hidden">
              <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center">
                <AlertCircle size={20} className="text-[#F5C518] mr-2" />
                The Credit Catch-22
              </h3>
              <p className="text-slate-600 mb-4">
                To build credit, you need credit accounts. But to get credit accounts, lenders want to see existing credit history. It's a frustrating cycle!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-6">
                <div className="w-32 h-32 rounded-full bg-red-50 border-2 border-red-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-red-500 font-bold">No Credit</div>
                    <div className="w-16 h-0.5 bg-red-200 my-2 mx-auto"></div>
                    <div className="text-red-500 font-bold">No Approval</div>
                  </div>
                </div>
                <div className="rotate-90 sm:rotate-0 w-6 sm:w-12 flex justify-center">
                  <ChevronRight size={24} className="text-slate-300" />
                </div>
                <div className="w-32 h-32 rounded-full bg-green-50 border-2 border-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-green-500 font-bold">LumeCredit</div>
                    <div className="w-16 h-0.5 bg-green-200 my-2 mx-auto"></div>
                    <div className="text-green-500 font-bold">Solution</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#003366]/5 rounded-lg p-4 flex items-start gap-3">
                <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-slate-700 text-sm">
                  <span className="font-semibold">Credit Bro breaks this cycle</span> by providing you with tradelines that report to credit bureaus without requiring a credit check or existing credit history.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tradelines Explanation */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">
              The <span className="text-[#F5C518]">3 Types</span> of Tradelines That Shape Your Credit
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Revolving Credit */}
            <div id="flexcredit" className="bg-gradient-to-br from-[#41c99e]/10 to-white rounded-xl overflow-hidden shadow-md border border-[#41c99e]/30 hover:shadow-lg transition-shadow relative group">
              <div className="absolute top-0 h-1 w-full bg-[#41c99e]"></div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#41c99e]/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <img src={flexingIcon} alt="Flexing arm" width="32" height="32" style={{ filter: 'invert(13%) sepia(74%) saturate(2397%) hue-rotate(198deg) brightness(92%) contrast(105%)' }} />
                </div>
                
                <h3 className="text-xl font-bold text-center text-slate-900 mb-4 flex items-center justify-center">
                  <div className="bg-[#41c99e]/20 text-[#003366] font-bold rounded-full h-6 w-6 flex items-center justify-center mr-2">1</div>
                  Revolving Credit
                </h3>
                
                <div className="bg-white rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 shadow-sm">
                  <p className="text-slate-700 text-sm">
                    <span className="font-semibold block mb-1">What is it?</span> 
                    Accounts with flexible balances like credit cards or lines of credit.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#003366]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp size={14} className="text-[#003366]" />
                    </div>
                    <p className="text-slate-700 text-sm">
                      <span className="font-semibold">Impact:</span> 30% of score (utilization ratio)
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#003366]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={14} className="text-[#003366]" />
                    </div>
                    <p className="text-slate-700 text-sm">
                      <span className="font-semibold">Time to Impact:</span> 30-60 days
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#003366]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowUp size={14} className="text-[#003366]" />
                    </div>
                    <p className="text-slate-700 text-sm">
                      <span className="font-semibold">Our Solution:</span> FlexCredit™ Revolving Tradeline
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Installment Credit */}
            <div id="steadybuild" className="bg-gradient-to-br from-[#4aade3]/10 to-white rounded-xl overflow-hidden shadow-md border border-[#4aade3]/30 hover:shadow-lg transition-shadow relative group">
              <div className="absolute top-0 h-1 w-full bg-[#4aade3]"></div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#4aade3]/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0-.83-.83-.83-2.17 0-3L12 9" />
                    <path d="M17.64 15L22 10.64" />
                    <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-center text-slate-900 mb-4 flex items-center justify-center">
                  <div className="bg-[#4aade3]/20 text-[#003366] font-bold rounded-full h-6 w-6 flex items-center justify-center mr-2">2</div>
                  Installment Credit
                </h3>
                
                <div className="bg-white rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 shadow-sm">
                  <p className="text-slate-700 text-sm">
                    <span className="font-semibold block mb-1">What is it?</span> 
                    Fixed payment loans with set terms, like auto loans or personal loans.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#003366]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp size={14} className="text-[#003366]" />
                    </div>
                    <p className="text-slate-700 text-sm">
                      <span className="font-semibold">Impact:</span> 10% of score (credit mix)
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#003366]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={14} className="text-[#003366]" />
                    </div>
                    <p className="text-slate-700 text-sm">
                      <span className="font-semibold">Time to Impact:</span> 60-90 days
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#003366]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowUp size={14} className="text-[#003366]" />
                    </div>
                    <p className="text-slate-700 text-sm">
                      <span className="font-semibold">Our Solution:</span> SteadyBuild™ Installment Tradeline
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment History Credit */}
            <div id="hometrack" className="bg-gradient-to-br from-[#ffc829]/10 to-white rounded-xl overflow-hidden shadow-md border border-[#ffc829]/30 hover:shadow-lg transition-shadow relative group">
              <div className="absolute top-0 h-1 w-full bg-[#ffc829]"></div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ffc829]/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-center text-slate-900 mb-4 flex items-center justify-center">
                  <div className="bg-[#ffc829]/20 text-[#003366] font-bold rounded-full h-6 w-6 flex items-center justify-center mr-2">3</div>
                  Payment History
                </h3>
                
                <div className="bg-white rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 shadow-sm">
                  <p className="text-slate-700 text-sm">
                    <span className="font-semibold block mb-1">What is it?</span> 
                    Regular reported payments like rent that show reliability over time.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#003366]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp size={14} className="text-[#003366]" />
                    </div>
                    <p className="text-slate-700 text-sm">
                      <span className="font-semibold">Impact:</span> 35% of score (payment history)
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#003366]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={14} className="text-[#003366]" />
                    </div>
                    <p className="text-slate-700 text-sm">
                      <span className="font-semibold">Time to Impact:</span> 30-60 days
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#003366]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowUp size={14} className="text-[#003366]" />
                    </div>
                    <p className="text-slate-700 text-sm">
                      <span className="font-semibold">Our Solution:</span> HomeTrack™ Rent Reporting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* LumeCredit Products Section */}
        <div id="products" className="mb-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">
              <span className="text-[#F5C518]">CreditBro</span> Products
            </h3>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Choose the right credit building products to match your needs and budget
            </p>
          </div>
          
          {/* FlexCredit Product Section - with ID for anchor link */}
          <div id="flexcredit-product" className="bg-gradient-to-b from-[#41c99e]/5 to-white rounded-xl shadow-lg overflow-hidden border border-[#41c99e]/30 mb-8">
            <div className="bg-[#41c99e] text-white py-4 px-6">
              <h4 className="text-xl font-bold">FlexCredit™ Revolving Tradeline</h4>
            </div>
            <div className="p-6">
              <p className="text-slate-600 mb-6">
                Our most powerful credit-building tool gives you a revolving tradeline that reports to all three major credit bureaus, helping you establish or rebuild your credit history.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Plan 1 */}
                <div className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-lg font-bold text-slate-900">Standard Plan</h5>
                    <div className="text-[#F5C518] bg-[#F5C518]/10 rounded-full px-3 py-1 text-sm font-semibold">Most Popular</div>
                  </div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-[#003366]">$25</span>
                    <span className="text-slate-500 ml-1">/month</span>
                  </div>
                  <div className="text-lg text-slate-700 mb-4">$2,500 Credit Limit</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Reports to all 3 major credit bureaus</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Low utilization ratio reporting</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Perfect payment history reporting</span>
                    </li>
                  </ul>
                </div>
                
                {/* Plan 2 */}
                <div className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-lg font-bold text-slate-900">Premium Plan</h5>
                    <div className="text-blue-600 bg-blue-50 rounded-full px-3 py-1 text-sm font-semibold">Higher Limit</div>
                  </div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-[#003366]">$35</span>
                    <span className="text-slate-500 ml-1">/month</span>
                  </div>
                  <div className="text-lg text-slate-700 mb-4">$3,500 Credit Limit</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Reports to all 3 major credit bureaus</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Higher credit limit for improved scoring</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Priority customer service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* SteadyBuild Product Section - with ID for anchor link */}
          <div id="steadybuild-product" className="bg-gradient-to-b from-[#4aade3]/5 to-white rounded-xl shadow-lg overflow-hidden border border-[#4aade3]/30 mb-8">
            <div className="bg-[#4aade3] text-white py-4 px-6">
              <h4 className="text-xl font-bold">SteadyBuild™ Installment Tradeline</h4>
            </div>
            <div className="p-6">
              <p className="text-slate-600 mb-6">
                Diversify your credit mix with our installment loan tradeline that reports fixed monthly payments to all three credit bureaus, showing lenders you can manage different types of credit.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Plan 1 */}
                <div className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-lg font-bold text-slate-900">Basic Plan</h5>
                    <div className="text-[#F5C518] bg-[#F5C518]/10 rounded-full px-3 py-1 text-sm font-semibold">Great Starter</div>
                  </div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-[#003366]">$25</span>
                    <span className="text-slate-500 ml-1">/month</span>
                  </div>
                  <div className="text-lg text-slate-700 mb-4">$1,000 Loan Amount</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Reports to all 3 major credit bureaus</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Shows positive payment history</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Improves credit mix diversification</span>
                    </li>
                  </ul>
                </div>
                
                {/* Plan 2 */}
                <div className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-lg font-bold text-slate-900">Advanced Plan</h5>
                    <div className="text-blue-600 bg-blue-50 rounded-full px-3 py-1 text-sm font-semibold">Larger Loan</div>
                  </div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-[#003366]">$35</span>
                    <span className="text-slate-500 ml-1">/month</span>
                  </div>
                  <div className="text-lg text-slate-700 mb-4">$1,500 Loan Amount</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Reports to all 3 major credit bureaus</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Larger loan amount for better impact</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Enhanced credit profile impact</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* HomeTrack Product Section - with ID for anchor link */}
          <div id="hometrack-product" className="bg-gradient-to-b from-[#ffc829]/5 to-white rounded-xl shadow-lg overflow-hidden border border-[#ffc829]/30 mb-8">
            <div className="bg-[#ffc829] text-[#003366] py-4 px-6">
              <h4 className="text-xl font-bold">HomeTrack™ Rent Reporting</h4>
            </div>
            <div className="p-6">
              <p className="text-slate-600 mb-6">
                Turn your largest monthly expense into a powerful credit builder. Our rent reporting service reports your rent payments to credit bureaus, helping you build credit history with payments you're already making.
              </p>
              
              <div className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow max-w-md mx-auto">
                <div className="flex justify-between items-center mb-4">
                  <h5 className="text-lg font-bold text-slate-900">HomeTrack™ Plan</h5>
                  <div className="text-green-600 bg-green-50 rounded-full px-3 py-1 text-sm font-semibold">Best Value</div>
                </div>
                <div className="text-center mb-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-[#003366]">$65</span>
                    <span className="text-slate-500 ml-1">one-time setup</span>
                  </div>
                  <div className="text-md text-slate-700 mt-2">+ $7.50/month after first month</div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Reports to all 3 major credit bureaus</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Up to 24 months of payment history reported</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Maximize the impact of your largest expense</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Verification and reporting handled for you</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Impact Highlight Section */}
        <div className="bg-[#003366] rounded-xl overflow-hidden shadow-xl py-10 px-8 md:px-12 relative mb-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5C518]/10 rounded-full -mt-20 -mr-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#F5C518]/5 rounded-full -mb-10 -ml-10"></div>
          
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 mb-4">
                <span className="text-sm font-bold text-[#F5C518]">INCLUDED IN YOUR BUNDLE</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Build Your Credit With Confidence
              </h3>
              
              <p className="text-white/80 mb-6">
                Our powerful credit-building products each address a key aspect of your credit score, working together to maximize your credit building potential.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-[#F5C518] mr-3">✓</div>
                  <p className="text-white/90">
                    <span className="font-semibold">Helps build or rebuild your credit score</span> without the risk of high-interest debt
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-[#F5C518] mr-3">✓</div>
                  <p className="text-white/90">
                    <span className="font-semibold">Establishes diverse credit history</span> with revolving, installment, and payment reporting
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-[#F5C518] mr-3">✓</div>
                  <p className="text-white/90">
                    <span className="font-semibold">Reports to Experian, TransUnion, and Equifax</span> to maximize your score potential
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <div className="text-[#F5C518] font-extrabold text-4xl mb-2">+40-70</div>
              <div className="text-white/80 text-lg mb-4">potential credit score points</div>
              <div className="w-full h-0.5 bg-white/10 my-6"></div>
              <div className="text-white font-semibold mb-2">Typical Results Timeline</div>
              <div className="flex items-center justify-between mx-auto max-w-xs">
                <div className="text-center">
                  <div className="h-1.5 w-full bg-green-200 rounded-full max-w-[180px]">
                    <div className="h-1.5 bg-green-500 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                  <div className="text-white/60 text-xs mt-1">30 Days</div>
                </div>
                <div className="text-center">
                  <div className="h-1.5 w-full bg-green-200 rounded-full max-w-[180px]">
                    <div className="h-1.5 bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="text-white/60 text-xs mt-1">60 Days</div>
                </div>
                <div className="text-center">
                  <div className="h-1.5 w-full bg-green-200 rounded-full max-w-[180px]">
                    <div className="h-1.5 bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="text-white/60 text-xs mt-1">90 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}