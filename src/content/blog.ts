export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  path: string;
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
  },
];
