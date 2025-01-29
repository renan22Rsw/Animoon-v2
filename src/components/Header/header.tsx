"use client";

import Image from "next/image";
import { HeaderInfo, HeaderInfoMobile } from "./anime-manga-headers";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface HeaderProps {
  bannerImage?: string;
  headerImage: string;
  title: string;
  description: string;
}

const Header = ({
  bannerImage,
  description,
  headerImage,
  title,
}: HeaderProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section className="relative mx-auto flex h-[700px] flex-col items-center bg-[#EBF0F4] dark:bg-primary-foreground">
      <div className="flex w-full justify-center">
        {bannerImage && (
          <Image
            src={bannerImage as string}
            alt="banner-image"
            quality={100}
            width={1000}
            height={700}
            className="h-[200px] w-full sm:h-[350px] lg:h-[400px]"
          />
        )}
      </div>
      {isMobile ? (
        <HeaderInfoMobile
          title={title}
          headerImage={headerImage}
          description={description}
        />
      ) : (
        <HeaderInfo
          title={title}
          headerImage={headerImage}
          description={description}
        />
      )}
    </section>
  );
};

export default Header;
