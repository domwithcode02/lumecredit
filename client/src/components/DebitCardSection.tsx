import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, Bank } from "lucide-react";

export default function DebitCardSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("reserve-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="debit-card" className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-[#00336610] px-3 py-1 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#F5C518] mr-2"></span>
              <span className="text-sm font-medium text-slate-700">Free Banking Solution</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              The <span className="text-[#003366]">LumeCredit</span> <span className="text-[#F5C518]">Visa® Debit</span> Card
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 max-w-xl">
              Get access to our free Visa® debit card that comes with opening a free checking account. 
              Manage your money with zero hassle and no hidden fees.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366] shrink-0">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">No Hidden Fees</h3>
                  <p className="text-slate-600">No monthly fees, no minimum balance requirements, and no overdraft fees to worry about.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366] shrink-0">
                  <Bank size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">50,000+ Free ATMs Nationwide</h3>
                  <p className="text-slate-600">Access your cash for free at over 50,000 ATMs in our nationwide network.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366] shrink-0">
                  <Wallet size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">No Fee Purchases</h3>
                  <p className="text-slate-600">Shop anywhere Visa is accepted with no transaction fees or foreign transaction fees.</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={scrollToForm}
              className="bg-[#003366] hover:bg-[#002347] text-white font-bold px-6 py-3 rounded-lg mb-6"
            >
              Open a Free Account
            </Button>
            
            <div className="bg-white rounded-lg p-4 border border-slate-200 max-w-xl text-xs text-slate-500 space-y-2">
              <p className="font-medium text-slate-700 mb-1">Important Disclosures:</p>
              <p>
                Card issued by Sutton Bank, Member FDIC, pursuant to license from Visa® U.S.A. Inc.
              </p>
              <p>
                Funds in your LumeCredit account are FDIC-insured through our partner bank up to $250,000 per depositor.
              </p>
              <p className="text-[10px] italic">
                The LumeCredit Visa® Debit Card is available with a LumeCredit Checking Account. Terms and conditions apply.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Card mockup */}
              <div className="bg-gradient-to-br from-[#003366] to-[#004d99] rounded-2xl shadow-2xl p-6 aspect-[1.58/1] relative overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
                {/* Card decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5C518]/10 rounded-full -mt-10 -mr-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#F5C518]/5 rounded-full -mb-10 -ml-10"></div>
                
                {/* Card content */}
                <div className="relative h-full flex flex-col justify-between">
                  <div className="flex justify-between">
                    <div className="text-white font-light text-lg">LumeCredit</div>
                    <div className="text-[#F5C518] font-bold">DEBIT</div>
                  </div>
                  
                  <div className="flex flex-col mb-4">
                    <div className="text-white/70 text-xs mb-1">CARD NUMBER</div>
                    <div className="flex items-center">
                      <div className="text-white text-sm tracking-wider mr-2">••••</div>
                      <div className="text-white text-sm tracking-wider mr-2">••••</div>
                      <div className="text-white text-sm tracking-wider mr-2">••••</div>
                      <div className="text-white text-sm tracking-wider">4242</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-white/70 text-xs">CARDHOLDER NAME</div>
                      <div className="text-white text-sm">YOUR NAME HERE</div>
                    </div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="16" viewBox="0 0 50 16" fill="none">
                        <path d="M17.5155 2.66675H14.2341V13.3334H17.5155V2.66675Z" fill="white"/>
                        <path d="M13.7348 2.66675L9.83112 9.56675L8.96894 7.39341C8.40976 5.95341 6.95139 4.39341 5.16529 3.63341L8.21906 13.3334H11.5005L17.7653 2.66675H13.7348Z" fill="white"/>
                        <path d="M7.97926 3.27341C7.69442 3.17341 7.15951 3.06675 6.5 3.06675C4.16183 3.06675 2.5 4.32008 2.5 6.08008C2.5 7.36008 3.64567 8.01341 4.49358 8.40008C5.35577 8.78675 5.65489 9.04008 5.65489 9.38675C5.65489 9.94675 4.9818 10.2001 4.34689 10.2001C3.46043 10.2001 3.00125 10.1201 2.29391 9.86675L2 9.76008L1.69159 12.4801C2.03353 12.6134 2.84289 12.7334 3.68081 12.7334C6.16115 12.7334 7.78726 11.4934 7.78726 9.60008C7.78726 8.56008 7.15235 7.78675 5.86813 7.24008C5.10931 6.88008 4.65013 6.64008 4.65013 6.26675C4.65013 5.93341 5.03359 5.60008 5.85385 5.60008C6.54692 5.60008 7.05756 5.70675 7.47387 5.84008L7.67729 5.91341L7.97926 3.27341Z" fill="white"/>
                        <path d="M47.1884 2.66675H44.6125C43.9051 2.66675 43.374 2.89341 43.0892 3.60008L38.6162 13.3334H41.9118C41.9118 13.3334 42.438 11.9467 42.5522 11.6534H46.5541C46.6398 12.0267 46.9246 13.3334 46.9246 13.3334H49.8659L47.1884 2.66675ZM43.3453 9.20008C43.6158 8.47341 44.6268 5.95341 44.6268 5.95341C44.6125 5.98008 44.884 5.30675 45.0411 4.89341L45.2587 5.86675C45.2587 5.86675 45.8607 8.56008 45.9893 9.20008H43.3453Z" fill="white"/>
                        <path d="M35.4778 2.66675L32.5222 10.0667L32.2374 8.78675C31.7067 7.23341 29.8205 5.55341 27.7485 4.67341L30.44 13.3201H33.7499L38.7874 2.66675H35.4778Z" fill="white"/>
                        <path d="M29.434 2.66675H24.3723L24.3008 2.91341C28.1188 3.80008 30.7055 6.08008 31.8225 8.78675L30.8329 3.60008C30.6582 2.89341 30.1271 2.68008 29.434 2.66675Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 bg-white/80 backdrop-blur-sm px-3 py-1 rounded text-xs text-slate-500 shadow-sm border border-slate-200">
                Card design subject to change
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}