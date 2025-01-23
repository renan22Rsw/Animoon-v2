import { GET_TOP_10_ANIMES } from "@/queries/animes/anime-main-page";
import { useQuery } from "@apollo/client";

const useTop10Animes = () => {
  const {
    data: top,
    loading: topLoading,
    error: topError,
  } = useQuery(GET_TOP_10_ANIMES);

  return { top, topLoading, topError };
};

export default useTop10Animes;
