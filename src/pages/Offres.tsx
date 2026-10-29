import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import Seo from "@/components/Seo";
import { CALENDLY_URL } from "@/lib/site";

type Offer = {
  id: string;
  aliases?: string[];
  name: string;
  title: string;
  who: string;
  format: string;
  price: string | string[];
  priceNote?: string;
  signs: [string, string, string];
  approach: string;
  situation: { title: string; to: string };
};

const offers: Offer[] = [
  {
    id: "socle",
    aliases: ["s-associer", "entretenir"],
    name: "Socle",
    title: "Quand tout va bien, et que vous voulez que ça dure",
    who: "À deux ou plus",
    format: "1h30 avec chacun, une séance commune, un suivi à deux mois",
    price: ["3 000 € HT à deux", "4 000 € HT à trois"],
    priceNote: "Au-delà, sur devis",
    signs: [
      "Vous vous associez, et vous voulez poser de bonnes bases.",
      "De petites frustrations reviennent, sans que personne ne les nomme.",
      "Vous venez de lever, et les rôles vont changer.",
    ],
    approach:
      "Je vous aide à repérer les inconforts tant qu'ils sont petits, et à en parler avant qu'ils ne deviennent des tensions.",
    situation: {
      title: "Tout va bien, à un détail près",
      to: "/situations/#alex-stan",
    },
  },
  {
    id: "reset",
    aliases: ["debloquer"],
    name: "Reset",
    title: "Quand c'est déjà tendu, et que vous venez ensemble",
    who: "À deux ou plus",
    format: "Format adapté à votre situation",
    price: "À partir de 6 000 € HT",
    signs: [
      "Vous avez le sentiment d'avoir déjà tout essayé.",
      "Le même désaccord revient, sous des formes différentes.",
      "L'un de vous se demande s'il veut continuer.",
    ],
    approach:
      "Je ne creuse pas le fond du désaccord, je regarde la façon dont vous réagissez l'un à l'autre. C'est à cet endroit que la relation peut bouger.",
    situation: {
      title: "Se parler, à cinq associés",
      to: "/situations/#cinq-associes",
    },
  },
  {
    id: "solo",
    name: "Solo",
    title: "Quand vous venez seul",
    who: "Seul · Coaching individuel",
    format: "8 séances d'1h30",
    price: "4 500 € HT",
    signs: [
      "La relation avec votre associé vous pèse, et il n'est pas prêt à se faire accompagner.",
      "Vous prenez un nouveau poste, ou un nouveau périmètre.",
      "Une décision traîne depuis des mois.",
    ],
    approach:
      "On part du concret : un moment précis, une réaction, une décision qui coince pour atteindre l'objectif fixé.",
    situation: {
      title: "Ça ne va plus",
      to: "/situations/#ca-ne-va-plus",
    },
  },
];

const faqItems = [
  {
    q: "Mon associé n'est pas prêt à faire cette démarche, ça peut quand même marcher ?",
    a: "Oui. Une relation, c'est une dynamique : quand l'un des deux change sa façon d'agir, l'autre ne peut pas réagir exactement comme avant. La relation bouge, même si un seul des deux est engagé dans le travail.",
  },
  {
    q: "Notre situation est vraiment spécifique, vous avez déjà vu ça ?",
    a: "Probablement. Mais ce qui importe ce n'est pas d'avoir vu exactement la même situation, c'est de comprendre ce qui la crée. Les tensions entre associés se ressemblent souvent en surface, mais ce qui les alimente est propre à chaque individu.",
  },
  {
    q: "Comment commence le travail ?",
    a: "Par un premier échange en visio, gratuit et sans engagement. Si on décide de travailler ensemble, la première séance sert à poser un objectif précis pour l'accompagnement à partir de votre demande, telle que vous la formulez aujourd'hui.",
  },
  {
    q: "Ça marche aussi à distance ?",
    a: "Oui, en visio, en recréant les conditions que le présentiel offre naturellement : pas de réunion juste avant ni juste après, un endroit calme, une porte qui ferme, etc.",
  },
  {
    q: "Ce qui se dit en séance reste confidentiel ?",
    a: "Oui, sans exception. Même quand l'accompagnement est initié par un investisseur ou un fonds, rien de ce qui se dit en séance ne leur est transmis. C'est une condition non négociable pour que le travail fonctionne.",
  },
  {
    q: "Comment ça se passe si on se rend compte qu'on doit se séparer ?",
    a: "Ça arrive. Le travail fait bouger la relation, et parfois, en y voyant plus clair, l'un des deux se rend compte que les conditions ne lui conviennent plus. Cette décision serait venue de toute façon. Elle vient juste plus vite, et plus lucidement.",
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
        title="Travailler ensemble — Loraine Habib"
        description="Socle, Reset, Solo : trois accompagnements pour fondateurs, avant la tension, quand c'est déjà tendu, ou en individuel."
        path="/offres/"
        structuredData={faqSchema}
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 md:pt-28 pb-10 md:pb-14">
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance text-foreground max-w-4xl">
            Travailler ensemble.
          </h1>
          <nav
            aria-label="Les trois offres"
            className="mt-8 flex flex-wrap gap-2 lg:hidden"
          >
            {offers.map((offer) => (
              <a
                key={offer.id}
                href={`#${offer.id}`}
                className="border border-border px-3 py-1.5 text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                {offer.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20 md:pb-28">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-x-6 lg:gap-y-0 lg:grid-rows-[repeat(12,auto)]">
            {offers.map((offer) => (
              <article
                key={offer.id}
                id={offer.id}
                className="relative scroll-mt-28 flex flex-col border border-border/70 border-t-[3px] border-t-accent bg-secondary/55 p-6 md:p-8 lg:grid lg:grid-rows-subgrid lg:[grid-row:span_12] lg:gap-0 lg:[&>*]:self-start"
              >
                {offer.aliases?.map((alias) => (
                  <span
                    key={alias}
                    id={alias}
                    className="absolute top-0 scroll-mt-28"
                    aria-hidden
                  />
                ))}

                <h2 className="font-serif text-6xl lg:text-7xl leading-[0.9] text-accent">
                  {offer.name}
                </h2>
                <h3 className="mt-5 font-serif text-xl lg:text-[1.35rem] leading-snug font-medium text-foreground text-balance">
                  {offer.title}
                </h3>

                <p className="mt-8 w-full border-t border-border/80 bg-background px-4 pt-5 pb-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground lg:!self-stretch">
                  {offer.who}
                </p>
                <p className="w-full bg-background px-4 py-1.5 text-sm leading-snug text-foreground/80 lg:!self-stretch">
                  {offer.format}
                </p>
                <div className="w-full border-b border-border/80 bg-background px-4 pt-2 pb-5 lg:!self-stretch">
                  {(Array.isArray(offer.price) ? offer.price : [offer.price]).map(
                    (line) => (
                      <p
                        key={line}
                        className="font-serif text-xl leading-snug text-foreground"
                      >
                        {line}
                      </p>
                    ),
                  )}
                  {offer.priceNote && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {offer.priceNote}
                    </p>
                  )}
                </div>

                <p className="mt-6 font-serif italic text-lg leading-snug text-foreground">
                  Vous en êtes peut-être là
                </p>
                {offer.signs.map((sign) => (
                  <p
                    key={sign}
                    className="mt-3 border-l border-accent/50 pl-3 text-[15px] leading-snug text-foreground/85"
                  >
                    {sign}
                  </p>
                ))}

                <p className="mt-6 w-full border-t border-border/70 pt-5 font-serif text-lg md:text-xl leading-snug text-foreground">
                  {offer.approach}
                </p>

                <Link
                  to={offer.situation.to}
                  className="group mt-8 inline-flex flex-col gap-1.5 text-accent hover:text-foreground transition-colors w-fit"
                >
                  <span className="inline-flex items-center gap-2 text-sm tracking-wide">
                    <span className="border-b border-accent/40 group-hover:border-foreground pb-0.5">
                      Lire une situation réelle
                    </span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                  <span className="text-sm text-foreground/55 group-hover:text-foreground/80">
                    « {offer.situation.title} »
                  </span>
                </Link>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 inline-flex w-full items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-3.5 text-sm tracking-wide hover:bg-foreground transition-colors duration-300"
                >
                  Réserver un échange
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-8">
            Ce qu'on me demande souvent
          </p>
          <div className="divide-y divide-border/70 border-y border-border/70">
            {faqItems.map((item) => (
              <details key={item.q} className="group py-8">
                <summary className="flex cursor-pointer items-start justify-between gap-8 list-none">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug group-open:text-accent transition-colors text-balance">
                    {item.q}
                  </h3>
                  <span className="text-accent text-2xl font-serif leading-none mt-1 transition-transform duration-500 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 text-foreground/80 leading-relaxed max-w-3xl text-lg">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </SiteLayout>
  );
};

export default Offres;
