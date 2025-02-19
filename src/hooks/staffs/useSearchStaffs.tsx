import { GET_STAFFS_BY_NAME } from "@/queries/staffs/staff-main-page";
import { StaffMainPageResponse } from "@/types/staffs/staff-main-page";
import { useQuery } from "@apollo/client";

const useSearchStaffs = (search: string) => {
  const {
    data: searchData,
    loading: searchLoading,
    error: searchError,
  } = useQuery<StaffMainPageResponse>(GET_STAFFS_BY_NAME, {
    variables: { search },
  });

  return {
    searchData,
    searchLoading,
    searchError,
  };
};

export default useSearchStaffs;
