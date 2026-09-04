import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import NewsletterCapture from "@/components/NewsletterCapture";
import { publishedPosts, newsletterDescription, newsletterName, newsletterTagline } from "@/content/blog";

const Blog = () => {
  return (
    <SiteLayout>
      <Seo
        title={`${newsletterName} — Loraine Habib`}
        description={newsletterTagline}
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
          {publishedPosts.length > 0 && (
            <ul className="mt-14 md:mt-16 divide-y divide-border/70 border-y border-border/70">
              {publishedPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={post.path}
                    className="group grid gap-3 py-10 md:py-12 hover:bg-secondary/30 transition-colors -mx-2 px-2 md:mx-0 md:px-0"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {post.dateLabel}
                    </p>
                    <h2 className="font-serif text-2xl md:text-4xl leading-[1.15] text-foreground group-hover:text-accent transition-colors text-balance">
                      {post.title}.
                    </h2>
                    <p className="max-w-2xl text-base md:text-lg text-foreground/80 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-3 text-accent text-sm tracking-wide">
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
