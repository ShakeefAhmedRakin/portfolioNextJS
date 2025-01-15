import { ButtonSecondaryFilled } from "@/app/_components/ui/Buttons";
import { socialLinks } from "@/app/_data/socialLinks";
import Image from "next/image";
import Link from "next/link";
import { IoIosDocument } from "react-icons/io";
import { MdMail } from "react-icons/md";

export default function LinksSection() {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-full w-full">
        <div className="aspect-square rounded-full max-w-[250px] w-full relative border-secondary shadow-secondary shadow border-2">
          <Image
            src={"/hero.jpg"}
            fill={true}
            alt="photo"
            draggable={false}
            sizes="100%"
            priority={true}
            className="rounded-full object-cover"
          ></Image>
        </div>
        <div className="mt-5 max-w-xs w-full space-y-5 text-primary">
          <div className="flex items-center justify-between gap-2">
            <MdMail className="text-xl text-secondary" />
            <Link
              href="mailto:shakeef.rakin321@gmail.com"
              className="text-sm lg:text-base text-text opacity-90 underline hover:text-secondary font-medium font-heading flex-1 text-center"
              title="Email Me"
              aria-label="Email Me"
            >
              shakeef.rakin321@gmail.com
            </Link>
          </div>
          <ButtonSecondaryFilled
            href="/resume"
            ariaLabel="View Resume"
            className="flex-1 w-full mt-4"
            openInNewTab={true}
            icon={<IoIosDocument className="w-4 h-4" />}
          >
            View Resume
          </ButtonSecondaryFilled>

          <hr />
          {/* SOCIAL LINKS */}
          <div className="flex justify-center mt-6 gap-4 md:gap-6 lg:gap-10 text-[26px] md:text-3xl">
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
        </div>
      </div>
    </>
  );
}
