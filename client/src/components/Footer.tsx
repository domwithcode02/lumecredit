import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import lumeLogo from "@assets/lume_credit_transparent_optimized.png";

import Credit_Bro_1_removebg_preview__1_ from "@assets/Credit_Bro_1-removebg-preview (1).png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="mb-5 h-28 w-auto">
              <img 
                src={Credit_Bro_1_removebg_preview__1_} 
                alt="LumeCredit Logo" 
                className="h-full w-auto object-contain ml-[35px] mr-[35px]"
              />
            </div>
            <p className="text-slate-400 mb-6">Illuminate your credit journey. Building brighter credit futures for everyone.</p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-[#F5C518] transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#F5C518] transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#F5C518] transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-medium text-lg mb-5">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#totalboost" className="text-slate-400 hover:text-white transition">TotalBoost+™ Bundle</a>
              </li>
              <li>
                <a href="#flexcredit" className="text-slate-400 hover:text-white transition">FlexCredit™ Revolving</a>
              </li>
              <li>
                <a href="#steadybuild" className="text-slate-400 hover:text-white transition">SteadyBuild™ Installment</a>
              </li>
              <li>
                <a href="#hometrack" className="text-slate-400 hover:text-white transition">HomeTrack™ Rent Reporting</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-medium text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-slate-400 hover:text-white transition">How It Works</a>
              </li>
              <li>
                <a href="#visa-card" className="text-slate-400 hover:text-white transition">Visa Card</a>
              </li>
              <li>
                <a href="/faq" className="text-slate-400 hover:text-white transition">FAQ</a>
              </li>
              <li>
                <a href="#reserve-form" className="text-slate-400 hover:text-white transition">Reserve Now</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-medium text-lg mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-slate-400 mr-3 mt-0.5" />
                <a href="mailto:tech@creditbro.credit" className="text-slate-400 hover:text-white transition">tech@creditbro.credit</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Credit Bro. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="/privacy" className="text-sm text-slate-500 hover:text-slate-300 transition">Privacy Policy</a>
              <a href="/terms" className="text-sm text-slate-500 hover:text-slate-300 transition">Terms of Service</a>
            </div>
          </div>
          
          <div className="mt-6 text-sm text-slate-600 text-center md:text-left">
            Not a financial institution. Results may vary. This service is not intended to provide financial advice.
          </div>
        </div>
      </div>
    </footer>
  );
}
