import blogs from "../../../../_data/blogs.json";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Blogs() {
  return (
    <div className="flex-1 flex flex-col text-left gap-y-8">
      {blogs
        .sort(
          (a, b) =>
            new Date(b.dateOfPublication).getTime() -
            new Date(a.dateOfPublication).getTime()
        )
        .slice(0, 3)
        .map((blog, index) => (
          <div key={blog.id}>
            <Link
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
                dolorem, beatae facere quibusdam porro vero, voluptates corrupti
                ipsam molestias? Labore, quidem magni.
              </p>
              <button
                className="py-2 px-4 mt-4 rounded-lg shadow group-hover:shadow-primary duration-150 active:scale-[0.98] font-heading text-[9px] lg:text-xs font-semibold flex items-center gap-2 text-white group-hover:text-primary"
                aria-label="Read Story"
              >
                Read The Article <FaArrowRight />
              </button>
            </Link>
            <hr className={`mt-4 ${index === 2 && "hidden"}`} />
          </div>
        ))}
    </div>
  );
}
