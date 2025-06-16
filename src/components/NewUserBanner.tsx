// components/NewUserBanner.tsx
import React from "react";

const NewUserBanner = () => {
  return (
    <div className="mx-4 my-6 bg-gray-200 rounded-lg p-8">
      <div className="text-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          New User Perks, Unlocked
        </h2>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className="bg-white rounded-lg p-6 flex items-center space-x-4 shadow-sm">
          <div className="text-center">
            <span className="text-4xl font-bold text-gray-800">FLAT 30%</span>
            <div className="text-xs text-gray-600">OFF</div>
          </div>
          <div className="bg-black text-white px-4 py-2 rounded">
            <span className="text-sm font-bold">USE CODE:</span>
            <br />
            <span className="text-lg font-bold">NEW30</span>
          </div>
        </div>
      </div>

      <div className="text-center mb-4">
        <div className="bg-blue-600 text-white px-4 py-1 rounded-full inline-block text-xs font-bold mb-2">
          💳 FLAT 10% CASHBACK
        </div>
        <p className="text-sm text-gray-700">
          + ZERO Delivery Fee on your First Order
        </p>
      </div>

      <div className="bg-black text-white rounded-lg p-4 flex items-center justify-between">
        <div>
          <span className="font-bold">FREE DELIVERY ON ALL ORDERS*</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-gray-700 text-white px-3 py-1 rounded text-xs">
            USE CODE • FREE100
          </span>
          <div className="text-2xl">🚚</div>
        </div>
      </div>
    </div>
  );
};

export default NewUserBanner;
