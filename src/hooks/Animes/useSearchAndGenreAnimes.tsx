import { GET_ANIMES_BY_SEARCH_AND_GENRE } from "@/queries/animes/anime-main-page";
import { useQuery } from "@apollo/client";

const useSearchAndGenreAnimes = (search: string, genre: string) => {
  const {
    data: searchAndGenre,
    loading: searchAndGenreLoading,
    error: searchAndGenreError,
  } = useQuery(GET_ANIMES_BY_SEARCH_AND_GENRE, {
    variables: { search, genre },
  });
  return {
    searchAndGenre,
    searchAndGenreLoading,
    searchAndGenreError,
  };
};

export default useSearchAndGenreAnimes;
