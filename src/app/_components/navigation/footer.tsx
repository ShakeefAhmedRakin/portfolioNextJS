import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import Logo from "../brand/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#060720] dark:bg-[#070707]"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 pt-16 md:pt-20 pb-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Social Links */}
          <section className="space-y-8 xl:col-span-1 flex flex-col items-center md:items-start">
            <div className="w-fit">
              <Logo isFooter />
            </div>
            <p className="text-white font-body text-xs md:text-base">
              Full Stack Engineer | Dhaka, Bangladesh <br /> Web Apps & AI
              Solutions
            </p>
            <nav aria-label="Social Links" className="flex space-x-6">
              <Link
                href="https://github.com/ShakeefAhmedRakin"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                <BsGithub className="h-7 w-7" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/shakeef-ahmed-rakin"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <BsLinkedin className="h-7 w-7" aria-hidden="true" />
              </Link>
              <Link
                href="https://stackoverflow.com/users/28897060/shakeef-ahmed-rakin"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Stack Overflow profile"
              >
                <BsStackOverflow className="h-7 w-7" aria-hidden="true" />
              </Link>
            </nav>
          </section>

          {/* Navigation Links */}
          <section className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-xs md:text-sm font-semibold font-heading text-white tracking-wider uppercase">
                Navigation
              </h3>
              <ul className="mt-4 flex flex-col gap-y-2 md:gap-y-4 text-gray-200 font-body text-xs md:text-sm">
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:underline">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:underline">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="hover:underline">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="/achievements" className="hover:underline">
                    Achievements
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs md:text-sm font-semibold font-heading text-white tracking-wider uppercase">
                Resources
              </h3>
              <ul className="mt-4 flex flex-col gap-y-2 md:gap-y-4 text-gray-200 font-body text-xs md:text-sm">
                <li>
                  <Link href="/resume" className="hover:underline">
                    View Resume
                  </Link>
                </li>
                <li>
                  <Link href="/get-in-touch" className="hover:underline">
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-white font-body text-center text-xs whitespace-nowrap md:text-sm">
            &copy; {new Date().getFullYear()} Shakeef Ahmed Rakin. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
