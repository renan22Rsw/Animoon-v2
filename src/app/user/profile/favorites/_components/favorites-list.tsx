import { getCharactersDatas } from "@/data/animoon/characters/get-characters";
import FavoritesCharacterContent from "./favorite-characters-content";
import FavoritesStaffContent from "./favorite-staffs-content";
import getStaffsDatas from "@/data/animoon/staffs/get-staffs";

const FavoritesList = async () => {
  const characters = await getCharactersDatas();
  const staffs = await getStaffsDatas() 

  return (
    <>
      <FavoritesCharacterContent datas={characters as []} />
      <FavoritesStaffContent  datas={staffs as []}/>
    </>
  );
};

export default FavoritesList;
