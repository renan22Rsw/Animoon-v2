"use client";

import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import { useSearchParams } from "next/navigation";

import AnimeMangaColumns from "../../_components/anime-manga-columns";
import SearchTitle from "../../_components/title";
import { Loading } from "../../_components/loading";

import ApiNotWorking from "../../_components/api-is-not-working";
import useTrendingMangas from "@/hooks/mangas_hooks/useTrendingMangas";
import usePopularMangas from "@/hooks/mangas_hooks/usePopularMangas";
import useLightNovel from "@/hooks/mangas_hooks/useLightNovel";
import UseTop10Mangas from "@/hooks/mangas_hooks/useTop10Mangas";
import useSearchMangas from "@/hooks/mangas_hooks/useSearchMangas";
import useGenreMangas from "@/hooks/mangas_hooks/useGenreMangas";
import useSearchAndGenreMangas from "@/hooks/mangas_hooks/useSearchAndGenreMangas";
import AnimeMangaContents from "../../_components/anime-manga-contents";

const MangaContent = () => {
  const mangaName = useSearchParams().get("search");
  const mangaGenre = useSearchParams().get("genre");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isDesktop = useMediaQuery("(max-width: 1024px)");

  const { trending, trendingLoading, trendingError } = useTrendingMangas();
  const { popular, popularLoading, popularError } = usePopularMangas();
  const { lightNovel, lightNovelLoading, lightNovelError } = useLightNovel();
  const { top, topLoading, topError } = UseTop10Mangas();

  const { searchData, searchLoading, searchError } = useSearchMangas(
    mangaName as string,
  );
  const { genreData, genreLoading, genreError } = useGenreMangas(
    mangaGenre as string,
  );
  const { searchAndGenre, searchAndGenreLoading, searchAndGenreError } =
    useSearchAndGenreMangas(mangaName as string, mangaGenre as string);

  if (
    trendingLoading ||
    popularLoading ||
    lightNovelLoading ||
    topLoading ||
    searchLoading ||
    genreLoading ||
    searchAndGenreLoading
  ) {
    return <Loading />;
  }

  if (
    trendingError ||
    popularError ||
    lightNovelError ||
    topError ||
    searchError ||
    genreError ||
    searchAndGenreError
  ) {
    return <ApiNotWorking />;
  }

  return (
    <>
      {!mangaName && !mangaGenre ? (
        <>
          {isMobile ? (
            <>
              <SearchTitle title="Trending mangas" href="manga/trending" />
              <AnimeMangaContents
                data={trending?.Page.media.slice(0, 6) || []}
              />

              <SearchTitle title="All time popular" href="manga/popular" />
              <AnimeMangaContents
                data={popular?.Page.media.slice(0, 6) || []}
              />

              <SearchTitle
                title="Popular light novels"
                href="manga/light-novels"
              />
              <AnimeMangaContents
                data={lightNovel?.Page.media.slice(0, 6) || []}
              />

              <SearchTitle title="Top 10 mangas" href="manga/top-50" />
              {isDesktop ? (
                <AnimeMangaContents data={top?.Page.media.slice(0, 10) || []} />
              ) : (
                <AnimeMangaColumns
                  data={top?.Page.media.slice(0, 10) || []}
                  path="manga"
                />
              )}
            </>
          ) : (
            <>
              <SearchTitle title="Trending mangas" href="manga/trending" />
              <AnimeMangaContents
                data={trending?.Page.media.slice(0, 5) || []}
              />

              <SearchTitle title="All time popular" href="manga/popular" />
              <AnimeMangaContents
                data={popular?.Page.media.slice(0, 5) || []}
              />

              <SearchTitle
                title="Popular light novels"
                href="manga/light-novels"
              />
              <AnimeMangaContents
                data={lightNovel?.Page.media.slice(0, 5) || []}
              />

              <SearchTitle title="Top 10 mangas" href="manga/top-50" />
              {isDesktop ? (
                <AnimeMangaContents data={top?.Page.media.slice(0, 10) || []} />
              ) : (
                <AnimeMangaColumns
                  data={top?.Page.media.slice(0, 10) || []}
                  path="manga"
                />
              )}
            </>
          )}
        </>
      ) : (
        <>
          {mangaName && mangaGenre ? (
            <>
              <SearchTitle title={`Search for ${mangaName}`} />
              <AnimeMangaContents data={searchAndGenre?.Page.media || []} />
            </>
          ) : mangaName ? (
            <>
              <SearchTitle title={`Search for ${mangaName}`} />
              <AnimeMangaContents data={searchData?.Page.media || []} />
            </>
          ) : mangaGenre ? (
            <>
              <SearchTitle title={`Genre: ${mangaGenre}`} />
              <AnimeMangaContents data={genreData?.Page.media || []} />
            </>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default MangaContent;
