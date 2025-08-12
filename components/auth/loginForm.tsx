import Link from "next/link";

import { GithubIcon, MailIcon } from "lucide-react";

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

const LoginForm = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="py-2">
        <CardTitle className="text-2xl font-bold text-center">
          Welcome back
        </CardTitle>
        <CardDescription className="text-center text-sm text-muted-foreground">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 sm:gap-4 gap-2">
          <Button variant="outline" className="w-full bg-transparent">
            <MailIcon className="mr-2 size-4" />
            Google
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
            <span className="px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <form className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email" className="text-xs text-muted-foreground">
              Email
            </Label>
            <Input id="email" type="email" required />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password" className="text-xs text-muted-foreground">
              Password
            </Label>
            <Input id="password" type="password" required />
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
