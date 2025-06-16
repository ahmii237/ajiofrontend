// components/TopTrends.tsx
import React from "react";

const TopTrends = () => {
  const trends = [
    {
      id: 1,
      image: "/images/blazer-1.jpeg",
      brand: "BM",
      logo: "NETPLAY",
      title: "TRENDS",
      price: "UNDER ₹399*",
      badge: "⭐ 4.2/5",
    },
    {
      id: 2,
      image: "/images/heel-1.jpeg",
      brand: "BUDA",
      title: "Jeans For Him",
      price: "MIN. 60% OFF*",
      subtitle: "DEYOUNG",
      badge: "⭐ 4.4/5",
    },
    {
      id: 3,
      image: "/images/shirt-1.webp",
      brand: "Foxtrot",
      title: "Kurts & Kurta Sets",
      price: "UNDER ₹599*",
      brandLogo: "foxtrot",
      badge: "⭐ 4.0/5",
    },
    {
      id: 4,
      image: "/images/sneaker-1.webp",
      brand: "LITTLE",
      title: "Elegant Ethnicwear",
      price: "MIN. 60% OFF*",
      subtitle: "ANTIQUE",
      badge: "⭐ 4.2/5",
    },
  ];

  return (
    <div className="mx-4 my-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Top Trends
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {trends.map((trend) => (
          <div
            key={trend.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={trend.image}
                alt={trend.title}
                className="w-full h-64 object-cover"
              />
              {trend.badge && (
                <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs">
                  {trend.badge}
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-800">{trend.brand}</span>
                {trend.logo && (
                  <span className="text-xs font-bold text-gray-600">
                    {trend.logo}
                  </span>
                )}
                {trend.brandLogo && (
                  <span className="text-xs font-bold text-orange-500">
                    {trend.brandLogo}
                  </span>
                )}
              </div>

              <h3 className="font-semibold text-gray-800 mb-1">
                {trend.title}
              </h3>

              {trend.subtitle && (
                <p className="text-xs text-gray-600 mb-2">{trend.subtitle}</p>
              )}

              <p className="font-bold text-gray-800">{trend.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTrends;
