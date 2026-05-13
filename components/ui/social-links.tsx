import { siteSocials } from "@/content/site-socials";
import { buttonVariants } from "./button";
import Link from "next/link";

export default function SocialLinks({
  className = "space-x-1",
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      {siteSocials.map((link) => (
        <Link
          href={link.url}
          key={`social-${link.key}`}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">
            {link.name} (opens in new tab)
          </span>
          <span aria-hidden className="inline-flex">
            {link.icon}
          </span>
        </Link>
      ))}
    </div>
  );
}
