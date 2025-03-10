"use client";

import Image from "next/image";
import NoBannerImage from "@/../public/no-banner-image.jpg";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import AnimeMangaHeader from "./anime-manga-header";
import AnimeMangaHeaderMobile from "./anime-manga-header-mobile";

interface HeaderProps {
  bannerImage?: string;
  headerImage: string;
  title: string;
  description: string;
  id: string;
}

const Header = ({
  bannerImage,
  description,
  headerImage,
  title,
  id,
}: HeaderProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section className="relative mx-auto flex h-[700px] flex-col items-center bg-[#eaeaf0] text-[#0f0f15] dark:bg-[#0e0e14] dark:text-[#e9e9ef]">
      <div className="flex w-full justify-center">
        {bannerImage ? (
          <Image
            src={bannerImage as string}
            alt="banner-image"
            quality={100}
            width={1000}
            height={700}
            className="h-[200px] w-full sm:h-[350px] lg:h-[400px]"
          />
        ) : (
          <Image
            src={NoBannerImage}
            alt="no-banner-image"
            quality={100}
            width={1000}
            height={700}
            className="h-[200px] w-full sm:h-[350px] lg:h-[400px]"
          />
        )}
      </div>
      {isMobile ? (
        <AnimeMangaHeaderMobile
          id={id}
          title={title}
          headerImage={headerImage}
          description={description}
        />
      ) : (
        <AnimeMangaHeader
          id={id}
          title={title}
          headerImage={headerImage}
          description={description}
        />
      )}
    </section>
  );
};

export default Header;
