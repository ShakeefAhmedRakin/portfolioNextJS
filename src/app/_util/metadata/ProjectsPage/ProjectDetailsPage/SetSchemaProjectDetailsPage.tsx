import { Graph } from "schema-dts";
import personalData from "../../../../_data/personalData.json";
import projects from "../../../../_data/projects.json";

export function SetSchemaProjectDetailsPage({ id }: { id: string }) {
  const project = projects.find((project) => project.id === id);

  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareSourceCode",
        headline: `${project?.title} - ${project?.subtitle}`,
        name: `${project?.title} - ${project?.subtitle}`,
        author: {
          "@type": "Person",
          name: personalData.Person.FullName,
        },
        description: project?.summary,
        abstract: project?.summary,
        about: project?.summary,
        url: `${process.env.WEBSITE_URL}/projects/${project?.id}`,
        datePublished: project?.date,
        dateModified: project?.date,
        image: {
          "@type": "ImageObject",
          url: `${process.env.WEBSITE_URL}${project?.coverPhoto?.url}`,
        },
        creator: {
          "@type": "Person",
          name: `${personalData.Person.FullName}`,
        },
        maintainer: {
          "@type": "Person",
          name: `${personalData.Person.FullName}`,
        },
        keywords: project?.tags.join(", "),
        sameAs: [
          ...((project?.githubLinks &&
            project?.githubLinks?.map((link) => link.url)) ||
            []),
          ...((project?.demoLinks &&
            project?.demoLinks.map((link) => link.url)) ||
            []),
        ],
      },
      // BREADCRUMBS
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${process.env.WEBSITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${process.env.WEBSITE_URL}/projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${project?.title} - ${project?.subtitle}`,
            item: `${process.env.WEBSITE_URL}/projects/${project?.id}`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
