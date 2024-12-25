import Image from "next/image";
import ContactForm from "../_components/getintouch/contactform";
import { MdMail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="bg-backgroundDark">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-16">
        <h1 className="font-heading text-text font-bold text-lg md:text-xl xl:text-3xl mb-4">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-10">
          {/* CONTACT FORM */}
          <div className="flex-1">
            <p className="font-body font-light text-text text-xs lg:text-base mb-4">
              {`I'm thrilled to connect with you! Whether you have a project in
              mind, want to collaborate, or simply want to say hello, feel free
              to reach out. You can contact me through the following channels.`}
            </p>
            <ContactForm />
          </div>
          {/* LINKS */}
          <div className="flex justify-center items-center flex-col flex-1">
            <div className="aspect-square rounded-full max-w-[250px] w-full relative border-secondary shadow-secondary shadow border-2">
              <Image
                src={"/hero.jpg"}
                fill={true}
                alt="photo"
                draggable={false}
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
        </div>
      </div>
    </section>
  );
}
