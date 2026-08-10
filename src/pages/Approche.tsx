import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import Seo from "@/components/Seo";
import Picture from "@/components/Picture";
import portraitJpg from "@/assets/loraine-portrait-1.jpg";
import portraitWebp from "@/assets/loraine-portrait-1.webp";

const reasons = [
  {
    num: "01",
    title: "On ne voit pas l'inconfort s'accumuler",
    intro:
      "Un conflit ne surgit pas du jour au lendemain. On retrace ses prémices au début de la relation :",
    quotes: [
      "Depuis le début, j'avais remarqué qu'il faisait passer ses intérêts personnels avant le reste.",
      "On n'a jamais vraiment défini les rôles de chacun ; à chaque fois qu'on essayait, on se confrontait aux mêmes désaccords.",
      "Je ne comprends pas pourquoi elle ne veut pas partager certaines informations avec moi, mais devant son refus répété je n'ai pas insisté.",
    ],
    body: [
      "Ces intuitions et désaccords sont tus, soit parce qu'ils ne sont jamais abordés, soit parce que la ou les conversations qu'on a eues à leur sujet n'ont pas abouti.",
      "Alors, on se dit que c'est un détail. Que l'association vaut le coup malgré cela. Et on décide de prendre sur soi pour éviter le conflit.",
      "Mais combien peut-on prendre sur soi ? Quand est-ce que « il est comme ça, je fais avec » devient « tout ce qu'il dit m'est insupportable à entendre » ?",
    ],
    punchline:
      "L'opposé de « se prendre la tête », ce n'est pas « prendre sur soi » indéfiniment. Il y a un chemin du milieu : aller au fond d'un sujet difficile. Et si on n'y arrive pas, ce n'est pas que c'est impossible.",
  },
  {
    num: "02",
    title: "On attend l'urgence pour agir",
    intro:
      "Tant que ça ne fait pas vraiment mal, on repousse. Sauf qu'une relation travaillée tôt coûte bien moins de temps, d'énergie et d'argent qu'une relation déjà en conflit.",
    story: [
      "Je reçois un binôme de fondateurs, appelons-les Alex et Stan.",
      "À première vue, tout va bien dans leur association. Ils viennent de finaliser leur série A et souhaitent travailler sur leur relation à titre préventif.",
      "Je m'entretiens d'abord avec Alex : « Est-ce qu'il y a des aspects de votre relation qui te gênent ? »",
      "Il me dit que non. Ah si, il s'est passé quelque chose cette semaine. Et quelque chose de similaire s'était passé la semaine d'avant.",
      "Il me raconte.",
      "Hier, ils sont au téléphone en haut-parleur avec leurs investisseurs. Alex répond à une question posée par l'investisseur. Stan ne le laisse pas terminer sa phrase et répond à sa place. Sur le coup, ça agace Alex, mais pas de quoi en faire tout un plat. Maintenant qu'il y pense, ça lui rappelle que la semaine dernière, quand ils ont parlé à l'équipe, Stan l'a contredit devant tout le monde.",
      "« Comment as-tu vécu ça ? — Je me sens dénigré, j'ai l'impression qu'il ne voit pas la valeur que j'apporte. »",
      "De son côté, Stan ne mentionne pas spontanément ces exemples, mais il me dit qu'il est frustré par la lenteur de réflexion d'Alex. Et qu'il se sent seul dans la prise de décision.",
      "En séance commune, on pose les éléments sur la table. Alex a besoin de temps d'analyse pour se faire un avis. Ne sachant pas cela, Stan, frustré par la lenteur d'Alex, a tendance à le presser, à l'interrompre, à lui laisser moins de place.",
      "Résultat : Alex se sent de plus en plus dénigré. À force, il ose moins donner son avis, et laisse Stan seul dans les décisions.",
      "Plus Stan veut aller vite, plus Alex se sent dénigré. Plus Alex se sent dénigré, moins il ose donner son avis. Moins il donne son avis, plus Stan se sent seul.",
    ],
    punchline:
      "Prise à ce stade, cette tension se règle sans grande douleur. Laissée courir des mois, elle donne un associé exaspéré par la lenteur de l'autre, et un autre qui l'évite pour ne pas se sentir nul sous son regard. Une relation qui ne fonctionne plus.",
  },
  {
    num: "03",
    title: "On confond « j'ai tout essayé » avec « c'est insoluble »",
    body: [
      "Face à une tension installée, on essaie de résoudre le problème par soi-même : en parler, s'expliquer, prendre sur soi. On s'épuise, puis on finit par abandonner, persuadé que la situation est sans issue.",
      "Mais avoir tout essayé ne veut pas dire que tout a été essayé.",
      "Les relations ont cela de particulier que, lorsqu'on est partie prenante, on ne peut pas être lucide sur ce qui s'y joue.",
      "Seul un regard extérieur permet d'identifier le nœud du problème, et de proposer des changements concrets adaptés à la situation.",
    ],
    punchline:
      "On n'a pas tout essayé tant qu'on n'a pas demandé de l'aide extérieure.",
  },
];

const formats = [
  {
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
  },
  {
    eyebrow: "Entretenir la relation",
    title:
      "Mettre les inconforts sur la table avant qu'ils ne deviennent des tensions",
    tags: ["Sur mesure", "Seul ou à deux"],
    price: "à partir de 3 000 € HT",
    body: [
      "À n'importe quel moment de l'association. Peut-être que tout va bien. Peut-être que de légères frustrations pointent de temps en temps. Peut-être que l'un de vous n'est pas tout à fait satisfait, quand pour l'autre tout roule. Il n'y a pas de conflit ouvert, et c'est justement le bon moment pour travailler la relation.",
      "Il n'y a pas de situation type, l'accompagnement se construit sur mesure, à partir de là où vous en êtes.",
    ],
  },
  {
    eyebrow: "Débloquer la relation",
    title: "Quand c'est déjà tendu",
    tags: ["Sur mesure", "Seul ou à deux"],
    price: "à partir de 3 000 € HT",
    body: [
      "La tension est déjà installée. Vous avez le sentiment d'avoir déjà tout essayé. Vous avez encore envie de faire fonctionner la relation.",
      "Essayer de régler une tension seuls, ou le faire avec un regard extérieur, ce n'est pas la même chose : je vois des choses que vous ne pouvez pas voir, parce que vous êtes partie prenante de la relation.",
    ],
    note:
      "Une précision : je fais du coaching, pas de la médiation. Le coaching, c'est quand vous voulez encore faire fonctionner la relation. La médiation, c'est quand la décision d'arrêter est déjà prise et qu'il s'agit d'organiser la séparation, sur les aspects contractuels.",
  },
];

const faqSections = [
  {
    id: "pour-nous",
    theme: "Est-ce que c'est pour nous ?",
    items: [
      {
        q: "Notre relation marche bien. C'est quand même utile ?",
        a: "Je travaille avec des fondateurs qui savent que la relation entre cofondateurs est clé pour l'entreprise. Le travail peut se faire dès l'idée de l'association, dans les débuts pour mettre en place des bases saines, quand des tensions émergent, et quand la relation est devenue conflictuelle.",
      },
      {
        q: "Mon associé n'est pas prêt à faire cette démarche, ça peut quand même marcher ?",
        a: "Oui. Une relation, c'est une dynamique : quand l'un des deux change sa façon d'agir, l'autre ne peut pas réagir exactement comme avant. La relation bouge, même si un seul des deux est engagé dans le travail.",
      },
      {
        q: "Notre situation est vraiment spécifique, vous avez déjà vu ça ?",
        a: "Probablement. Mais ce qui importe ce n'est pas d'avoir vu exactement la même situation, c'est de comprendre ce qui la crée. Les tensions entre cofondateurs se ressemblent souvent en surface, mais ce qui les alimente est propre à chaque individu.",
      },
      {
        q: "C'est un problème de business, pas de relation. Un coach peut vraiment aider ?",
        a: "Parfois le problème a l'air business alors qu'il est relationnel. Parfois c'est l'inverse. Dans les deux cas, le travail permet d'identifier où se situe le vrai blocage.",
      },
    ],
  },
  {
    id: "differences",
    theme: "Qu'est-ce qui vous différencie ?",
    items: [
      {
        q: "Quelle est la différence entre un coach et un médiateur ?",
        a: "Un médiateur intervient quand la décision d'arrêter est déjà prise et qu'il s'agit d'organiser la séparation, sur les aspects contractuels. En tant que coach, je travaille à faire fonctionner la relation.",
      },
      {
        q: "Quelle différence avec un mentor ou un board member qui nous conseillerait ?",
        a: "Un mentor partage ce qu'il a vécu et ce qui a marché pour lui. C'est utile quand vous cherchez un retour d'expérience. Mais chaque dynamique relationnelle est unique. Un conseil qui a marché ailleurs ne résout pas ce qui se joue entre vous. Le coaching part de ce qui se passe dans votre relation, pas dans celle de quelqu'un d'autre.",
      },
    ],
  },
  {
    id: "deroulement",
    theme: "Comment ça se passe ?",
    items: [
      {
        q: "À quel moment faut-il venir vous voir ?",
        a: "À n'importe quel moment de l'association. Avant de s'associer pour se mettre d'accord, quand ça va bien pour consolider, quand il y a de légères tensions pour les mettre sur la table avant qu'elles ne s'enveniment, quand la relation ne marche plus et que vous avez déjà l'impression d'avoir tout essayé.",
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
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSections.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  ),
};

const Approche = () => {
  return (
    <SiteLayout>
      <Seo
        title="Approche de coaching — Loraine Habib | Conflits entre cofondateurs"
        description="Une approche de coaching pour fondateurs qui aide à décrypter les tensions entre cofondateurs et à rétablir une relation de travail solide."
        path="/approche/"
        structuredData={faqSchema}
      />

      {/* Stat hero */}
      <section className="relative">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 pt-16 md:pt-28 pb-12 md:pb-16">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance text-foreground max-w-5xl">
            <span className="text-accent">65 %</span> des startups à fort
            potentiel échouent à cause de conflits entre cofondateurs.
          </h1>
          <p className="mt-8 text-base text-muted-foreground max-w-2xl whitespace-normal">
            Source&nbsp;: Noam Wasserman,&nbsp;<em>The Founder's Dilemmas</em>,&nbsp;Harvard Business School.
          </p>
          <p className="mt-10 text-xl md:text-2xl text-foreground/85 leading-relaxed max-w-3xl">
            Je vois trois raisons principales à ce constat. Elles sont toutes
            trois évitables.
          </p>
        </div>
      </section>

      {/* Trois raisons */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-14 md:mb-20">
            Trois raisons évitables
          </p>
          <div className="space-y-24 md:space-y-32">
            {reasons.map((r) => (
              <article key={r.num} className="grid gap-8 md:gap-12 lg:grid-cols-12">
                <header className="lg:col-span-4">
                  <p className="font-serif text-5xl md:text-6xl text-accent/70 leading-none mb-4">
                    {r.num}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl leading-[1.15] text-balance text-foreground">
                    {r.title}
                  </h2>
                </header>
                <div className="lg:col-span-8 space-y-5 text-lg text-foreground/85 leading-relaxed">
                  {r.intro && <p>{r.intro}</p>}
                  {r.quotes && (
                    <div className="space-y-3 my-2">
                      {r.quotes.map((quote) => (
                        <blockquote
                          key={quote}
                          className="border-l-2 border-accent pl-5 py-2 font-serif italic text-lg md:text-xl text-foreground/90"
                        >
                          «&nbsp;{quote}&nbsp;»
                        </blockquote>
                      ))}
                    </div>
                  )}
                  {r.body?.map((p, i) => <p key={i}>{p}</p>)}
                  {r.story?.map((p, i) => <p key={i}>{p}</p>)}
                  {r.punchline && (
                    <p className="mt-6 pt-6 border-t border-border/60 font-serif italic text-xl md:text-2xl leading-snug text-foreground">
                      {r.punchline}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trois formats */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Trois formats d'accompagnement
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-balance text-foreground mb-14 md:mb-16 max-w-3xl">
            Selon là où vous en êtes, trois façons de travailler la relation.
          </h2>
          <div className="space-y-6 md:space-y-8">
            {formats.map((f) => (
              <article
                key={f.eyebrow}
                className="border border-border/70 bg-background p-8 md:p-10"
              >
                <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between pb-6 md:pb-8 border-b border-border/60">
                  <div className="max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                      {f.eyebrow}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl leading-[1.2] text-balance text-foreground">
                      {f.title}
                    </h3>
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
                  {f.note && (
                    <p className="mt-4 border-l-2 border-accent pl-5 py-2 text-base italic text-foreground/80 bg-secondary/30">
                      {f.note}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Seul ou à deux */}
          <aside className="mt-12 md:mt-16 border-l-2 border-accent pl-6 md:pl-8 py-6 max-w-3xl">
            <p className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Seul ou à deux&nbsp;?
            </p>
            <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
              <p>
                Pour <em className="italic">Entretenir la relation</em> comme
                pour <em className="italic">Débloquer la relation</em>, le
                travail peut se faire seul, à deux, ou à plusieurs selon qui
                est motivé pour entamer le travail.
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

      {/* Mon approche — bio */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid gap-12 md:gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Picture
              webp={portraitWebp}
              jpg={portraitJpg}
              alt="Loraine Habib"
              className="w-full max-w-sm mx-auto lg:max-w-none aspect-[4/5] object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
              Mon approche
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-balance text-foreground mb-8">
              Deux mondes qui se croisent&nbsp;: le terrain des équipes
              dirigeantes, et la clinique de la relation.
            </h2>
            <div className="space-y-5 text-lg text-foreground/85 leading-relaxed">
              <p>
                Ancienne Chief of Staff du CEO de BlaBlaCar, j'ai accompagné
                la croissance de l'entreprise de 50 à 700 employés, et la
                transition de gouvernance d'un trio de cofondateurs à un
                comité exécutif.
              </p>
              <p>
                Je me suis formée en parallèle comme thérapeute, spécialisée
                dans les dynamiques relationnelles.
              </p>
              <p>
                Ce double regard me permet de saisir à la fois les enjeux de
                la croissance rapide, et ceux de la complexité du lien
                interpersonnel.
              </p>
            </div>
            <div className="mt-10">
              <Link
                to="/a-propos/"
                className="group inline-flex items-center gap-3 text-accent text-sm tracking-wide border-b border-accent/40 hover:border-accent pb-1 transition-all"
              >
                Mon parcours en détail
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-36">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-8">
            Ce qu'on me demande souvent
          </p>
          <nav
            aria-label="Sections de la FAQ"
            className="mb-14 md:mb-16 flex flex-col md:flex-row md:flex-wrap md:items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
              Aller à
            </span>
            <ul className="flex flex-col md:flex-row md:flex-wrap gap-x-6 gap-y-3">
              {faqSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="border-b border-border/60 hover:border-accent hover:text-accent pb-1 transition-colors"
                  >
                    {section.theme}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-16 md:space-y-20">
            {faqSections.map((section) => (
              <div key={section.theme} id={section.id} className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 md:mb-10">
                  {section.theme}
                </h2>
                <div className="divide-y divide-border/70 border-y border-border/70">
                  {section.items.map((item) => (
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
            ))}
          </div>
        </div>
      </section>

      <CtaBlock onlyButton />
    </SiteLayout>
  );
};

export default Approche;
