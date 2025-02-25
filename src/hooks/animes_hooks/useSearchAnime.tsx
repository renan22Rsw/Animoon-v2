import { GET_ANIMES_BY_NAME } from "@/queries/animes/anime-main-page";
import { useQuery } from "@apollo/client";
import { AnimeMainPageResponse } from "@/types/animes/anime-main-page";

const useSearchAnime = (search: string) => {
  const {
    data: searchData,
    loading: searchLoading,
    error: searchError,
  } = useQuery<AnimeMainPageResponse>(GET_ANIMES_BY_NAME, {
    variables: { search },
  });

  return {
    searchData,
    searchLoading,
    searchError,
  };
};

export default useSearchAnime;
