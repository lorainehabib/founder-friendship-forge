import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import Seo from "@/components/Seo";
import Picture from "@/components/Picture";
import EchelleDiagram from "@/components/EchelleDiagram";
import FreebieCapture from "@/components/FreebieCapture";
import portraitJpg from "@/assets/loraine-portrait-2.jpg";
import portraitWebp from "@/assets/loraine-portrait-2.webp";

const recognitionItems = [
  "Vous mettez trois réunions à trancher ce qui se décidait en cinq minutes.",
  "Il y a des sujets que vous avez arrêté d'aborder.",
  "Quel que soit le sujet, vous finissez toujours par buter sur le même désaccord.",
  "Vous préparez ce que vous allez dire avant d'en parler à votre associé.",
  "Vous avez l'impression de porter plus que votre part.",
  "Vous parlez de votre associé à d'autres, plutôt qu'à lui.",
];

const portes = [
  {
    title: "Vous vous apprêtez à vous associer.",
    subtitle: "Se mettre d'accord sur l'essentiel, avant de vous engager.",
    to: "/offres/#s-associer",
  },
  {
    title: "Tout va bien, et vous voulez que ça dure.",
    subtitle:
      "Mettre les inconforts sur la table avant qu'ils ne deviennent des tensions.",
    to: "/offres/#entretenir",
  },
  {
    title: "C'est déjà tendu.",
    subtitle:
      "Dénouer ce qui bloque, quand vous voulez encore avancer ensemble.",
    to: "/offres/#debloquer",
  },
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
                  Ce qui casse une association, ce ne sont pas les grandes
                  disputes. Ce sont les petits inconforts qu'on garde pour soi.
                </p>
                <p className="text-foreground/80 text-lg md:text-xl">
                  J'accompagne les fondateurs pour que leur association tienne,
                  et avance.
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
          <p className="mt-12 md:mt-14 border-l-2 border-accent/50 pl-6 text-base md:text-lg text-foreground/80 italic leading-relaxed">
            Pas de tension jusqu'à présent&nbsp;? Beaucoup de fondateurs me
            contactent justement pour que ça reste le cas.
          </p>
        </div>
      </section>

      {/* TROIS PORTES */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Selon là où vous en êtes
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-balance text-foreground mb-14 md:mb-16 max-w-3xl">
            Trois façons de travailler la relation.
          </h2>
          <div className="divide-y divide-border/70 border-y border-border/70">
            {portes.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="group grid gap-4 md:grid-cols-12 md:gap-8 py-8 md:py-10 items-baseline hover:bg-secondary/30 transition-colors -mx-2 px-2 md:mx-0 md:px-0"
              >
                <h3 className="md:col-span-5 font-serif text-2xl md:text-3xl leading-[1.15] text-foreground group-hover:text-accent transition-colors text-balance">
                  {p.title}
                </h3>
                <p className="md:col-span-6 text-base md:text-lg text-foreground/80 leading-relaxed">
                  {p.subtitle}
                </p>
                <span
                  aria-hidden
                  className="md:col-span-1 md:text-right text-accent text-2xl leading-none transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ECHELLE + APPROCHE */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-3xl space-y-6 text-lg text-foreground/85 leading-relaxed">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">
              Mon approche
            </p>
            <p className="font-serif text-2xl md:text-3xl leading-[1.25] text-foreground">
              <span className="text-accent">65 %</span> des start-ups à fort
              potentiel échouent pour des raisons humaines, contre 35 % à cause
              du produit ou du marché.
            </p>
            <p className="text-sm text-muted-foreground">
              Noam Wasserman, <em>The Founder's Dilemmas</em>, Harvard Business
              School.
            </p>
            <p>
              Ces raisons humaines s'installent lentement. Tout part de petits
              inconforts qu'on garde pour soi.
            </p>
          </div>
          <div className="mt-14 md:mt-16">
            <EchelleDiagram />
          </div>
          <div className="mt-12 md:mt-14 max-w-3xl">
            <p className="text-lg text-foreground">
              La repérer tôt, c'est pouvoir agir quand c'est encore simple.
            </p>
            <div className="mt-8">
              <Link
                to="/approche/"
                className="group inline-flex items-center gap-3 text-accent text-sm tracking-wide border-b border-accent/40 hover:border-accent pb-1 transition-all"
              >
                Comprendre mon approche
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUI JE SUIS */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Qui je suis
          </p>
          <p className="text-lg md:text-xl text-foreground/85 leading-relaxed max-w-3xl">
            Ancienne Chief of Staff du CEO de BlaBlaCar, formée à la psychologie
            et à la thérapie des relations, je croise deux regards&nbsp;: le
            terrain des équipes dirigeantes, et la clinique de la relation.
            C'est ce qui me permet de voir ce que vous ne pouvez pas repérer de
            l'intérieur.
          </p>
          <div className="mt-10">
            <Link
              to="/a-propos/"
              className="group inline-flex items-center gap-3 text-accent text-sm tracking-wide border-b border-accent/40 hover:border-accent pb-1 transition-all"
            >
              À propos
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-12 md:mb-16">
            + 80 fondateurs accompagnés
          </p>
          <div className="grid gap-12 md:gap-16 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.attribution} className="flex flex-col">
                <blockquote className="font-serif text-xl leading-[1.5] text-foreground italic">
                  «&nbsp;{t.quote}&nbsp;»
                </blockquote>
                <figcaption className="mt-auto pt-6 text-sm tracking-wide text-muted-foreground">
                  {t.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        heading="Une première conversation pour voir où vous en êtes, et comment avancer."
        note="Gratuite et sans engagement, strictement confidentielle."
      />

      {/* FREEBIE */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-24 md:py-32">
          <FreebieCapture source="accueil" />
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
