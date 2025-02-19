import { GET_LIGHT_NOVELS } from "@/queries/mangas/mangas-main-page";
import { useQuery } from "@apollo/client";
import { MangaMainPageResponse } from "@/types/mangas/manga-main-page";

const useLightNovel = () => {
  const {
    data: lightNovel,
    loading: lightNovelLoading,
    error: lightNovelError,
  } = useQuery<MangaMainPageResponse>(GET_LIGHT_NOVELS);

  return {
    lightNovel,
    lightNovelLoading,
    lightNovelError,
  };
};

export default useLightNovel;
