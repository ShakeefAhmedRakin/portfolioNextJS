import { Loader2 } from "lucide-react"; // or your preferred icon
import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <div className="intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once flex min-h-[100vh] w-full items-center justify-center">
      <Loader2 className={cn("text-primary animate-spin", "h-10 w-10")} />
    </div>
  );
}
