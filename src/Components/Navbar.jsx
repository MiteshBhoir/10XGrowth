import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="flex items-center justify-between py-5 px-6 md:px-16 bg-orange-50 hover:bg-orange-50/20 hover:shadow-lg transition-shadow duration-300 sticky top-0 z-10">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://www.10xgrowth.com/new%20main%20logo%20Grey.png"
          alt="10XGrowth Logo"
          className="w-36 md:w-40"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-xl text-center justify-center gap-[4vw]">
        <li className="hover:text-green-500 hover:cursor-pointer">Home</li>
        <li className="hover:text-green-500 hover:cursor-pointer" onClick={() => scrollToSection("services")}>Services</li>
        <li className="hover:text-green-500 hover:cursor-pointer">Studio</li>
        <li className="hover:text-green-500 hover:cursor-pointer">About us</li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex gap-4">
        <button className="bg-green-500 px-4 py-2 rounded font-bold text-white hover:bg-green-600">
          Sign in
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded font-bold text-white hover:bg-blue-600">
          Schedule a Call
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-2xl text-gray-700" />
          ) : (
            <FaBars className="text-2xl text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 text-lg">
            <li className="hover:text-green-500 hover:cursor-pointer">Home</li>
            <li className="hover:text-green-500 hover:cursor-pointer">Services</li>
            <li className="hover:text-green-500 hover:cursor-pointer">Studio</li>
            <li className="hover:text-green-500 hover:cursor-pointer">About us</li>
            <button className="bg-green-500 px-4 py-2 rounded font-bold text-white hover:bg-green-600 w-4/5">
              Sign in
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded font-bold text-white hover:bg-blue-600 w-4/5">
              Schedule a Call
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
