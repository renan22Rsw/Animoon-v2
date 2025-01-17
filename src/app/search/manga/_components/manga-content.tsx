"use client";

import { useMediaQuery } from "../../../../../hooks/useMediaQuery";
import SearchColumns from "../../_components/search-columns";
import SearchContents from "../../_components/search-contents";
import SearchTitle from "../../_components/title";

const MangaContent = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      <SearchTitle title="Trending Now" />
      <SearchContents />

      <SearchTitle title="All time popular" />
      <SearchContents />

      <SearchTitle title="Popular manhwa" />
      <SearchContents />

      <SearchTitle title="Top 10 manga" />
      {isMobile ? <SearchContents /> : <SearchColumns />}
    </>
  );
};

export default MangaContent;
