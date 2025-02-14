"use server";

import { prisma as db } from "@/database/db";
import { auth } from "../../../auth";

export const getFavoritesLength = async () => {
  const session = await auth();
  if (!session?.user?.id) {
    return 0;
  }
  try {
    const charactersLenght = await db.characterList.count({
      where: {
        userId: session.user.id,
      },
    });

    const staffsLenght = await db.staffList.count({
      where: {
        userId: session.user.id,
      },
    });

    return charactersLenght + staffsLenght;
  } catch (error) {
    console.log(error);
    return null;
  }
};
