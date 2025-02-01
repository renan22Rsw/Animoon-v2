"use client";

import useUpcomingAnimes from "@/hooks/animes/useUpcomingAnimes";
import { Loading } from "../../_components/loading";
import ApiNotWorking from "../../_components/api-is-not-working";
import SearchTitle from "../../_components/title";
import AnimeMangaContents from "../../_components/anime-manga-contents";

const UpcomingContent = () => {
  const { upcoming, upcomingLoading, upcomingError } = useUpcomingAnimes();

  if (upcomingLoading) return <Loading />;

  if (upcomingError) return <ApiNotWorking />;

  return (
    <>
      <SearchTitle title="Upcoming next season" />
      <AnimeMangaContents data={upcoming?.Page.media || []} />
    </>
  );
};

export default UpcomingContent;
