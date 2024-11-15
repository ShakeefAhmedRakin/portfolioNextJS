import Link from "next/link";
import NavigationDropDown from "./navigationdropdown";
import { ThemeSwitcher } from "./theme.switcher";
import NavigationLinks from "./navigation.links";
import Logo from "../brand/logo";

export default function Navbar() {
  return (
    <>
      <nav
        className="fixed w-full top-0 bg-background z-50 shadow-sm"
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-6">
          {/* Navbar */}
          <div className="flex items-center justify-between">
            {/* Navbar Start - Logo */}
            <div>
              <Logo />
            </div>

            {/* Navbar Middle */}
            <div className="flex items-center justify-center flex-1">
              {/* Navbar Navigation Links */}
              <ul
                className="font-heading u font-light text-text gap-4 xl:gap-8  text-sm hidden w-full justify-center lg:flex"
                role="menubar"
              >
                <NavigationLinks isDropDownLinks={false}></NavigationLinks>
              </ul>
            </div>
            {/* Navbar End */}
            <div className="flex items-center justify-end gap-2">
              {/* Theme Switcher */}
              <div aria-label="Toggle Theme">
                <ThemeSwitcher />
              </div>
              {/* Contact Button */}
              <Link href="/contact" aria-label="Contact Page">
                <button
                  className="btn rounded-full bg-transparent border-primary text-primary shadow-none hover:bg-primary-lighter hover:text-primary hover:border-primary hidden md:flex"
                  aria-label="contact"
                >
                  Get In Touch
                </button>
              </Link>

              {/* Navigation Dropdown */}
              <div className="lg:hidden" aria-label="Navigation Menu">
                <NavigationDropDown />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
