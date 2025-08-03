"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRightIcon,
  GithubIcon,
  LogOutIcon,
  MenuIcon,
  SparklesIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/shared/mode-toggle";

export default function HomePage() {
  // Simulate authentication state - replace with real auth logic
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
  });

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const features = [
    "Authentication",
    "Tanstack Integration",
    "GraphQL Ready",
    "Linting & Formatting",
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="size-6 sm:size-8 rounded-sm sm:rounded-lg flex items-center justify-center bg-foreground">
                <div className="size-2 sm:size-4 rounded-full bg-background"></div>
              </div>
              <span className="font-bold text-sm sm:text-lg">WannaCry081</span>
            </div>

            {/* Navigation Links & Auth */}
            <div className="flex items-center gap-2">
              <ModeToggle />

              {/* Mobile Navigation */}
              <div className="block sm:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon">
                      <MenuIcon className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Login</DropdownMenuLabel>
                    <DropdownMenuItem>Register</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Authentication Section */}
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-10 w-10 rounded-full"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                        />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {user.name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOutIcon className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center space-x-2 hidden sm:block">
                  <Button variant="outline" onClick={handleSignIn}>
                    Login
                  </Button>
                  <Button onClick={handleSignIn}>Register</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 sm:pt-32 sm:pb-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center py-1.5 px-3 px-4 sm:py-2 rounded-full mb-6 border border-muted-foreground/40">
              <span className="text-xs font-medium inline-flex items-center space-x-2">
                <SparklesIcon className="size-4" />
                <span className="text-xs sm:text-sm">
                  Advanced Template System
                </span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              <span className="block">Build faster with</span>
              <span className="block">Next.js Project Template</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-sm sm:max-w-lg text-base sm:text-lg mx-auto mb-10 sm:mb-12 leading-snug sm:leading-relaxed">
              Production-ready Next.js templates with authentication, graphql
              support, and more. Perfect for kickstarting your next project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-12 sm:mb-16">
              <Button asChild>
                <Link
                  href="https://github.com/yourusername/nextjs-template"
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
                  href="https://github.com/yourusername/nextjs-template/fork"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fork Repository
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex items-center justify-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 place-items-start gap-2 sm:gap-6 text-sm sm:text-base">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <div className="w-2 h-2 bg-foreground rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
