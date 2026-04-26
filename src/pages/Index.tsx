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
                  on se dit que ça va passer. Mais plus on attend, plus ça s'ancre.
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

        {/* Dark band — la chute */}
        <div className="bg-ink text-ink-foreground">
          <div className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28 text-center">
            <p className="text-base md:text-lg text-ink-muted leading-relaxed mb-10 md:mb-12">
              Ces situations ne sont pas des passages obligés. Ce sont des
              signes qu'une dynamique s'est installée entre vous — et
              qu'elle ne se résoudra pas toute seule.
            </p>
            <p className="font-serif text-2xl md:text-4xl leading-[1.2] text-balance text-ink-foreground">
              Mais elle se travaille.
            </p>
            <p className="mt-4 text-base md:text-lg text-ink-muted">
              Même si vous êtes seul·e à faire la démarche.
            </p>
            <div className="mt-10">
              <Link
                to="/approche"
                className="group inline-flex items-center gap-3 text-accent text-sm tracking-wide border-b border-accent/40 hover:border-accent pb-1 transition-all"
              >
                Découvrir mon approche
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS placeholder */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="border-2 border-dashed border-destructive/60 bg-background p-8 text-center min-h-[180px] flex flex-col items-center justify-center"
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-destructive font-semibold mb-3">
                  Manquant
                </p>
                <p className="font-serif italic text-lg text-muted-foreground">
                  Témoignage client {n}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </SiteLayout>
  );
};

export default Index;
