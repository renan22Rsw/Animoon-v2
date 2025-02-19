import { GET_MANGAS_BY_SEARCH_AND_GENRE } from "@/queries/mangas/mangas-main-page";
import { useQuery } from "@apollo/client";
import { MangaMainPageResponse } from "@/types/mangas/manga-main-page";

const useSearchAndGenreMangas = (manga: string, genre: string) => {
  const {
    data: searchAndGenre,
    loading: searchAndGenreLoading,
    error: searchAndGenreError,
  } = useQuery<MangaMainPageResponse>(GET_MANGAS_BY_SEARCH_AND_GENRE, {
    variables: { manga, genre },
  });
  return {
    searchAndGenre,
    searchAndGenreLoading,
    searchAndGenreError,
  };
};

export default useSearchAndGenreMangas;
