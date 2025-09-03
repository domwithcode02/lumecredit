import { User, Briefcase, BarChart } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How It <span className="text-[#003366]">Works</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Getting started with LumeCredit is simple - just three easy steps to better credit
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#F5C518]"></div>
            
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-[#003366]/10 flex items-center justify-center mb-6">
                <User size={32} className="text-[#003366]" />
              </div>
              
              <div className="bg-[#F5C518] text-[#003366] font-bold rounded-full h-8 w-8 flex items-center justify-center mb-4">
                1
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sign Up</h3>
              
              <p className="text-slate-600">
                Complete our simple form to secure your spot as one of our first 250 members.
                Pay a one-time fee of $200 for 5 full years of service.
              </p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#F5C518]"></div>
            
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-[#003366]/10 flex items-center justify-center mb-6">
                <Briefcase size={32} className="text-[#003366]" />
              </div>
              
              <div className="bg-[#F5C518] text-[#003366] font-bold rounded-full h-8 w-8 flex items-center justify-center mb-4">
                2
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">Get Your Perfect Credit Mix</h3>
              
              <p className="text-slate-600">
                You'll be added to all three essential tradelines: FlexCredit™ revolving, 
                SteadyBuild™ installment, and HomeTrack™ rent reporting.
              </p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#F5C518]"></div>
            
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-[#003366]/10 flex items-center justify-center mb-6">
                <BarChart size={32} className="text-[#003366]" />
              </div>
              
              <div className="bg-[#F5C518] text-[#003366] font-bold rounded-full h-8 w-8 flex items-center justify-center mb-4">
                3
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">Watch Your Credit Improve</h3>
              
              <p className="text-slate-600">
                Relax as our tradelines report to all three major credit bureaus.
                Track your progress with our monitoring dashboard as your score grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}