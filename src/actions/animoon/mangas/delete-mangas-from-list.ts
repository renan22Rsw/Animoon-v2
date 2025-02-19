"use server";

import { prisma as db } from "@/database/db";
import { revalidatePath } from "next/cache";

export const deleteMangasFromList = async (id: string) => {
  try {
    await db.mangaList.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/user/profile/manga-list");
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};
