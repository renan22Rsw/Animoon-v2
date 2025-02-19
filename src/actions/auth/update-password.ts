"use server";

import { prisma as db } from "@/database/db";
import { auth } from "@/services/auth";
import bcrypt from "bcrypt";

export const updatePassword = async (password: string) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Unauthorized",
    };
  }

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      password: true,
    },
  });

  if (!user?.password) {
    return {
      error:
        "Accounts logged in with Google or GitHub cannot update their password",
    };
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (passwordMatch) {
    return {
      error: "New password cannot be the same as the old one",
    };
  }

  const hasedPassword = bcrypt.hashSync(password, 10);

  try {
    await db.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        password: hasedPassword,
      },
    });

    return {
      success: "Your password has been updated, please logout and login again",
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};
