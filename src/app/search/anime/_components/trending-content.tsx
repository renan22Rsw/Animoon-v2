"use client";

import { Loading } from "../../_components/loading";
import ApiNotWorking from "../../_components/api-is-not-working";
import SearchTitle from "../../_components/title";
import AnimeMangaContents from "../../_components/anime-manga-contents";
import useTrendingAnimes from "@/hooks/animes/useTrendingAnimes";

const TrendingContent = () => {
  const { trending, trendingLoading, trendingError } = useTrendingAnimes();

  if (trendingLoading) return <Loading />;

  if (trendingError) return <ApiNotWorking />;

  return (
    <>
      <SearchTitle title="Trending Animes" />
      <AnimeMangaContents data={trending?.Page.media || []} />
    </>
  );
};

export default TrendingContent;
