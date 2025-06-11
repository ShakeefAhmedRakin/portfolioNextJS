import BaseSchema from "../shared/base-schema";
import { websiteId } from "../shared/website";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import SiteMetadata from "@/metadata/site-metadata";

import { siteNavigationMap } from "@/content/site-navigation";

export default function SetSchemaLicensePage() {
  const graph = BaseSchema({
    pathParam: siteNavigationMap.LICENSE.href,
    currentPageSchemas: [
      {
        "@type": "WebPage",
        "@id": `${process.env.WEBSITE_URL}/#${siteNavigationMap.LICENSE.key}`,
        url: `${process.env.WEBSITE_URL}${siteNavigationMap.LICENSE.href}`,
        name: SiteMetadata.LICENSE.title,
        description: SiteMetadata.LICENSE.description,
        isPartOf: {
          "@id": websiteId,
        },
        inLanguage: "en-US",
        author: {
          "@id": personId,
        },
        publisher: {
          "@id": organizationId,
        },
        mainEntity: {
          "@type": "CreativeWork",
          name: "License and Attribution",
          about:
            "This page describes the licensing and usage terms for images and content on the site.",
          license: [
            {
              "@type": "CreativeWork",
              name: "Images and graphics created by the author",
              usageInfo:
                "Protected by copyright and may not be used for commercial purposes without permission.",
            },
            {
              "@type": "CreativeWork",
              name: "Screenshots of existing websites and apps",
              usageInfo:
                "Used under fair use for portfolio and educational purposes.",
            },
            {
              "@type": "CreativeWork",
              name: "Free stock images",
              usageInfo:
                "Used according to original licenses, with attribution where required.",
            },
          ],
          copyrightNotice:
            "All original content created by the author is protected by copyright law.",
        },
      },
    ],
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
