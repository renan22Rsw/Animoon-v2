import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import UserProfileHeader from "./_components/profile-header";

const UserProfilePage = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <>
      <UserProfileHeader
        name={session.user.name as string}
        img={session.user.image as string}
      />
    </>
  );
};

export default UserProfilePage;
