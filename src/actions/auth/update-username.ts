"use server";

import { prisma as db } from "@/database/db";
import { auth } from "@/services/auth";

export const updateUsername = async (username: string) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Unauthorized",
    };
  }

  try {
    const user = await db.user.findUnique({
      where: {
        id: session.user?.id,
      },
    });

    if (!user?.password) {
      return {
        error:
          "Accounts logged in with Google or GitHub cannot update their username",
      };
    }

    await db.user.update({
      where: {
        id: session.user?.id,
      },
      data: {
        name: username,
      },
    });

    return {
      success: "Your username has been updated, please logout and login again",
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};
