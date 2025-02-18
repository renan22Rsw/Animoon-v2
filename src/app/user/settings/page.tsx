import { auth } from "@/services/auth";
import SettingsPageContent from "./_components/settings-page-content";
import { redirect } from "next/navigation";

const SettingsPage = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  return (
    <SettingsPageContent
      username={session.user.name as string}
      email={session.user.email as string}
    />
  );
};

export default SettingsPage;
