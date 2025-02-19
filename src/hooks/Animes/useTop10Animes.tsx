import { GET_TOP_10_ANIMES } from "@/queries/animes/anime-main-page";
import { useQuery } from "@apollo/client";
import { AnimeMainPageResponse } from "@/types/animes/anime-main-page";

const useTop10Animes = () => {
  const {
    data: top,
    loading: topLoading,
    error: topError,
  } = useQuery<AnimeMainPageResponse>(GET_TOP_10_ANIMES);

  return { top, topLoading, topError };
};

export default useTop10Animes;
