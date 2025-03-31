import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
      <footer className="bg-gray-200 text-gray-800 py-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl">
          
          {/* Company Info */}
          <div className="mx-5">
           <img src="https://www.10xgrowth.com/new%20main%20logo%20Grey.png" alt="" className="max-w-60" />
            <p className="text-m mt-2">Helping businesses scale with technology.</p>
          </div>
            
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">Services</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500">Careers</a></li>
          </ul>
        </div>
  
          {/* Legal Links */}
          
        {/* Legal Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg">Legal</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex space-x-6 mt-3">
            <a href="https://www.linkedin.com/company/10xgrowthcommunity/?originalSubdomain=in" className="text-gray-700 hover:text-blue-600"><FaLinkedin size={28} /></a>
            <a href="#" className="text-gray-700 hover:text-blue-400"><FaTwitter size={28} /></a>
            <a href="#" className="text-gray-700 hover:text-pink-500"><FaInstagram size={28} /></a>
          </div>
        </div>
      </div>
  
        {/* Copyright */}
        <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
          © 2025 10XGrowth. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  