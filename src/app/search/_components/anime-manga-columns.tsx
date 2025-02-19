import { AnimeMainPage } from "@/types/animes/anime-main-page";
import { MangaMainPage } from "@/types/mangas/manga-main-page";
import Image from "next/image";
import Link from "next/link";

type AnimeMangaColumnsProps = {
  data: (AnimeMainPage & MangaMainPage)[];
  path: string;
};

const AnimeMangaColumns = ({ data, path }: AnimeMangaColumnsProps) => {
  return (
    <section className="relative flex flex-col items-center justify-center">
      {data.map((content, index) => (
        <div
          key={content.id}
          className="my-2 flex w-4/5 cursor-pointer items-center rounded-sm bg-[#eaeaf0] dark:bg-[#0e0e14]"
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
            <Link href={`/${path}/${content.id}`}>
              <h4 className="max-w-[350px] font-semibold text-[#060719] dark:text-[#e6e7f9]">
                {content.title.romaji}
              </h4>
            </Link>
          </div>
          <div className="w-full rounded-sm">
            <div className="grid grid-cols-3 font-bold text-[#060719] text-foreground dark:text-[#e6e7f9]">
              <h5 className="text-md">{content.format}</h5>
              <h5 className="text-xs">{content.type}</h5>
              <h5 className="text-xs">
                {content.season && content.seasonYear
                  ? content.season + " " + content.seasonYear
                  : content.volumes + " vol "
                    ? !content.volumes
                      ? "Relasing"
                      : content.volumes + " vol"
                    : ""}
              </h5>
              <p className="text-xs">⭐{content.favourites} </p>
              <p className="text-xs">
                {content.episodes
                  ? content.episodes + " episodes"
                  : content.chapters + " chapters"
                    ? !content.chapters
                      ? "not finished"
                      : content.chapters + " chapters"
                    : ""}
              </p>
              <p className="text-xs">{content.status}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AnimeMangaColumns;
