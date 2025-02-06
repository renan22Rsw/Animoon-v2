"use server";

import { prisma as db } from "@/database/db";

export const getUserEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};
