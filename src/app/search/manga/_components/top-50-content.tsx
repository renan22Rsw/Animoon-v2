"use client";

import UseTop10Mangas from "@/hooks/mangas/useTop10Mangas";
import { Loading } from "../../_components/loading";
import ApiNotWorking from "../../_components/api-is-not-working";
import SearchTitle from "../../_components/title";
import AnimeMangaContents from "../../_components/anime-manga-contents";

const Top50MangasContent = () => {
  const { top, topLoading, topError } = UseTop10Mangas();

  if (topLoading) return <Loading />;

  if (topError) return <ApiNotWorking />;

  return (
    <>
      <SearchTitle title="Top 50 mangas" />
      <AnimeMangaContents data={top?.Page.media || []} />
    </>
  );
};

export default Top50MangasContent;
