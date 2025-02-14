"use server";

import { prisma as db } from "@/database/db";
import { revalidatePath } from "next/cache";

export const deleteAnimesFromList = async (id: string) => {
  try {
    await db.animeList.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/user/profile/anime-list");
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};
