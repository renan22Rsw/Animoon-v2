"use server";
import { prisma as db } from "@/database/db";
import { auth } from "../../../../auth";

export const addCharactersToList = async (
  name: string,
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
    const existingCharacter = await db.characterList.findFirst({
      where: {
        title: name,
        userId: session.user?.id,
      },
    });

    if (existingCharacter) {
      return {
        error: "Character already exists in your list",
      };
    }

    const characterLength = await db.characterList.count({
      where: {
        userId: session.user?.id,
      },
    });

    if (characterLength >= 10) {
      return {
        error: "You can only add up to 10 characters to your list",
      };
    }

    await db.characterList.create({
      data: {
        characterId: dataId,
        title: name,
        image,
        userId: session.user?.id,
      },
    });

    return {
      success: "Character added to your list",
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};
