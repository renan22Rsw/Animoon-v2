"use client";

import AnimeMangaContents from "../../_components/anime-manga-contents";
import SearchTitle from "../../_components/title";
import AnimeMangaColumns from "../../_components/anime-manga-columns";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSearchParams } from "next/navigation";

import { Loading } from "../../_components/loading";
import ApiNotWorking from "../../_components/api-is-not-working";
import useTrendingAnimes from "@/hooks/animes/useTrendingAnimes";
import usePopularNextSeasonAnimes from "@/hooks/animes/usePopularNextSeasonAnimes";
import useUpcomingAnimes from "@/hooks/animes/useUpcomingAnimes";
import usePopularAnimes from "@/hooks/animes/usePopularAnimes";
import useTop10Animes from "@/hooks/animes/useTop10Animes";
import useSearchAnime from "@/hooks/animes/useSearchAnime";
import useGenreAnimes from "@/hooks/animes/useGenreAnimes";
import useSearchAndGenreAnimes from "@/hooks/animes/useSearchAndGenreAnimes";

const AnimeContent = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const animeName = useSearchParams().get("search");
  const animeGenre = useSearchParams().get("genre");

  const { trending, trendingLoading, trendingError } = useTrendingAnimes();
  const { nextSeason, nextSeasonLoading, nextSeasonError } =
    usePopularNextSeasonAnimes(currentYear);
  const { upcoming, upcomingLoading, upcomingError } = useUpcomingAnimes();
  const { popular, popularLoading, popularError } = usePopularAnimes();
  const { top, topLoading, topError } = useTop10Animes();

  const { searchData, searchLoading, searchError } = useSearchAnime(
    animeName as string,
  );

  const { genreData, genreLoading, genreError } = useGenreAnimes(
    animeGenre as string,
  );

  const { searchAndGenre, searchAndGenreLoading, searchAndGenreError } =
    useSearchAndGenreAnimes(animeName as string, animeGenre as string);

  if (
    trendingLoading ||
    popularLoading ||
    topLoading ||
    upcomingLoading ||
    nextSeasonLoading ||
    searchLoading ||
    genreLoading ||
    searchAndGenreLoading
  ) {
    return <Loading />;
  }

  if (
    trendingError ||
    popularError ||
    topError ||
    upcomingError ||
    nextSeasonError ||
    searchError ||
    genreError ||
    searchAndGenreError
  ) {
    return <ApiNotWorking />;
  }

  return (
    <>
      {!animeName && !animeGenre ? (
        <>
          <SearchTitle title="Trending Animes" />
          <AnimeMangaContents data={trending?.Page.media.slice(0, 5) || []} />

          <SearchTitle title="Popular this season" />
          <AnimeMangaContents data={nextSeason?.Page.media.slice(0, 5) || []} />

          <SearchTitle title="Upcoming next season" />
          <AnimeMangaContents data={upcoming?.Page.media.slice(0, 5) || []} />

          <SearchTitle title="All time popular" />
          <AnimeMangaContents data={popular?.Page.media.slice(0, 5) || []} />

          <SearchTitle title="Top 10 anime" />
          {isMobile ? (
            <AnimeMangaContents data={top?.Page.media.slice(0, 10) || []} />
          ) : (
            <AnimeMangaColumns data={top?.Page.media.slice(0, 10) || []} />
          )}
        </>
      ) : (
        <>
          {animeName && animeGenre ? (
            <>
              <SearchTitle title={`Search for ${animeName}`} />
              <AnimeMangaContents data={searchAndGenre?.Page.media || []} />
            </>
          ) : animeName ? (
            <>
              <SearchTitle title={`Search for ${animeName}`} />
              <AnimeMangaContents data={searchData?.Page.media || []} />
            </>
          ) : animeGenre ? (
            <>
              <SearchTitle title={`Genre: ${animeName !== ""}`} />
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

export default AnimeContent;
