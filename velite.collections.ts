import { defineCollection, s } from "velite";

export const achievements = defineCollection({
  name: "Achievements",
  pattern: "achievements/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      awardTitle: s.string().max(99),
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

export const projects = defineCollection({
  name: "Projects",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      slug: s.slug("projects"),
      title: s.string().max(99),
      subTitle: s.string().max(99),
      category: s.string().max(99),
      date: s.isodate(),
      tags: s.array(s.string()).min(1),
      thumbnail: s.image(),
      isFeatured: s.boolean(),
      isOngoing: s.boolean(),
      workId: s.string().nullable(),
      excerpt: s.excerpt(),
      content: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/projects/${data.slug}`,
    })),
});

export const workExperiences = defineCollection({
  name: "Work",
  pattern: "workExperience/**/*.mdx",
  schema: s.object({
    slug: s.slug("works"),
    position: s.string().max(99),
    tags: s.array(s.string()).min(1),
    company: s.string().max(99),
    companyLink: s.string().max(99).nullable(),
    isActive: s.boolean(),
    startDate: s.isodate(),
    endDate: s.isodate().nullable(),
    content: s.mdx(),
  }),
});
