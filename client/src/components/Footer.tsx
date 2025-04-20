import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import lumeLogoPath from "@assets/ChatGPT Image Mar 30, 2025, 11_27_13 PM.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="mb-5 h-12 w-auto">
              <img 
                src={lumeLogoPath} 
                alt="LumeCredit Logo" 
                className="h-full w-auto object-contain"
                style={{ filter: 'brightness(1.2)' }}
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
            <h3 className="text-white font-medium text-lg mb-5">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition">Careers</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition">Press</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition">Blog</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-medium text-lg mb-5">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition">Credit Tips</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition">Community</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-medium text-lg mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-slate-400 mr-3 mt-0.5" />
                <span className="text-slate-400">support@lumecredit.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-slate-400 mr-3 mt-0.5" />
                <span className="text-slate-400">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-slate-400 mr-3 mt-0.5" />
                <span className="text-slate-400">123 Credit Lane<br/>Financeville, FC 98765</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} LumeCredit. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition">Terms of Service</a>
              <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition">Cookies</a>
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
