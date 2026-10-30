import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import Seo from "@/components/Seo";
import ReserveButton from "@/components/ReserveButton";

const LETTER_CONVERSATION = "/blog/la-conversation-quon-evite/";
const LETTER_BOUCLE = "/blog/c-est-lui-le-probleme/";

type Offer = {
  id: string;
  aliases?: string[];
  name: string;
  title: string;
  who: string;
  sessions: string;
  duration: string;
  price: string;
  priceNote: string;
  signs: [string, string, string];
  description: string;
  detail?: string;
  situation?: { title: string; to: string };
};

const offers: Offer[] = [
  {
    id: "socle",
    aliases: ["s-associer", "entretenir"],
    name: "Socle",
    title: "Quand tout va bien, et que vous voulez que ça dure",
    who: "À deux ou plus",
    sessions: "Une avec chacun, puis deux ensemble",
    duration: "1 à 3 mois",
    price: "3\u00a0000\u00a0€ HT",
    priceNote: "À deux · 4\u00a0000\u00a0€ HT à trois · au-delà sur devis",
    signs: [
      "Tout va bien, et vous savez que c'est maintenant que ça se travaille.",
      "Vous travaillez ensemble depuis peu, et vous voulez poser de bonnes bases.",
      "Vous venez de lever, et les rôles vont changer.",
    ],
    description:
      "Un inconfort qui revient finit par devenir une tension. On le repère tant qu'il est petit, on regarde comment chacun y réagit, et on le désamorce à temps.",
    detail: "/offres/socle/",
    situation: {
      title: "La conversation qu'on évite",
      to: LETTER_CONVERSATION,
    },
  },
  {
    id: "reset",
    aliases: ["debloquer"],
    name: "Reset",
    title: "Quand c'est déjà tendu, et que vous venez ensemble",
    who: "À deux ou plus",
    sessions: "Une ensemble, une avec chacun, puis quatre ensemble",
    duration: "3 à 4 mois",
    price: "Dès 6\u00a0000\u00a0€ HT",
    priceNote: "Selon la situation et le nombre d'associés",
    signs: [
      "Vous avez le sentiment d'avoir déjà tout essayé.",
      "Le même désaccord revient, sous des formes différentes.",
      "L'un de vous se demande s'il veut continuer.",
    ],
    description:
      "Je ne creuse pas le fond du désaccord, je regarde la façon dont vous réagissez l'un à l'autre\u00a0: c'est à cet endroit que la relation peut bouger. C'est le même travail que Socle, sur des tensions déjà installées, ce qui demande plus de temps.",
    detail: "/offres/reset/",
    situation: {
      title: "C'est lui le problème",
      to: LETTER_BOUCLE,
    },
  },
  {
    id: "solo",
    name: "Solo",
    title: "Quand c'est à vous de faire bouger les choses",
    who: "Coaching individuel",
    sessions: "Huit séances d'1h30",
    duration: "4 à 6 mois",
    price: "4\u00a0500\u00a0€ HT",
    priceNote: "",
    signs: [
      "Une relation de travail vous pèse, avec un associé, un manager ou un collègue.",
      "Vous prenez un nouveau poste, ou un nouveau périmètre.",
      "Une décision traîne depuis des mois.",
    ],
    description:
      "Avant de chercher des solutions, on définit à quoi vous verrez que la situation a changé. Pas «\u00a0que ça aille mieux\u00a0», mais des changements concrets\u00a0: une réunion qui se passe autrement, une décision enfin prise. Puis on cherche précisément ce qui empêche ces changements aujourd'hui, et c'est sur ça qu'on travaille.",
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
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:grid-rows-[repeat(12,auto)] lg:items-stretch lg:gap-x-6 lg:gap-y-0">
            {offers.map((offer) => (
              <article
                key={offer.id}
                id={offer.id}
                className="relative flex scroll-mt-28 flex-col rounded border border-border bg-secondary p-6 md:p-8 lg:grid lg:grid-rows-subgrid lg:[grid-row:span_12] lg:gap-0 lg:[&>*]:self-start"
              >
                {offer.aliases?.map((alias) => (
                  <span key={alias} id={alias} className="absolute top-0 scroll-mt-28" aria-hidden />
                ))}

                <h2 className="font-serif text-5xl leading-[0.9] text-foreground md:text-6xl">{offer.name}</h2>
                <p className="mt-4 font-serif text-xl italic leading-snug text-foreground text-balance">
                  {offer.title}
                </p>
                <p className="mt-4">
                  <span className="mb-1 block font-sans text-xs font-medium uppercase tracking-[0.14em] text-accent">
                    Séances
                  </span>
                  <span className="block text-[17px] leading-snug text-foreground lining-nums">{offer.sessions}</span>
                </p>
                <p className="mt-3">
                  <span className="mb-1 block font-sans text-xs font-medium uppercase tracking-[0.14em] text-accent">
                    Durée
                  </span>
                  <span className="block text-[17px] leading-snug text-foreground">{offer.duration}</span>
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">{offer.who}</p>
                <p className="mt-5 font-serif text-3xl leading-none text-foreground lining-nums">{offer.price}</p>
                <p className="mt-2 min-h-[1.25rem] text-[13px] leading-snug text-muted-foreground lining-nums">
                  {offer.priceNote}
                </p>

                <div>
                  <p className="mt-6 font-serif text-lg italic leading-snug text-foreground">
                    Vous en êtes peut-être là
                  </p>
                  <ul className="mt-2.5 flex flex-col gap-2.5">
                    {offer.signs.map((sign) => (
                      <li key={sign} className="flex items-start gap-3 text-[15px] leading-snug text-foreground/85">
                        <span aria-hidden className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-accent" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 text-[15px] leading-relaxed text-foreground/85">{offer.description}</p>

                {offer.detail ? (
                  <Link
                    to={offer.detail}
                    className="group mt-8 inline-flex w-fit items-center gap-2 text-sm text-accent"
                  >
                    <span className="border-b border-transparent pb-0.5 group-hover:border-accent">
                      Voir le détail
                    </span>
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                ) : (
                  <span className="mt-8" aria-hidden />
                )}

                <ReserveButton className="mt-4 w-full" />

                {offer.situation ? (
                  <Link
                    to={offer.situation.to}
                    className="group mt-4 inline-flex w-fit flex-col gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="inline-flex items-center gap-2">
                      Lire une situation réelle
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                    <span>«{"\u00a0"}{offer.situation.title}{"\u00a0"}»</span>
                  </Link>
                ) : (
                  <span className="mt-4" aria-hidden />
                )}
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
