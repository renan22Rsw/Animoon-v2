"use client";

import Image from "next/image";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { AnimeMainPage } from "@/types/animes/anime-main-page";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SearchContentsProps {
  data: AnimeMainPage[];
}

const SearchContents = ({ data }: SearchContentsProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const pathName = usePathname();
  const pagePathName = pathName.split("/")[2];

  return (
    <section
      className={`lg:px-12" grid ${isMobile ? "grid-cols-3" : "grid-cols-5"} py-2`}
    >
      {data.map((data) => (
        <div key={data.id} className="px-2">
          <Link href={`/${pagePathName}/${data.id}`}>
            <Image
              src={data.coverImage.large}
              alt="data-image"
              width={200}
              height={200}
              quality={100}
              style={{ objectFit: "fill" }}
              className="w-[185px] cursor-pointer rounded-md sm:h-[230px] lg:h-[265px]"
            />
          </Link>
          <h3 className="mr-2 max-w-[150px] space-x-4 px-2 py-2 text-sm font-semibold">
            {data.title.romaji.length > 35
              ? `${data.title.romaji.slice(0, 35)}...`
              : data.title.romaji}
          </h3>
        </div>
      ))}
    </section>
  );
};

export default SearchContents;
