"use client";

import { Loading } from "../../_components/loading";
import ApiNotWorking from "../../_components/api-is-not-working";
import SearchTitle from "../../_components/title";
import AnimeMangaContents from "../../_components/anime-manga-contents";
import useTop10Animes from "@/hooks/animes/useTop";

const Top50AnimesContent = () => {
  const { top, topLoading, topError } = useTop10Animes();

  if (topLoading) return <Loading />;

  if (topError) return <ApiNotWorking />;

  return (
    <>
      <SearchTitle title="Top 50 animes" />
      <AnimeMangaContents data={top?.Page.media || []} />
    </>
  );
};

export default Top50AnimesContent;
