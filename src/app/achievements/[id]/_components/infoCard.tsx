import Image from "next/image";
import achievements from "../../../_data/achievements.json";
import { FaInfo, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

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
        {achievement?.linkedInPost && (
          <Link
            href={achievement?.linkedInPost}
            target="_blank"
            rel="noopener noreferrer"
            title="View Post On LinkedIn"
            aria-label="View Post On LinkedIn"
            className="py-2 px-4 rounded-lg shadow mt-4 bg-[#0A66C2] hover:shadow-secondary duration-150 active:scale-[0.98] font-heading text-[9px] lg:text-xs font-semibold flex items-center gap-2 text-white justify-center"
          >
            LinkedIn <FaLinkedin />
          </Link>
        )}
      </div>
    </>
  );
}
