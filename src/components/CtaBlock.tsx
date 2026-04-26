import { CALENDLY_URL } from "@/lib/site";

interface CtaBlockProps {
  heading?: string;
  caption?: string;
  note?: string;
  onlyButton?: boolean;
}

const CtaBlock = ({
  heading = "Une première conversation pour voir où vous en êtes, et comment avancer.",
  caption,
  note = "Gratuit et sans engagement · Échanges strictement confidentiels",
  onlyButton = false,
}: CtaBlockProps) => {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-36 text-center">
        {!onlyButton && caption && (
          <p className="text-xs uppercase tracking-[0.3em] text-ink-muted mb-6">
            {caption}
          </p>
        )}
        {!onlyButton && (
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.15] text-balance text-ink-foreground">
            {heading}
          </h2>
        )}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className={`group ${onlyButton ? "" : "mt-12"} inline-flex items-center gap-3 bg-accent hover:bg-background hover:text-foreground text-accent-foreground px-8 py-4 text-sm tracking-wide transition-colors duration-300`}
        >
          Prendre rendez-vous
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
        {!onlyButton && (
          <p className="mt-8 text-sm text-ink-muted">{note}</p>
        )}
      </div>
    </section>
  );
};

export default CtaBlock;
