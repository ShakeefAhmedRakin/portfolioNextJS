"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";
import Logo from "../branding/logo";
import Link from "next/link";
import { siteNavigation, siteNavigationMap } from "@/content/site-navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import SiteConfig from "@/content/site-config";
import { GetInTouchDialog } from "./get-in-touch-dialog";

export default function NavigationMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleDelayedClose = () => {
    setTimeout(() => setOpen(false), 300);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        onClick={() => setOpen((prev) => !prev)}
        className="block md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <XIcon /> : <Menu />}
      </SheetTrigger>
      <SheetContent className="block md:hidden">
        <SheetHeader className="mt-1">
          <SheetTitle>
            <Logo onClick={handleDelayedClose} />
          </SheetTitle>
          <SheetDescription>{SiteConfig.title}</SheetDescription>
          <ul className="mt-8 flex flex-col gap-8">
            {siteNavigation
              .filter((link) => link.isShownOnNav)
              .map((link) => {
                const isActive =
                  pathname === link.href ||
                  (pathname.startsWith(link.href) &&
                    link.href !== siteNavigationMap.HOME.href);
                return (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      aria-label={link.ariaLabel}
                      onClick={handleDelayedClose}
                      title={link.title}
                      target={link.isExternal ? "_blank" : "_self"}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className={cn(
                        "hover:border-b-primary text-primary border-b-[1px] px-0.5 pb-2 text-base font-semibold duration-300",
                        isActive ? "border-b-primary" : "border-b-primary/10",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            <GetInTouchDialog>
              <Button size="lg">Get In Touch</Button>
            </GetInTouchDialog>
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
