"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  productImage?: StrapiImage[];
}

interface Product {
  documentId: string;
  id: string;
  slug: string;
  productImage?: string;
  productBrand?: string;
  productPrice?: number;
  productName?: string;
  productRating?: number;
  soldProducts?: number;
  isBestseller?: boolean;
  originalPrice?: number;
  discountPercentage?: number;
}

interface ProductGridProps {
  apiUrl?: string;
}

const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const {
    productImage,
    productBrand,
    productPrice,
    productName,
    productRating,
    soldProducts,
    isBestseller,
    originalPrice,
    discountPercentage,

  } = product;

  return (
    <Link
      href={`/products/${product.documentId}`}
    >
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer">
        {/* Product Image Container */}
        <div className="relative w-full aspect-square bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
          {isBestseller && (
            <div className="absolute top-3 left-3 z-10">
              <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded">
                BESTSELLER
              </span>
            </div>
          )}

          {productImage ? (
            <Image
              src={productImage}
              alt={productName || "Product"}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={false}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.nextElementSibling?.classList.remove("hidden");
              }}
            />
          ) : null}

          {/* Fallback placeholder */}
          <div
            className={`w-full h-full flex items-center justify-center bg-gray-100 ${
              productImage ? "hidden" : ""
            }`}
          >
            <div className="text-center text-gray-400">
              <svg
                className="w-16 h-16 mx-auto mb-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm">No Image</p>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4 space-y-2">
          <div className="text-center">
            <p className="text-sm font-medium text-orange-600 uppercase tracking-wide">
              {productBrand || "—"}
            </p>
          </div>

          <div className="text-center min-h-[2.5rem] flex items-center justify-center">
            <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-tight">
              {productName || "Product Name"}
            </h3>
          </div>

          <div className="flex justify-center items-center space-x-1">
            {productRating ? (
              <>
                <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  <span>{productRating.toFixed(1)}</span>
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                {soldProducts && (
                  <span className="text-xs text-gray-500">
                    | {soldProducts}
                  </span>
                )}
              </>
            ) : (
              <div className="h-6 flex items-center">
                <span className="text-xs text-gray-400">No rating</span>
              </div>
            )}
          </div>

          <div className="text-center space-y-1">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                ₹{productPrice?.toLocaleString("en-IN") || "0"}
              </span>
              {originalPrice && originalPrice > (productPrice || 0) && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            {discountPercentage && (
              <div className="text-xs text-green-600 font-medium">
                ({discountPercentage}% off)
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

const LoadingSkeleton: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    {Array.from({ length: 8 }).map((_, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-sm overflow-hidden"
      >
        <div className="w-full aspect-square bg-gray-200 animate-pulse"></div>
        <div className="p-4 space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    ))}
  </div>
);

const ProductGrid: React.FC<ProductGridProps> = ({
  apiUrl = "http://localhost:1337/api/products?populate=*",
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      if (!data || !data.data || !Array.isArray(data.data)) {
        throw new Error("Invalid data structure received from API");
      }

      const transformedProducts: Product[] = data.data.map(
        (item: StrapiProduct) => {
          const firstImage =
            item?.productImage && item.productImage.length > 0
              ? item.productImage[0]
              : null;

          const name = item?.productName || "product";
          return {
            id: item?.id?.toString() || Math.random().toString(),
            slug: slugify(name),
            productImage: firstImage?.url
              ? `http://localhost:1337${firstImage.url}`
              : undefined,
            productBrand: item?.productBrand || undefined,
            documentId: item?.documentId || "",
            productPrice: item?.productPrice || undefined,
            productName: name,
            productRating: item?.productRating || undefined,
            soldProducts: item?.SoldProducts || undefined,
            isBestseller: item?.isBestseller === true,
            originalPrice: item?.originalPrice || undefined,
            discountPercentage: item?.discountPercentage || undefined,
          };
        }
      );

      setProducts(transformedProducts);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [apiUrl]);

  if (loading) return <LoadingSkeleton />;
  if (error)
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">Error loading products: {error}</p>
        <button
          onClick={fetchProducts}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  if (products.length === 0)
    return (
      <div className="p-8 text-center text-gray-500">
        <div className="mb-4">
          <svg
            className="w-16 h-16 mx-auto text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM8 15v-3a2 2 0 014 0v3H8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-lg font-medium">No products found</p>
        <p className="text-gray-400 mt-1">
          Make sure your Strapi server is running and has product data.
        </p>
        <button
          onClick={fetchProducts}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Refresh
        </button>
      </div>
    );

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
