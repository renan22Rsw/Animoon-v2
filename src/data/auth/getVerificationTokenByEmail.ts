"use server";

import { prisma as db } from "../../database/db";

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });

    return verificationToken;
  } catch (err) {
    console.log(err);
  }
};
