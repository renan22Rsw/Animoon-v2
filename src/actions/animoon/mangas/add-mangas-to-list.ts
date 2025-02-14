"use server";

import { prisma as db } from "@/database/db";
import { auth } from "../../../../auth";

export const addMangasToList = async (
  title: string,
  image: string,
  dataId: string,
) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "You must be logged in to add mangas to your list",
    };
  }

  try {
    const existingManga = await db.mangaList.findFirst({
      where: {
        title,
        userId: session.user.id,
      },
    });

    if (existingManga) {
      return {
        error: "Manga already exists in your list",
      };
    }

    await db.mangaList.create({
      data: {
        mangaId: dataId,
        title,
        image,
        userId: session.user.id,
      },
    });

    return {
      success: "Manga added to your list",
    };
  } catch (err: unknown) {
    console.log(err);
    return {
      error: "Something went wrong",
    };
  }
};
