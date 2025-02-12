import { auth } from "../../../../../auth";
import FavoritesList from "./_components/favorites-list";
import UserProfileHeader from "../_components/profile-header";

const FavoritesPage = async () => {
  const session = await auth();

  return (
    <>
      <UserProfileHeader
        name={session?.user?.name as string}
        img={session?.user?.image as string}
      />
      <FavoritesList />
    </>
  );
};

export default FavoritesPage;
