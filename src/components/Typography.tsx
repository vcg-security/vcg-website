import { cn } from "@/lib/utils";
import { JSX, ReactNode } from "react";

interface TypographyProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h3-underline"
    | "h4"
    | "p"
    | "blockquote"
    | "list"
    | "inline"
    | "small"
    | "muted";
  children: ReactNode;
  className?: string;
}

export function Typography({ variant, children, className }: TypographyProps) {
  const variants = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    "h3-underline":
      "scroll-m-20 border-b pb-1 border-red-800 inline-block text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    p: "leading-7 [&:not(:first-child)]:mt-6",
    blockquote: "mt-6 border-l-2 pl-6 italic",
    list: "my-6 ml-6 list-disc [&>li]:mt-2",
    inline: "text-sm font-medium leading-none",
    small: "text-sm font-medium leading-none",
    muted: "text-sm text-muted-foreground",
  };

  const Component =
    variant === "list" ? "ul" : variant === "inline" ? "span" : variant;
  const ComponentTag = Component as keyof JSX.IntrinsicElements;

  return (
    <ComponentTag className={cn(variants[variant], className)}>
      {children}
    </ComponentTag>
  );
}
