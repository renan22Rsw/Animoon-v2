import { auth } from "../../../../services/auth";
import FavoritesList from "./_components/favorites-list";
import UserProfileHeader from "../_components/profile-header";
import { redirect } from "next/navigation";

const FavoritesPage = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

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
