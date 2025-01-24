import { GET_ANIMES_BY_NAME } from "@/queries/animes/anime-main-page";
import { useQuery } from "@apollo/client";

const useSearchAnime = (search: string) => {
  const {
    data: searchData,
    loading: searchLoading,
    error: searchError,
  } = useQuery(GET_ANIMES_BY_NAME, {
    variables: { search },
  });

  return {
    searchData,
    searchLoading,
    searchError,
  };
};

export default useSearchAnime;
