"use client";

import { useMediaQuery } from "../../../../../hooks/useMediaQuery";
import SearchColumns from "../../_components/search-columns";
import SearchContents from "../../_components/search-contents";
import SearchTitle from "../../_components/title";

const AnimeContent = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <SearchTitle title="Trending Animes" />
      <SearchContents />

      <SearchTitle title="Popular this season" />
      <SearchContents />

      <SearchTitle title="Upcoming next season" />
      <SearchContents />

      <SearchTitle title="All time popular" />
      <SearchContents />

      <SearchTitle title="Top 10 anime" />
      {isMobile ? <SearchContents /> : <SearchColumns />}
    </>
  );
};

export default AnimeContent;
