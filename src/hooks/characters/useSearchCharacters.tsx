import { GET_CHARACTERS_BY_NAME } from "@/queries/characters/character-main-page";
import { useQuery } from "@apollo/client";

const useSearchCharacters = (search: string) => {
  const {
    data: searchData,
    loading: searchLoading,
    error: searchError,
  } = useQuery(GET_CHARACTERS_BY_NAME, {
    variables: { search },
  });

  return {
    searchData,
    searchLoading,
    searchError,
  };
};

export default useSearchCharacters;
