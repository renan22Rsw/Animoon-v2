import { GET_POPULAR_THIS_SEASON_ANIMES } from "@/queries/animes/anime-main-page";
import { useQuery } from "@apollo/client";

const usePopularNextSeasonAnimes = (seassonYear: number) => {
  const {
    data: nextSeason,
    loading: nextSeasonLoading,
    error: nextSeasonError,
  } = useQuery(GET_POPULAR_THIS_SEASON_ANIMES, {
    variables: { seassonYear },
  });

  return {
    nextSeason,
    nextSeasonLoading,
    nextSeasonError,
  };
};

export default usePopularNextSeasonAnimes;
