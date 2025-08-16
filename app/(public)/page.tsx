import Link from "next/link";
import {
  ArrowRightIcon,
  GithubIcon,
  SparklesIcon,
  MenuIcon,
} from "lucide-react";

// Custom Components
import Logo from "@/components/auth/components/Logo";
import ModeToggle from "@/components/shared/ModeToggle";

// UI Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Page() {
  const features = [
    "Authentication",
    "Tanstack Integration",
    "GraphQL Ready",
    "Linting & Formatting",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />

            <div className="flex items-center gap-2">
              <ModeToggle />

              <div className="flex items-center space-x-2 hidden sm:block">
                <Link href="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href="/register">
                  <Button>Register</Button>
                </Link>
              </div>

              <div className="block sm:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="outline">
                      <MenuIcon className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/login">Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/register">Register</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-1 items-center justify-center px-2">
        <section className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center py-1.5 px-3 px-4 sm:py-2 rounded-full mb-6 border border-muted-foreground/40">
              <span className="text-xs font-medium inline-flex items-center space-x-2">
                <SparklesIcon className="size-4" />
                <span className="text-xs sm:text-sm">
                  Advanced Template System
                </span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              <span className="block">Build faster with</span>
              <span className="block">Next.js Project Template</span>
            </h1>

            <p className="max-w-sm sm:max-w-lg text-base sm:text-lg mx-auto mb-10 sm:mb-12 leading-snug sm:leading-relaxed">
              Production-ready Next.js templates with authentication, graphql
              support, and more. Perfect for kickstarting your next project.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-12 sm:mb-16">
              <Button asChild>
                <Link
                  href="https://github.com/WannaCry081/NextJS-Project-Template"
                  target="_blank"
                >
                  <GithubIcon className="size-4" />
                  View on GitHub
                </Link>
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 bg-transparent"
                asChild
              >
                <Link
                  href="https://github.com/WannaCry081/NextJS-Project-Template/fork"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fork Repository
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 place-items-start gap-2 sm:gap-6 text-sm sm:text-base">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="w-2 h-2 bg-foreground rounded-full mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
