"use client";

import HomePageMobile from "@/components/HomePage/home-page-mobile";
import HomePageDesktop from "@/components/HomePage/home-page-desktop";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return <>{isMobile ? <HomePageMobile /> : <HomePageDesktop />}</>;
};

export default Home;
