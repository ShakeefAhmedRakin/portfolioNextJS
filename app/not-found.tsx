import { buttonVariants } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/wrappers";
import SiteMetadata from "@/content/site-metadata";
import { siteNavigationMap } from "@/content/site-navigation";
import getMetadata from "@/metadata/utils/get-metadata";
import Link from "next/link";

export function generateMetadata() {
  return getMetadata(SiteMetadata.NOT_FOUND);
}

export default function NotFoundPage() {
  return (
    <SectionWrapper innerClassName="flex justify-center items-center flex-col min-h-[58vh] py-10 gap-y-4 intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once ">
      <h1 className="text-7xl font-bold tracking-widest">404</h1>
      <p className="text-foreground/65 text-center text-xl font-medium">
        Page Not Found
        <br />
        The requested page could not be found
      </p>
      <Link
        href={siteNavigationMap.HOME.href}
        title="Back To Home"
        aria-label="Go back to homepage"
        className={buttonVariants({
          variant: "outline",
          size: "lg",
          className: "bg-transparent",
        })}
      >
        Back To Home
      </Link>
    </SectionWrapper>
  );
}
