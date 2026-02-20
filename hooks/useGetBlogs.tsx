"use client";
import { siteSocialMap } from "@/content/site-socials";
import { Article } from "@/types/blogs";
import { useState, useEffect } from "react";

const extractFirstImageSrc = (html: string): string => {
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : "";
};

const useBlogs = ({ maxBlogs }: { maxBlogs?: number } = {}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${siteSocialMap.MEDIUM.url.split("@")[1]}`,
        );
        const data = await response.json();
        const fetchedArticles = (
          maxBlogs ? data.items.slice(0, maxBlogs) : data.items
        ) as Article[];

        const enrichedArticles = fetchedArticles.map((article) => ({
          ...article,
          thumbnail: article.thumbnail || extractFirstImageSrc(article.content),
        }));

        setArticles(enrichedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError("Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [maxBlogs]);

  return { articles, loading, error };
};

export default useBlogs;
