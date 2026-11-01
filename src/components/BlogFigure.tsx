import Picture from "@/components/Picture";
import { blogIllustrations } from "@/content/blog-illustrations";

const BlogFigure = ({ slug, className = "" }: { slug: string; className?: string }) => {
  const illustration = blogIllustrations[slug];
  if (!illustration) return null;

  return (
    <figure className={className}>
      <Picture
        webp={illustration.webp}
        jpg={illustration.jpg}
        alt={illustration.alt}
        className="h-auto w-full"
      />
    </figure>
  );
};

export default BlogFigure;
