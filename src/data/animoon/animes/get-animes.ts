"use server";
import { prisma as db } from "@/database/db";
import { auth } from "../../../services/auth";

export const getAnimeDatas = async () => {
  const session = await auth();

  try {
    const animes = await db.animeList.findMany({
      where: {
        userId: session?.user?.id,
      },
    });
    return animes;
  } catch (error) {
    console.log(error);
  }
};
