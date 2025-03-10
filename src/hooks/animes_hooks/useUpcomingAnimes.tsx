import { GET_UPCOMING_ANIMES } from "@/queries/animes/anime-main-page";
import { AnimeMainPageResponse } from "@/types/animes/anime-main-page";
import { useQuery } from "@apollo/client";

const useUpcomingAnimes = () => {
  const {
    data: upcoming,
    loading: upcomingLoading,
    error: upcomingError,
  } = useQuery<AnimeMainPageResponse>(GET_UPCOMING_ANIMES);

  return {
    upcoming,
    upcomingLoading,
    upcomingError,
  };
};

export default useUpcomingAnimes;
