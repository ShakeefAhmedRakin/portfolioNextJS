import { defineCollection, s } from "velite";
import { projectCategoriesEnum } from "./types/enums";

export const achievements = defineCollection({
  name: "Achievements",
  pattern: "achievements/**/*.mdx",
  schema: s
    .object({
      title: s.string(),
      awardTitle: s.string(),
      awardCover: s.image(),
      isFeatured: s.boolean(),
      mainCover: s.image(),
      slug: s.slug("achievements"),
      date: s.isodate(),
      metadata: s.metadata(),
      excerpt: s.string(),
      content: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/achievements/${data.slug}`,
    })),
});

export const workExperiences = defineCollection({
  name: "Work",
  pattern: "workExperience/**/*.mdx",
  schema: s.object({
    slug: s.slug("works"),
    position: s.string(),
    tags: s.array(s.string()).min(1),
    highlights: s.array(s.string()).min(1),
    company: s.string(),
    companyLink: s.string().nullable(),
    isActive: s.boolean(),
    startDate: s.isodate(),
    endDate: s.isodate().nullable(),
    content: s.mdx(),
  }),
});

export const projects = defineCollection({
  name: "Projects",
  pattern: "projects/**/index.mdx",
  schema: s
    .object({
      slug: s.slug("projects"),
      title: s.string(),
      subTitle: s.string(),
      category: s.enum(projectCategoriesEnum),
      date: s.isodate(),
      tags: s.array(s.string()).min(1),
      thumbnail: s.image(),
      isFeatured: s.boolean(),
      isOngoing: s.boolean(),
      workId: s.string().nullable(),
      excerpt: s.string(),
      content: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/projects/${data.slug}`,
    })),
});

export const research = defineCollection({
  name: "Research",
  pattern: "research/**/*.mdx",
  schema: s
    .object({
      slug: s.slug("research"),
      title: s.string(),
      date: s.isodate(),
      isFeatured: s.boolean(),
      isPublished: s.boolean(),
      publisher: s
        .object({
          name: s.string(),
          link: s.string().nullable(),
          department: s.string(),
        })
        .nullable(),
      paperLinks: s
        .object({
          link: s.string().nullable(),
          linkToPDF: s.string().nullable(),
        })
        .nullable(),
      keywords: s.array(s.string()).min(1),
      authors: s.array(
        s.object({
          name: s.string(),
          title: s.string(),
          link: s.string().nullable(),
        }),
      ),
      abstract: s.string(),
      content: s.mdx(),
      excerpt: s.string(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/research/${data.slug}`,
    })),
});
