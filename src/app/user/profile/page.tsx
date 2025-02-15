import { redirect } from "next/navigation";
import { auth } from "../../../services/auth";
import UserProfileHeader from "./_components/profile-header";
import ProfileInfo from "./_components/profile-info";
import { getAnimesLength } from "@/data/animoon/animes/get-animes-length";
import { getMangasLength } from "@/data/animoon/mangas/get-mangas-length";
import { getFavoritesLength } from "@/data/animoon/get-favorites-length";

const UserProfilePage = async () => {
  const session = await auth();
  const animesLenght = await getAnimesLength();
  const mangasLenght = await getMangasLength();
  const favoritesLenght = await getFavoritesLength();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <>
      <UserProfileHeader
        name={session.user.name as string}
        img={session.user.image as string}
      />
      <ProfileInfo
        animesLenght={animesLenght as number}
        mangasLenght={mangasLenght as number}
        favoritesLenght={favoritesLenght as number}
      />
    </>
  );
};

export default UserProfilePage;
