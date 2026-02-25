import React from "react";
import { cn } from "../utils/cn";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main
      className={cn(
        "relative flex flex-col h-[100vh] items-center justify-center bg-obsidian text-slate-950 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "filter blur-[10px] invert-0 pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform",
            "bg-[linear-gradient(100deg,var(--color-obsidian)_10%,var(--color-obsidian)_35%,var(--color-volt)_50%,var(--color-obsidian)_65%,var(--color-obsidian)_90%)]",
            "bg-[length:200%_100%] animate-aurora",
            showRadialGradient && "mask-image-radial"
          )}
        ></div>
      </div>
      {children}
    </main>
  );
};
