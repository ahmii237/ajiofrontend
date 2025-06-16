// components/CashbackBanner.tsx
import React from "react";

const CashbackBanner = () => {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 px-6 mx-4 my-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-white text-teal-600 px-3 py-2 rounded font-bold text-sm">
            AJIO CASH
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold">LAST CHANCE FOR MAX CASHBACK!</h2>
            <p className="text-sm">REDEEM 100% ONLY TILL 31ST MAY</p>
          </div>
        </div>
        <div className="text-right">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-teal-600 text-2xl">💰</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashbackBanner;
