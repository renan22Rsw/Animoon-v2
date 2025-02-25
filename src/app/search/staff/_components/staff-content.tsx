"use client";

import { useSearchParams } from "next/navigation";
import SearchTitle from "../../_components/title";
import CharacterStaffContent from "../../_components/character-staff-content";
import useStaffsBirthdays from "@/hooks/staffs_hooks/useStaffsBirthdays";
import useMostFavoritesStaffs from "@/hooks/staffs_hooks/useMostFavoritesStaffs";
import useSearchStaffs from "@/hooks/staffs_hooks/useSearchStaffs";
import { Loading } from "../../_components/loading";
import ApiNotWorking from "../../_components/api-is-not-working";

const StaffContent = () => {
  const staffName = useSearchParams().get("search");

  const { brithdays, brithdaysLoading, brithdaysError } = useStaffsBirthdays();
  const { favourites, loadingFavourites, errorFavourites } =
    useMostFavoritesStaffs();

  const { searchData, searchLoading, searchError } = useSearchStaffs(
    staffName as string,
  );

  if (brithdaysLoading || loadingFavourites || searchLoading) {
    return <Loading />;
  }

  if (brithdaysError || errorFavourites || searchError) {
    return <ApiNotWorking />;
  }

  return (
    <>
      {!staffName ? (
        <>
          <SearchTitle title="Birthdays" />
          <CharacterStaffContent data={brithdays?.Page.staff || []} />

          <SearchTitle title="Most favorite staff" />
          <CharacterStaffContent data={favourites?.Page.staff || []} />
        </>
      ) : (
        <>
          <SearchTitle title={`Search for ${staffName}`} />
          <CharacterStaffContent data={searchData?.Page.staff || []} />
        </>
      )}
    </>
  );
};

export default StaffContent;
