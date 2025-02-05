import NextAuth from "next-auth";
import { prisma } from "@/database/db";
import { getUserEmail } from "@/actions/findUserByEmail";
import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },

    async session({ token, session }) {
      if (token) {
        session.user.id = token.sub as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },

    async signIn({ user }) {
      const email = user?.email;
      const existingUser = await getUserEmail(email as string);

      if (!existingUser) {
        await prisma.user.create({
          data: {
            name: user?.name as string,
            email: user?.email as string,
          },
        });
      }
      return true;
    },
  },
  ...authConfig,
  session: {
    strategy: "jwt",
  },
});
