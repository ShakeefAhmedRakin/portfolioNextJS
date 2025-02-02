import achievements from "../../../_data/achievements.json";
import Link from "next/link";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";

export default function Collaboration({
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
        <h2 className="bg-gradient-to-br from-secondary flex items-center gap-2 to-primary text-white py-3 px-5 rounded-lg font-heading font-bold text-xs lg:text-lg mb-4">
          <FaPeopleGroup />
          Collaboration
        </h2>
        <ul className="px-2 space-y-1">
          {achievement?.people?.map((person, index) => (
            <li
              key={index}
              className="flex items-center gap-x-2 font-body text-xs lg:text-sm text-text"
            >
              <IoPersonCircle className="text-secondary" />

              {person.link ? (
                <>
                  <Link
                    href={person.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View information about ${person.name}`}
                    title={`View information about ${person.name}`}
                    className="hover:underline hover:text-secondary"
                  >
                    {person.name}
                  </Link>
                </>
              ) : (
                <>
                  <span className="">{person.name}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
