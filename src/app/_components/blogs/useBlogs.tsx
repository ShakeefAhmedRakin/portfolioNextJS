"use client";
import { useState, useEffect } from "react";
import personalData from "../../_data/personalData.json";

const useBlogs = ({ maxBlogs }: { maxBlogs?: number | undefined }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${
            personalData.Person.MediumProfileLink.split("@")[1]
          }`
        );
        const data = await response.json();
        const fetchedArticles = maxBlogs
          ? data.items.slice(0, maxBlogs)
          : data.items;
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [maxBlogs]);

  return { articles, loading };
};

export default useBlogs;
