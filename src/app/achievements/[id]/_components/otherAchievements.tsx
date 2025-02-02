import { GiAchievement } from "react-icons/gi";
import achievements from "../../../_data/achievements.json";
import Link from "next/link";
import Image from "next/image";

export default function OtherAchievements({
  idOfCurrentAchievement,
}: {
  idOfCurrentAchievement: string;
}) {
  return (
    <>
      <div>
        <h2 className="bg-gradient-to-br from-primary flex items-center gap-2 to-secondary text-white py-3 px-5 rounded-lg font-heading font-bold text-xs lg:text-lg mb-4">
          <GiAchievement />
          Other Achievements
        </h2>

        {achievements
          .filter((achievement) => achievement.id !== idOfCurrentAchievement)
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .slice(0, 3)
          .map((achievement) => (
            <div key={achievement.id}>
              <Link
                className="group text-text"
                href={`/achievements/${achievement.id}`}
                aria-label={`Read article ${achievement.blog.title}`}
                title={`Read article ${achievement.blog.title}`}
              >
                <div className="aspect-[16/7] relative rounded-md">
                  <Image
                    fill={true}
                    src={achievement?.mainImage?.url ?? ""}
                    priority={true}
                    alt={achievement?.mainImage?.alt || "Achievement image"}
                    draggable={false}
                    className="object-cover rounded-md"
                    title={achievement?.mainImage?.alt || "Achievement image"}
                  ></Image>
                </div>
                <div className="px-1">
                  <h3 className="font-heading font-bold mt-2 line-clamp-2 group-hover:underline text-sm lg:text-sm">
                    {achievement?.blog?.title}
                  </h3>
                </div>
              </Link>
              <hr className="my-3.5 invisible" />
            </div>
          ))}
      </div>
    </>
  );
}
