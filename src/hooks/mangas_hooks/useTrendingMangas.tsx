import { GET_TRENDING_MANGAS } from "@/queries/mangas/mangas-main-page";
import { useQuery } from "@apollo/client";
import { MangaMainPageResponse } from "@/types/mangas/manga-main-page";

const useTrendingMangas = () => {
  const {
    data: trending,
    loading: trendingLoading,
    error: trendingError,
  } = useQuery<MangaMainPageResponse>(GET_TRENDING_MANGAS);

  return {
    trending,
    trendingLoading,
    trendingError,
  };
};

export default useTrendingMangas;
