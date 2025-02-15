"use server";

import { z } from "zod";
import { signIn } from "../../services/auth";
import { LoginSchema } from "@/schemas";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  try {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "Invalid email or password" };
    }
    await signIn("credentials", {
      ...validatedFields.data,
      redirectTo: "/search/anime",
    });

    return { success: "User logged in" };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: Error | any) {
    if (isRedirectError(err)) {
      throw err;
    }

    if (err.type === "CredentialsSignin") {
      return { error: "Invalid email or password" };
    }
  }
};
