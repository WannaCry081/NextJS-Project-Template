"use client";

import React from "react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { GithubIcon, MailIcon } from "lucide-react";

// Custom Components
import Logo from "@/components/auth/components/logo";

// UI Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PasswordInput from "../ui/password-input";

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormValues = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    console.log("values:", values);
    // TODO: call login API here
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="py-2">
        <CardTitle className="text-2xl font-bold text-center flex flex-col items-center justify-center space-y-3">
          <Logo variant="icon" />
          <span>Welcome back</span>
        </CardTitle>
        <CardDescription className="text-center text-sm text-muted-foreground">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 sm:gap-4 gap-2">
          <Button
            type="button"
            variant="outline"
            className="w-full bg-transparent"
          >
            <MailIcon className="mr-2 size-4" />
            Google
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full bg-transparent"
          >
            <GithubIcon className="mr-2 size-4" />
            GitHub
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-card text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    {...field}
                    type="email"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm dark:text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <PasswordInput
                  {...field}
                  error={errors.password?.message}
                  id="password"
                  required
                />
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </div>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
