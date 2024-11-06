"use client";
import { useEffect, useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

export default function NavigationDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // State for managing animation

  const handleLinkClick = () => {
    closeDropdown();
  };

  const closeDropdown = () => {
    setIsAnimating(false); // Start fade-out animation
    setTimeout(() => {
      setIsOpen(false); // Set to false after animation completes
    }, 300); // Match this duration with your CSS transition duration
  };

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
      setIsAnimating(true); // Start fade-in animation
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
      // If isOpen is false, we don't need to set isAnimating here
    }

    // Clean up the effect on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navigationLinks = (
    <>
      <Link href="/about" onClick={handleLinkClick}>
        About
      </Link>
      <Link href="/projects" onClick={handleLinkClick}>
        Projects
      </Link>
      <Link href="/work" onClick={handleLinkClick}>
        Work
      </Link>
      <Link href="/publications" onClick={handleLinkClick}>
        Publications
      </Link>
      <Link href="/" onClick={handleLinkClick}>
        Achievements
      </Link>
    </>
  );

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="aspect-square rounded-full border-text border h-9 w-9 flex justify-center items-center"
      >
        <GiHamburgerMenu className="text-text text-lg" />
      </button>
      {isOpen && (
        <div
          className={`fixed w-screen h-screen z-50 flex flex-col items-center justify-center inset-0 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-20 backdrop-blur duration-300 transition-opacity ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "opacity 0.3s ease-in-out" }} // CSS transition for opacity
          onAnimationEnd={() => {
            if (!isOpen) {
              setIsAnimating(false); // Ensure it resets when closed
            }
          }}
        >
          <button
            onClick={closeDropdown}
            className="rounded-full border border-text absolute p-1 top-8 right-8"
          >
            <IoClose className="text-2xl text-text" />
          </button>
          <Image
            className="mb-10"
            src={"/logos/logolarge.png"}
            width={"160"}
            height={"200"}
            alt="website logo"
          ></Image>
          <ul className="p-4 flex flex-col items-center text-text justify-center gap-10 font-heading font-medium">
            {navigationLinks}
          </ul>
        </div>
      )}
    </div>
  );
}
