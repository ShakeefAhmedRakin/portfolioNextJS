"use client";

import { toast } from "sonner";

interface CopyToClipboardProps {
  text: string;
  children?: React.ReactNode;
  className?: string;
}

export function CopyToClipboard({
  text,
  children,
  className = "",
}: CopyToClipboardProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error("Copy failed", err);
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <button type="button" onClick={handleCopy} className={className}>
      {children}
    </button>
  );
}
