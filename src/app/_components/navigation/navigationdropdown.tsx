"use client";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import NavigationLinks from "../navigation.links";
import Link from "next/link";

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
        className="aspect-square rounded-full border-text border h-9 w-9 flex justify-center items-center"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="dropdown-navigation"
      >
        <GiHamburgerMenu className="text-text text-lg" />
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
            className="rounded-full border border-text absolute p-1 top-8 right-8"
            aria-label="Close navigation menu"
          >
            <IoClose className="text-2xl text-text" />
          </button>
          <Link href={"/"} onClick={handleLinkClick}>
            <Image
              id="dropdown-navigation-logo"
              className="mb-10"
              src="/logos/logolarge.png"
              width={160}
              height={200}
              alt="Website logo"
              priority
            />
          </Link>
          <ul
            className="p-4 flex flex-col items-center text-text justify-center gap-10 font-heading font-medium"
            aria-label="Main navigation links"
          >
            <NavigationLinks
              isDropDownLinks={true}
              handleLinkClick={handleLinkClick}
            ></NavigationLinks>
          </ul>
        </div>
      )}
    </div>
  );
}
