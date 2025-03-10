"use client";

import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "../ui/button";

const SocialMedia = () => {
  return (
    <div className="flex w-full items-center justify-center gap-x-4">
      <Button className="w-[120px]" onClick={() => signIn("google")}>
        <FcGoogle size={20} />
      </Button>

      <Button className="w-[120px]" onClick={() => signIn("github")}>
        <FaGithub size={20} />
      </Button>
    </div>
  );
};

export default SocialMedia;
