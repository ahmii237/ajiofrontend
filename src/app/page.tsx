import React from "react";
import TopTrends from "@/components/TopTrends";
import CashbackBanner from "@/components/CashbackBanner";
import BedsheetBanner from "@/components/BedsheetBanner";
import { CreditCard } from "lucide-react";
import NewUserBanner from "@/components/NewUserBanner";
import FashionSection from "@/components/FashionSection";
import UmbroBanner from "@/components/UmbroBanner";
import BottomBanners from "@/components/BottomBanners";
import ProductGrid from "@/components/ProductGrid";
import HeroCarousel from "@/components/HeroCarousel";
import AjioCares from "@/components/AjioCares";
import EthnicCards from "@/components/EthnicCard";
import WesternwearCards from "@/components/WeternwearCards";
import BrowseProductsButton from "@/components/BrowsProductsButton";

export default function Home(){
  return (
    <div className="flex flex-col justify-center ">
      
      <CashbackBanner />
      <HeroCarousel/>
      <BrowseProductsButton />
      <BedsheetBanner />
      <CreditCard />
      <NewUserBanner />
      <div>
        <h1 className="flex justify-center items-center text-3xl font-bold ">AJIO Exclusives</h1>
        <ProductGrid/>
      </div>
      <FashionSection />
      <TopTrends />
      <UmbroBanner />
      <BottomBanners />
      <WesternwearCards />
      <EthnicCards />
      <AjioCares />
    </div>
  );
}
 