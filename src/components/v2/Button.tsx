"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/components/v2/cn";

type ButtonVariant = "outline" | "solid";
type ButtonTone = "teal" | "plum" | "blue";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: ReactNode;
  target?: "_blank" | "_self";
  rel?: string;
  tone?: ButtonTone;
  variant?: ButtonVariant;
};

const toneClass: Record<ButtonTone, string> = {
  teal: "bg-card-teal hover:bg-card-teal/90",
  plum: "bg-card-plum hover:bg-card-plum/90",
  blue: "bg-card-blue hover:bg-card-blue/90",
};

export const Button = ({
  children,
  className,
  href,
  icon,
  target,
  rel,
  tone = "teal",
  variant = "outline",
}: ButtonProps) => {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[11px] md:text-xs uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base",
    variant === "outline" &&
      "border border-black/70 text-black bg-transparent hover:bg-black/5",
    variant === "solid" && cn("text-white", toneClass[tone]),
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http");
    const Component = isExternal ? "a" : Link;
    const componentProps = isExternal
      ? { href, target, rel: rel ?? "noopener noreferrer" }
      : { href };

    return (
      <Component {...componentProps} className={classes}>
        <span>{children}</span>
        {icon}
      </Component>
    );
  }

  return (
    <button type="button" className={classes}>
      <span>{children}</span>
      {icon}
    </button>
  );
};

