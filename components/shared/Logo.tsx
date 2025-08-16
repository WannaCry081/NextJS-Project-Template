import Link from "next/link";

interface LogoProps {
  variant?: "default" | "icon";
}

const Logo: React.FC<LogoProps> = ({ variant = "default" }) => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2">
        <div className="size-6 sm:size-8 rounded-sm sm:rounded-lg flex items-center justify-center bg-foreground">
          <div className="size-2 sm:size-4 rounded-full bg-background"></div>
        </div>
        {variant === "default" && (
          <span className="font-bold text-sm sm:text-lg">WannaCry081</span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
