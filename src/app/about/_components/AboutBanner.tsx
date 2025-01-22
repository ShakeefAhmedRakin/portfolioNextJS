import { socialLinks } from "@/app/_data/socialLinks";
import Image from "next/image";
import Link from "next/link";
import { BiGlobe } from "react-icons/bi";
import { FaLocationPin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import ViewResumeButton from "./ViewResumeButton";

export default function AboutBanner() {
  return (
    <>
      <div className="bg-gradient-to-b from-primary to-secondary p-8 rounded-t-lg flex flex-col md:flex-row text-center md:text-left items-center gap-8">
        <div className="relative rounded-lg border-4 border-primary aspect-square w-full max-w-[230px] border-white">
          <Image
            src={"/hero.jpg"}
            fill={true}
            priority={true}
            draggable={false}
            alt="Hero image"
            className="rounded-sm"
          />
        </div>
        <ViewResumeButton className="flex md:hidden -my-4" />
        <div className="flex-1">
          <div className="flex justify-center md:justify-between items-center">
            <h2 className="font-heading text-2xl text-white font-bold">
              Shakeef Ahmed Rakin
            </h2>
            <ViewResumeButton className="hidden md:flex" />
          </div>
          <h3 className="font-heading text-lg text-white mt-1 mb-5 md:mb-3">
            Full Stack Engineer
          </h3>
          <div className="flex flex-wrap gap-4 items-center max-w-md text-white font-body mb-2 text-sm">
            <div className="items-center flex gap-2">
              <FaLocationPin className="w-4 h-4"></FaLocationPin> Dhaka,
              Bangladesh
            </div>
            <Link
              className="items-center flex gap-2 hover:underline"
              href={process.env.WEBSITE_URL || "/"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my website"
              title="Visit my website"
            >
              <BiGlobe className="w-4 h-4" />{" "}
              {process.env.WEBSITE_URL?.split("//")[1]}
            </Link>
            <Link
              href="mailto:shakeef.rakin321@gmail.com"
              className="items-center flex gap-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              title="Email Me"
              aria-label="Email Me"
            >
              <MdMail className="w-4 h-4" />
              shakeef.rakin321@gmail.com
            </Link>
          </div>
          <hr className="my-5 max-w-lg" />
          <div className="flex  gap-4 items-center justify-around md:justify-start whitespace-nowrap text-white text-3xl">
            {socialLinks.map((link) => (
              <Link
                className="items-center flex gap-2 hover:scale-[1.1] duration-300"
                href={link.url}
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                title={link.title}
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
