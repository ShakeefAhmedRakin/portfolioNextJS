import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type LogoProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Logo(props: LogoProps) {
  return (
    <Link href="/" className="text-2xl font-bold tracking-widest" {...props}>
      RAKIN
    </Link>
  );
}
