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
import { usernameSchema } from "@/schemas";
import { useTransition } from "react";
import { updateUsername } from "@/actions/auth/update-username";
import { toast } from "@/hooks/use-toast";

interface userNameProps {
  username: string;
}

const UserNameForm = ({ username }: userNameProps) => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof usernameSchema>>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: username,
    },
  });

  function onSubmit(values: z.infer<typeof usernameSchema>) {
    startTransition(() => {
      updateUsername(values.username)
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="update username..."
                  {...field}
                  className="w-2/4 text-sm"
                />
              </FormControl>
              <FormDescription>
                after updating your username, please logout and login again
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          Change Username
        </Button>
      </form>
    </Form>
  );
};

export default UserNameForm;
