import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import Seo from "@/components/Seo";

type OfferLink = { label: string; to: string };

type Offer = {
  id: string;
  aliases?: string[];
  name: string;
  title: string;
  meta: string[];
  body: string[];
  stepsIntro?: string;
  steps?: string[];
  links: OfferLink[];
};

const offers: Offer[] = [
  {
    id: "socle",
    aliases: ["s-associer", "entretenir"],
    name: "Socle",
    title: "Travailler la relation avant d'en avoir besoin",
    meta: [
      "À deux ou à trois",
      "Sur trois mois",
      "3 000 € HT à deux, 4 000 € HT à trois, sur devis au-delà",
    ],
    body: [
      "Vous vous apprêtez à vous associer, ou vous l'êtes déjà. Tout va bien pour le moment, et vous voulez que ça dure. Peut-être que de petites frustrations pointent de temps en temps, ou que l'un de vous est moins satisfait que l'autre. C'est le bon moment : un inconfort qu'on traite maintenant ne deviendra pas une tension.",
    ],
    stepsIntro: "En trois temps :",
    steps: [
      "Une séance individuelle d'1h30 avec chacun.",
      "Une séance commune, de 2h à deux ou de 3h à trois.",
      "Deux mois plus tard, un suivi : vingt minutes avec chacun, puis une séance commune.",
    ],
    links: [
      {
        label: "Sommes-nous compatibles ?",
        to: "/situations/#compatibles",
      },
      {
        label: "Tout va bien, à un détail près",
        to: "/situations/#alex-stan",
      },
    ],
  },
  {
    id: "reset",
    aliases: ["debloquer"],
    name: "Reset",
    title: "Quand c'est déjà tendu, et que vous venez ensemble",
    meta: ["À deux ou plus", "Sur devis, à partir de 6 000 € HT"],
    body: [
      "La tension est installée, et vous avez le sentiment d'avoir déjà tout essayé. Peut-être que vous voulez encore faire fonctionner la relation. Peut-être que vous ne savez plus si vous le voulez. Dans les deux cas, c'est un travail possible, à condition que chacun accepte d'y participer.",
      "De l'intérieur, on ne voit pas ce qui entretient la tension, parce qu'on en fait partie. Chaque situation étant différente, l'accompagnement se construit après un premier échange.",
    ],
    links: [
      {
        label: "Se parler, à cinq associés",
        to: "/situations/#cinq-associes",
      },
    ],
  },
  {
    id: "solo",
    name: "Solo",
    title:
      "Coaching individuel, sur la relation avec votre associé ou sur votre rôle de dirigeant",
    meta: ["Seul", "8 séances d'1h30 sur cinq mois", "4 500 € HT"],
    body: [
      "Vous venez seul, avec ce qui vous occupe aujourd'hui : la relation avec votre associé, une prise de poste, une décision qui traîne, votre place dans l'équipe dirigeante.",
    ],
    links: [
      {
        label: "Ça ne va plus",
        to: "/situations/#ca-ne-va-plus",
      },
    ],
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
        <div className="mx-auto max-w-6xl px-6 md:px-10 pt-16 md:pt-28 pb-12 md:pb-16">
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance text-foreground max-w-4xl">
            Travailler ensemble.
          </h1>
          <nav
            aria-label="Les trois offres"
            className="mt-10 md:mt-12 flex flex-wrap items-center gap-x-1 gap-y-2 text-sm md:text-base tracking-wide"
          >
            {offers.map((f, i) => (
              <span key={f.id} className="inline-flex items-center gap-x-1">
                {i > 0 && (
                  <span aria-hidden className="text-muted-foreground/60 px-2">
                    ·
                  </span>
                )}
                <a
                  href={`#${f.id}`}
                  className="text-accent hover:text-foreground transition-colors"
                >
                  {f.name}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </section>

      {offers.map((f, index) => (
        <article
          key={f.id}
          id={f.id}
          className={`scroll-mt-28 border-t border-border/60 ${
            index % 2 === 1 ? "bg-secondary/30" : ""
          }`}
        >
          {f.aliases?.map((alias) => (
            <div
              key={alias}
              id={alias}
              className="h-0 overflow-hidden scroll-mt-28"
              aria-hidden
            />
          ))}
          <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <header className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <p className="font-serif text-5xl md:text-6xl leading-none text-accent">
                {f.name}
              </p>
              <ul className="mt-8 space-y-2 text-sm md:text-base text-foreground/75 leading-snug">
                {f.meta.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </header>

            <div className="lg:col-span-8">
              <h2 className="font-serif text-2xl md:text-4xl leading-[1.15] text-balance text-foreground">
                {f.title}
              </h2>
              <div className="mt-8 space-y-5 text-base md:text-lg text-foreground/85 leading-relaxed">
                {f.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {f.stepsIntro && f.steps && (
                <div className="mt-10">
                  <p className="font-medium text-foreground">
                    {f.stepsIntro}
                  </p>
                  <ol className="mt-6 space-y-5">
                    {f.steps.map((step, i) => (
                      <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-4">
                        <span
                          aria-hidden
                          className="font-serif text-3xl text-accent leading-none"
                        >
                          {i + 1}
                        </span>
                        <p className="text-base md:text-lg text-foreground/85 leading-relaxed pt-1">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {f.links.length > 0 && (
                <div className="mt-12 pt-6 border-t border-border/60">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    {f.links.length > 1 ? "Situations" : "Situation"}
                  </p>
                  <div className="flex flex-col gap-3">
                    {f.links.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        className="group inline-flex items-center gap-3 text-accent text-sm md:text-base tracking-wide hover:text-foreground transition-colors w-fit"
                      >
                        <span className="border-b border-accent/40 group-hover:border-foreground pb-0.5">
                          {l.label}
                        </span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      ))}

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
