"use server";

import { prisma as db } from "@/database/db";
import { auth } from "../../../auth";

export const addAnimesToList = async (
  title: string,
  image: string,
  dataId: string,
) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Unauthorized",
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

export const addMangasToList = async (
  title: string,
  image: string,
  dataId: string,
) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Unauthorized",
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
