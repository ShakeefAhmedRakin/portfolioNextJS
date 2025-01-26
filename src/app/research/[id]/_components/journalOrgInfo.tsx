import Image from "next/image";
import Link from "next/link";

interface JournalOrgInfoProps {
  image: string;
  name: string;
  link: string;
  department: string;
}

export default function JournalOrgInfo({
  journalOrOrg,
}: {
  journalOrOrg: JournalOrgInfoProps;
}) {
  return (
    <>
      {/* JOURNAL/ORG */}
      <div className="bg-background shadow rounded-lg flex items-center flex-col justify-center gap-2 p-5">
        <Image
          src={journalOrOrg.image}
          height={100}
          width={100}
          alt={`${journalOrOrg.name}`}
          draggable={false}
          className="rounded-lg"
          priority
        ></Image>
        <h3>
          <Link
            href={journalOrOrg.link}
            className="text-center text-text font-heading font-bold hover:underline max-w-[400px]"
            target="_blank"
            rel="noopener noreferrer"
            title={`View ${journalOrOrg.name}`}
            aria-label={`View ${journalOrOrg.name}`}
          >
            {journalOrOrg.name}
          </Link>
        </h3>
        <h4 className="text-center text-text max-w-[400px] font-body">
          {journalOrOrg.department}
        </h4>
      </div>
    </>
  );
}
