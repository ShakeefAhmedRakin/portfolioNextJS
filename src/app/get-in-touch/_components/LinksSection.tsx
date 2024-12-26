import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
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
          <div className="flex items-center justify-center gap-2">
            <MdMail className="text-xl text-secondary" />
            <Link
              href="mailto:shakeef.rakin321@gmail.com"
              className="text-sm lg:text-base text-text opacity-90 underline hover:text-secondary font-medium font-heading"
            >
              shakeef.rakin321@gmail.com
            </Link>
          </div>
          <hr />
          {/* SOCIAL LINKS */}
          <div className="flex justify-center mt-6 gap-10 text-[26px] md:text-3xl">
            <Link
              href="https://github.com/ShakeefAhmedRakin"
              className="p-3 rounded-full text-text opacity-80 border border-transparent hover:text-secondary hover:border-secondary duration-300 active:scale-[0.9]"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <BsGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shakeef-ahmed-rakin"
              className="p-3 rounded-full text-text opacity-80 border border-transparent hover:text-secondary hover:border-secondary duration-300 active:scale-[0.9]"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <BsLinkedin />
            </Link>
            <Link
              href="https://stackoverflow.com/users/28897060/shakeef-ahmed-rakin"
              className="p-3 rounded-full text-text opacity-80 border border-transparent hover:text-secondary hover:border-secondary duration-300 active:scale-[0.9]"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <BsStackOverflow />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}