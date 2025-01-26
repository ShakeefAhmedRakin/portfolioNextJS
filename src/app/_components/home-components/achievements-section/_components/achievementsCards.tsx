import awards from "../../../../_data/awards.json";
import Image from "next/image";

export default function AchievementsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-x-12 xl:gap-x-20 mt-10 px-10 md:px-0">
      {awards
        .filter((award) => award.isFeatured)
        .map((award, index) => (
          <div className="aspect-square relative" key={index}>
            <Image
              key={index}
              src={award.photo}
              fill
              draggable={false}
              alt={award.title}
            ></Image>
          </div>
        ))}
    </div>
  );
}
