export const newsletterName = "L'angle mort";

export const newsletterTagline =
  "Une lettre sur ce qui empêche les dirigeants d'avancer.";

export const newsletterDescription =
  "À partir de situations réellement vécues par mes clients, on tire le fil jusqu'à mettre le doigt sur l'angle mort\u00a0: cet endroit qui bloque, qu'on ne voit pas parce qu'on est dedans. Et à voir l'angle mort des autres, on finit par entrevoir le sien.";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  path: string;
  published: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "la-conversation-quon-evite",
    title: "La conversation qu'on évite",
    excerpt:
      "Ce qui casse une association, ce ne sont pas les grandes disputes. Ce sont les petits inconforts qu'on a gardés pour soi.",
    date: "2026-08-28",
    dateLabel: "28 août 2026",
    path: "/blog/la-conversation-quon-evite/",
    published: false,
  },
];

export const publishedPosts = blogPosts.filter((post) => post.published);
