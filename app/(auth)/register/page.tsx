import Link from "next/link";
import { GithubIcon, MailIcon } from "lucide-react";

// Custom Components
import Logo from "@/components/auth/components/logo";
import RegisterForm from "@/components/auth/register-form";

// UI Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default async function Page() {
  return (
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

        <RegisterForm />

        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
