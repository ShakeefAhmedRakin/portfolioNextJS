import Image from "next/image";
import AnimatedTitle from "./_components/titleanimation";
import { ButtonPrimaryFilled, ButtonSecondaryFilled } from "../../ui/Buttons";
import { socialLinks } from "../../../_data/socialLinks";
import Link from "next/link";
import LayoutWrapper from "../../wrappers/LayoutWrapper";
import personalData from "../../../_data/personalData.json";

export default function Hero() {
  return (
    <>
      <LayoutWrapper className="relative bg-backgroundDark bg-[url('/backgroundhero.png')] bg-cover bg-center xl:py-28 fade-in">
        <div className="flex flex-col-reverse z-40 md:flex-row items-center gap-8 lg:gap-20">
          <div className="flex-1">
            <AnimatedTitle
              text={personalData.Person.Title}
              delay={0.035}
              startDelay={0}
              className="font-heading font-bold text-text text-lg md:text-2xl xl:text-4xl"
            ></AnimatedTitle>
            <AnimatedTitle
              text={personalData.Person.FullName}
              delay={0.035}
              startDelay={0.3}
              className="font-heading my-1 md:my-4 font-bold text-primary text-2xl md:text-3xl xl:text-5xl whitespace-nowrap"
            ></AnimatedTitle>
            <p className="font-body text-sm xl:text-base text-text leading-[25px] md:leading-[30px] xl:leading-[32px] fade-in-delayed">
              {personalData.Person.Description}
            </p>
            <div className="flex gap-2 mt-5 fade-in-delayed max-w-[450px]">
              <ButtonPrimaryFilled
                href="/about"
                ariaLabel="Learn About Me"
                className="w-full"
              >
                About Me
              </ButtonPrimaryFilled>
              <ButtonSecondaryFilled
                href="/get-in-touch"
                ariaLabel="Contact Me"
                className="w-full"
              >
                Get In Touch
              </ButtonSecondaryFilled>
            </div>
            {/* SOCIAL LINKS */}
            <div className="flex justify-center md:justify-start mt-6 gap-10 fade-in-delayed ml-0 md:ml-4 flex-wrap text-[26px] md:text-2xl xl:text-3xl">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={link.ariaLabel}
                  className="p-2 rounded-full text-text opacity-80 border border-transparent hover:text-primary hover:border-primary duration-300 active:scale-[0.9]"
                >
                  <span className="sr-only">{link.ariaLabel}</span>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="fade-in-delayed flex justify-center items-center aspect-square max-w-[250px] lg:max-w-sm w-full">
            <div className="relative aspect-square w-full">
              <Image
                src={"/hero.jpg"}
                draggable={false}
                fill={true}
                alt="photo"
                className="aspect-square z-10 border border-primary shadow-primary shadow-md object-cover rounded-full"
              ></Image>
            </div>
          </div>
        </div>
      </LayoutWrapper>
      <div className="py-0.5 bg-gradient-to-r from-primary to-secondary"></div>
    </>
  );
}
