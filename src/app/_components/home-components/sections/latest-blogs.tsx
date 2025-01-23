import LayoutWrapper from "../../wrappers/LayoutWrapper";
import blogs from "../../../_data/blogs.json";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function LatestBlogs() {
  return (
    <>
      <LayoutWrapper className="bg-[#060720] dark:bg-[#070707]">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-x-16 gap-y-2 text-center md:text-left">
          <div className="whitespace-nowrap max-w-none md:max-w-[200px] lg:max-w-xs xl:max-w-sm w-full">
            <h2 className="font-heading font-bold text-primary text-xl lg:text-4xl">
              Blogs
            </h2>
            <h3 className="font-heading font-bold text-base lg:text-xl text-white mt-2">
              Latest Articles
            </h3>
            <hr className="my-2" />
          </div>
          <div className="flex-1 flex flex-col text-left gap-y-8">
            {blogs
              .sort(
                (a, b) =>
                  new Date(b.dateOfPublication).getTime() -
                  new Date(a.dateOfPublication).getTime()
              )
              .slice(0, 3)
              .map((blog) => (
                <Link
                  key={blog.id}
                  className="group"
                  href={blog.linkToBlog}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View Blog ${blog.title}`}
                >
                  <p className="text-white opacity-70 font-heading mb-0.5 text-xs lg:text-sm">
                    {new Date(blog?.dateOfPublication ?? "").toLocaleDateString(
                      "en-US",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }
                    )}{" "}
                    - {blog.minutes} minutes read
                  </p>
                  <h4 className="text-white font-heading font-semibold line-clamp-2 text-lg lg:text-xl group-hover:text-primary duration-150">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur labor
                  </h4>
                  <p className="text-white font-body line-clamp-3 mt-3 opacity-90 text-sm lg:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, ex? Illo ex cumque culpa accusantium recusandae sit
                    dolorem, beatae facere quibusdam porro vero, voluptates
                    corrupti ipsam molestias? Labore, quidem magni.
                  </p>
                  <button
                    className="py-2 px-4 mt-4 rounded-lg shadow group-hover:shadow-primary duration-150 active:scale-[0.98] font-heading text-[9px] lg:text-xs font-semibold flex items-center gap-2 text-white group-hover:text-primary"
                    aria-label="Read Story"
                  >
                    Read The Article <FaArrowRight />
                  </button>
                </Link>
              ))}
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
