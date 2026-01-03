import { useEffect } from "react";
import constructionImage from "@/assets/creditbro-construction.png";

export default function ConstructionPage() {
  useEffect(() => {
    document.title = "Under Construction | Lume Credit";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 text-center font-sans">
      <div className="max-w-2xl w-full space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 mb-8">
          <div className="absolute inset-0 bg-[#F5C518]/20 rounded-full blur-3xl animate-pulse" />
          <img 
            src={constructionImage} 
            alt="Under Construction" 
            className="relative z-10 w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003366] tracking-tight">
            Under Construction
          </h1>
          <div className="space-y-4">
            <p className="text-xl text-slate-600 font-medium">
              We're currently making some improvements to our site.
            </p>
            <p className="text-lg text-[#003366] font-semibold">
              Please check back later!
            </p>
          </div>
        </div>

        <div className="pt-8 flex justify-center">
          <div className="h-2 w-32 bg-gradient-to-r from-[#003366] via-[#F5C518] to-[#003366] rounded-full opacity-80" />
        </div>
      </div>
    </div>
  );
}
