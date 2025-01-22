"use client";

import Image from "next/image";
import { HeaderInfo, HeaderInfoMobile } from "./header-info";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section className="relative mx-auto flex h-[600px] flex-col items-center bg-[#EBF0F4] dark:bg-primary-foreground">
      <div className="flex w-full justify-center bg-black">
        <Image
          src={
            "https://s2-techtudo.glbimg.com/Un6R-200s9o6XO2nMLYzIno7Tu4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/g/0/s4BJiLQGSb9USN3vTvAg/death-note-netflix.jpg"
          }
          alt="banner-image"
          quality={100}
          height={400}
          width={400}
        />
      </div>
      {isMobile ? <HeaderInfoMobile /> : <HeaderInfo />}
    </section>
  );
};

export default Header;
