import { GET_ANIMES_BY_GENRE } from "@/queries/animes/anime-main-page";
import { useQuery } from "@apollo/client";

const useGenreAnimes = (genre: string) => {
  const {
    data: genreData,
    loading: genreLoading,
    error: genreError,
  } = useQuery(GET_ANIMES_BY_GENRE, {
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
