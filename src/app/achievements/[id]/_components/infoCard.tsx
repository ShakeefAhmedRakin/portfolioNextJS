import Image from "next/image";
import achievements from "../../../_data/achievements.json";
import { FaInfo } from "react-icons/fa";

export default function InfoCard({
  idOfCurrentAchievement,
}: {
  idOfCurrentAchievement: string;
}) {
  const achievement = achievements.find(
    (achievement) => achievement.id === idOfCurrentAchievement
  );
  return (
    <>
      <div>
        <h2 className="bg-gradient-to-br from-primary flex items-center gap-2 to-secondary text-white py-3 px-5 rounded-lg font-heading font-bold text-xs lg:text-lg mb-4">
          <FaInfo /> Information
        </h2>
        <div className="flex justify-center flex-col gap-1 p-3 items-center bg-white rounded-md border border-secondary">
          <div className="w-[30%] relative aspect-square">
            <Image
              fill={true}
              src={achievement?.photo ?? ""}
              priority={true}
              alt={achievement?.photo || "Achievement image"}
              draggable={false}
              className="rounded-md"
              title={"Achievement image"}
            ></Image>
          </div>
          <h3 className="text-center font-heading flex-1 text-sm font-bold">
            {achievement?.eventName}
          </h3>
          <h4 className="text-center font-heading text-primary flex-1 text-xs font-bold">
            {achievement?.position}
          </h4>
        </div>
      </div>
    </>
  );
}
