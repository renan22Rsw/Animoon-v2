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

const PasswordForm = () => {
  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof passwordSchema>) {
    console.log(values);
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
        <Button type="submit">Change Password</Button>
      </form>
    </Form>
  );
};

export default PasswordForm;
