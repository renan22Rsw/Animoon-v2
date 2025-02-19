import { GET_MOST_FAVORITES_STAFFS } from "@/queries/staffs/staff-main-page";
import { StaffMainPageResponse } from "@/types/staffs/staff-main-page";

import { useQuery } from "@apollo/client";

const useMostFavoritesStaffs = () => {
  const {
    data: favourites,
    loading: loadingFavourites,
    error: errorFavourites,
  } = useQuery<StaffMainPageResponse>(GET_MOST_FAVORITES_STAFFS);

  return {
    favourites,
    loadingFavourites,
    errorFavourites,
  };
};

export default useMostFavoritesStaffs;
