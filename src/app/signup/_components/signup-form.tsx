"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signupSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SuccessMessage from "@/components/Authentication/Message/success-message";
import { useState, useTransition } from "react";
import ErrorMessage from "@/components/Authentication/Message/error-message";
import { createUser } from "@/actions/auth/register";
import CardWrapper from "@/components/Authentication/Card/card-wrapper";

const SignupForm = () => {
  const [success, setSuccess] = useState<string | null>();
  const [error, setError] = useState<string | null>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signupSchema>) => {
    startTransition(() => {
      createUser(values).then((res) => {
        setSuccess(res.success);
        setError(res.error);
      });
    });
  };

  return (
    <CardWrapper
      title="SignUp"
      description="Create an account"
      socialMedia
      linkTitle="Already have an account?"
      link="/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    {...field}
                    type="email"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isPending}>
            Sign Up
          </Button>
          <SuccessMessage message={success as string} />
          <ErrorMessage message={error as string} />
        </form>
      </Form>
    </CardWrapper>
  );
};

export default SignupForm;
