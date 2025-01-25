import { GET_STAFFS_BIRTHDAYS } from "@/queries/staffs/staff-main-page";
import { StaffMainPageResponse } from "@/types/staffs/staff-main-page";

import { useQuery } from "@apollo/client";

const useStaffsBirthdays = () => {
  const {
    data: brithdays,
    loading: brithdaysLoading,
    error: brithdaysError,
  } = useQuery<StaffMainPageResponse>(GET_STAFFS_BIRTHDAYS);

  return {
    brithdays,
    brithdaysLoading,
    brithdaysError,
  };
};

export default useStaffsBirthdays;
