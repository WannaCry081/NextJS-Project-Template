import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="w-full h-dvh bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,.15)_1px,transparent_0)] bg-[length:20px_20px]">
      <div className="flex flex-col items-center justify-center h-full space-y-6 text-center p-4 pb-36">
        <Link
          href="https://github.com/WannaCry081/NextJS-Project-Template"
          target="_blank"
        >
          <Button className="rounded-full text-xs w-56" size="sm">
            <GithubIcon className="size-3.5" />
            Visit my GitHub Repository
          </Button>
        </Link>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
          NextJS Project Template
        </h1>
        <p className="text-muted-foreground text-base md:text-2xl font-medium">
          Developed by WannaCry081
        </p>
      </div>
    </main>
  );
}
