import { useRef } from "react";
import { cn } from "@/lib/utils";
import { LOAD_SVG_ASPECT_CLASS } from "@/lib/loadSvg";
import { useLoadSvg } from "@/hooks/useLoadSvg";

const sizeClasses = {
  sm: "h-8",
  md: "h-10",
  lg: "h-14",
} as const;

interface LogoProps {
  size?: keyof typeof sizeClasses;
  className?: string;
}

const Logo = ({ size = "sm", className }: LogoProps) => {
  const hostRef = useRef<HTMLDivElement>(null);
  useLoadSvg(hostRef);

  return (
    <div
      ref={hostRef}
      className={cn(
        LOAD_SVG_ASPECT_CLASS,
        "shrink-0 text-foreground",
        sizeClasses[size],
        className,
      )}
      aria-hidden="true"
    />
  );
};

export default Logo;
