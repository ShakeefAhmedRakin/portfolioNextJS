import { socialLinks } from "@/app/_data/socialLinks";
import Link from "next/link";
import { MdMail } from "react-icons/md";

export default function LinksSection() {
  return (
    <>
      <div className="flex justify-center items-start flex-col w-full">
        <div className="w-full space-y-5 text-primary">
          <div className="flex gap-2">
            <MdMail className="text-xl text-secondary" />
            <Link
              href="mailto:shakeef.rakin321@gmail.com"
              className="text-sm lg:text-base text-text opacity-90 underline hover:text-secondary font-medium font-heading  text-center"
              title="Email Me"
              aria-label="Email Me"
            >
              shakeef.rakin321@gmail.com
            </Link>
          </div>
          <hr />
          {/* SOCIAL LINKS */}
          <div className="flex justify-start flex-wrap mt-6 gap-4 md:gap-x-6 lg:gap-x-10 gap-y-1 text-[20px] xl:text-3xl">
            {socialLinks.map((link, index) => (
              <Link
                title={link.name}
                key={index}
                href={link.url}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={link.ariaLabel}
                className="p-3 rounded-full text-text opacity-80 border border-transparent hover:text-secondary hover:border-secondary duration-300 active:scale-[0.9]"
              >
                <span className="sr-only">{link.ariaLabel}</span>
                {link.icon}
              </Link>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
