import Logo from "../brand/logo";
import Link from "next/link";
import { socialLinks } from "@/app/_data/socialLinks";
import NavigationLinks from "../../_data/navigationLinks.json";

export default function Footer() {
  return (
    <footer className="w-full bg-backgroundAlt" role="contentinfo">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 pt-16 md:pt-20 pb-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Social Links */}
          <section className="space-y-8 xl:col-span-1 flex flex-col items-center md:items-start">
            <div className="w-fit">
              <Logo isFooter />
            </div>
            <p className="text-white font-body text-xs md:text-base text-center md:text-left">
              Full Stack Engineer | Dhaka, Bangladesh <br /> Web Apps & AI
              Solutions
            </p>
            <nav aria-label="Social Links" className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="text-gray-300 hover:text-white text-[28px]"
                  title={link.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                >
                  <span className="sr-only">{link.ariaLabel}</span>
                  {link.icon}
                </Link>
              ))}
            </nav>
          </section>

          {/* Navigation Links */}
          <section className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-xs md:text-sm font-semibold font-heading text-white tracking-wider uppercase">
                Navigation
              </h3>
              <ul className="mt-4 flex flex-col gap-y-2 md:gap-y-4 text-gray-200 font-body text-xs md:text-sm">
                {NavigationLinks.filter((link) => link.isShownOnFooterNav).map(
                  (link, index) => (
                    <li key={index}>
                      <Link
                        href={link.route}
                        title={link.label}
                        className="hover:underline"
                        aria-label={link["aria-label"]}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-xs md:text-sm font-semibold font-heading text-white tracking-wider uppercase">
                Resources
              </h3>
              <ul className="mt-4 flex flex-col gap-y-2 md:gap-y-4 text-gray-200 font-body text-xs md:text-sm">
                {NavigationLinks.filter(
                  (link) => link.isShownOnFooterResources
                ).map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.route}
                      title={link.label}
                      className="hover:underline"
                      aria-label={link["aria-label"]}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
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
