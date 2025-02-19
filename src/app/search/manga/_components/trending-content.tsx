"use client";

import useTrendingMangas from "@/hooks/mangas/useTrendingMangas";
import { Loading } from "../../_components/loading";
import ApiNotWorking from "../../_components/api-is-not-working";
import SearchTitle from "../../_components/title";
import AnimeMangaContents from "../../_components/anime-manga-contents";

const TrendingContent = () => {
  const { trending, trendingLoading, trendingError } = useTrendingMangas();

  if (trendingLoading) return <Loading />;

  if (trendingError) return <ApiNotWorking />;

  return (
    <>
      <SearchTitle title="Trending Mangas" />
      <AnimeMangaContents data={trending?.Page.media || []} />
    </>
  );
};

export default TrendingContent;
