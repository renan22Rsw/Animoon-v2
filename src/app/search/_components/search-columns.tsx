import { AnimeMainPage } from "@/types/animes/anime-main-page";
import Image from "next/image";

interface SearchColumnsProps {
  data: AnimeMainPage[];
}

const SearchColumns = ({ data }: SearchColumnsProps) => {
  return (
    <section className="relative flex flex-col items-center justify-center">
      {data.map((content, index) => (
        <div
          key={content.id}
          className="my-2 flex w-4/5 cursor-pointer items-center rounded-sm bg-[#EBF0F4] dark:bg-primary-foreground"
        >
          <h3 className="absolute left-10 font-bold">#{index + 1}</h3>
          <div className="flex w-full space-y-4 rounded-sm text-foreground">
            <Image
              src={content.coverImage.large}
              alt="search-columns-image"
              width={70}
              height={70}
              className="p-2"
            />
            <h4 className="font-semibold">{content.title.romaji}</h4>
          </div>
          <div className="w-full rounded-sm">
            <div className="grid grid-cols-3 font-bold text-foreground">
              <h5 className="text-md">{content.format}</h5>
              <h5 className="text-xs">{content.type}</h5>
              <h5 className="text-xs">
                {content.season + " " + content.seasonYear}
              </h5>
              <p className="text-xs">{content.favourites}</p>
              <p className="text-xs">{content.episodes + " episodes"}</p>
              <p className="text-xs">{content.status}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SearchColumns;
