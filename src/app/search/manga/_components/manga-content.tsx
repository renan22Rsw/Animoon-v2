"use client";

import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import { useSearchParams } from "next/navigation";

import SearchColumns from "../../_components/search-columns";
import SearchContents from "../../_components/search-contents";
import SearchTitle from "../../_components/title";

import useTrendingMangas from "@/hooks/Mangas/useTrendingMangas";
import usePopularMangas from "@/hooks/Mangas/usePopularMangas";
import UseTop10Mangas from "@/hooks/Mangas/useTop10Mangas";
import useSearchMangas from "@/hooks/Mangas/useSearchMangas";
import useGenreMangas from "@/hooks/Mangas/useGenreMangas";
import useSearchAndGenreMangas from "@/hooks/Mangas/useSearchAndGenreMangas";

import { Loading } from "../../_components/loading";
import ApiNotWorking from "../../_components/api-is-not-working";
import useLightNovel from "@/hooks/Mangas/useLightNovel";

const MangaContent = () => {
  const mangaName = useSearchParams().get("search");
  const mangaGenre = useSearchParams().get("genre");
  const isMobile = useMediaQuery("(max-width: 1024px)");

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
          <SearchTitle title="Trending mangas" />
          <SearchContents data={trending?.Page.media.slice(0, 5) || []} />

          <SearchTitle title="All time popular" />
          <SearchContents data={popular?.Page.media.slice(0, 5) || []} />

          <SearchTitle title="Popular light novels" />
          <SearchContents data={lightNovel?.Page.media.slice(0, 5) || []} />

          <SearchTitle title="Top 10 mangas" />
          {isMobile ? (
            <SearchContents data={top?.Page.media.slice(0, 10) || []} />
          ) : (
            <SearchColumns data={top?.Page.media.slice(0, 10) || []} />
          )}
        </>
      ) : (
        <>
          {mangaName && mangaGenre ? (
            <>
              <SearchTitle title={`Search for ${mangaName}`} />
              <SearchContents data={searchAndGenre?.Page.media || []} />
            </>
          ) : mangaName ? (
            <>
              <SearchTitle title={`Search for ${mangaName}`} />
              <SearchContents data={searchData?.Page.media || []} />
            </>
          ) : mangaGenre ? (
            <>
              <SearchTitle title={`Genre: ${mangaGenre}`} />
              <SearchContents data={genreData?.Page.media || []} />
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
