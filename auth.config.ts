import { getUserCredentials } from "@/data/getUserCredentials";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        if (!credentials.email || !credentials.password) {
          return null;
        }
        const user = await getUserCredentials(
          credentials.email as string,
          credentials.password as string,
        );

        if (user) {
          return user;
        }
        return null;
      },
    }),

    GitHub({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),

    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
} satisfies NextAuthConfig;
