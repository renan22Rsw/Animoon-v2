"use server";

import { prisma as db } from "@/database/db";
import { auth } from "@/services/auth";

export const updateEmail = async (email: string) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Unauthorized",
    };
  }

  try {
    const existingEmail = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingEmail) {
      return {
        error: "Email already in use",
      };
    }

    const user = await db.user.findUnique({
      where: {
        id: session.user?.id,
      },
    });

    if (!user?.password) {
      return {
        error:
          "Accounts logged in with Google or GitHub cannot update their email",
      };
    }

    await db.user.update({
      where: {
        id: session.user?.id,
      },
      data: {
        email: email,
      },
    });

    return {
      success: "Your email has been updated, please logout and login again",
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};
