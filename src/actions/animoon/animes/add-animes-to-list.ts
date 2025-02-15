"use server";

import { prisma as db } from "@/database/db";
import { auth } from "../../../services/auth";

export const addAnimesToList = async (
  title: string,
  image: string,
  dataId: string,
) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "You must be logged in to add animes to your list",
    };
  }

  try {
    const existingAnime = await db.animeList.findFirst({
      where: {
        title,
        userId: session.user.id,
      },
    });

    if (existingAnime) {
      return {
        error: "Anime already exists in your list",
      };
    }

    await db.animeList.create({
      data: {
        animeId: dataId,
        title,
        image,
        userId: session.user.id,
      },
    });

    return {
      success: "Anime added to your list",
    };
  } catch (err) {
    console.log(err);
    return {
      error: "Something went wrong",
    };
  }
};
