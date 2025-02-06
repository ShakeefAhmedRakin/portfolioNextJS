import TitleMedium from "@/app/_components/ui/TitleMedium";
import certifications from "@/app/_data/certificates.json";
import Image from "next/image";
import Link from "next/link";

export default function Certificates() {
  return (
    <>
      <div>
        <TitleMedium title="Certifications"></TitleMedium>
        <hr className="my-2" />
        {certifications
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((certificate, index) => (
            <div key={index} className="mb-5 flex gap-2">
              <Image
                src={certificate.organizationLogo}
                alt={certificate.organizationLink}
                width={32}
                height={32}
                title={`Logo for ${certificate.organization}`}
                className="rounded-lg h-fit"
              />
              <div className="flex-1">
                <div className="text-text">
                  <p
                    className={`font-body font-bold italic text-secondary text-[10px] md:text-xs`}
                  >
                    {new Date(certificate.date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h4>
                    <Link
                      className="font-heading font-medium text-xs md:text-sm hover:underline w-fit"
                      href={certificate.linkCertificate}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {certificate.title}
                    </Link>
                  </h4>
                  <h5 className="text-[10px] md:text-xs font-body text-text mt-1">
                    {certificate.organization}
                  </h5>
                  <hr className="my-2 max-w-xs" />
                  <p className="font-body text-[10px] md:text-xs font-light">
                    {certificate.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
