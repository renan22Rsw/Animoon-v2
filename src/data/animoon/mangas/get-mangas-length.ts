"use server";

import { prisma as db } from "@/database/db";
import { auth } from "../../../services/auth";

export const getMangasLength = async () => {
  const session = await auth();
  if (!session?.user?.id) {
    return 0;
  }
  try {
    const mangasLenght = await db.mangaList.count({
      where: {
        userId: session.user.id,
      },
    });

    return mangasLenght;
  } catch (error) {
    console.log(error);
    return null;
  }
};
