"use server";

import { prisma } from "@/database/db";

export const getUserEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  } catch (err) {
    return { error: err };
  }
};
