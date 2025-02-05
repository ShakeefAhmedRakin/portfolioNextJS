"use client";
import useBlogs from "@/app/_components/blogs/useBlogs";
import Link from "next/link";
import { LuLoader2 } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import Image from "next/image";
import MediumButton from "./mediumButton";

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
  } = useBlogs({ maxBlogs: 10 });

  return (
    <>
      <div>
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
                        className="group text-text"
                        aria-label={`Read Blog ${article.title}`}
                        title={`Read Blog ${article.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h2 className="font-heading text-base md:text-lg lg:text-xl text-left font-bold group-hover:underline">
                          {article.title}
                        </h2>
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
                  <h2 className="font-heading text-xl font-bold text-center text-text py-24">
                    No Blogs Published Yet!
                  </h2>
                </>
              )}
              <div className="block md:hidden">
                <MediumButton></MediumButton>
              </div>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Blogs;
