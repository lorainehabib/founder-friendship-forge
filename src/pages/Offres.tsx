import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import Seo from "@/components/Seo";

type OfferLink = { label: string; to: string };

type Offer = {
  id: string;
  eyebrow: string;
  title: string;
  tags: string[];
  price: string;
  body: string[];
  stepsIntro?: string;
  steps?: string[];
  links: OfferLink[];
};

const offers: Offer[] = [
  {
    id: "s-associer",
    eyebrow: "S'associer",
    title: "Se mettre d'accord, avant de s'engager",
    tags: ["Format clé en main", "À deux"],
    price: "4 000 € HT",
    body: [
      "Vous avez trouvé la personne avec qui vous associer. Vous avez commencé à travailler ensemble sur le projet, mais rien n'est encore scellé. Et une question tourne : est-ce que j'y vais, ou pas ? Soit vous cherchez à être rassuré avant cette grande décision. Soit vous savez déjà que vous y allez, et vous voulez préparer au mieux l'association que vous vous apprêtez à démarrer.",
    ],
    stepsIntro: "Le programme se déroule en trois temps :",
    steps: [
      "En amont, je vous envoie à chacun un état des lieux pré-association : une grille des sujets à avoir abordés avant de s'associer. Chacun la remplit de son côté. Vos réponses me permettent de préparer les séances et de repérer là où il faut creuser.",
      "Ensuite, deux demi-journées en présentiel, espacées de deux à trois semaines, dont le contenu s'adapte à vos réponses. Entre les deux, je vous confie des sujets à discuter à deux.",
      "En sortie, je vous remets une synthèse écrite : vos points d'accord, vos points de vigilance, et les sujets qui restent à traiter.",
    ],
    links: [
      {
        label: "Lire une situation réelle : Sommes-nous compatibles ?",
        to: "/situations/#compatibles",
      },
    ],
  },
  {
    id: "entretenir",
    eyebrow: "Entretenir la relation",
    title:
      "Mettre les inconforts sur la table avant qu'ils ne deviennent des tensions",
    tags: ["Sur mesure", "Seul ou à deux"],
    price: "à partir de 3 000 € HT",
    body: [
      "À n'importe quel moment de l'association. Peut-être que tout va bien. Peut-être que de légères frustrations pointent de temps en temps. Peut-être que l'un de vous n'est pas tout à fait satisfait, quand pour l'autre tout roule. Il n'y a pas de conflit ouvert, et c'est justement le bon moment pour travailler la relation.",
      "Il n'y a pas de situation type, l'accompagnement se construit sur mesure, à partir de là où vous en êtes.",
    ],
    links: [
      {
        label: "Lire une situation réelle : Tout va bien, à un détail près",
        to: "/situations/#alex-stan",
      },
    ],
  },
  {
    id: "debloquer",
    eyebrow: "Débloquer la relation",
    title: "Quand c'est déjà tendu",
    tags: ["Sur mesure", "Seul ou à deux"],
    price: "à partir de 3 000 € HT",
    body: [
      "La tension est déjà installée, et vous avez le sentiment d'avoir déjà tout essayé. Peut-être que vous voulez encore faire fonctionner la relation. Peut-être que vous ne savez même plus si vous le voulez, et qu'il vous faut d'abord y voir clair. Dans les deux cas, c'est un travail possible.",
      "Essayer de régler une tension seul, ou le faire avec un regard extérieur, ce n'est pas la même chose : je vois des choses que vous ne pouvez pas voir, parce que vous êtes partie prenante de la relation.",
    ],
    links: [
      {
        label: "Lire une situation réelle : Se parler, à cinq associés",
        to: "/situations/#cinq-associes",
      },
      {
        label: "Lire une situation réelle : Ça ne va plus",
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
    a: "Probablement. Mais ce qui importe ce n'est pas d'avoir vu exactement la même situation, c'est de comprendre ce qui la crée. Les tensions entre cofondateurs se ressemblent souvent en surface, mais ce qui les alimente est propre à chaque individu.",
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
        title="Offres — Loraine Habib | Trois façons de travailler la relation"
        description="S'associer, entretenir la relation, débloquer une tension : trois formats d'accompagnement pour fondateurs, selon là où vous en êtes."
        path="/offres/"
        structuredData={faqSchema}
      />

      {/* Hero */}
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 pt-16 md:pt-28 pb-12 md:pb-16">
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance text-foreground max-w-4xl">
            Trois façons de travailler la relation.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/85 leading-relaxed max-w-2xl">
            Selon là où vous en êtes.
          </p>
        </div>
      </section>

      {/* Offers */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 md:py-12 space-y-6 md:space-y-8">
          {offers.map((f) => (
            <article
              key={f.id}
              id={f.id}
              className="scroll-mt-28 border border-border/70 bg-background p-8 md:p-10"
            >
              <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between pb-6 md:pb-8 border-b border-border/60">
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                    {f.eyebrow}
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl leading-[1.2] text-balance text-foreground">
                    {f.title}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end md:pt-2">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs tracking-wide text-muted-foreground border border-border/70 bg-secondary/40 px-3 py-1.5"
                    >
                      {t}
                    </span>
                  ))}
                  <span className="text-xs tracking-wide font-semibold text-accent border border-accent/40 bg-accent/10 px-3 py-1.5">
                    {f.price}
                  </span>
                </div>
              </header>
              <div className="mt-6 md:mt-8 space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed max-w-3xl">
                {f.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {f.stepsIntro && (
                  <p className="pt-2 font-medium text-foreground">
                    {f.stepsIntro}
                  </p>
                )}
                {f.steps && (
                  <ol className="space-y-4 pt-1">
                    {f.steps.map((step, i) => (
                      <li key={i} className="flex gap-5">
                        <span
                          aria-hidden
                          className="font-serif text-2xl text-accent leading-none pt-0.5 shrink-0 w-8"
                        >
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
              {f.links.length > 0 && (
                <div className="mt-8 md:mt-10 pt-6 border-t border-border/60 flex flex-col gap-3">
                  {f.links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="group inline-flex items-center gap-3 text-accent text-sm tracking-wide hover:text-foreground transition-colors"
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
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Seul ou à deux */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20">
          <aside className="border-l-2 border-accent pl-6 md:pl-8 py-6 max-w-3xl">
            <p className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Seul ou à deux&nbsp;?
            </p>
            <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
              <p>
                Pour <em className="italic">Entretenir</em> comme pour{" "}
                <em className="italic">Débloquer</em>, le travail peut se faire
                seul, à deux, ou à plusieurs, selon qui est motivé pour
                l'entamer.
              </p>
              <p className="font-medium text-foreground">
                N'attendez pas que l'autre veuille s'y mettre pour vous faire
                accompagner&nbsp;: si une seule personne change son
                comportement, c'est toute la relation qui se modifie.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
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
