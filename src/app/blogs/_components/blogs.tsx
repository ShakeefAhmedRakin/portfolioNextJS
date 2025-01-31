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
                        className="group"
                        aria-label={`Read Blog ${article.title}`}
                        title={`Read Blog ${article.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h2 className="font-heading text-2xl text-left font-bold text-white group-hover:underline">
                          {article.title}
                        </h2>
                        <div className="flex gap-2 items-center text-white font-body font-light text-sm mt-3">
                          <Image
                            src={"/hero.jpg"}
                            width={20}
                            height={20}
                            alt="test"
                            className="rounded-full aspect-square object-cover"
                          ></Image>
                          <span className="text-white font-body font-light text-sm">
                            {article.author}
                          </span>
                          <IoMdStar className="text-yellow-500"></IoMdStar>
                          <span>
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
              <MediumButton></MediumButton>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Blogs;
