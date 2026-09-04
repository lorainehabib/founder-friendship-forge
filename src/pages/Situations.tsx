import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import Seo from "@/components/Seo";

type Situation = {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  closing: { lead: string; pull: string };
  bridge: { label: string; to: string };
};

const situations: Situation[] = [
  {
    id: "compatibles",
    label: "Avant de s'associer.",
    title: "Sommes-nous compatibles ?",
    paragraphs: [
      "Deux entrepreneurs expérimentés, un nouveau projet ensemble, trois mois de travail en commun. L'un des deux me contacte : sa précédente association vient de se terminer et il en sort avec un goût amer. Il s'est senti utilisé par son ancien associé, et il ne veut pas que cette situation se reproduise. Il ne veut pas prendre le risque de se tromper d'associé.",
      "Il me demande un diagnostic de leurs personnalités respectives, il veut savoir s'ils sont compatibles. Son associé potentiel est également partant, nous commençons le travail.",
      "Au fil des séances, ce qui préoccupait l'entrepreneur qui m'avait initialement contactée a émergé. Il avait des doutes sur plusieurs compétences de son associé potentiel, mais il ne s'autorisait pas à aller chercher de quoi se rassurer. Les doutes s'accumulaient et son inconfort grandissait.",
    ],
    closing: {
      lead: "À la fin de l'accompagnement, il avait sa réponse, mais pas celle qu'il cherchait au départ. Il n'avait pas besoin d'un diagnostic. Il avait besoin de s'autoriser à vérifier par lui-même : il a appelé d'anciens clients de son associé, demandé l'avis d'experts métier, fait une vraie due diligence sur ses compétences. Avant le coaching, il ressentait un inconfort difficile à nommer. Après, il avait obtenu les réponses à ses questions, et ",
      pull: "su dépasser un mécanisme qui l'empêchait, ici et ailleurs, d'aborder des sujets délicats.",
    },
    bridge: {
      label: "Ce que je propose avant de s'associer : S'associer",
      to: "/offres/#s-associer",
    },
  },
  {
    id: "alex-stan",
    label: "Quand tout va bien, et qu'on veut que ça dure.",
    title: "Tout va bien, à un détail près",
    paragraphs: [
      "Un binôme de fondateurs, appelons-les Alex et Stan.",
      "À première vue, tout va bien dans leur association : ils viennent de boucler leur série A et souhaitent travailler leur relation à titre préventif.",
      "Je m'entretiens d'abord avec Alex. «\u00a0Est-ce qu'il y a des aspects de votre relation qui te gênent\u00a0?\u00a0» Il me dit que non. Puis : «\u00a0Ah si, il s'est passé quelque chose cette semaine, mais c'est vraiment un détail.\u00a0»",
      "Il me raconte. La veille, au téléphone avec leurs investisseurs, Alex répond à une question\u00a0; Stan ne le laisse pas finir et répond à sa place. Sur le coup, ça l'agace, mais pas de quoi en faire un plat. Sauf que ce n'est pas la première fois : la semaine d'avant, Stan l'avait contredit devant toute l'équipe. Je lui demande comment il l'a vécu. «\u00a0Je me sens dénigré. J'ai l'impression qu'il ne voit pas ce que j'apporte.\u00a0»",
      "De son côté, Stan ne mentionne aucun de ces épisodes. Ce qui le préoccupe, lui, c'est la lenteur de réflexion d'Alex, et le sentiment d'être seul à décider.",
      "En séance commune, on pose tout sur la table, et le cercle vicieux apparaît. Alex a besoin de temps pour se forger un avis\u00a0; ne le sachant pas, Stan le presse, l'interrompt, lui laisse moins de place. Plus Stan veut aller vite, plus Alex se sent dénigré. Plus Alex se sent dénigré, moins il ose donner son avis. Moins il donne son avis, plus Stan se sent seul.",
      "En nommant ce cercle vicieux, chacun a compris ce que l'autre vivait : Alex n'est pas lent, il analyse\u00a0; derrière l'impatience de Stan, un grand sentiment de solitude. Chacun ajuste alors son comportement. Et ce qu'on a su faire une fois, on peut le refaire.",
    ],
    closing: {
      lead: "Pris à ce stade, l'inconfort ne deviendra pas une tension. Laissé courir des mois, ce même inconfort aurait donné un associé exaspéré par la lenteur de l'autre, et un autre qui l'évitait pour ne pas se sentir nul sous son regard. ",
      pull: "Une relation qui ne fonctionne plus.",
    },
    bridge: {
      label: "Ce que je propose à ce stade : Entretenir la relation",
      to: "/offres/#entretenir",
    },
  },
  {
    id: "cinq-associes",
    label: "Quand c'est déjà tendu, à plusieurs.",
    title: "Se parler, à cinq associés",
    paragraphs: [
      "Une startup à impact en croissance. Cinq associés. Sur le papier, tout avance, mais en coulisses, plus rien ne circule. Chacun vient se confier séparément, personne ne dit les choses en collectif. L'un d'entre eux envisage de partir sans l'avoir annoncé aux autres.",
      "L'associée qui m'a contactée avait le sentiment d'être devenue le réceptacle de tout ce qui ne se disait pas.",
      "Derrière ce qui ressemblait à un problème de communication, quelque chose de plus profond s'était installé. Le CEO challengeait systématiquement les décisions des autres. Pour lui, c'était normal, il voulait les pousser à aller plus loin. Mais pour les autres, c'était le signal qu'il ne leur faisait pas confiance. Moins ils se sentaient légitimes, plus ils cherchaient sa validation, jusqu'à ne plus rien décider sans lui. Lui portait tout, seul.",
    ],
    closing: {
      lead: "Le travail a permis de poser ce que personne n'avait jamais dit : les autres voulaient encore prendre le lead, ils n'avaient jamais cessé de le vouloir. Lui était à bout, et il ne s'était jamais autorisé à le dire. ",
      pull: "Quand il l'a fait, le soulagement a été immédiat, pour tout le monde.",
    },
    bridge: {
      label: "Ce que je propose quand c'est déjà tendu : Débloquer la relation",
      to: "/offres/#debloquer",
    },
  },
  {
    id: "ca-ne-va-plus",
    label: "Quand on ne sait plus si on veut continuer.",
    title: "Ça ne va plus",
    paragraphs: [
      "Une startup e-commerce, deux associés. Celui avec qui je travaille n'en peut plus, mais il ne sait pas de quoi exactement. Est-ce que c'est la boîte qui ne va pas dans la direction qu'il veut\u00a0? Est-ce que c'est son associé qui n'a pas été à la hauteur cette année\u00a0? Est-ce qu'ils sont trop similaires pour se répartir les rôles efficacement\u00a0? Les frustrations se sont accumulées avec les années, et les constats s'entrechoquent et se contredisent.",
      "D'une séance à l'autre, sa position changeait. Parfois plusieurs fois par semaine. Partir, rester, confronter, laisser couler. Cette hésitation permanente n'était pas un flou, c'était une façon de ne pas aller au bout de ce qu'il savait déjà.",
    ],
    closing: {
      lead: "Le travail a consisté à démêler. Séparer ce qui relevait du projet, de la relation, et de ce qu'il n'arrivait pas à se dire à lui-même. Ce qui est apparu au fil des séances, c'est que tous ses élans allaient dans la même direction, mais sans son associé. Il ne voulait plus travailler avec lui. Une fois que ça a été clair, il a arrêté de tourner en rond, et ",
      pull: "il a pu se concentrer sur ce qui comptait vraiment : son produit.",
    },
    bridge: {
      label: "Ce que je propose quand on ne sait plus : Débloquer la relation",
      to: "/offres/#debloquer",
    },
  },
];

const Situations = () => {
  return (
    <SiteLayout>
      <Seo
        title="Situations — Loraine Habib | Quelques exemples d'accompagnements"
        description="Quatre situations réelles d'accompagnement de fondateurs, avant, pendant et après l'installation d'une tension entre associés."
        path="/situations/"
      />
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 pt-16 md:pt-28 pb-12 md:pb-16">
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance text-foreground max-w-4xl">
            Quelques exemples d'accompagnements.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/85 leading-relaxed max-w-3xl">
            Quatre situations réelles d'accompagnement de fondateurs. Les
            détails ont été modifiés pour préserver la confidentialité.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 md:px-10 divide-y divide-border/70">
          {situations.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-28 grid gap-10 lg:grid-cols-12 py-20 md:py-28"
            >
              <header className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                <p className="text-sm md:text-base italic text-muted-foreground mb-4">
                  {s.label}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl leading-[1.15] text-foreground text-balance">
                  {s.title}
                </h2>
              </header>
              <div className="lg:col-span-8 space-y-6 text-lg text-foreground/85 leading-relaxed">
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p>
                  {s.closing.lead}
                  <span className="text-accent">{s.closing.pull}</span>
                </p>
                <div className="pt-6 border-t border-border/60">
                  <Link
                    to={s.bridge.to}
                    className="group inline-flex items-center gap-3 text-accent text-sm tracking-wide hover:text-foreground transition-colors"
                  >
                    <span className="border-b border-accent/40 group-hover:border-foreground pb-0.5">
                      {s.bridge.label}
                    </span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
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
