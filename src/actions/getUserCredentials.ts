"use server";

import { prisma } from "@/database/db";
import bcrypt from "bcrypt";

export const getUserCredentials = async (email: string, password: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    return null;
  }

  const validPassword = bcrypt.compareSync(password, user.password);

  if (validPassword) {
    return { id: user.id, email: user.email, name: user.name };
  }

  return null;
};
