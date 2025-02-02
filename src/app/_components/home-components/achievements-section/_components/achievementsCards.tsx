import achievements from "../../../../_data/achievements.json";
import Image from "next/image";

export default function AchievementsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-x-12 xl:gap-x-20 mt-10 px-10 md:px-0">
      {achievements
        .filter((achievement) => achievement.isFeatured)
        .map((achievement, index) => (
          <div className="aspect-square relative" key={index}>
            <Image
              key={index}
              src={achievement.photo}
              fill
              draggable={false}
              alt={achievement.title}
            ></Image>
          </div>
        ))}
    </div>
  );
}
