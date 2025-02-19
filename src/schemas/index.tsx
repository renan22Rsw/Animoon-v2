import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

export const usernameSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters",
  }),
});

export const emailSchema = z.object({
  email: z.string().email({
    message: "invalid email",
  }),
});

export const passwordSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});
