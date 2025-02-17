import Link from "next/link";

interface Author {
  name: string;
  link?: string | null;
  titleFirst: string;
  titleSecond: string;
}

interface AuthorListProps {
  authors: Author[];
  journalOrOrgName: string | undefined;
}

export default function AuthorList({
  authors,
  journalOrOrgName,
}: AuthorListProps) {
  return (
    <>
      <ul className="space-y-3 bg-gradient-to-br from-primary to-secondary p-6 rounded-lg w-full min-h-full shadow-primary shadow text-white relative overflow-hidden">
        {authors.map((author, index) => (
          <li key={index}>
            <h4 className="font-heading font-bold">
              {author.link ? (
                <>
                  <Link
                    href={author.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    aria-label={`View Info On ${author.name}`}
                    title={`View Info On ${author.name}`}
                  >
                    {author.name}
                  </Link>
                </>
              ) : (
                <>{author.name}</>
              )}
            </h4>
            <h5 className="font-body text-sm opacity-80">
              {author.titleFirst}
            </h5>
            <h6 className="font-body text-sm opacity-80">
              {author.titleSecond}
            </h6>
            <hr
              className={`mt-3 ${index === authors.length - 1 && "hidden"}`}
            />
          </li>
        ))}
        <span className="absolute text-[100px] -rotate-45 font-heading font-bold text-white opacity-5 inset-0 flex items-center justify-center pointer-events-none">
          {journalOrOrgName}
        </span>
      </ul>
    </>
  );
}
