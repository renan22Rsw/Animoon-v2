"use server";

import { prisma as db } from "@/database/db";
import { revalidatePath } from "next/cache";

export const deleteCharactersFromList = async (id: string) => {
  try {
    await db.characterList.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/user/profile/favorites");
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};
