"use client";

import { deleteUser } from "@/actions/auth/delete-user";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

import { useTransition } from "react";

const DeleteAccount = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDeleteAccount = () => {
    startTransition(() => {
      deleteUser()
        .then(() => {
          toast({
            title: "Account deleted",
            description: "Your account has been deleted",
          });

          router.refresh();
        })
        .catch((res) => {
          toast({
            variant: "destructive",
            title: res.error,
            description: "Please try again",
          });
        });
    });
  };

  return (
    <Button
      variant={"destructive"}
      disabled={isPending}
      onClick={handleDeleteAccount}
    >
      Delete Account
    </Button>
  );
};

export default DeleteAccount;
