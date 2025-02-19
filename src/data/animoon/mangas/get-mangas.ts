"use server";
import { prisma as db } from "@/database/db";
import { auth } from "../../../services/auth";

export const getMangasDatas = async () => {
  const session = await auth();

  try {
    const mangas = await db.mangaList.findMany({
      where: {
        userId: session?.user?.id,
      },
      orderBy: {
        title: "asc",
      },
    });
    return mangas;
  } catch (error) {
    console.log(error);
  }
};
