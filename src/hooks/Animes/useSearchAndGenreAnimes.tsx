import { GET_ANIMES_BY_SEARCH_AND_GENRE } from "@/queries/animes/anime-main-page";
import { useQuery } from "@apollo/client";
import { AnimeMainPageResponse } from "@/types/animes/anime-main-page";
const useSearchAndGenreAnimes = (anime: string, genre: string) => {
  const {
    data: searchAndGenre,
    loading: searchAndGenreLoading,
    error: searchAndGenreError,
  } = useQuery<AnimeMainPageResponse>(GET_ANIMES_BY_SEARCH_AND_GENRE, {
    variables: { anime, genre },
  });
  return {
    searchAndGenre,
    searchAndGenreLoading,
    searchAndGenreError,
  };
};

export default useSearchAndGenreAnimes;
