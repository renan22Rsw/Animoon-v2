import { GET_ANIMES_BY_GENRE } from "@/queries/animes/anime-main-page";
import { useQuery } from "@apollo/client";
import { AnimeMainPageResponse } from "@/types/animes/anime-main-page";

const useGenreAnimes = (genre: string) => {
  const {
    data: genreData,
    loading: genreLoading,
    error: genreError,
  } = useQuery<AnimeMainPageResponse>(GET_ANIMES_BY_GENRE, {
    variables: {
      genre,
    },
  });

  return {
    genreData,
    genreLoading,
    genreError,
  };
};

export default useGenreAnimes;
