import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export function Container({ children, className }: Props) {
  return (
    <div className={cn("container mx-auto px-4 md:px-0", className)}>
      {children}
    </div>
  );
}
