import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import portrait from "@/assets/loraine-portrait-1.jpg";

const recognitionItems = [
  "Vous mettez trois réunions à trancher ce qui se décidait en cinq minutes.",
  "Il y a des sujets que vous avez arrêté d'aborder.",
  "Quel que soit le sujet, vous finissez toujours par buter sur le même désaccord.",
  "Vous préparez ce que vous allez dire avant d'en parler à votre associé.",
  "Vous avez l'impression de porter plus que votre part.",
  "Vous parlez de votre associé à d'autres — plutôt qu'à lui.",
];

const Index = () => {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-12 md:pt-24 pb-20 md:pb-32">
          <div className="grid gap-12 md:gap-16 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance text-foreground">
                Dans une startup, tout se pilote.
                <span className="block italic text-muted-foreground mt-2">
                  Sauf la relation entre fondateurs.
                </span>
              </h1>
              <div className="mt-10 space-y-5 max-w-xl text-lg text-foreground/80 leading-relaxed text-pretty">
                <p>
                  Et pourtant, quand la relation entre associés se dégrade,
                  c'est toute la boîte qui vacille.
                </p>
                <p>
                  Face à ça, on prend sur soi, on évite les sujets difficiles,
                  on se dit que ça va passer. Ça ne passe pas.
                </p>
                <p className="text-foreground">
                  J'accompagne les fondateurs pour que leur association tienne
                  — et avance. Dès le début, ou quand c'est déjà tendu.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 animate-fade-in">
              <div className="relative">
                <img
                  src={portrait}
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
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
              Reconnaissance
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-balance text-foreground">
              Ces situations vous parlent&nbsp;?
            </h2>
          </div>

          <ul className="mt-16 grid gap-px bg-border/60 md:grid-cols-2 border border-border/60">
            {recognitionItems.map((item, i) => (
              <li
                key={i}
                className="bg-background p-8 md:p-10 flex gap-5 group hover:bg-secondary/60 transition-colors duration-500"
              >
                <span className="font-serif italic text-accent text-2xl leading-none mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground/85 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>

          <div className="mt-16 max-w-2xl space-y-5 text-lg text-foreground/80 leading-relaxed">
            <p>
              Ces situations ne sont pas des passages obligés. Ce sont des
              signes qu'une dynamique s'est installée entre vous — et qu'elle
              ne se résoudra pas toute seule.
            </p>
            <p className="font-serif italic text-2xl text-foreground">
              Mais elle se travaille. Même si vous êtes seul·e à faire la
              démarche.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH PREVIEW */}
      <section>
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-28 md:py-40">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-8 text-center">
            Aperçu de l'approche
          </p>
          <p className="font-serif text-3xl md:text-5xl leading-[1.2] text-balance text-foreground text-center">
            Je ne m'arrête pas au problème tel que vous le décrivez.
            <span className="block text-muted-foreground italic mt-3">
              Je cherche ce qui le produit — et c'est là que le travail
              commence.
            </span>
          </p>
          <div className="mt-14 text-center">
            <Link
              to="/approche"
              className="group inline-flex items-center gap-3 text-accent text-sm tracking-wide border-b border-accent/40 hover:border-accent pb-1 transition-all"
            >
              Découvrir mon approche
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS placeholder */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6 text-center">
            Témoignages
          </p>
          <figure className="text-center">
            <blockquote className="font-serif italic text-2xl md:text-4xl leading-[1.25] text-balance text-foreground/85">
              « Bloc témoignages clients — contenu à intégrer. »
            </blockquote>
            <figcaption className="mt-8 text-sm text-muted-foreground tracking-wide">
              — Témoignages à venir
            </figcaption>
          </figure>
        </div>
      </section>

      <CtaBlock />
    </SiteLayout>
  );
};

export default Index;
