import PageHeader from "@/components/ui/page-header";
import { SectionWrapper } from "@/components/ui/wrappers";
import SiteMetadata from "@/content/site-metadata";
import getMetadata from "@/metadata/utils/get-metadata";

import {
  TypographyH2,
  TypographyP,
  TypographyUnOrderedList,
} from "@/components/ui/typography";
import SetSchemaLicensePage from "@/metadata/schemas/schemaLicensePage";

export function generateMetadata() {
  return getMetadata(SiteMetadata.LICENSE);
}

export default async function LicensePage() {
  return (
    <>
      <SetSchemaLicensePage />
      <PageHeader
        title="License and Attribution"
        subtitle="Find out how you can use, share and attribute the content and code used in my site"
      />
      <SectionWrapper innerClassName="min-h-[80vh] relative space-y-6 intersect:animate-fade-up shadow-primary/5 intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once">
        <TypographyH2 className="font-light">License</TypographyH2>

        <TypographyP className="text-foreground/80">
          This website contains a variety of images and assets, including:
        </TypographyP>
        <TypographyUnOrderedList className="text-foreground/80">
          <li>
            Images and graphics <strong>created by me</strong>
          </li>
          <li>
            <strong>Screenshots of existing websites and apps</strong> for
            demonstration purposes
          </li>
          <li>
            <strong>Free stock images</strong> used under their respective
            licenses
          </li>
        </TypographyUnOrderedList>

        <TypographyH2 className="font-light">Ownership & Use</TypographyH2>
        <TypographyUnOrderedList className="text-foreground/80">
          <li>
            All content specifically created by me (e.g. branding, headshots,
            custom illustrations, original UI designs) is protected by copyright
            and <strong>may not be used for any commercial purpose</strong>{" "}
            without explicit permission.
          </li>
          <li>
            Screenshots of third-party sites or apps are used under{" "}
            <strong>fair use</strong> for portfolio and educational purposes.
          </li>
          <li>
            Free stock images are used according to their original licenses
            (e.g. Unsplash, Pexels), and attribution is provided where required.
          </li>
          <li>
            Unless otherwise stated,{" "}
            <strong>you may not reuse or redistribute</strong> the images on
            this site.
          </li>
        </TypographyUnOrderedList>

        <TypographyH2 className="font-light">Need a License?</TypographyH2>
        <TypographyP className="text-foreground/80">
          If you&apos;re interested in using any original visuals (e.g. personal
          branding, custom UI work), please contact me for licensing inquiries.
        </TypographyP>
      </SectionWrapper>
    </>
  );
}
