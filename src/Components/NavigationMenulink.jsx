import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavigationMenuLink = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-4">
        {/* Services Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-4 py-2 rounded-md bg-white shadow-sm">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[300px] bg-white shadow-lg rounded-lg p-4">
            <h4 className="text-gray-700 font-semibold mb-2">What We Offer</h4>
            <div className="space-y-2">
              <NavigationMenuLink className="block text-gray-600 hover:text-blue-600">Business Growth Solutions</NavigationMenuLink>
              <NavigationMenuLink className="block text-gray-600 hover:text-blue-600">Marketing Strategies</NavigationMenuLink>
              <NavigationMenuLink className="block text-gray-600 hover:text-blue-600">Branding & PR</NavigationMenuLink>
              <NavigationMenuLink className="block text-gray-600 hover:text-blue-600">Lead Generation</NavigationMenuLink>
              <NavigationMenuLink className="block text-gray-600 hover:text-blue-600">Web & App Development</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Industries */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-4 py-2 rounded-md bg-white shadow-sm">
            Industries
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[250px] bg-white shadow-lg rounded-lg p-4">
            <NavigationMenuLink className="block text-gray-600 hover:text-blue-600">Startups</NavigationMenuLink>
            <NavigationMenuLink className="block text-gray-600 hover:text-blue-600">E-commerce</NavigationMenuLink>
            <NavigationMenuLink className="block text-gray-600 hover:text-blue-600">Healthcare</NavigationMenuLink>
            <NavigationMenuLink className="block text-gray-600 hover:text-blue-600">Finance & Investments</NavigationMenuLink>
            <NavigationMenuLink className="block text-gray-600 hover:text-blue-600">Technology</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Resources */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-4 py-2 rounded-md bg-white shadow-sm">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[250px] bg-white shadow-lg rounded-lg p-4">
            <NavigationMenuLink className="block text-gray-600 hover:text-blue-600">Case Studies</NavigationMenuLink>
            <NavigationMenuLink className="block text-gray-600 hover:text-blue-600">Growth Insights</NavigationMenuLink>
            <NavigationMenuLink className="block text-gray-600 hover:text-blue-600">Workshops & Events</NavigationMenuLink>
            <NavigationMenuLink className="block text-gray-600 hover:text-blue-600">Webinars</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Contact Us */}
        <NavigationMenuItem>
          <NavigationMenuLink className="px-4 py-2 text-gray-600 hover:text-blue-600">
            Contact Us
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
