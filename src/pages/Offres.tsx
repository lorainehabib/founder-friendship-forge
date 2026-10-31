import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import Seo from "@/components/Seo";
import ReserveButton from "@/components/ReserveButton";

type Offer = {
  id: string;
  aliases?: string[];
  name: string;
  title: string;
  alone?: boolean;
  price: string;
  priceNote: string;
  signs: [string, string, string];
  detail: string;
  header: string;
  meta: string;
};

const PairMark = () => (
  <svg width="26" height="16" viewBox="0 0 26 16" aria-hidden className="shrink-0">
    <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const SoloMark = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden className="shrink-0">
    <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const offers: Offer[] = [
  {
    id: "socle",
    aliases: ["s-associer", "entretenir"],
    name: "Socle",
    title: "Quand tout va bien, à quelques détails près.",
    price: "3\u00a0000\u00a0€\u00a0HT à deux",
    priceNote: "4\u00a0000\u00a0€\u00a0HT à trois, au-delà sur devis",
    signs: [
      "Tout va bien, et vous savez que c'est maintenant que ça se travaille.",
      "Vous travaillez ensemble depuis peu, et vous voulez poser de bonnes bases.",
      "Vous venez de lever, et les rôles vont changer.",
    ],
    detail: "/offres/socle/",
    header: "bg-[#ece3d8] text-foreground",
    meta: "text-accent",
  },
  {
    id: "reset",
    aliases: ["debloquer"],
    name: "Reset",
    title: "Quand c'est déjà tendu, et que vous venez ensemble.",
    price: "Dès 6\u00a0000\u00a0€\u00a0HT",
    priceNote: "Selon la situation et le nombre d'associés",
    signs: [
      "Vous avez le sentiment d'avoir déjà tout essayé.",
      "Le même désaccord revient, sous des formes différentes.",
      "L'un de vous se demande s'il veut continuer.",
    ],
    detail: "/offres/reset/",
    header: "bg-accent text-white",
    meta: "text-[#fbe9df]",
  },
  {
    id: "solo",
    name: "Solo",
    title: "Quand vous venez seul, pour faire bouger une situation.",
    alone: true,
    price: "4\u00a0500\u00a0€\u00a0HT",
    priceNote: "Coaching individuel",
    signs: [
      "Une relation de travail vous pèse, avec un associé, un manager ou un collègue.",
      "Vous prenez un nouveau rôle, ou un nouveau périmètre.",
      "Une décision traîne depuis des mois.",
    ],
    detail: "/offres/solo/",
    header: "bg-[#2C2420] text-[#FAF8F5]",
    meta: "text-[#C4A882]",
  },
];

const faqItems = [
  {
    q: "Mon associé n'est pas prêt, ça peut marcher\u00a0?",
    a: "Oui. C'est l'objet de Solo\u00a0: on travaille sur ce que vous, vous pouvez faire autrement. Quand une seule personne change sa façon de réagir, c'est toute la relation qui bouge.",
  },
  {
    q: "Notre situation est spécifique, vous avez déjà vu ça\u00a0?",
    a: "Probablement. Mais l'important n'est pas d'avoir vu exactement la même situation, c'est de comprendre ce qui l'entretient. Les tensions se ressemblent souvent en surface, mais ce qui les alimente est propre à chaque relation.",
  },
  {
    q: "Ça marche aussi à distance\u00a0?",
    a: "Oui, en visio, en recréant les conditions que le présentiel offre naturellement\u00a0: pas de réunion juste avant ni juste après, un endroit calme, une porte qui ferme.",
  },
  {
    q: "Ce qui se dit en séance reste confidentiel\u00a0?",
    a: "Oui. Rien de ce qui se dit en séance ne sort de nos échanges. Et à deux, ce qui se dit en séance individuelle sert le travail commun\u00a0: je ne répète rien à votre place, mais si quelque chose doit être dit entre vous, je vous aide à le dire vous-même.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const Offres = () => {
  return (
    <SiteLayout>
      <Seo
        title="Travailler ensemble · Loraine Habib"
        description={"Socle, Reset, Solo\u00a0: qui vient, dans quel ordre, seul ou ensemble."}
        path="/offres/"
        structuredData={faqSchema}
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 pt-[88px] md:px-10 md:pt-[133px]">
          <h1 className="max-w-4xl font-serif text-[48px] font-normal leading-none text-foreground md:text-[72px]">
            Travailler ensemble.
          </h1>
          <p className="mt-5 text-base text-[#5c5148]">
            Trois façons de travailler, selon votre situation.
          </p>
        </div>
      </section>

      <section className="relative">
        <nav
          aria-label="Les trois offres"
          className="absolute left-6 right-6 top-[calc(-50px+8px)] flex flex-wrap gap-2 md:left-10 lg:hidden"
        >
          {offers.map((offer) => (
            <a
              key={offer.id}
              href={`#${offer.id}`}
              className="border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {offer.name}
            </a>
          ))}
        </nav>
        <div className="mx-auto mt-[50px] max-w-7xl px-6 pb-20 md:mt-16 md:px-10 md:pb-28">
          <div className="grid gap-6 lg:grid-cols-3">
            {offers.map((offer) => (
              <article key={offer.id} id={offer.id} className="relative h-full scroll-mt-28">
                {offer.aliases?.map((alias) => (
                  <span key={alias} id={alias} className="absolute top-0 scroll-mt-28" aria-hidden />
                ))}
                <Link
                  to={offer.detail}
                  className="group flex h-full flex-col overflow-hidden rounded border border-border bg-white transition duration-300 hover:-translate-y-[3px] hover:shadow-[0_14px_30px_-18px_rgba(44,36,32,0.45)]"
                >
                  <div className={`flex min-h-0 flex-col px-7 py-8 lg:min-h-[225px] lg:px-8 ${offer.header}`}>
                    <p className={`flex items-center gap-2.5 font-sans text-xs font-medium uppercase tracking-[0.14em] ${offer.meta}`}>
                      {offer.alone ? <SoloMark /> : <PairMark />}
                      {offer.alone ? "Seul" : "À deux ou plus"}
                    </p>
                    <h2 className="mt-[22px] font-serif text-[60px] font-normal leading-[0.9]">{offer.name}</h2>
                    <p className="mt-[14px] font-serif text-[22px] italic leading-[1.25]">{offer.title}</p>
                  </div>
                  <div className="flex flex-1 flex-col bg-background px-7 py-7 lg:px-8">
                    <ul className="flex flex-col gap-[14px]">
                      {offer.signs.map((sign) => (
                        <li key={sign} className="flex items-start gap-3.5 text-base leading-snug text-[#3d332d]">
                          <span aria-hidden className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-accent" />
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto border-t border-border pt-5">
                      <p className="whitespace-nowrap font-serif text-[30px] font-normal leading-none text-foreground lining-nums">
                        {offer.price}
                      </p>
                      <p className="mt-2 text-[13px] leading-snug text-muted-foreground lining-nums">{offer.priceNote}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[14px] text-accent">
                        Voir le détail
                        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-accent">Ce qu'on me demande souvent</p>
          <div className="divide-y divide-border/70 border-y border-border/70">
            {faqItems.map((item) => (
              <details key={item.q} className="group py-8">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-8">
                  <h3 className="text-balance font-serif text-xl leading-snug text-foreground transition-colors group-open:text-accent md:text-2xl">
                    {item.q}
                  </h3>
                  <span className="mt-1 font-serif text-2xl leading-none text-accent transition-transform duration-500 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/80">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />

      <div className="offer-mobile-reserve fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
        <ReserveButton className="w-full" />
      </div>
    </SiteLayout>
  );
};

export default Offres;
