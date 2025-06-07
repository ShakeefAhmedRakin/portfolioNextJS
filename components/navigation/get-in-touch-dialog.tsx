import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SiteConfig from "@/content/site-config";
import { siteSocials } from "@/content/site-socials";
import { Copy, Mail } from "lucide-react";
import Link from "next/link";

import { ReactNode } from "react";
import { headingVariants } from "../ui/typography";
import { CopyToClipboard } from "../ui/copy-to-clipboard";

export function GetInTouchDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className={headingVariants({ level: "h2" })}>
            Get in Touch
          </DialogTitle>
          <DialogDescription>
            I&apos;m thrilled to connect with you! Whether you have a project in
            mind, want to collaborate, or simply want to say hello, feel free to
            reach out. You can contact me through the following channels.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-center">
          <CopyToClipboard
            text={SiteConfig.email}
            className="cursor-pointer underline underline-offset-3"
          >
            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} /> {SiteConfig.email} <Copy size={16} />
            </div>
          </CopyToClipboard>

          <div className="space-x-1">
            {siteSocials.map((link) => (
              <Link
                href={link.url}
                key={`hero-${link.title}`}
                className={buttonVariants({ variant: "ghost", size: "icon" })}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                title={link.title}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
