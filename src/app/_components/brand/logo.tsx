"use client";
import Link from "next/link";

export default function Logo({ isFooter = false, handleLinkClick = () => {} }) {
  return (
    <>
      <Link
        href="/"
        title="Homepage"
        aria-label="Homepage"
        className="flex items-center"
        onClick={handleLinkClick}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="192.000000pt"
          height="192.000000pt"
          viewBox="0 0 192.000000 192.000000"
          preserveAspectRatio="xMidYMid meet"
          className={`fill-primary w-[40px] h-[40px]`}
        >
          <g
            transform="translate(0.000000,192.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M0 1826 c0 -53 6 -91 21 -128 23 -59 85 -148 133 -191 74 -66 218
-125 277 -113 16 3 29 1 29 -4 0 -6 163 -10 446 -10 l446 0 34 -34 c28 -28 34
-42 34 -75 0 -33 -6 -47 -35 -76 l-36 -35 -129 0 c-84 0 -131 -4 -136 -11 -4
-7 86 -104 217 -235 251 -251 229 -240 326 -182 65 39 173 135 173 154 0 8 4
14 9 14 15 0 67 98 91 170 19 58 21 81 18 225 -3 156 -4 162 -36 229 -82 175
-217 293 -402 353 -50 16 -119 18 -767 21 l-713 3 0 -75z"
            />
            <path
              d="M90 1144 c0 -15 107 -125 716 -740 309 -312 327 -326 473 -364 65
-17 108 -20 338 -20 196 0 263 3 263 12 0 6 -71 84 -158 172 -87 89 -265 269
-394 401 -450 458 -424 433 -490 470 -81 46 -193 81 -229 72 -11 -3 -19 -1
-19 4 0 5 -107 9 -250 9 -221 0 -250 -2 -250 -16z"
            />
          </g>
        </svg>
        <span
          className={`font-bold ${
            isFooter ? "text-white" : "text-text"
          } font-heading text-lg relative`}
        >
          akin
          <span className="text-[0.6rem] -top-2 absolute">®</span>
        </span>
      </Link>
    </>
  );
}
