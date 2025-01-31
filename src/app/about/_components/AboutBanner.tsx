import { socialLinks } from "@/app/_data/socialLinks";
import Image from "next/image";
import Link from "next/link";
import { BiGlobe } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import ViewResumeButton from "./ViewResumeButton";
import personalData from "../../_data/personalData.json";

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
              {personalData.Person.FullName}
            </h2>
            <ViewResumeButton className="hidden md:flex" />
          </div>
          <h3 className="font-heading text-lg text-white mt-1 mb-5 md:mb-3">
            {personalData.Person.Title}
          </h3>
          <div className="flex flex-wrap gap-4 items-center max-w-md text-white font-body mb-2 text-sm">
            <div className="items-center flex gap-2">
              <IoLocationSharp className="w-4 h-4"></IoLocationSharp>{" "}
              {personalData.Person.Location}
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
            <span className="items-center flex gap-2">
              <MdMail className="w-4 h-4" />
              {personalData.Person.Email}
            </span>
          </div>
          <hr className="my-5 max-w-lg" />
          <div className="flex  gap-4 items-center justify-around md:justify-start whitespace-nowrap text-white text-2xl">
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
