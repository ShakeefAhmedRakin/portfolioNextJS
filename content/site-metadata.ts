import { Achievements } from "@/.velite";
import SiteConfig from "./site-config";
import { generateOgImageUrl } from "@/lib/utils";
import { siteNavigationMap } from "./site-navigation";

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
      title: achievement.title,
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
