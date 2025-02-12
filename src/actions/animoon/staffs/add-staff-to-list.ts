"use server";

import { prisma as db } from "@/database/db";
import { auth } from "../../../../auth";

export const addStaffToList = async (
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
    const existingStaff = await db.staffList.findFirst({
      where: {
        title: name,
        userId: session.user?.id,
      },
    });

    if (existingStaff) {
      return {
        error: "Staff already exists in your list",
      };
    }

    const staffLength = await db.staffList.count({
      where: {
        userId: session.user?.id,
      },
    });

    if (staffLength >= 10) {
      return {
        error: "You can only up to 10 staffs to your list",
      };
    }

    await db.staffList.create({
      data: {
        staffId: dataId,
        title: name,
        image,
        userId: session.user?.id,
      },
    });

    return {
      success: "Staff added to your list",
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};
