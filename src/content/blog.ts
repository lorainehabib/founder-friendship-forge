export const newsletterName = "L'angle mort";

export const newsletterTagline = "Ce qui empêche les dirigeants d'avancer.";

export const newsletterDescription =
  "À partir de situations réellement vécues par mes clients, je tire le fil jusqu'à mettre le doigt sur l'angle mort\u00a0: cet endroit qui bloque, qu'on ne voit pas parce qu'on est dedans. Et à voir l'angle mort des autres, on finit parfois par entrevoir le sien.";

export const newsletterScope =
  "Les lettres partent d'une histoire. Les situations partent d'une difficulté fréquente entre associés.";

export type BlogCategory = "lettre" | "situation";

export const categoryLabels: Record<BlogCategory, string> = {
  lettre: "Les lettres",
  situation: "Situations",
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Meta description si elle diffère du résumé affiché. */
  description?: string;
  /** Titre de l'onglet et des aperçus. À défaut : « titre · Loraine Habib ». */
  seoTitle?: string;
  date: string;
  dateLabel: string;
  path: string;
  published: boolean;
  category: BlogCategory;
  /** Lettres seulement : Numéro 1, Numéro 2… */
  number?: number;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "la-conversation-quon-evite",
    title: "La conversation qu'on évite",
    seoTitle: "La conversation qu'on évite entre associés · Loraine Habib",
    excerpt:
      "Ce qui casse une association, ce ne sont pas les grandes disputes. Ce sont les petits inconforts qu'on a gardés pour soi.",
    date: "2026-09-10",
    dateLabel: "10 septembre 2026",
    path: "/blog/la-conversation-quon-evite/",
    published: true,
    category: "lettre",
    number: 1,
  },
  {
    slug: "c-est-lui-le-probleme",
    title: "C'est lui le problème",
    seoTitle: "C'est lui le problème\u00a0: désaccord entre associés · Loraine Habib",
    excerpt:
      "La part que prennent nos réactions dans un désaccord qui s'enlise.",
    date: "2026-10-30",
    dateLabel: "30 octobre 2026",
    path: "/blog/c-est-lui-le-probleme/",
    published: true,
    category: "lettre",
    number: 2,
  },
  {
    slug: "conflit-associe-que-faire",
    title: "Conflit avec son associé\u00a0: quand on a l'impression d'avoir tout essayé",
    seoTitle: "Conflit avec son associé\u00a0: quand on a tout essayé",
    description:
      "Vous avez l'impression d'avoir tout essayé avec votre associé\u00a0? Ce qui se joue, ce qu'on peut encore faire, et quand faire appel à un coach ou à un médiateur.",
    excerpt:
      "Pourquoi rien ne marche, et ce qu'on peut encore faire avant de se séparer.",
    date: "2026-11-02",
    dateLabel: "2 novembre 2026",
    path: "/blog/conflit-associe-que-faire/",
    published: true,
    category: "situation",
  },
];

export const publishedPosts = blogPosts
  .filter((post) => post.published)
  .sort((a, b) => b.date.localeCompare(a.date));

export const publicationLabel = (post: BlogPost) =>
  post.category === "lettre" && post.number
    ? `Numéro ${post.number} · ${post.dateLabel}`
    : `Mis à jour le ${post.dateLabel}`;

// Une publication ajoutée ici est prérendue au build (voir prerenderRoutes).
// Il faut aussi la déclarer dans App.tsx, et l'ajouter à public/llms.txt.
