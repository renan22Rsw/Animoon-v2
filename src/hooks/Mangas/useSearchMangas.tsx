import { GET_MANGAS_BY_NAME } from "@/queries/mangas/mangas-main-page";
import { useQuery } from "@apollo/client";
import { MangaMainPageResponse } from "@/types/mangas/manga-main-page";

const useSearchMangas = (search: string) => {
  const {
    data: searchData,
    loading: searchLoading,
    error: searchError,
  } = useQuery<MangaMainPageResponse>(GET_MANGAS_BY_NAME, {
    variables: { search },
  });
  return {
    searchData,
    searchLoading,
    searchError,
  };
};

export default useSearchMangas;
