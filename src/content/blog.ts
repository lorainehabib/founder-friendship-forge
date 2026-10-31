export const newsletterName = "L'angle mort";

export const newsletterTagline =
  "Une lettre sur ce qui empêche les dirigeants d'avancer.";

export const newsletterDescription =
  "À partir de situations réellement vécues par mes clients, on tire le fil jusqu'à mettre le doigt sur l'angle mort\u00a0: cet endroit qui bloque, qu'on ne voit pas parce qu'on est dedans. Et à voir l'angle mort des autres, on finit parfois par entrevoir le sien.";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Titre de l'onglet et des aperçus. À défaut : « titre · Loraine Habib ». */
  seoTitle?: string;
  date: string;
  dateLabel: string;
  path: string;
  published: boolean;
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
  },
  {
    slug: "c-est-lui-le-probleme",
    title: "C'est lui le problème",
    seoTitle: "C'est lui le problème\u00a0: désaccord entre associés · Loraine Habib",
    excerpt:
      "Il pense exactement la même chose de vous. La part que prennent nos réactions dans un désaccord qui s'enlise.",
    date: "2026-10-30",
    dateLabel: "30 octobre 2026",
    path: "/blog/c-est-lui-le-probleme/",
    published: true,
  },
];

export const publishedPosts = blogPosts
  .filter((post) => post.published)
  .sort((a, b) => b.date.localeCompare(a.date));

// Une nouvelle lettre publiée ici est prérendue au build (voir prerenderRoutes).
// Il faut aussi la déclarer dans App.tsx, avec sa page.
