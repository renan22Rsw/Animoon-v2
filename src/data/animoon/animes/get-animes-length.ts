"use server";

import { prisma as db } from "@/database/db";
import { auth } from "../../../../auth";

export const getAnimesLength = async () => {
  const session = await auth();
  if (!session?.user?.id) {
    return 0;
  }
  try {
    const animesLenght = await db.animeList.count({
      where: {
        userId: session.user.id,
      },
    });

    return animesLenght;
  } catch (error) {
    console.log(error);
    return null;
  }
};
