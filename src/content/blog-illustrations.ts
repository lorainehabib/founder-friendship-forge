import conversationJpg from "@/assets/blog-la-conversation-quon-evite.jpg";
import conversationWebp from "@/assets/blog-la-conversation-quon-evite.webp";
import problemeJpg from "@/assets/blog-c-est-lui-le-probleme.jpg";
import problemeWebp from "@/assets/blog-c-est-lui-le-probleme.webp";

export type BlogIllustration = {
  jpg: string;
  webp: string;
  alt: string;
};

export const blogIllustrations: Record<string, BlogIllustration> = {
  "la-conversation-quon-evite": {
    jpg: conversationJpg,
    webp: conversationWebp,
    alt: "Deux personnes côte à côte. Leurs bulles de conversation restent cachées derrière elles.",
  },
  "c-est-lui-le-probleme": {
    jpg: problemeJpg,
    webp: problemeWebp,
    alt: "Deux personnes face à face, chacune montrant l'autre du doigt.",
  },
};
