import React from "react";
import { Shield, Heart, CheckCircle } from "lucide-react";

const AjioCares: React.FC = () => {
  return (
    <div className="w-full bg-slate-700 text-white">
      {/* Header Section */}
      <div className="bg-slate-800 px-4 py-3 text-center">
        <h2 className="text-lg font-semibold tracking-widest text-yellow-400 mb-2">
          AJIO CARES
        </h2>
        <div className="space-y-1 text-sm font-medium">
          <p>
            WE DO NOT ASK FOR YOUR BANK ACCOUNT OR CARD DETAILS VERBALLY OR
            TELEPHONICALLY.
          </p>
          <p>
            WE ALSO DO NOT ASK FOR MONEY TO PARTICIPATE IN ANY OF OUR OFFERS OR
            RUN ANY LUCKY DRAWS.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Easy Exchange */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 flex items-center justify-center">
              <Shield size={40} className="text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-semibold tracking-wide">
              EASY EXCHANGE
            </h3>
          </div>

          {/* 100% Handpicked */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 flex items-center justify-center">
              <Heart size={40} className="text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-semibold tracking-wide">
              100% HANDPICKED
            </h3>
          </div>

          {/* Assured Quality */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 flex items-center justify-center">
              <CheckCircle size={40} className="text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-semibold tracking-wide">
              ASSURED QUALITY
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AjioCares;
