"use client";

import useCharactersBirthdays from "@/hooks/characters_hooks/useCharactersBirthdays";
import SearchTitle from "../../_components/title";
import { Loading } from "../../_components/loading";
import ApiNotWorking from "../../_components/api-is-not-working";
import CharacterStaffContent from "../../_components/character-staff-content";
import useMostFavoritesCharacters from "@/hooks/characters_hooks/useMostFavoritesCharacters";
import useSearchCharacters from "@/hooks/characters_hooks/useSearchCharacters";
import { useSearchParams } from "next/navigation";

const CharacterContent = () => {
  const characterName = useSearchParams().get("search");

  const { birthdays, birthdaysLoading, birthdaysError } =
    useCharactersBirthdays();

  const { favourites, loadingFavourites, errorFavourites } =
    useMostFavoritesCharacters();

  const { searchData, searchLoading, searchError } = useSearchCharacters(
    characterName as string,
  );

  if (birthdaysLoading || loadingFavourites || searchLoading) {
    return <Loading />;
  }

  if (birthdaysError || errorFavourites || searchError) {
    return <ApiNotWorking />;
  }

  return (
    <>
      {!characterName ? (
        <>
          <SearchTitle title="Birthdays" />
          <CharacterStaffContent data={birthdays?.Page.characters || []} />

          <SearchTitle title="Most favorite characters" />
          <CharacterStaffContent data={favourites?.Page.characters || []} />
        </>
      ) : (
        <>
          <SearchTitle title="Search Characters" />
          <CharacterStaffContent data={searchData?.Page.characters || []} />
        </>
      )}
    </>
  );
};

export default CharacterContent;
