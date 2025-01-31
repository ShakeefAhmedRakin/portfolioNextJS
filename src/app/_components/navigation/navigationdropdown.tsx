"use client";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import NavigationLinks from "./navigation.links";
import Logo from "../brand/logo";
import { ButtonPrimaryFilled } from "../ui/Buttons";

export default function NavigationDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLinkClick = () => {
    closeDropdown();
  };

  const closeDropdown = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300); // Match duration with CSS transition
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Ensure the <html> element is also restricted
      setIsAnimating(true);
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto"; // Restore the <html> element overflow
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto"; // Cleanup when component unmounts
    };
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="aspect-square rounded-full text-2xl border-none text-text hover:text-background hover:bg-primary-lighter border h-9 w-9 flex justify-center items-center"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="dropdown-navigation"
      >
        <RxHamburgerMenu />
      </button>
      {isOpen && (
        <div
          id="dropdown-navigation"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dropdown-navigation-logo"
          className={`fixed w-screen h-screen z-50 flex flex-col items-center justify-center inset-0 bg-white dark:bg-black bg-opacity-95 dark:bg-opacity-90 backdrop-blur duration-300 transition-opacity ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "opacity 0.3s ease-in-out" }}
          onAnimationEnd={() => {
            if (!isOpen) {
              setIsAnimating(false);
            }
          }}
        >
          <button
            onClick={closeDropdown}
            className="rounded-full border-none text-text hover:text-background hover:bg-primary-lighter absolute p-1 top-7 right-4 md:right-10 text-2xl"
            aria-label="Close navigation menu"
          >
            <IoClose />
          </button>
          <Logo handleLinkClick={handleLinkClick} />
          <ul
            className="p-4 mt-7 flex flex-col items-center text-text justify-center gap-7 font-heading font-medium"
            aria-label="Main navigation links"
          >
            <NavigationLinks
              isDropDownLinks={true}
              handleLinkClick={handleLinkClick}
            ></NavigationLinks>
            <div onClick={handleLinkClick} className="rounded-full">
              <ButtonPrimaryFilled
                href="/get-in-touch"
                ariaLabel="Contact Me"
                className="w-40"
              >
                Get In Touch
              </ButtonPrimaryFilled>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
