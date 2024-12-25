import NavigationDropDown from "./navigationdropdown";
import { ThemeSwitcher } from "./theme.switcher";
import NavigationLinks from "./navigation.links";
import Logo from "../brand/logo";
import NextBreadcrumb from "./breadcrumbs";
import { ButtonPrimaryFilled } from "../ui/Buttons";

export default function Navbar() {
  return (
    <header
      className="fixed w-full top-0 backdrop-blur bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-70 z-50 shadow dark:shadow-primary"
      aria-label="Main Navigation"
    >
      <nav
        role="navigation"
        className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-6"
        aria-labelledby="main-navigation-label"
      >
        <h1 id="main-navigation-label" className="sr-only">
          Main Navigation
        </h1>
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
              className="font-heading font-light text-text gap-4 xl:gap-8 text-sm hidden w-full justify-center lg:flex"
              role="menubar"
              aria-label="Primary Navigation Links"
            >
              <NavigationLinks isDropDownLinks={false} />
            </ul>
          </div>

          {/* Navbar End */}
          <div className="flex items-center justify-end gap-2">
            {/* Theme Switcher */}
            <div aria-label="Toggle Theme">
              <ThemeSwitcher />
            </div>
            {/* Get In Touch Button */}
            <ButtonPrimaryFilled href="/get-in-touch" ariaLabel="Contact Me">
              Get In Touch
            </ButtonPrimaryFilled>

            {/* Navigation Dropdown */}
            <div className="lg:hidden">
              <NavigationDropDown />
            </div>
          </div>
        </div>
      </nav>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
        <NextBreadcrumb
          homeElement={"Home"}
          separator={<span aria-hidden="true"> {`>`} </span>}
          capitalizeLinks
          activeClasses="text-primary hover:underline cursor-pointer"
          listClasses="hover:underline"
        />
      </div>
    </header>
  );
}
