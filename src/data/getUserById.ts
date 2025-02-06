"use server";

import { prisma as db } from "@/database/db";

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id: id,
      },
    });

    return user;
  } catch (err) {
    console.log(err);
  }
};
