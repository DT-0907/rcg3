import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "h-11",
  md: "h-14",
  lg: "h-20",
} as const;

interface LogoProps {
  size?: keyof typeof sizeClasses;
  className?: string;
}

const Logo = ({ size = "sm", className }: LogoProps) => {
  return (
    <div
      className={cn(
        "rcg-logo aspect-[600/582] shrink-0 bg-current text-foreground",
        sizeClasses[size],
        className,
      )}
      role="img"
      aria-label="Regents' and Chancellor's Group crest"
    />
  );
};

export default Logo;
