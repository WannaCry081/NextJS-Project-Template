"use client";

import { useId, useState, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function PasswordInput({
  label = "Password",
  error,
  className,
  id,
  ...props
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);
  const uid = useId();
  const inputId = id || uid;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={inputId} className="text-muted-foreground">
        {label}
      </Label>

      <div className="relative">
        <Input
          id={inputId}
          type={visible ? "text" : "password"}
          autoComplete="current-password"
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...props}
          className="pr-10"
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute inset-y-0 right-2 my-auto text-sm text-muted-foreground"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>

      {error && (
        <p id={errorId} className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
