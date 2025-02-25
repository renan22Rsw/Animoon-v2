import { GET_CHARACTERS_BIRTHDAYS } from "@/queries/characters/character-main-page";
import { CharacterMainPageResponse } from "@/types/characters/character-main-page";
import { useQuery } from "@apollo/client";

const useCharactersBirthdays = () => {
  const {
    data: birthdays,
    loading: birthdaysLoading,
    error: birthdaysError,
  } = useQuery<CharacterMainPageResponse>(GET_CHARACTERS_BIRTHDAYS);

  return {
    birthdays,
    birthdaysLoading,
    birthdaysError,
  };
};

export default useCharactersBirthdays;
