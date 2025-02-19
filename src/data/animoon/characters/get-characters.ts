"use server";

import { prisma as db } from "@/database/db";
import { auth } from "../../../services/auth";

export const getCharactersDatas = async () => {
  const session = await auth();

  try {
    const characters = await db.characterList.findMany({
      where: {
        userId: session?.user?.id,
      },
    });
    return characters;
  } catch (error) {
    console.log(error);
  }
};
