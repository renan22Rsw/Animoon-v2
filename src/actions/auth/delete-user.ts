"use server";

import { prisma as db } from "@/database/db";
import { auth } from "@/services/auth";
import { signOut } from "../../services/auth";

export const deleteUser = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Unauthorized",
    };
  }

  try {
    await db.user.delete({
      where: {
        id: session.user?.id,
      },
    });

    await signOut();
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};
