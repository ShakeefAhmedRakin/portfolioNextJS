"use client";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import NavigationLinks from "./navigation.links";
import Link from "next/link";
import Logo from "../brand/logo";

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
      setIsAnimating(true);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
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
          className={`fixed w-screen h-screen z-50 flex flex-col items-center justify-center inset-0 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-20 backdrop-blur duration-300 transition-opacity ${
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
          <Logo />
          <ul
            className="p-4 flex flex-col items-center text-text justify-center gap-7 font-heading font-medium"
            aria-label="Main navigation links"
          >
            <NavigationLinks
              isDropDownLinks={true}
              handleLinkClick={handleLinkClick}
            ></NavigationLinks>
            <Link href="/resume" aria-label="Resume Page">
              <button
                className="btn rounded-full bg-secondary border-secondary hover:border-primary text-background hover:bg-primary flex md:hidden"
                aria-label="Resume"
              >
                Resume
              </button>
            </Link>
            <Link href="/contact" aria-label="Contact Page">
              <button
                className="btn rounded-full bg-transparent text-accent border-accent hover:bg-accent hover:text-background hover:border-accent flex md:hidden"
                aria-label="Contact"
              >
                Get In Touch
              </button>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
