import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import AnimatedTitle from "../animations/titleanimation";

export default function Hero() {
  return (
    <section className="relative bg-backgroundDark bg-[url('/backgroundhero.png')] bg-cover bg-center py-8 lg:py-44 fade-in">
      <div className="flex flex-col-reverse z-40 lg:flex-row items-center gap-8 md:gap-20 container mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
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
          <div className="flex max-w-sm gap-1 justify-between mt-8 fade-in-delayed">
            <Link href={"/resume"} className="w-full rounded-full">
              <button className="btn bg-primary text-background rounded-full border-transparent shadow-none relative  group hover:bg-primary hover:text-background hover:border-primary w-full">
                View Resume
                <IoIosArrowForward className="absolute right-2 text-lg opacity-0 group-hover:opacity-100 duration-300" />
              </button>
            </Link>
            <Link href={"/about"} className="w-full rounded-full">
              <button className="btn bg-transparent text-primary border-primary rounded-full shadow-none hover:bg-primary-lighter hover:border-primary relative  group w-full">
                Learn More
                <IoIosArrowForward className="absolute right-2 text-lg opacity-0 group-hover:opacity-100 duration-300" />
              </button>
            </Link>
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
          <div className="absolute w-[150%] max-w-[100vw] -bottom-16 md:-bottom-20">
            {/* <HeroAnimation></HeroAnimation> */}
          </div>
        </div>
      </div>
    </section>
  );
}
