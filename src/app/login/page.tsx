import { auth } from "@/services/auth";
import LoginForm from "./_components/login-form";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();

  if (session?.user?.id) {
    redirect("/search/anime");
  }

  return <LoginForm />;
};

export default LoginPage;
