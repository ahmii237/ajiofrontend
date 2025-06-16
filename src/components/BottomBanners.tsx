// components/BottomBanners.tsx
import React from "react";

const BottomBanners = () => {
  return (
    <div className="mx-4 my-6 space-y-4">
      {/* SBI Card Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 text-white px-3 py-2 rounded font-bold">
              SBI Card
            </div>
            <div>
              <span className="text-2xl font-bold">
                Up to 5% Instant Discount
              </span>
              <br />
              <span className="text-sm">with</span>
              <br />
              <span className="text-sm">
                Reliance SBI Credit Card & Reliance SBI Credit Card PRIME
              </span>
            </div>
          </div>
          <div className="text-right">
            <img
              src="/api/placeholder/80/60"
              alt="Card illustration"
              className="rounded"
            />
            <div className="text-xs mt-2 underline cursor-pointer">
              CLICK HERE TO KNOW MORE
            </div>
          </div>
        </div>
      </div>

      {/* PhonePe Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold text-lg">📱</span>
            </div>
            <div className="bg-purple-800 text-white px-3 py-1 rounded font-bold">
              PhonePe
            </div>
            <div>
              <span className="text-2xl font-bold">Up to ₹500 Cashback*</span>
              <span className="text-sm ml-2">
                USING RUPAY CREDIT CARD ON PHONEPE UPI
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs underline cursor-pointer">
              CLICK TO KNOW MORE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanners;
