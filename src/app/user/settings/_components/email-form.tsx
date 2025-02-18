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
import { emailSchema } from "@/schemas";
import { useTransition } from "react";
import { updateEmail } from "@/actions/auth/update-email";
import { toast } from "@/hooks/use-toast";

interface EmailFormProps {
  email: string;
}

const EmailForm = ({ email }: EmailFormProps) => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: email,
    },
  });

  function onSubmit(values: z.infer<typeof emailSchema>) {
    startTransition(() => {
      updateEmail(values.email)
        .then((res) => {
          toast({
            title: res?.success as string,
            description: "Congrats! You have updated your email",
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="update email..."
                  {...field}
                  className="w-2/4 text-sm"
                  type="email"
                />
              </FormControl>
              <FormDescription>
                after updating your email, please logout and login again
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          Change Email
        </Button>
      </form>
    </Form>
  );
};

export default EmailForm;
