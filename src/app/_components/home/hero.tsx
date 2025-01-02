import Image from "next/image";
import AnimatedTitle from "../animations/titleanimation";
import { ButtonPrimaryFilled, ButtonSecondaryFilled } from "../ui/Buttons";
import { socialLinks } from "../../_data/socialLinks";
import Link from "next/link";
import LayoutWrapper from "../wrappers/LayoutWrapper";

export default function Hero() {
  return (
    <LayoutWrapper className="relative bg-backgroundDark bg-[url('/backgroundhero.png')] bg-cover bg-center py-10 fade-in">
      <div className="flex flex-col-reverse z-40 lg:flex-row items-center gap-8 md:gap-20">
        <div className="flex-1">
          <AnimatedTitle
            text="Full Stack Engineer"
            delay={0.035}
            startDelay={0}
            className="font-heading font-bold text-text text-lg md:text-2xl xl:text-4xl"
          ></AnimatedTitle>
          <AnimatedTitle
            text="Shakeef Ahmed Rakin"
            delay={0.035}
            startDelay={0.3}
            className="font-heading my-1 md:my-4 font-bold text-primary text-2xl md:text-3xl xl:text-5xl whitespace-nowrap"
          ></AnimatedTitle>
          <p className="font-body text-sm xl:text-base text-text leading-[25px] md:leading-[30px] xl:leading-[32px] fade-in-delayed">
            Full Stack Engineer from Dhaka, Bangladesh, skilled in developing
            web applications and integrating AI solutions. Experienced in
            machine learning projects, including natural language processing and
            computer vision.
          </p>
          <div className="flex gap-2 mt-5 fade-in-delayed max-w-[450px]">
            <ButtonPrimaryFilled
              href="/resume"
              ariaLabel="My Resume"
              className="w-full"
            >
              View Resume
            </ButtonPrimaryFilled>
            <ButtonSecondaryFilled
              href="/about"
              ariaLabel="About Me"
              className="w-full"
            >
              Learn More About Me
            </ButtonSecondaryFilled>
          </div>
          {/* SOCIAL LINKS */}
          <div className="flex justify-center md:justify-start mt-6 gap-10 fade-in-delayed ml-4 text-[26px] md:text-3xl">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={link.ariaLabel}
                className="p-3 rounded-full text-text opacity-80 border border-transparent hover:text-primary hover:border-primary duration-300 active:scale-[0.9]"
              >
                <span className="sr-only">{link.ariaLabel}</span>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center relative min-w-[250px] md:min-w-[300px] max-w-[250px] xl:max-w-sm w-full fade-in-delayed">
          <Image
            src={"/hero.jpg"}
            width={0}
            height={0}
            sizes="100vw"
            alt="photo"
            className="aspect-square z-10 border border-primary shadow-primary shadow object-cover rounded-full min-w-[250px] md:min-w-[300px] max-w-[250px] xl:max-w-sm w-full"
          ></Image>
        </div>
      </div>
    </LayoutWrapper>
  );
}
