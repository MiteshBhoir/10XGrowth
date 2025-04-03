import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle dropdowns
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Dropdown items
  const menuItems = {
    services: [
      "Growth Consulting",
      "Recruitment",
      "Zoho Implementation",
      "Fund Raising",
      "Website Development",
      "App Development",
      "Digital Marketing",
      "Cloud Infrastructure",
    ],
    industries: ["Startups", "E-commerce", "Healthcare", "Finance & Investments", "Technology"],
    resources: ["Case Studies", "Growth Insights", "Workshops & Events", "Webinars"],
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-16 bg-orange-50 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://www.10xgrowth.com/new%20main%20logo%20Grey.png"
          alt="10XGrowth Logo"
          className="w-36 md:w-40"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex gap-8 text-gray-700 font-semibold">
          {Object.keys(menuItems).map((key) => (
            <li
              key={key}
              className="relative group cursor-pointer"
              onMouseEnter={() => setOpenDropdown(key)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-blue-600">
                {key.charAt(0).toUpperCase() + key.slice(1)} {openDropdown === key ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openDropdown === key && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-60">
                  {menuItems[key].map((item, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-200">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="hover:text-green-500 cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Desktop Buttons */}
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
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl text-gray-700" /> : <FaBars className="text-2xl text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-3/4 h-full bg-white z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden shadow-lg overflow-auto`}>
        <button onClick={toggleMenu} className="absolute top-4 right-6 text-3xl">
          <FaTimes />
        </button>
        <ul className="flex flex-col items-center gap-6 pt-20 text-lg">
          {Object.keys(menuItems).map((key) => (
            <li key={key} className="w-full text-center">
              <button
                className="flex justify-between w-4/5 py-2 px-4 rounded text-gray-700 hover:text-blue-600"
                onClick={() => toggleDropdown(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)} {openDropdown === key ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openDropdown === key && (
                <ul className="mt-2 bg-gray-100 rounded-lg py-2 w-4/5 mx-auto">
                  {menuItems[key].map((item, index) => (
                    <li key={index} className="px-4 py-2">{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="hover:text-green-500 cursor-pointer">Contact Us</li>
          <button className="bg-green-500 px-4 py-2 rounded font-bold text-white hover:bg-green-600 w-4/5">
            Sign in
          </button>
          <button className="bg-blue-500 px-4 py-2 rounded font-bold text-white hover:bg-blue-600 w-4/5">
            Schedule a Call
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
