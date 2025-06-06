import { Achievements } from "@/.velite";
import SiteConfig from "./site-config";

const SiteMetadata = {
  HOME: {
    title: `${SiteConfig.fullName} | ${SiteConfig.title}`,
    description: `${SiteConfig.heroDescription}`,
    openGraphImageUrl: `/images/og_images/home.png`,
    pathParam: `/`,
  },
  ABOUT: {
    title: `About Me | ${SiteConfig.fullName}`,
    description: `Learn about ${SiteConfig.fullName}, a ${SiteConfig.title} from ${SiteConfig.location}. Explore his background, experience and technical expertise.`,
    openGraphImageUrl: `/images/og_images/about.png`,
    pathParam: `/about`,
  },
  ACHIEVEMENTS: {
    title: `Achievements | ${SiteConfig.fullName}`,
    description: `Explore the achievements and accomplishments of ${SiteConfig.fullName}, a ${SiteConfig.title} from ${SiteConfig.location}.`,
    openGraphImageUrl: `/images/og_images/achievements.png`,
    pathParam: `/achievements`,
  },
  getAchievementMetadata(achievement: Achievements) {
    return {
      title: achievement.title,
      description: achievement.excerpt,
      openGraphImageUrl: achievement.mainCover.src,
      pathParam: achievement.permalink,
    };
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
