"use client";

import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import SearchColumns from "../../_components/search-columns";
import SearchContents from "../../_components/search-contents";
import SearchTitle from "../../_components/title";

const MangaContent = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      <SearchTitle title="Trending Now" />
      <SearchContents data={[]} />

      <SearchTitle title="All time popular" />
      <SearchContents data={[]} />

      <SearchTitle title="Popular manhwa" />
      <SearchContents data={[]} />

      <SearchTitle title="Top 10 manga" />
      {isMobile ? <SearchContents data={[]} /> : <SearchColumns data={[]} />}
    </>
  );
};

export default MangaContent;
