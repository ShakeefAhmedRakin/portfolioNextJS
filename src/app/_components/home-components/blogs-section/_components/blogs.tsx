"use client";
import useBlogs from "@/app/_components/blogs/useBlogs";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { LuLoader2 } from "react-icons/lu";

const Blogs = () => {
  const {
    articles,
    loading,
  }: {
    articles: {
      guid: string;
      link: string;
      title: string;
      pubDate: string;
      author: string;
    }[];
    loading: boolean;
  } = useBlogs({ maxBlogs: 3 });

  return (
    <>
      <div className="w-full">
        {loading ? (
          <>
            <div className="flex justify-center flex-col text-text items-center py-44">
              <h2 className="font-heading  mb-4 text-sm md:text-base">
                Fetching Latest Blogs
              </h2>
              <LuLoader2 className="text-2xl md:text-3xl animate-spin"></LuLoader2>
            </div>
          </>
        ) : (
          <>
            <ul className="flex flex-col gap-y-8">
              {articles.length > 0 ? (
                <>
                  {articles.map((article, index) => (
                    <li key={article.guid}>
                      <Link
                        href={article.link}
                        className="group text-white"
                        aria-label={`Read Blog ${article.title}`}
                        title={`Read Blog ${article.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h4 className="font-heading text-base md:text-lg lg:text-xl text-left font-bold group-hover:underline">
                          {article.title}
                        </h4>
                        <div className="flex gap-2 items-center font-body font-light text-sm mt-3">
                          <Image
                            src={"/hero.jpg"}
                            width={18}
                            height={18}
                            alt="test"
                            className="rounded-full aspect-square object-cover"
                          ></Image>
                          <span className="font-body font-light text-xs md:text-sm">
                            {article.author}
                          </span>
                          <IoMdStar className="text-yellow-500"></IoMdStar>
                          <span className="text-xs md:text-sm">
                            {new Date(article.pubDate).toLocaleDateString(
                              "en-US",
                              {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      </Link>
                      <hr
                        className={`mt-8 ${
                          index === articles.length - 1 && "hidden"
                        }`}
                      />
                    </li>
                  ))}
                </>
              ) : (
                <>
                  <h2 className="font-heading text-xl font-bold text-center text-white py-24">
                    No Blogs Published Yet!
                  </h2>
                </>
              )}
              <Link
                href={"/blogs"}
                aria-label="Read All Blogs"
                title="Read All Blogs"
                className="w-full flex justify-center gap-2 items-center font-heading font-bold text-white active:scale-[0.98] rounded-lg py-2 md:py-3  hover:bg-white hover:text-black border shadow-inner duration-300 mt-3 text-xs"
              >
                View All Blogs <FaArrowRight></FaArrowRight>
              </Link>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Blogs;
