import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header spotsRemaining={0} totalSpots={250} />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-slate-600">
                Find answers to the most common questions about Credit Bro products and services.
              </p>
            </div>

            <Accordion type="single" collapsible className="mb-12">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium text-slate-900">
                  What are tradelines and how do they help my credit?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Tradelines are credit accounts that appear on your credit report. They include information about 
                  your payment history, account balance, credit limit, and more. Having diverse tradelines (like revolving 
                  and installment accounts) with positive payment history can significantly improve your credit score by 
                  demonstrating responsible credit management across different types of accounts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium text-slate-900">
                  How much can my credit score improve with Credit Bro?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  While results vary by individual, our customers typically see a 40-70 point improvement in their 
                  credit scores within the first 60-90 days. Factors that affect improvement include your current credit 
                  history, existing tradelines, and overall credit profile. Our Credit Bro Pro bundle is designed to maximize 
                  your potential improvement by addressing multiple scoring factors simultaneously.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium text-slate-900">
                  Do you report to all three major credit bureaus?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes, all Credit Bro tradelines report to all three major credit bureaus: Experian, Equifax, and 
                  TransUnion. This ensures that your credit improvement efforts are recognized across all platforms that 
                  lenders might check.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium text-slate-900">
                  What's the difference between Credit Bro Flex and Credit Bro Build?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Credit Bro Flex is our revolving tradeline, similar to a credit card, which improves your credit utilization 
                  ratio and revolving account history. Credit Bro Build is our installment tradeline, similar to a fixed loan, 
                  which diversifies your credit mix and demonstrates your ability to manage different types of credit. 
                  Together, they provide a balanced approach to credit building.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium text-slate-900">
                  How does HomeTrack rent reporting work?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  HomeTrack reports your on-time rent payments to all three credit bureaus, which can help establish 
                  payment history—the most important factor in your credit score. The service requires a one-time setup 
                  fee plus a monthly verification fee. We work with your landlord or property manager to verify payments, 
                  or you can submit proof of payment directly through our platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-medium text-slate-900">
                  Is the TotalBoost+ special offer really limited to 250 people?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Yes, the $200 one-time payment option for 5 years of service is strictly limited to our first 250 
                  customers. After this initial group, the TotalBoost+ bundle will only be available at our standard 
                  monthly rate of approximately $50/month, making the total 5-year cost over $3,000.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg font-medium text-slate-900">
                  How is the LumeCredit Visa Secured Card different from other credit cards?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Our Visa Secured Card requires a $100 security deposit, which serves as your credit limit. Unlike 
                  traditional credit cards, there are no annual fees, no interest charged on your own deposit, and no 
                  credit check required to qualify. It's designed specifically for credit building, with all activity 
                  reported to the three major credit bureaus.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-lg font-medium text-slate-900">
                  What are the benefits of the LumeCredit Visa Debit Card?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Our Visa Debit Card comes with a free checking account that has no monthly fees, no minimum balance 
                  requirements, and no overdraft fees. You'll have access to over 50,000 fee-free ATMs nationwide, and 
                  there are no transaction fees when making purchases, including foreign transactions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-lg font-medium text-slate-900">
                  Can I cancel my subscription at any time?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  For monthly subscriptions, you can cancel at any time, though this will end the credit reporting 
                  benefits. For the special 5-year TotalBoost+ offer, the one-time payment secures your benefits for the 
                  full 5-year term with no need for cancellation. If you need to make changes to your account, our 
                  customer service team is available to assist you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-lg font-medium text-slate-900">
                  How soon will I see results on my credit report?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  Tradelines typically appear on your credit report within 30-45 days of setup. You may begin to 
                  see initial credit score changes within 60 days, with more significant improvements often visible 
                  within 90-120 days as the positive payment history accumulates. For optimal results, we recommend 
                  maintaining your tradelines for at least 6 months.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Still have questions?</h3>
              <p className="text-slate-600 mb-6">Our team is here to help you with any other questions you might have.</p>
              <Link href="/">
                <Button className="bg-[#003366] hover:bg-[#002347] text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}