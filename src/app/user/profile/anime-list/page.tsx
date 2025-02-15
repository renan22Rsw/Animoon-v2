import { redirect } from "next/navigation";
import { auth } from "../../../../services/auth";
import UserProfileHeader from "../_components/profile-header";
import DataList from "../_components/data-list";
import { getAnimeDatas } from "@/data/animoon/animes/get-animes";

const AnimeListPage = async () => {
  const session = await auth();
  const animes = await getAnimeDatas();

  if (!session?.user?.id) {
    redirect("/login");
  }

  return (
    <>
      <UserProfileHeader
        name={session?.user?.name as string}
        img={session?.user?.image as string}
      />
      <DataList datas={animes as []} path="anime" />
    </>
  );
};

export default AnimeListPage;
