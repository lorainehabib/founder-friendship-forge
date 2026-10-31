import { useEffect } from "react";
import { PERSON_ID, SITE_URL } from "@/seo-routes";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const upsertMeta = (selector: string, attribute: "name" | "property", value: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

const buildBaseSchemas = (canonicalUrl: string) => {
  const personId = PERSON_ID;
  const serviceId = `${SITE_URL}/#service`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: "Loraine Habib",
      jobTitle: "Coach de dirigeants et d'associés",
      description:
        "Coach spécialisée dans la relation entre associés de startups. Ancienne Chief of Staff du CEO de BlaBlaCar et membre de son comité exécutif.",
      image: `${SITE_URL}/loraine-habib.jpg`,
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "France",
      },
      knowsAbout: [
        "Relation entre cofondateurs",
        "Conflits entre cofondateurs",
        "Coaching de fondateurs",
        "Accompagnement des equipes dirigeantes",
        "Relation entre associés",
        "Conflit entre associés",
        "Coaching d'associés",
        "Coaching de dirigeants",
      ],
      worksFor: {
        "@id": serviceId,
      },
      sameAs: ["https://www.linkedin.com/in/loraine-habib"],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": serviceId,
      name: "Loraine Habib - Coaching de fondateurs",
      url: SITE_URL,
      description:
        "Accompagnement des cofondateurs pour prevenir ou resoudre les tensions relationnelles et decisionnelles.",
      areaServed: ["Paris", "France"],
      serviceType: [
        "Coaching de fondateurs",
        "Accompagnement de cofondateurs",
        "Resolution de conflits entre cofondateurs",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "10 rue Saint Marc",
        postalCode: "75002",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
      provider: {
        "@id": personId,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "loraine@lorainehabib.com",
          availableLanguage: ["fr"],
        },
      ],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: "Premier rendez-vous",
          description: "Premier echange pour evaluer les tensions et definir la suite de l'accompagnement.",
        },
      },
      mainEntityOfPage: canonicalUrl,
    },
  ];
};

const Seo = ({ title, description, path, ogImage, structuredData }: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = new URL(path, `${SITE_URL}/`).toString();
    const image = ogImage ? new URL(ogImage, `${SITE_URL}/`).toString() : `${SITE_URL}/social.png`;

    document.title = title;
    upsertCanonical(canonicalUrl);
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta("meta[property=\"og:description\"]", "property", "og:description", description);
    upsertMeta("meta[property=\"og:url\"]", "property", "og:url", canonicalUrl);
    upsertMeta("meta[property=\"og:type\"]", "property", "og:type", "website");
    upsertMeta("meta[property=\"og:locale\"]", "property", "og:locale", "fr_FR");
    upsertMeta("meta[property=\"og:image\"]", "property", "og:image", image);
    upsertMeta("meta[property=\"og:image:secure_url\"]", "property", "og:image:secure_url", image);
    upsertMeta("meta[property=\"og:image:width\"]", "property", "og:image:width", ogImage ? "1200" : "1024");
    upsertMeta("meta[property=\"og:image:height\"]", "property", "og:image:height", ogImage ? "630" : "535");
    upsertMeta("meta[name=\"twitter:card\"]", "name", "twitter:card", "summary_large_image");
    upsertMeta("meta[name=\"twitter:image\"]", "name", "twitter:image", image);
  }, [description, ogImage, path, title]);

  const canonicalUrl = new URL(path, `${SITE_URL}/`).toString();
  const customSchemas = structuredData ? (Array.isArray(structuredData) ? structuredData : [structuredData]) : [];
  const schemas = [...buildBaseSchemas(canonicalUrl), ...customSchemas];

  return (
    <>
      {schemas.map((schema) => {
        const record = schema as Record<string, unknown>;
        const key = String(record["@type"]) + String(record["@id"] ?? record.headline ?? record.reviewBody ?? "");
        return (
          <script
            key={key}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
          />
        );
      })}
    </>
  );
};

export default Seo;
