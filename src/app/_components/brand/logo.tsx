import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/" aria-label="Homepage" className="flex items-center">
        <Image
          src="/logos/logo.png"
          width={40}
          height={40}
          alt="Website Logo"
          priority
        />
        <span className="font-bold text-text font-heading text-lg relative">
          akin
          <span className="text-[0.6rem] -top-2 absolute">®</span>
        </span>
      </Link>
    </>
  );
}
