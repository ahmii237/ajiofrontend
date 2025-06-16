"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number | null;
  height?: number | null;
  formats?: Record<string, unknown> | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider: string;
  provider_metadata?: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiProduct {
  id: number;
  documentId: string;
  productName?: string;
  productBrand?: string;
  productPrice?: number;
  productRating?: number;
  SoldProducts?: number;
  isBestseller?: boolean | null;
  originalPrice?: number;
  discountPercentage?: number;
  productDescription?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  productImage?: StrapiImage[];
}

interface ProductDetail {
  documentId: string;
  productName?: string;
  productBrand?: string;
  productPrice?: number;
  productRating?: number;
  soldProducts?: number;
  isBestseller?: boolean;
  originalPrice?: number;
  discountPercentage?: number;
  productDescription?: string;
  productImages?: string[];
  ratingCount?: number;
}

const ProductDetailSkeleton: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Image Section Skeleton */}
      <div className="space-y-4">
        <div className="w-full aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="flex space-x-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="w-16 h-16 bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      {/* Product Info Skeleton */}
      <div className="space-y-6">
        <div className="h-6 bg-gray-200 rounded animate-pulse w-32"></div>
        <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4"></div>

        <div className="flex items-center space-x-4">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-20"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
        </div>

        <div className="space-y-2">
          <div className="h-10 bg-gray-200 rounded animate-pulse w-32"></div>
          <div className="h-6 bg-gray-200 rounded animate-pulse w-40"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-48"></div>
        </div>

        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-24"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
          <div className="flex space-x-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="w-12 h-12 bg-gray-200 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        <div className="h-4 bg-gray-200 rounded animate-pulse w-48"></div>
      </div>
    </div>
  </div>
);

const ProductDetailPage: React.FC = () => {
  const params = useParams();

  // Debug: Log the entire params object
  console.log("Full params object:", params);
  console.log("params keys:", Object.keys(params || {}));

  // Fix: Better handling of documentId extraction with multiple fallbacks
  const documentId = React.useMemo(() => {
    console.log("Extracting documentId from params:", params);

    if (!params) {
      console.log("No params available");
      return null;
    }

    // Try different possible parameter names
    const possibleKeys = ["documentId", "id", "productId", "slug"];

    for (const key of possibleKeys) {
      if (params[key]) {
        const value = Array.isArray(params[key]) ? params[key][0] : params[key];
        console.log(`Found ${key}:`, value);
        return value;
      }
    }

    // If none of the expected keys exist, check if there's any value in params
    const allValues = Object.values(params);
    if (allValues.length > 0) {
      const firstValue = Array.isArray(allValues[0])
        ? allValues[0][0]
        : allValues[0];
      console.log("Using first available param value:", firstValue);
      return firstValue;
    }

    console.log("No documentId found in any format");
    return null;
  }, [params]);

  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const fetchProduct = async () => {
    if (!documentId) {
      console.error("No documentId available");
      setError("No product ID provided");
      setLoading(false);
      return;
    }

    console.log("Fetching product with documentId:", documentId);

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `http://localhost:1337/api/products/${documentId}?populate=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Full API Response:", JSON.stringify(data, null, 2));

      // Fix: Better handling of API response structure
      let item: StrapiProduct;

      if (data.data) {
        // Standard Strapi v4 response format
        item = data.data;
      } else if (data.id) {
        // Direct object response
        item = data;
      } else {
        console.error("Unexpected API response structure:", data);
        throw new Error("Invalid API response structure");
      }

      console.log("Product item:", item);

      if (!item || !item.documentId) {
        throw new Error("Product not found or invalid data structure");
      }

      const transformedProduct: ProductDetail = {
        documentId: item.documentId,
        productName: item.productName,
        productBrand: item.productBrand,
        productPrice: item.productPrice,
        productRating: item.productRating,
        soldProducts: item.SoldProducts,
        isBestseller: item.isBestseller === true,
        originalPrice: item.originalPrice,
        discountPercentage: item.discountPercentage,
        productDescription: item.productDescription,
        productImages:
          item.productImage && item.productImage.length > 0
            ? item.productImage.map((img) => `http://localhost:1337${img.url}`)
            : [],
        ratingCount: item.SoldProducts || 0,
      };

      console.log("Transformed Product:", transformedProduct);
      setProduct(transformedProduct);
    } catch (err) {
      console.error("Error fetching product:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch product");
    } finally {
      // Fix: Always set loading to false
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("useEffect triggered with documentId:", documentId);
    console.log("Current URL:", window?.location?.href);
    console.log("Current pathname:", window?.location?.pathname);

    if (documentId) {
      fetchProduct();
    } else {
      console.log("No documentId, setting loading to false");
      console.log("Available params:", params);
      setLoading(false);
      setError("No product ID provided - check URL structure");
    }
  }, [documentId]);

  // Add debug logging for render states
  console.log("Render state:", {
    loading,
    error,
    product: !!product,
    documentId,
  });

  if (loading) {
    console.log("Rendering skeleton");
    return <ProductDetailSkeleton />;
  }

  if (error) {
    console.log("Rendering error:", error);
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="p-8 bg-red-50 border border-red-200 rounded-lg text-center">
          <p className="text-red-600 text-lg mb-4">
            Error loading product: {error}
          </p>
          <button
            onClick={fetchProduct}
            className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    console.log("Rendering not found");
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="p-8 text-center text-gray-500">
          <p className="text-lg">Product not found</p>
          <button
            onClick={fetchProduct}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  console.log("Rendering product:", product.productName);

  const currentImage =
    product.productImages && product.productImages.length > 0
      ? product.productImages[selectedImageIndex]
      : null;
  const sizes = ["6", "7", "8", "9", "10"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="space-y-4">
          {/* Share Button */}
          <div className="flex justify-end mb-4">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
          </div>

          {/* Main Product Image */}
          <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
            {currentImage ? (
              <Image
                src={currentImage}
                alt={product.productName || "Product"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg
                    className="w-24 h-24 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>No Image Available</p>
                </div>
              </div>
            )}

            {/* Navigation Arrows */}
            {product.productImages && product.productImages.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setSelectedImageIndex(
                      selectedImageIndex === 0
                        ? product.productImages!.length - 1
                        : selectedImageIndex - 1
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setSelectedImageIndex(
                      selectedImageIndex === product.productImages!.length - 1
                        ? 0
                        : selectedImageIndex + 1
                    )
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Image Thumbnails */}
          {product.productImages && product.productImages.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {product.productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden ${
                    index === selectedImageIndex
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Product ${index + 1}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info Section */}
        <div className="space-y-6">
          {/* Brand */}
          <div>
            <p className="text-sm font-medium text-orange-600 uppercase tracking-wide">
              {product.productBrand || "BRAND"}
            </p>
          </div>

          {/* Product Name */}
          <div>
            <h1 className="text-2xl lg:text-3xl font-medium text-gray-900 leading-tight">
              {product.productName || "Product Name"}
            </h1>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-3">
            {product.productRating ? (
              <>
                <div className="flex items-center bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">
                  <span>{product.productRating.toFixed(1)}</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500">
                  {product.ratingCount || product.soldProducts || 0} Ratings
                </span>
              </>
            ) : (
              <span className="text-sm text-gray-400">No ratings yet</span>
            )}
          </div>

          {/* Price Section */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-gray-900">
                ₹{product.productPrice?.toLocaleString("en-IN") || "0"}
              </span>
              {product.originalPrice &&
                product.originalPrice > (product.productPrice || 0) && (
                  <>
                    <span className="text-lg text-gray-500 line-through">
                      MRP ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                    {product.discountPercentage && (
                      <span className="text-sm text-green-600 font-medium">
                        ({product.discountPercentage}% Off)
                      </span>
                    )}
                  </>
                )}
            </div>

            <div className="flex items-center space-x-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                📱 Earn ₹{Math.round((product.productPrice || 0) * 0.15)}{" "}
                SuperCash
              </span>
            </div>

            <p className="text-xs text-gray-500">
              Price inclusive of all taxes
            </p>
          </div>

          {/* Offers */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                1 Offer
              </span>
              <span className="text-sm font-medium">
                Get it for ₹{Math.round((product.productPrice || 0) * 0.95)}
              </span>
            </div>
            <div className="mt-2 space-y-1">
              <p className="text-xs text-green-700">
                Use Code <span className="font-semibold">FREEDEL</span>
              </p>
              <p className="text-xs text-gray-600 underline cursor-pointer">
                T&C
              </p>
            </div>
            <div className="mt-2 text-xs text-gray-600">
              Free Shipping on 799 and above. Just for you.{" "}
              <span className="text-blue-600 underline cursor-pointer">
                View All Products
              </span>
            </div>
          </div>

          {/* Color Selection */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-900">White</h3>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 shadow-sm"></button>
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">
                Select Size (UK)
              </h3>
              <button className="text-xs text-blue-600 underline">
                📏 Check Size Chart
              </button>
            </div>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 border rounded text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? "border-blue-500 bg-blue-50 text-blue-600"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Shipping Info */}
          <div className="text-sm text-gray-600">
            <p>
              🚚 Get it by <span className="font-medium">Tomorrow</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
