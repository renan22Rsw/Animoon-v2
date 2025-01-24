import { GET_TOP_10_MANGAS } from "@/queries/mangas/mangas-main-page";
import { useQuery } from "@apollo/client";
import { MangaMainPageResponse } from "@/types/mangas/manga-main-page";
const UseTop10Mangas = () => {
  const {
    data: top,
    loading: topLoading,
    error: topError,
  } = useQuery<MangaMainPageResponse>(GET_TOP_10_MANGAS);

  return {
    top,
    topLoading,
    topError,
  };
};

export default UseTop10Mangas;
