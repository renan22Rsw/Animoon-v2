import { GET_MOST_FAVORITES_CHARACTERS } from "@/queries/characters/character-main-page";
import { CharacterMainPageResponse } from "@/types/characters/character-main-page";
import { useQuery } from "@apollo/client";

const useMostFavoritesCharacters = () => {
  const {
    data: favourites,
    loading: loadingFavourites,
    error: errorFavourites,
  } = useQuery<CharacterMainPageResponse>(GET_MOST_FAVORITES_CHARACTERS);

  return {
    favourites,
    loadingFavourites,
    errorFavourites,
  };
};

export default useMostFavoritesCharacters;
