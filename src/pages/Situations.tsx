import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import Seo from "@/components/Seo";

type Situation = {
  title: string;
  paragraphs: string[];
  inlineLast: { lead: string; pull: string; trail?: string };
};

const situations: Situation[] = [
  {
    title: "S'associer avec quelqu'un qu'on connaît à peine",
    paragraphs: [
      "Deux entrepreneurs expérimentés, un nouveau projet ensemble, trois mois de travail en commun. L'un des deux me contacte, pas parce que ça se passe mal, mais pour vérifier. Il voulait un diagnostic : est-ce que les profils sont compatibles ? Est-ce que ça va tenir ? Il avait déjà vécu une association où il n'arrivait pas à trouver sa place, et il ne voulait pas revivre ça.",
      "Au fil du travail, ce qui le préoccupait vraiment a émergé. Ce n'était pas une question de compatibilité des profils. C'était un mécanisme plus profond : quand quelque chose le dérangeait, il ne le disait pas. Il accumulait les doutes au lieu de les poser sur la table. Il attendait d'être sûr avant d'oser une conversation, et cette certitude ne venait jamais.",
    ],
    inlineLast: {
      lead: "À la fin de l'accompagnement, il avait sa réponse, mais pas celle qu'il cherchait au départ. Il n'avait pas besoin d'un diagnostic. Il avait besoin de s'autoriser à vérifier par lui-même. Il a appelé d'anciens clients de son associé, demandé l'avis d'experts métier, une vraie due diligence sur ses compétences. Avant le coaching, ça ne lui serait même pas venu à l'esprit. ",
      pull: "Après, ça lui paraissait évident.",
    },
  },
  {
    title: "Cinq associés, un seul décideur",
    paragraphs: [
      "Une startup à impact en croissance. Cinq associés. Sur le papier, tout avance, mais en coulisses, plus rien ne circule. Chacun vient se confier séparément, personne ne dit les choses en collectif. L'un d'entre eux envisage de partir sans l'avoir annoncé aux autres.",
      "L'associée qui m'a contactée avait le sentiment d'être devenue le réceptacle de tout ce qui ne se disait pas.",
      "Derrière ce qui ressemblait à un problème de communication, quelque chose de plus profond s'était installé. Le CEO challengeait systématiquement les décisions des autres, pour lui, c'était normal, il voulait les pousser à aller plus loin. Mais pour les autres, c'était le signal qu'il ne leur faisait pas confiance. Moins ils se sentaient légitimes, plus ils cherchaient sa validation, jusqu'à ne plus rien décider sans lui. Lui portait tout, seul.",
    ],
    inlineLast: {
      lead: "Le travail a permis de poser ce que personne n'avait jamais dit. Les autres voulaient encore prendre le lead, ils n'avaient jamais cessé de le vouloir. Lui était à bout, et il ne s'était jamais autorisé à le dire. ",
      pull: "Quand il l'a fait, le soulagement a été immédiat, pour tout le monde.",
    },
  },
  {
    title: "Tout est mélangé, plus rien n'avance",
    paragraphs: [
      "Une startup e-commerce, deux associés. Celui qui me contacte n'en peut plus, mais il ne sait pas de quoi exactement. Est-ce que c'est la boîte qui ne va pas dans la direction qu'il veut ? Est-ce que c'est son associé qui n'a pas été à la hauteur cette année ? Est-ce qu'ils sont trop similaires pour se compléter ? Tout s'est mélangé, et la frustration a pris toute la place.",
      "D'une séance à l'autre, sa position changeait. Parfois plusieurs fois par semaine. Partir, rester, confronter, laisser couler. Cette hésitation permanente n'était pas un flou, c'était une façon de ne pas aller au bout de ce qu'il savait déjà.",
    ],
    inlineLast: {
      lead: "Le travail a consisté à démêler. Séparer ce qui relevait du projet, de la relation, et de ce qu'il n'arrivait pas à se dire à lui-même. Ce qui est apparu au fil des séances, c'est que tous ses élans allaient dans la même direction, mais sans son associé. Il ne voulait plus travailler avec lui. Une fois que ça a été clair, il a arrêté de tourner en rond, et ",
      pull: "il a pu se concentrer sur ce qui comptait vraiment : son produit.",
    },
  },
];

const Situations = () => {
  return (
    <SiteLayout>
      <Seo
        title="Situations accompagnées — Loraine Habib"
        description="Exemples concrets d'accompagnement de fondateurs pour débloquer des tensions relationnelles et décisionnelles."
        path="/situations/"
      />
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Situations
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance text-foreground max-w-4xl">
            Quelques exemples d'accompagnements.
          </h1>
          <p className="mt-8 text-base text-muted-foreground italic max-w-2xl">
            Les détails ont été modifiés pour préserver la confidentialité.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 md:px-10 divide-y divide-border/70">
          {situations.map((s) => (
            <article
              key={s.title}
              className="grid gap-10 lg:grid-cols-12 py-20 md:py-28"
            >
              <header className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                <h2 className="font-serif text-3xl md:text-4xl leading-[1.15] text-foreground text-balance">
                  {s.title}
                </h2>
              </header>
              <div className="lg:col-span-8 space-y-6 text-lg text-foreground/85 leading-relaxed">
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p>
                  {s.inlineLast.lead}
                  <span className="text-accent">{s.inlineLast.pull}</span>
                  {s.inlineLast.trail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBlock onlyButton />
    </SiteLayout>
  );
};

export default Situations;
