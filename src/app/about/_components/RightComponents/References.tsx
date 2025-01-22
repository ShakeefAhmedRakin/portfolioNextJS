import TitleMedium from "@/app/_components/ui/TitleMedium";
import references from "@/app/_data/references.json";
import Link from "next/link";

export default function References() {
  return (
    <div>
      <TitleMedium title="References"></TitleMedium>
      <hr className="my-2" />
      {references
        .sort((a, b) => a.order - b.order)
        .map((reference, index) => (
          <div key={index}>
            <h3 className="font-heading font-medium text-text text-sm lg:text-base">
              {reference.name}
            </h3>
            <h4 className="font-body text-text text-xs lg:text-sm">
              {reference.title},{" "}
              <Link
                href={reference.company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {reference.company.name}
              </Link>
            </h4>
            <p className="font-body text-text text-xs lg:text-sm">
              {reference.email}, {reference.contact}
            </p>
          </div>
        ))}
    </div>
  );
}
