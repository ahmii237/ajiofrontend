"use client";
import React from "react";
import Image from "next/image";

const BedsheetBanner = () => {
  return (
    <div className="mx-4 my-6 bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="w-full md:w-1/2 relative h-64 md:h-auto">
          <Image
            src="/images/bedsheet.jpg"
            alt="Bedsheet"
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">BEDSHEET</h2>

          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Haus & Kinder</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">urban space</span>
              <span className="text-xs text-gray-500">& more</span>
            </div>
          </div>

          <div className="mb-4">
            <span className="text-3xl font-bold text-gray-800">
              UNDER ₹999*
            </span>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
              A
            </span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">
              SUPERCASH
            </span>
            <span className="text-xs text-gray-600">
              UPTO ₹347 EXTRA BACK ON ALL CASHBACK
            </span>
          </div>

          <button className="bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors w-fit">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default BedsheetBanner;
