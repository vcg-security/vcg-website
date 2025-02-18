import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export function Container({ children, className }: Props) {
  return <div className={cn("container mx-auto", className)}>{children}</div>;
}
