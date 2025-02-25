import { Loading } from "../_components/loading";
import CharacterContent from "./_components/character-content";
import { Suspense } from "react";
const CharacterPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CharacterContent />
    </Suspense>
  );
};

export default CharacterPage;
