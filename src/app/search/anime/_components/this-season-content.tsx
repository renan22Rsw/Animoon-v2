"use client";

import { Loading } from "../../_components/loading";
import ApiNotWorking from "../../_components/api-is-not-working";
import SearchTitle from "../../_components/title";
import AnimeMangaContents from "../../_components/anime-manga-contents";
import usePopularNextSeasonAnimes from "@/hooks/animes_hooks/usePopularNextSeasonAnimes";

const PopularThisSeasonContent = () => {
  const currentYear = new Date().getFullYear();
  const { nextSeason, nextSeasonLoading, nextSeasonError } =
    usePopularNextSeasonAnimes(currentYear);

  if (nextSeasonLoading) return <Loading />;

  if (nextSeasonError) return <ApiNotWorking />;

  return (
    <>
      <SearchTitle title="Popular this season" />
      <AnimeMangaContents data={nextSeason?.Page.media || []} />
    </>
  );
};

export default PopularThisSeasonContent;
