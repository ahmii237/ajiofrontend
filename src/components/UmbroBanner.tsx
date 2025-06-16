"use client";
import React from "react";
import Image from "next/image";

const UmbroBanner = () => {
  return (
    <div className="mx-4 my-6 bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
          <Image
            src="/images/sportswear.jpg"
            alt="Sports person with equipment"
            width={600}
            height={400}
            className="object-contain max-h-[400px] w-auto h-auto"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-gray-50">
          <div className="mb-6">
            <div className="bg-slate-700 text-white px-6 py-3 rounded font-bold text-2xl inline-block">
              <span className="text-white">umbro</span>
            </div>
          </div>

          <div className="mb-4">
            <span className="text-3xl font-bold text-gray-800">
              MIN. 50% OFF*
            </span>
          </div>

          <div className="flex items-center space-x-2 mb-6">
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

export default UmbroBanner;
