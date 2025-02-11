"use server";

import { prisma as db } from "@/database/db";
import { getVerificationTokenByToken } from "@/data/auth/getVerificationTokenByToken";
import { getUserEmail } from "@/data/auth/getUserByEmail";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return {
      error: "Invalid token",
    };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const existingUser = await getUserEmail(existingToken.email);

  if (!existingUser) {
    return { error: "User not found" };
  }

  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await db.verificationToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return { success: "Email verified" };
};
