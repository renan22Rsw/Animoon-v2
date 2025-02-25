import { GET_POPULAR_ANIMES } from "@/queries/animes/anime-main-page";
import { AnimeMainPageResponse } from "@/types/animes/anime-main-page";
import { useQuery } from "@apollo/client";

const usePopularAnimes = () => {
  const {
    data: popular,
    loading: popularLoading,
    error: popularError,
  } = useQuery<AnimeMainPageResponse>(GET_POPULAR_ANIMES);

  return { popular, popularLoading, popularError };
};

export default usePopularAnimes;
