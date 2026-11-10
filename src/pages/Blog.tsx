import { useState } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import NewsletterCapture from "@/components/NewsletterCapture";
import {
  categoryLabels,
  publishedPosts,
  publicationLabel,
  newsletterDescription,
  newsletterName,
  newsletterTagline,
  type BlogCategory,
} from "@/content/blog";
import { blogSeo } from "@/seo-routes";
import BlogFigure from "@/components/BlogFigure";

const filters: Array<{ id: "tout" | BlogCategory; label: string }> = [
  { id: "tout", label: "Tout" },
  { id: "lettre", label: categoryLabels.lettre },
  { id: "situation", label: categoryLabels.situation },
];

const Blog = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("tout");
  const posts = publishedPosts.filter((post) => filter === "tout" || post.category === filter);

  return (
    <SiteLayout>
      <Seo
        title={blogSeo.title}
        description={blogSeo.description}
        path="/blog/"
      />
      <section>
        <div className="mx-auto max-w-4xl px-6 md:px-10 pt-16 md:pt-28 pb-24 md:pb-36">
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance text-foreground">
            {newsletterName}.
          </h1>
          <p className="mt-8 md:mt-10 font-serif text-2xl md:text-3xl leading-[1.25] text-foreground">
            {newsletterTagline}
          </p>
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-foreground/85 leading-relaxed">
            {newsletterDescription}
          </p>
          <div className="mt-12 md:mt-14">
            <NewsletterCapture />
          </div>
          <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 md:mt-16" role="group" aria-label="Filtrer les publications">
            {filters.map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(item.id)}
                  className={`border-b pb-1 text-sm tracking-wide transition-colors ${
                    active
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          {posts.length > 0 && (
            <ul className="mt-10 grid gap-x-12 gap-y-14 sm:grid-cols-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link to={post.path} className="group flex flex-col">
                    <BlogFigure slug={post.slug} className="mb-5" />
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">
                      {categoryLabels[post.category]}
                    </p>
                    <h2 className="mt-3 font-serif text-2xl leading-[1.2] text-foreground transition-colors group-hover:text-accent text-balance">
                      {post.title}.
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-foreground/80">
                      {post.excerpt}
                    </p>
                    <p
                      className={
                        post.category === "lettre"
                          ? "mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground"
                          : "mt-4 text-sm text-muted-foreground"
                      }
                    >
                      {publicationLabel(post)}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-3 text-sm tracking-wide text-accent">
                      Lire
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Blog;
