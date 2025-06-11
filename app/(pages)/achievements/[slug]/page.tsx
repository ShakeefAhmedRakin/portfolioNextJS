import { achievements } from "@/.velite";

import { Badge } from "@/components/ui/badge";
import { MDXContent } from "@/components/ui/mdx-content";
import {
  paragraphVariants,
  TypographyBlockquote,
  TypographyH1,
} from "@/components/ui/typography";
import { ArticleWrapper } from "@/components/ui/wrappers";
import SiteMetadata from "@/metadata/site-metadata";
import { formatDateString } from "@/lib/utils";
import SetSchemaAchievementPage from "@/metadata/schemas/schemaAchievementPage";
import getMetadata from "@/metadata/utils/get-metadata";
import { Dot } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return achievements.map((achievement) => ({
    slug: achievement.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const achievement = achievements.find(
    (achievement) => achievement.slug === slug,
  );

  if (achievement) {
    return getMetadata(SiteMetadata.getAchievementMetadata(achievement));
  } else {
    return getMetadata(SiteMetadata.NOT_FOUND);
  }
}

export default async function AchievementDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const achievement = achievements.find(
    (achievement) => achievement.slug === slug,
  );

  if (!achievement) {
    return notFound();
  }

  return (
    <>
      <SetSchemaAchievementPage achievement={achievement} />
      <ArticleWrapper>
        <header className="intersect:animate-fade-up shadow-primary/5 intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once mb-4 space-y-4">
          <div className="bg-primary/5 relative aspect-video max-h-[450px] w-full">
            <Image
              src={achievement.mainCover.src}
              priority
              placeholder="blur"
              blurDataURL={achievement.mainCover.blurDataURL}
              alt={achievement.title}
              title={achievement.title}
              fill
              draggable={false}
              className="object-contain object-center"
            />
          </div>
          <hr className="border-primary/50" />
          <Badge variant={"outline"}>{achievement.awardTitle}</Badge>
          <TypographyH1>{achievement.title}</TypographyH1>
          <TypographyBlockquote className="text-foreground/70 py-3">
            {achievement.excerpt}
          </TypographyBlockquote>
          <div
            className={paragraphVariants({
              className: "text-foreground/70 flex items-center",
            })}
          >
            <time dateTime={achievement.date}>
              {formatDateString(achievement.date)}
            </time>
            <Dot />
            <p>{achievement.metadata.readingTime} minute read</p>
          </div>
          <hr className="border-primary/50" />
        </header>

        <div className="intersect:animate-fade-up shadow-primary/5 intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once">
          <MDXContent code={achievement.content} />
        </div>
      </ArticleWrapper>
    </>
  );
}
