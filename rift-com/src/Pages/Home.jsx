import React from "react";
import TopHeader from "../components/Header/TopHeader";
import BottomHeader from "../components/Header/BottomHeader";
import HeroSection from "../components/Home/HeroSection";
import BestSellerProducts from "../components/Home/BestSellerProducts";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="w-full bg-[#1e28320d] h-15">
      <TopHeader />
      <BottomHeader />
      <HeroSection />
      <BestSellerProducts />
      <Footer />
    </div>
  );
};

export default Home;
