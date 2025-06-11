import { Achievements, Projects, Research } from "@/.velite";
import SiteConfig from "@/content/site-config";
import { generateOgImageUrl } from "./generators/generate-open-graph-image";
import { siteNavigationMap } from "@/content/site-navigation";

const SiteMetadata = {
  HOME: {
    title: `${SiteConfig.fullName} | ${SiteConfig.title}`,
    description: `${SiteConfig.heroDescription}`,
    openGraphImageUrl: generateOgImageUrl({
      title: SiteConfig.fullName,
      subtitle: SiteConfig.title,
    }),
    pathParam: siteNavigationMap.HOME.href,
  },
  ABOUT: {
    title: `About Me | ${SiteConfig.fullName}`,
    description: `Learn about ${SiteConfig.fullName}, a ${SiteConfig.title} from ${SiteConfig.location}. Explore his background, experience and technical expertise.`,
    openGraphImageUrl: generateOgImageUrl({
      title: "About Me",
      subtitle: SiteConfig.fullName,
    }),
    pathParam: siteNavigationMap.ABOUT.href,
  },
  ACHIEVEMENTS: {
    title: `Achievements | ${SiteConfig.fullName}`,
    description: `Explore the achievements and accomplishments of ${SiteConfig.fullName}, a ${SiteConfig.title} from ${SiteConfig.location}.`,
    openGraphImageUrl: generateOgImageUrl({
      title: "Achievements",
      subtitle: SiteConfig.fullName,
    }),
    pathParam: siteNavigationMap.ACHIEVEMENTS.href,
  },
  getAchievementMetadata(achievement: Achievements) {
    return {
      title: `${achievement.title} | ${SiteConfig.fullName}`,
      description: achievement.excerpt,
      openGraphImageUrl: achievement.mainCover.src,
      pathParam: achievement.permalink,
    };
  },
  PROJECTS: {
    title: `Projects | ${SiteConfig.fullName}`,
    description: `Explore all the completed and ongoing projects of ${SiteConfig.fullName}, a ${SiteConfig.title} from ${SiteConfig.location}.`,
    openGraphImageUrl: generateOgImageUrl({
      title: "Projects",
      subtitle: SiteConfig.fullName,
    }),
    pathParam: siteNavigationMap.PROJECTS.href,
  },
  getProjectMetadata(project: Projects) {
    return {
      title: `${project.title} | ${SiteConfig.fullName}`,
      description: project.excerpt,
      openGraphImageUrl: project.thumbnail.src,
      pathParam: project.permalink,
    };
  },
  RESEARCH: {
    title: `Research | ${SiteConfig.fullName}`,
    description: `Explore the research projects of ${SiteConfig.fullName}, a ${SiteConfig.title} from ${SiteConfig.location}.`,
    openGraphImageUrl: generateOgImageUrl({
      title: "Research",
      subtitle: SiteConfig.fullName,
    }),
    pathParam: siteNavigationMap.RESEARCH.href,
  },
  getResearchMetadata(research: Research) {
    return {
      title: `${research.title} | ${SiteConfig.fullName}`,
      description: research.excerpt,
      openGraphImageUrl: generateOgImageUrl({
        subtitle: research.title,
      }),
      pathParam: research.permalink,
    };
  },
  LICENSE: {
    title: `License and Attribution | ${SiteConfig.fullName}`,
    description: `Find out how you can use, share and attribute the content and code of ${SiteConfig.fullName}, a ${SiteConfig.title} from ${SiteConfig.location}.`,
    openGraphImageUrl: generateOgImageUrl({
      title: "License and Attribution",
      subtitle: SiteConfig.fullName,
    }),
    pathParam: siteNavigationMap.LICENSE.href,
  },
  // NOT FOUND METADATA
  NOT_FOUND: {
    title: "Page Not Found",
    description: "Sorry, the page you are looking for does not exist.",
    openGraphImageUrl: "/images/og_images/not_found.png",
    pathParam: "/404",
    robots: "noindex, nofollow",
  },
};

export default SiteMetadata;
