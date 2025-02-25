import { Loading } from "../_components/loading";
import AnimeContent from "./_components/anime-content";
import { Suspense } from "react";

const AnimePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AnimeContent />
    </Suspense>
  );
};

export default AnimePage;
