import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onButtonClick: () => void;
}

export default function HeroSection({ onButtonClick }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center">
          <h1 className="font-['Poppins',sans-serif] font-bold text-3xl sm:text-4xl md:text-5xl text-[#333] mb-4">
            Exclusive Lifetime Deal
          </h1>
          <h2 className="font-['Poppins',sans-serif] text-xl sm:text-2xl text-[#4A90E2] mb-4">
            Get unlimited access to Lume Credit&rsquo;s premium credit building tools
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">
            For the first 250 early adopters only: Lock in lifetime access to our credit line subscriptions for a one-time payment of just $200.
          </p>
          <div className="inline-block bg-[#F5C518] text-[#333] font-['Poppins',sans-serif] font-bold px-5 py-2 rounded-lg mb-8 shadow-md">
            <span className="md:text-lg">Limited Time: <span className="text-white">$200</span> One-Time Payment</span>
          </div>
          
          <Button 
            className="bg-[#4A90E2] hover:bg-blue-600 text-white font-['Poppins',sans-serif] font-bold px-8 py-6 rounded-lg text-lg shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl h-auto"
            onClick={onButtonClick}
          >
            Reserve Your Spot Now
          </Button>
        </div>
      </div>
    </section>
  );
}
