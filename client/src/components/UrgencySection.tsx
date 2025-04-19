import { Clock } from "lucide-react";

interface UrgencySectionProps {
  spotsRemaining: number;
}

export default function UrgencySection({ spotsRemaining }: UrgencySectionProps) {
  return (
    <section className="py-10 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border-l-4 border-[#F5C518]">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="mb-4 sm:mb-0 sm:mr-6">
              <div className="bg-yellow-100 rounded-full p-3">
                <Clock className="h-8 w-8 text-[#F5C518]" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-['Poppins',sans-serif] font-semibold text-xl mb-2">
                Limited Spots Available
              </h3>
              <p className="text-gray-600 mb-4">
                This exclusive offer is only available to the first 250 members. Once they're gone, they're gone forever.
              </p>
              <div className="flex justify-center sm:justify-start">
                <div className="flex items-center px-3 py-1 bg-[#F5C518] bg-opacity-20 rounded-full">
                  <span className="h-2 w-2 bg-[#F5C518] rounded-full animate-pulse mr-2"></span>
                  <span className="text-sm font-medium text-gray-700">
                    <span className="font-bold">{spotsRemaining}</span> spots remaining
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
