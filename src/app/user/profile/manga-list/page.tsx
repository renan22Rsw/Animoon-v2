import { redirect } from "next/navigation";
import { auth } from "../../../../services/auth";
import UserProfileHeader from "../_components/profile-header";
import DataList from "../_components/data-list";
import { getMangasDatas } from "@/data/animoon/mangas/get-mangas";

const MangaListPage = async () => {
  const session = await auth();
  const mangas = await getMangasDatas();

  if (!session?.user?.id) {
    redirect("/login");
  }

  return (
    <>
      <UserProfileHeader
        name={session?.user?.name as string}
        img={session?.user?.image as string}
      />
      <DataList datas={mangas as []} path="manga" />
    </>
  );
};

export default MangaListPage;
