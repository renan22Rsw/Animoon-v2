"use client";

import SearchContents from "../../_components/search-contents";
import SearchTitle from "../../_components/title";
import SearchColumns from "../../_components/search-columns";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import useTrendingAnimes from "@/hooks/Animes/useTrendingAnimes";
import usePopularNextSeasonAnimes from "@/hooks/Animes/usePopularNextSeasonAnimes";
import useUpcomingAnimes from "@/hooks/Animes/useUpcomingAnimes";
import usePopularAnimes from "@/hooks/Animes/usePopularAnimes";
import useTop10Animes from "@/hooks/Animes/useTop10Animes";

const AnimeContent = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const { trending, trendingLoading, trendingError } = useTrendingAnimes();
  const { nextSeason, nextSeasonLoading, nextSeasonError } =
    usePopularNextSeasonAnimes(currentYear);
  const { upcoming, upcomingLoading, upcomingError } = useUpcomingAnimes();
  const { popular, popularLoading, popularError } = usePopularAnimes();
  const { top, topLoading, topError } = useTop10Animes();

  if (
    trendingLoading ||
    popularLoading ||
    topLoading ||
    upcomingLoading ||
    nextSeasonLoading
  ) {
    return <div>Loading...</div>;
  }

  if (
    trendingError ||
    popularError ||
    topError ||
    upcomingError ||
    nextSeasonError
  ) {
    return <div>Error</div>;
  }

  return (
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
  );
};

export default AnimeContent;
