"use server";

import { signupSchema } from "@/schemas";
import { z } from "zod";
import { getUserEmail } from "../data/getUserByEmail";
import bcrypt from "bcrypt";
import { prisma as db } from "@/database/db";
import { generateVerificationToken } from "@/database/token";
import { sendVerificationEmail } from "@/app/api/send/route";

export const createUser = async (values: z.infer<typeof signupSchema>) => {
  try {
    const validatedFields = signupSchema.safeParse(values);

    if (!validatedFields.success) {
      return {
        error: "Invalid email or password",
      };
    }

    const { name, email, password } = validatedFields.data;

    const existingEmail = await getUserEmail(email);

    if (existingEmail) {
      return {
        error: "Email already in use",
      };
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const verificationToken = await generateVerificationToken(email);

    await sendVerificationEmail(email, verificationToken.token);

    return {
      success: "Email verification was sent",
    };
  } catch (err) {
    return {
      error: "Something went wrong",
      err,
    };
  }
};
