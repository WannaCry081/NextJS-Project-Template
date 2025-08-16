"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

// UI Components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PasswordInput from "@/components/ui/password-input";

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              placeholder="johndoe@email.com"
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
            placeholder="Enter your password"
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
            placeholder="Confirm your password"
            required
          />
        )}
      />

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  );
};

export default RegisterForm;
