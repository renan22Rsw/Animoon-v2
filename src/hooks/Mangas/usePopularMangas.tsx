import { GET_POPULAR_MANGAS } from "@/queries/mangas/mangas-main-page";
import { useQuery } from "@apollo/client";
import { MangaMainPageResponse } from "@/types/mangas/manga-main-page";
const usePopularMangas = () => {
  const {
    data: popular,
    loading: popularLoading,
    error: popularError,
  } = useQuery<MangaMainPageResponse>(GET_POPULAR_MANGAS);

  return {
    popular,
    popularLoading,
    popularError,
  };
};

export default usePopularMangas;
