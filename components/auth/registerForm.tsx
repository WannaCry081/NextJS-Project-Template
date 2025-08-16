"use client";

import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { GithubIcon, MailIcon } from "lucide-react";

// Custom Components
import Logo from "@/components/shared/Logo";

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

const schema = z
  .object({
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not  match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof schema>;

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    console.log("values: ", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="w-full max-w-md">
        <CardHeader className="py-2">
          <CardTitle className="text-2xl font-bold text-center flex flex-col items-center justify-center space-y-3">
            <Logo variant="icon" />
            <span>Create an account</span>
          </CardTitle>
          <CardDescription className="text-center text-sm text-muted-foreground">
            Enter your information to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <Button variant="outline" className="w-full bg-transparent">
              <MailIcon className="mr-2 size-4" />
              Google{" "}
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
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
          ></Controller>

          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <PasswordInput
                {...field}
                id="password"
                error={errors.password?.message}
                required
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <PasswordInput
                {...field}
                id="confirmPassword"
                label="Confirm password"
                error={errors.confirmPassword?.message}
                required
              />
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Creating account..." : "Create Account"}
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default RegisterForm;
