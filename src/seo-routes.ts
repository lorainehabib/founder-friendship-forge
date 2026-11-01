import { publishedPosts, type BlogPost } from "./content/blog";

export const SITE_URL = "https://lorainehabib.com";
export const PERSON_ID = `${SITE_URL}/#person`;

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  changefreq: string;
  priority: string;
  /** Adresse canonique si cette route est un alias. Absente du sitemap. */
  canonicalPath?: string;
};

export const homeSeo: SeoRoute = {
  path: "/",
  title: "Coach pour associés et cofondateurs à Paris · Loraine Habib",
  description:
    "La relation entre associés, ça se travaille. Ex-Chief of Staff de BlaBlaCar, j'accompagne les cofondateurs, avant ou pendant les tensions. Paris et visio.",
  changefreq: "weekly",
  priority: "1.0",
};

export const approcheSeo: SeoRoute = {
  path: "/approche/",
  title: "Conflit entre associés\u00a0: travailler la relation · Loraine Habib",
  description:
    "Repérer les inconforts entre associés avant qu'ils ne deviennent des tensions, et sortir d'un conflit installé. Mon approche, et les questions fréquentes.",
  changefreq: "weekly",
  priority: "0.9",
};

export const offresSeo: SeoRoute = {
  path: "/offres/",
  title: "Coaching d'associés\u00a0: Socle, Reset, Solo · Loraine Habib",
  description:
    "Trois accompagnements pour les associés de startups\u00a0: prévenir les tensions, sortir d'un conflit, ou avancer seul. Qui vient, dans quel ordre.",
  changefreq: "weekly",
  priority: "0.9",
};

export const socleSeo: SeoRoute = {
  path: "/offres/socle/",
  title: "Socle\u00a0: prévenir les tensions entre associés · Loraine Habib",
  description:
    "Quand tout va bien, à quelques détails près. Socle sert à repérer un inconfort entre associés tant qu'il est petit.",
  ogImage: "/og/socle.png",
  changefreq: "monthly",
  priority: "0.8",
};

export const resetSeo: SeoRoute = {
  path: "/offres/reset/",
  title: "Reset\u00a0: sortir d'un conflit entre associés · Loraine Habib",
  description:
    "Quand c'est déjà tendu entre associés. Reset regarde la façon dont vous réagissez l'un à l'autre, pour sortir de la boucle.",
  ogImage: "/og/reset.png",
  changefreq: "monthly",
  priority: "0.8",
};

export const soloSeo: SeoRoute = {
  path: "/offres/solo/",
  title: "Solo\u00a0: coaching individuel de dirigeant · Loraine Habib",
  description:
    "Quand vous venez seul, pour faire bouger une situation avec un associé, un boss ou un codir. Un objectif concret, et ce qui l'empêche.",
  ogImage: "/og/solo.png",
  changefreq: "monthly",
  priority: "0.8",
};

export const aProposSeo: SeoRoute = {
  path: "/a-propos/",
  title: "Loraine Habib · Coach d'associés, ex-Chief of Staff BlaBlaCar",
  description:
    "Ancienne Chief of Staff du CEO de BlaBlaCar et formée à la psychologie des relations\u00a0: deux regards pour travailler la relation entre associés.",
  changefreq: "monthly",
  priority: "0.7",
};

export const faireLePointSeo: SeoRoute = {
  path: "/faire-le-point/",
  title: "Le point sur votre association · Loraine Habib",
  description:
    "En 20 minutes, faites le point sur votre association : un questionnaire pour évaluer votre niveau d'inconfort, puis une grille d'observation pour y voir plus clair.",
  changefreq: "monthly",
  priority: "0.6",
};

export const lePointSeo: SeoRoute = {
  ...faireLePointSeo,
  path: "/le-point/",
  canonicalPath: "/faire-le-point/",
};

export const blogSeo: SeoRoute = {
  path: "/blog/",
  title: "L'Angle mort · La lettre sur la relation entre associés",
  description:
    "Une lettre par mois, à partir de cas réels, sur ce qui empêche les associés et les dirigeants d'avancer.",
  changefreq: "weekly",
  priority: "0.7",
};

export const mentionsSeo: SeoRoute = {
  path: "/mentions-legales/",
  title: "Mentions légales · Loraine Habib | Coaching fondateurs",
  description:
    "Mentions légales, éditeur du site, RGPD et hébergement de lorainehabib.com, spécialisé en accompagnement de fondateurs.",
  changefreq: "yearly",
  priority: "0.3",
};

export const blogPostSeo = (post: BlogPost): SeoRoute => ({
  path: post.path,
  title: post.seoTitle ?? `${post.title} · Loraine Habib`,
  description: post.excerpt,
  changefreq: "monthly",
  priority: "0.7",
});

export const blogPostingSchema = (post: BlogPost) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  dateModified: post.date,
  inLanguage: "fr",
  url: `${SITE_URL}${post.path}`,
  author: { "@id": PERSON_ID },
  publisher: {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Loraine Habib",
  },
});

const staticRoutes: SeoRoute[] = [
  homeSeo,
  approcheSeo,
  offresSeo,
  socleSeo,
  resetSeo,
  soloSeo,
  aProposSeo,
  blogSeo,
  faireLePointSeo,
  lePointSeo,
  mentionsSeo,
];

/** Routes écrites dans dist au build. Une lettre publiée dans blog.ts y entre automatiquement. */
export const prerenderRoutes: SeoRoute[] = [...staticRoutes, ...publishedPosts.map(blogPostSeo)];
