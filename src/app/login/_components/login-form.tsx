"use client";

import CardWrapper from "@/components/Authentication/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import SuccessMessage from "@/components/Authentication/success-message";
import ErrorMessage from "@/components/Authentication/error-message";
import { login } from "@/actions/login";

const LoginForm = () => {
  const [success, setSuccess] = useState<string | null>();
  const [error, setError] = useState<string | null>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values).then((res) => {
        setSuccess(res?.success as string);
        setError(res?.error as string);
      });
    });
  };

  return (
    <CardWrapper
      title="Login"
      description="Login to your account"
      socialMedia
      linkTitle="Don't have an account?"
      link="/signup"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            Login
          </Button>
          <SuccessMessage message={success as string} />
          <ErrorMessage message={error as string} />
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
