// components/CreditCardBanner.tsx
import React from "react";

const CreditCardBanner = () => {
  return (
    <div className="mx-4 my-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-red-600">Reliance</span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
              SBI Card
            </span>
          </div>
          <div>
            <span className="text-2xl font-bold text-red-600">
              5% Instant Discount*
            </span>
            <span className="text-sm text-gray-600 ml-2">
              on Reliance SBI Credit Cards
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-600 underline cursor-pointer">
            CLICK TO KNOW MORE
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreditCardBanner;
