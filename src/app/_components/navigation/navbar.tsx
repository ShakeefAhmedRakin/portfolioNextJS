import Image from "next/image";
import Link from "next/link";
import NavigationDropDown from "./navigationdropdown";
import { ThemeSwitcher } from "./theme.switcher";
import NavigationLinks from "../navigation.links";

export default function Navbar() {
  return (
    <>
      <nav
        className="sticky top-0 bg-background shadow-sm shadow-primary z-50  transition-[background-color] duration-300"
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-8 md:px-10 lg:px-20 xl:px-40 2xl:px-72 py-6 ">
          {/* Navbar */}
          <div className="flex items-center justify-between">
            {/* Navbar Start - Logo */}
            <div>
              <Link href="/" aria-label="Homepage">
                <Image
                  className="hidden lg:flex"
                  src="/logos/logolarge.png"
                  width={120}
                  height={200}
                  alt="Website Logo Large"
                  priority
                />
                <Image
                  className="flex lg:hidden"
                  src="/logos/logosmall.png"
                  width={35}
                  height={35}
                  alt="Website Logo Small"
                  priority
                />
              </Link>
            </div>

            {/* Navbar End */}
            <div className="flex items-center">
              {/* Navbar Navigation Links */}
              <ul
                className="font-heading text-sm gap-7 text-text lg:gap-9 font-medium hidden md:flex"
                role="menubar"
              >
                <NavigationLinks isDropDownLinks={false}></NavigationLinks>
              </ul>

              {/* Resume Button */}
              <Link href="/resume" aria-label="Resume Page">
                <button
                  className="btn border-none bg-gradient-to-br from-primary via-primary to-accent text-background shadow-md hover:border-none rounded-lg ml-6"
                  aria-label="Resume"
                >
                  Resume
                </button>
              </Link>

              {/* Theme Switcher */}
              <div className="mx-4" aria-label="Toggle Theme">
                <ThemeSwitcher />
              </div>

              {/* Navigation Dropdown */}
              <div className="md:hidden" aria-label="Navigation Menu">
                <NavigationDropDown />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
