import { GET_MANGAS_BY_GENRE } from "@/queries/mangas/mangas-main-page";
import { useQuery } from "@apollo/client";
import { MangaMainPageResponse } from "@/types/mangas/manga-main-page";

const useGenreMangas = (genre: string) => {
  const {
    data: genreData,
    loading: genreLoading,
    error: genreError,
  } = useQuery<MangaMainPageResponse>(GET_MANGAS_BY_GENRE, {
    variables: { genre },
  });
  return {
    genreData,
    genreLoading,
    genreError,
  };
};

export default useGenreMangas;
