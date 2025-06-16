// components/Header.tsx
import React from "react";
import { Search, User, Heart, ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-100 text-xs py-1 px-4 text-right">
        <span className="text-gray-600">
          Sign In / Join AJIO • Customer Care • Visit AJIOLIFE
        </span>
      </div>

      {/* Main header */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-black">AJIO</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-black font-medium">
            MEN
          </a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">
            WOMEN
          </a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">
            KIDS
          </a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">
            BEAUTY
          </a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">
            HOME & KITCHEN
          </a>
        </nav>

        {/* Search and icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search AJIO"
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-full w-64 focus:outline-none focus:border-black"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <User className="h-6 w-6 text-gray-700 cursor-pointer" />
          <Heart className="h-6 w-6 text-gray-700 cursor-pointer" />
          <div className="relative">
            <ShoppingBag className="h-6 w-6 text-gray-700 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
