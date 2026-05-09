import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import Seo from "@/components/Seo";
import Picture from "@/components/Picture";
import portraitJpg from "@/assets/loraine-portrait-1.jpg";
import portraitWebp from "@/assets/loraine-portrait-1.webp";

const recognitionItems = [
  "Vous mettez trois réunions à trancher ce qui se décidait en cinq minutes.",
  "Il y a des sujets que vous avez arrêté d'aborder.",
  "Quel que soit le sujet, vous finissez toujours par buter sur le même désaccord.",
  "Vous préparez ce que vous allez dire avant d'en parler à votre associé.",
  "Vous avez l'impression de porter plus que votre part.",
  "Vous parlez de votre associé à d'autres, plutôt qu'à lui.",
];

const testimonials = [
  {
    quote:
      "Je traversais une période particulièrement stressante. Je suis repartie avec des options claires. Et surtout, c'étaient les miennes.",
    attribution: "Marie Loubière · Cofondatrice, Gynea",
    schemaAuthor: "Marie Loubière",
  },
  {
    quote:
      "J'étais dans le flou. Loraine a mis des mots précis sur ce que je n'arrivais pas à formuler. À partir de là, j'ai pu structurer une vision claire de mon organisation.",
    attribution: "Matieu Pons · Cofondateur, Datack",
    schemaAuthor: "Matieu Pons",
  },
  {
    quote:
      "Loraine m'a aidé à regarder en face ce que j'évitais, et à trancher. Ce qui traînait depuis des mois s'est débloqué en quelques semaines.",
    attribution: "CEO · Fintech · +40 collaborateurs",
    schemaAuthor: "CEO d'une fintech (+40 collaborateurs)",
  },
];

const SITE_URL = "https://lorainehabib.com";

const reviewSchemas = testimonials.map((t) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  reviewBody: t.quote,
  author: {
    "@type": "Person",
    name: t.schemaAuthor,
  },
  itemReviewed: {
    "@id": `${SITE_URL}/#service`,
  },
  inLanguage: "fr",
}));

const Index = () => {
  return (
    <SiteLayout>
      <Seo
        title="Loraine Habib — Coach de fondateurs | Relation entre cofondateurs"
        description="La relation entre fondateurs, ça se travaille. J'accompagne les cofondateurs pour que leur association tienne et avance, dès les premiers signes de tension."
        path="/"
        structuredData={reviewSchemas}
      />
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-12 md:pt-24 pb-20 md:pb-32">
          <div className="grid gap-12 md:gap-16 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-balance text-foreground">
                La relation entre fondateurs,{" "}
                <span className="block italic text-muted-foreground mt-2">
                  ça se travaille.
                </span>
              </h1>
              <div className="mt-10 space-y-5 max-w-xl text-xl md:text-2xl text-foreground/80 leading-relaxed text-pretty">
                <p className="text-foreground">
                  J'accompagne les fondateurs pour que leur association tienne, et avance. Dès le début, ou quand c'est déjà tendu.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 animate-fade-in">
              <div className="relative">
                <Picture
                  webp={portraitWebp}
                  jpg={portraitJpg}
                  alt="Portrait de Loraine Habib"
                  className="relative w-full aspect-[4/5] object-cover grayscale-[15%]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-balance text-foreground mb-12 md:mb-14">
            Ces situations vous parlent&nbsp;?
          </h2>
          <ul className="space-y-5">
            {recognitionItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-5 text-base md:text-lg text-foreground/85 leading-relaxed"
              >
                <span
                  aria-hidden
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* Respiration claire entre les deux blocs sombres */}
      <section className="bg-background border-t border-border/60">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28 text-center">
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed mb-10 md:mb-12">
            Ce sont des signes que des tensions se sont installées entre vous — et elles ne se résoudront pas toutes seules.
          </p>
          <p className="font-serif text-2xl md:text-4xl leading-[1.2] text-balance text-foreground">
            Mais ça se travaille.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Même si vous êtes seul·e à faire la démarche.
          </p>
          <div className="mt-12">
            <Link
              to="/approche/"
              className="group inline-flex items-center gap-3 text-accent text-sm tracking-wide border-b border-accent/40 hover:border-accent pb-1 transition-all"
            >
              Découvrir mon approche
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-12 md:mb-16">
            Ils en parlent
          </p>
          <div className="space-y-14 md:space-y-20">
            {testimonials.map((t) => (
              <figure key={t.attribution}>
                <blockquote className="font-serif text-xl md:text-2xl leading-[1.4] text-foreground italic max-w-4xl">
                  «&nbsp;{t.quote}&nbsp;»
                </blockquote>
                <figcaption className="mt-6 text-sm tracking-wide text-muted-foreground">
                  {t.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </SiteLayout>
  );
};

export default Index;
