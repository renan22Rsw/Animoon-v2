"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { passwordSchema } from "@/schemas";
import { updatePassword } from "@/actions/auth/update-password";
import { useTransition } from "react";
import { toast } from "@/hooks/use-toast";

const PasswordForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof passwordSchema>) {
    startTransition(() => {
      updatePassword(values.password)
        .then((res) => {
          toast({
            title: res?.success as string,
            description: "Congrats! You have updated your username",
          });
          if (res.error) {
            toast({
              variant: "destructive",
              title: res.error,
              description: "Please try again",
            });
          }
        })
        .catch((res) => {
          toast({
            variant: "destructive",
            title: res.error,
            description: "Please try again",
          });
        });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="update password..."
                  {...field}
                  className="w-2/4 text-sm"
                  type="password"
                />
              </FormControl>
              <FormDescription>
                after updating your password, please logout and login again
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          Change Password
        </Button>
      </form>
    </Form>
  );
};

export default PasswordForm;
