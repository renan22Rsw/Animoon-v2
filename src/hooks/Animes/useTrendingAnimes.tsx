"use client";

import { GET_TRENDING_ANIMES } from "@/queries/animes/anime-main-page";
import { AnimeMainPageResponse } from "@/types/animes/anime-main-page";
import { useQuery } from "@apollo/client";

const useTrendingAnimes = () => {
  const {
    data: trending,
    loading: trendingLoading,
    error: trendingError,
  } = useQuery<AnimeMainPageResponse>(GET_TRENDING_ANIMES);

  return { trending, trendingLoading, trendingError };
};

export default useTrendingAnimes;
