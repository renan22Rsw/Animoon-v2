"use server";

import { prisma as db } from "@/database/db";
import { auth } from "../../../../auth";

const getStaffsDatas = async () => {
  const session = await auth();

  try {
    const staffs = await db.staffList.findMany({
      where: {
        userId: session?.user?.id,
      },
    });
    return staffs
  } catch (error) {
    console.log(error);
  }
};

export default getStaffsDatas;
