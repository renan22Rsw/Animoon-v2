"use client";

import AnimeMangaContents from "../../_components/anime-manga-contents";
import SearchTitle from "../../_components/title";
import AnimeMangaColumns from "../../_components/anime-manga-columns";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSearchParams } from "next/navigation";

import { Loading } from "../../_components/loading";
import ApiNotWorking from "../../_components/api-is-not-working";
import useGenreAnimes from "@/hooks/animes/useGenreAnimes";
import usePopularAnimes from "@/hooks/animes/usePopularAnimes";
import usePopularNextSeasonAnimes from "@/hooks/animes/usePopularNextSeasonAnimes";
import useSearchAndGenreAnimes from "@/hooks/animes/useSearchAndGenreAnimes";
import useTop10Animes from "@/hooks/animes/useTop10Animes";
import useTrendingAnimes from "@/hooks/animes/useTrendingAnimes";
import useUpcomingAnimes from "@/hooks/animes/useUpcomingAnimes";
import useSearchAnime from "@/hooks/animes/useSearchAnime";

const AnimeContent = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isDeskop = useMediaQuery("(max-width: 1024px)");
  const animeName = useSearchParams().get("search");
  const animeGenre = useSearchParams().get("genre");

  const { trending, trendingLoading, trendingError } = useTrendingAnimes();
  const { nextSeason, nextSeasonLoading, nextSeasonError } =
    usePopularNextSeasonAnimes(currentYear);
  const { upcoming, upcomingLoading, upcomingError } = useUpcomingAnimes();
  const { popular, popularLoading, popularError } = usePopularAnimes();
  const { top, topLoading, topError } = useTop10Animes();

  const { searchData, searchLoading, searchError } = useSearchAnime(
    animeName as string,
  );

  const { genreData, genreLoading, genreError } = useGenreAnimes(
    animeGenre as string,
  );

  const { searchAndGenre, searchAndGenreLoading, searchAndGenreError } =
    useSearchAndGenreAnimes(animeName as string, animeGenre as string);

  if (
    trendingLoading ||
    popularLoading ||
    topLoading ||
    upcomingLoading ||
    nextSeasonLoading ||
    searchLoading ||
    genreLoading ||
    searchAndGenreLoading
  ) {
    return <Loading />;
  }

  if (
    trendingError ||
    popularError ||
    topError ||
    upcomingError ||
    nextSeasonError ||
    searchError ||
    genreError ||
    searchAndGenreError
  ) {
    return <ApiNotWorking />;
  }

  return (
    <>
      {!animeName && !animeGenre ? (
        <>
          {isMobile ? (
            <>
              <SearchTitle title="Trending Animes" href="anime/trending" />
              <AnimeMangaContents
                data={trending?.Page.media.slice(0, 6) || []}
              />

              <SearchTitle
                title="Popular this season"
                href="anime/this-season"
              />
              <AnimeMangaContents
                data={nextSeason?.Page.media.slice(0, 6) || []}
              />

              <SearchTitle title="Upcoming next season" href="anime/upcoming" />
              <AnimeMangaContents
                data={upcoming?.Page.media.slice(0, 6) || []}
              />

              <SearchTitle title="All time popular" href="anime/popular" />
              <AnimeMangaContents
                data={popular?.Page.media.slice(0, 6) || []}
              />
            </>
          ) : (
            <>
              <SearchTitle title="Trending Animes" href="anime/trending" />
              <AnimeMangaContents
                data={trending?.Page.media.slice(0, 5) || []}
              />

              <SearchTitle
                title="Popular this season"
                href="anime/this-season"
              />
              <AnimeMangaContents
                data={nextSeason?.Page.media.slice(0, 5) || []}
              />

              <SearchTitle title="Upcoming next season" href="anime/upcoming" />
              <AnimeMangaContents
                data={upcoming?.Page.media.slice(0, 5) || []}
              />

              <SearchTitle title="All time popular" href="anime/popular" />
              <AnimeMangaContents
                data={popular?.Page.media.slice(0, 5) || []}
              />
            </>
          )}

          <SearchTitle title="Top 10 anime" href="anime/top-50" />
          {isDeskop ? (
            <AnimeMangaContents data={top?.Page.media.slice(0, 10) || []} />
          ) : (
            <AnimeMangaColumns
              data={top?.Page.media.slice(0, 10) || []}
              path="anime"
            />
          )}
        </>
      ) : (
        <>
          {animeName && animeGenre ? (
            <>
              <SearchTitle title={`Search for ${animeName}`} />
              <AnimeMangaContents data={searchAndGenre?.Page.media || []} />
            </>
          ) : animeName ? (
            <>
              <SearchTitle title={`Search for ${animeName}`} />
              <AnimeMangaContents data={searchData?.Page.media || []} />
            </>
          ) : animeGenre ? (
            <>
              <SearchTitle title={`Genre: ${animeGenre}`} />
              <AnimeMangaContents data={genreData?.Page.media || []} />
            </>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default AnimeContent;
