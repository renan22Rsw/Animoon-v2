"use server";

import { prisma as db } from "@/database/db";

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        token: token,
      },
    });

    return verificationToken;
  } catch (err) {
    console.log(err);
  }
};
