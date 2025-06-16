"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ShoppingBag } from "lucide-react";

const BrowseProductsButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };

  return (
    <div className="flex justify-center py-8">
      <button
        onClick={handleClick}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95"
      >
        {/* Background gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Button content */}
        <div className="relative flex items-center space-x-3">
          <ShoppingBag
            size={24}
            className="group-hover:rotate-12 transition-transform duration-300"
          />
          <span className="font-bold tracking-wide">Browse Products</span>
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </button>
    </div>
  );
};

export default BrowseProductsButton;
