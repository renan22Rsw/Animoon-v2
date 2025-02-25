"use client";

import { Loading } from "../../_components/loading";
import ApiNotWorking from "../../_components/api-is-not-working";
import SearchTitle from "../../_components/title";
import AnimeMangaContents from "../../_components/anime-manga-contents";
import usePopularAnimes from "@/hooks/animes_hooks/usePopularAnimes";

const PopularContent = () => {
  const { popular, popularLoading, popularError } = usePopularAnimes();

  if (popularLoading) return <Loading />;

  if (popularError) return <ApiNotWorking />;

  return (
    <>
      <SearchTitle title="All time popular" />
      <AnimeMangaContents data={popular?.Page.media || []} />
    </>
  );
};

export default PopularContent;
