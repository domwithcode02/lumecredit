import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#333] text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-['Poppins',sans-serif] font-bold text-xl mb-2">LumeCredit</div>
            <p className="text-gray-400 text-sm">Building brighter credit futures</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} LumeCredit. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-center md:justify-between">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Contact Us</a>
            </div>
            <div className="text-sm text-gray-500">
              Not a financial institution. Results may vary.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
