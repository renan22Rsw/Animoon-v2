import { Loading } from "../_components/loading";
import MangaContent from "./_components/manga-content";
import { Suspense } from "react";

const MangaPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MangaContent />
    </Suspense>
  );
};

export default MangaPage;
