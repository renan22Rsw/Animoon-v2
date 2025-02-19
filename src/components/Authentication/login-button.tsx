"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const LoginButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/login")} variant={"outline"}>
      Login
    </Button>
  );
};

export default LoginButton;
