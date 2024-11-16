import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function BlogNotFound() {
  return (
    <div className="py-56 px-4 flex flex-col gap-5 text-center items-center justify-center bg-background">
      <h1 className="text-primary font-body text-6xl font-bold">404</h1>
      <h2 className="text-text font-body text-3xl font-semibold">
        Blog Not Found
      </h2>
      <p className="text-text font-body font-extralight">
        {`Oops! The blog post you're looking for doesn't seem to exist.`}
      </p>
      <Link href={"/"} className="mx-auto rounded-full">
        <button className="btn bg-transparent text-primary px-10 border-primary rounded-full shadow-none hover:bg-primary-lighter hover:border-primary relative group">
          Go To Homepage
          <IoIosArrowForward className="absolute right-2 text-lg opacity-0 group-hover:opacity-100 duration-300" />
        </button>
      </Link>
    </div>
  );
}
