import { useEffect } from "react";

const SITE_URL = "https://lorainehabib.com";

type SeoProps = {
  title: string;
  description: string;
  path: string;
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

const Seo = ({ title, description, path }: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = new URL(path, `${SITE_URL}/`).toString();

    document.title = title;
    upsertCanonical(canonicalUrl);
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta("meta[property=\"og:description\"]", "property", "og:description", description);
    upsertMeta("meta[property=\"og:url\"]", "property", "og:url", canonicalUrl);
    upsertMeta("meta[property=\"og:type\"]", "property", "og:type", "website");
    upsertMeta("meta[property=\"og:locale\"]", "property", "og:locale", "fr_FR");
    upsertMeta("meta[name=\"twitter:card\"]", "name", "twitter:card", "summary_large_image");
  }, [description, path, title]);

  return null;
};

export default Seo;
