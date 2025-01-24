"use client";

import SearchContents from "../../_components/search-contents";
import SearchTitle from "../../_components/title";
import SearchColumns from "../../_components/search-columns";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSearchParams } from "next/navigation";

import useTrendingAnimes from "@/hooks/Animes/useTrendingAnimes";
import usePopularNextSeasonAnimes from "@/hooks/Animes/usePopularNextSeasonAnimes";
import useUpcomingAnimes from "@/hooks/Animes/useUpcomingAnimes";
import usePopularAnimes from "@/hooks/Animes/usePopularAnimes";
import useTop10Animes from "@/hooks/Animes/useTop10Animes";
import useSearchAnime from "@/hooks/Animes/useSearchAnime";
import useGenreAnimes from "@/hooks/Animes/useGenreAnimes";
import useSearchAndGenreAnimes from "@/hooks/Animes/useSearchAndGenreAnimes";
import { Loading } from "../../_components/loading";
import ApiNotWorking from "../../_components/api-is-not-working";

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
          <SearchContents data={trending?.Page.media.slice(0, 5) || []} />

          <SearchTitle title="Popular this season" />
          <SearchContents data={nextSeason?.Page.media.slice(0, 5) || []} />

          <SearchTitle title="Upcoming next season" />
          <SearchContents data={upcoming?.Page.media.slice(0, 5) || []} />

          <SearchTitle title="All time popular" />
          <SearchContents data={popular?.Page.media.slice(0, 5) || []} />

          <SearchTitle title="Top 10 anime" />
          {isMobile ? (
            <SearchContents data={top?.Page.media.slice(0, 10) || []} />
          ) : (
            <SearchColumns data={top?.Page.media.slice(0, 10) || []} />
          )}
        </>
      ) : (
        <>
          {animeName && animeGenre ? (
            <>
              <SearchTitle title={`Search for ${animeName}`} />
              <SearchContents data={searchAndGenre?.Page.media || []} />
            </>
          ) : animeName ? (
            <>
              <SearchTitle title={`Search for ${animeName}`} />
              <SearchContents data={searchData?.Page.media || []} />
            </>
          ) : animeGenre ? (
            <>
              <SearchTitle title={`Genre: ${animeName !== ""}`} />
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

export default AnimeContent;
