import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";
import UserProfileHeader from "../_components/profile-header";
import DataList from "../_components/data-list";

const AnimeListPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <UserProfileHeader
        name={session?.user?.name as string}
        img={session?.user?.image as string}
      />
      <DataList path="anime" />
    </>
  );
};

export default AnimeListPage;
