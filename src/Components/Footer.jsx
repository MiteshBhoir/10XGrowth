import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl text-center md:text-left">
        
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start">
          <img src="https://www.10xgrowth.com/new%20main%20logo%20Grey.png" alt="10XGrowth Logo" className="max-w-52 mb-2" />
          <p className="text-sm">Helping businesses scale with technology.</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Services</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Careers</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-semibold text-lg">Legal</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 mt-3">
            <a href="https://www.linkedin.com/company/10xgrowthcommunity/?originalSubdomain=in" className="text-gray-700 hover:text-blue-600 transition">
              <FaLinkedin size={28} />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-400 transition">
              <FaTwitter size={28} />
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition">
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-gray-300 pt-4">
        © 2025 10XGrowth. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
