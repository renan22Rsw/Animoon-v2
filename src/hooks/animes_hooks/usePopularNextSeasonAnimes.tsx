import { GET_POPULAR_THIS_SEASON_ANIMES } from "@/queries/animes/anime-main-page";
import { useQuery } from "@apollo/client";
import { AnimeMainPageResponse } from "@/types/animes/anime-main-page";

const usePopularNextSeasonAnimes = (seassonYear: number) => {
  const {
    data: nextSeason,
    loading: nextSeasonLoading,
    error: nextSeasonError,
  } = useQuery<AnimeMainPageResponse>(GET_POPULAR_THIS_SEASON_ANIMES, {
    variables: { seassonYear },
  });

  return {
    nextSeason,
    nextSeasonLoading,
    nextSeasonError,
  };
};

export default usePopularNextSeasonAnimes;
