"use client";

import useLightNovel from "@/hooks/mangas/useLightNovel";
import { Loading } from "../../_components/loading";
import ApiNotWorking from "../../_components/api-is-not-working";
import SearchTitle from "../../_components/title";
import AnimeMangaContents from "../../_components/anime-manga-contents";

const LightNovelContent = () => {
  const { lightNovel, lightNovelLoading, lightNovelError } = useLightNovel();

  if (lightNovelLoading) return <Loading />;

  if (lightNovelError) return <ApiNotWorking />;

  return (
    <>
      <SearchTitle title="Popular light novels" />
      <AnimeMangaContents data={lightNovel?.Page.media || []} />
    </>
  );
};

export default LightNovelContent;
