import Image from "next/image";
import Link from "next/link";
import NavigationDropDown from "./navigationdropdown";
import { ThemeSwitcher } from "./theme.switcher";

export default function Navbar() {
  const navigationLinks = (
    <>
      <Link href={"/about"}>About</Link>
      <Link href={"/about"}>Projects</Link>
      <Link href={"/about"}>Work</Link>
      <Link href={"/about"}>Publications</Link>
      <Link href={"/about"}>Achievements</Link>
    </>
  );
  return (
    <>
      <nav className="container mx-auto px-8 md:px-10 lg:px-20 xl:px-72 py-6">
        {/* Navbar */}
        <div className="flex items-center justify-between">
          {/* Navbar Start -  Logo */}
          <div>
            {/* Navbar Logo */}
            <Link href={"/"}>
              <Image
                className="hidden 2xl:flex"
                src={"/logos/logolarge.png"}
                width={"120"}
                height={"200"}
                alt="website logo"
              ></Image>
              <Image
                className="flex 2xl:hidden"
                src={"/logos/logosmall.png"}
                width={"35"}
                height={"35"}
                alt="website logo"
              ></Image>
            </Link>
          </div>
          {/* Navbar Middle */}
          <div className="flex items-center">
            {/* Navbar Navigation Links */}
            <ul className="font-heading text-sm gap-7 text-text lg:gap-9 font-medium hidden md:flex">
              {navigationLinks}
            </ul>
            {/* RESUME BUTTON */}
            <Link href={"/"} className="rounded-lg ml-5 lg:ml-10">
              <button className="btn border-none bg-gradient-to-br from-primary via-primary to-accent text-background shadow-md hover:border-none">
                Resume
              </button>
            </Link>
            {/* Theme Switcher */}
            <div className="mx-4">
              <ThemeSwitcher />
            </div>
            {/* Navigation Dropdown */}
            <div className="md:hidden">
              <NavigationDropDown />
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}
