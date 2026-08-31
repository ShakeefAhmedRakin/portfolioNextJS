import { siteSocials } from "@/content/site-socials";
import { expertiseContent } from "@/content/home/expertise-section";
import { skillSets } from "@/content/skills/skills";
import { getWebsiteUrl } from "@/lib/utils";

export function getSiteSameAs(): string[] {
  return [getWebsiteUrl(), ...siteSocials.map((social) => social.url)];
}

export function getExpertiseAndSkillTerms(): string[] {
  return [
    ...expertiseContent.expertise.map((item) => item.title),
    ...expertiseContent.expertise.flatMap((item) => item.points),
    ...skillSets.map((group) => group.title),
    ...skillSets.flatMap((group) => group.skills.map((skill) => skill.name)),
  ];
}
