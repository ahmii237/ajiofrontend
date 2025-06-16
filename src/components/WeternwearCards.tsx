import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface WesternCard {
  id: number;
  title: string;
  discount: string;
  image: string;
  brands: string[];
  brandLogos?: string[];
}

const WesternwearCards: React.FC = () => {
  // Sample data - you can replace images and customize as needed
  const cards: WesternCard[] = [
    {
      id: 1,
      title: "Tees",
      discount: "MIN. 40% OFF*",
      image: "/images/west1.webp", // Replace with your image
      brands: ["U.S. POLO ASSN.", "BULLMER", "& More"],
      brandLogos: [], // Add brand logo paths if needed
    },
    {
      id: 2,
      title: "Shirts",
      discount: "MIN. 50% OFF*",
      image: "/images/west2.jpg", // Replace with your image
      brands: ["ARROW", "Being Human", "& More"],
      brandLogos: [], // Add brand logo paths if needed
    },
    {
      id: 3,
      title: "Jeans",
      discount: "MIN. 40% OFF*",
      image: "/images/west3.webp", // Replace with your image
      brands: ["LEVI'S", "Spykar", "& More"],
      brandLogos: [], // Add brand logo paths if needed
    },
  ];

  return (
    <div className="w-full bg-white py-8 px-4">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Westernwear</h2>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative h-80 md:h-96 overflow-hidden bg-white">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={card.id === 1}
                />
              </div>

              {/* Content Container */}
              <div className="p-4 bg-gray-50">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>

                {/* Discount */}
                <p className="text-2xl font-bold text-gray-900 mb-3">
                  {card.discount}
                </p>

                {/* Brands */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 flex-wrap gap-1">
                    {card.brands.map((brand, index) => (
                      <span
                        key={index}
                        className={`text-xs font-medium px-2 py-1 rounded ${
                          brand === "& More"
                            ? "text-gray-600 bg-transparent"
                            : "text-white bg-gray-800"
                        }`}
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrow */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-200 z-10">
          <ChevronRight size={24} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default WesternwearCards;
