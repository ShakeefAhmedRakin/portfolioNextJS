import { cn } from "@/lib/utils";

export default function BackgroundGridOverlay() {
  return (
    <>
      <div
        className={cn(
          "absolute inset-0 -z-10",
          "[background-size:32px_32px]",
          "[background-image:linear-gradient(to_right,#191919_1px,transparent_1px),linear-gradient(to_bottom,#191919_1px,transparent_1px)]",
        )}
      ></div>
      <div className="bg-background pointer-events-none absolute inset-0 -z-10 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
    </>
  );
}
