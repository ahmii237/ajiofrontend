"use client";
import React from "react";
import Image from "next/image";

const FashionSection = () => {
  return (
    <div className="mx-4 my-8">
      {/* Trade Up Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative h-64 md:h-auto">
            <Image
              src="/images/tradditionalwear.webp"
              alt="Traditional wear"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-gray-50">
            <div className="text-right mb-2">
              <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded text-xs">
                AD
              </span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-2xl">👗</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                SVARAA
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Trade Up Your Wardrobe
              </p>
              <h4 className="font-semibold text-gray-800">
                Fashion&apos;s Headliners
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* ASOS Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative h-64 md:h-auto">
            <Image
              src="/images/dresses.webp"
              alt="Dresses"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              DRESSES & JUMPSUITS
            </h2>

            <div className="mb-4">
              <div className="bg-slate-700 text-white px-4 py-2 rounded font-bold text-xl mb-2">
                asos
              </div>
            </div>

            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-800">
                MIN. 40% OFF*
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
    </div>
  );
};

export default FashionSection;
