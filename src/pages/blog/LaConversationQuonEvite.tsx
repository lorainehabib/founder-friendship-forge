import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import EchelleDiagram from "@/components/EchelleDiagram";
import FreebieCapture from "@/components/FreebieCapture";
import { blogPosts, newsletterName } from "@/content/blog";

const post = blogPosts[0];

const inconfortQuotes = [
  "Assez vite, j'ai remarqué qu'il faisait passer ses intérêts personnels avant le reste.",
  "On n'a jamais vraiment défini les rôles de chacun. À chaque fois qu'on essayait, on se confrontait aux mêmes désaccords.",
  "Je ne comprends pas pourquoi elle ne veut pas partager certaines informations avec moi, mais devant son refus répété, j'ai laissé tomber ce sujet.",
];

const rationalisations = [
  "C'est un détail.",
  "Il est comme ça, il ne changera pas.",
  "Je ne vais pas en faire toute une histoire.",
  "Ça ne sert à rien d'en parler.",
  "C'est normal dans son rôle.",
  "C'est peut-être moi le problème.",
];

const alexStanParagraphs = [
  "Un binôme que j'ai accompagné, appelons-les Alex et Stan, a su désamorcer les inconforts à temps. Tout allait bien : série A tout juste bouclée, ils venaient travailler leur relation par précaution.",
  "Quand je demande à Alex si quelque chose le gêne, il dit d'abord non. Puis : «\u00a0Ah si, mais c'est vraiment un détail.\u00a0» La veille, devant leurs investisseurs, Stan avait répondu à sa place\u00a0; la semaine d'avant, il l'avait contredit devant l'équipe. Sur le coup, pas de quoi en faire tout un plat. Mais Alex se sentait dénigré, sans le dire.",
  "Stan, de son côté, ne mentionne aucun de ces épisodes. Lui aussi trouve que tout va bien. Il faut creuser un peu pour qu'il finisse par dire ce qui lui pèse : la lenteur d'Alex, et le sentiment d'être seul à décider.",
  "En séance commune, tout se pose. Alex a besoin de temps pour se forger un avis\u00a0; Stan n'en sait rien, alors il le presse, l'interrompt, lui laisse moins de place. Et le cercle vicieux apparaît : plus Stan veut aller vite, plus Alex se sent dénigré. Plus Alex se sent dénigré, moins il ose donner son avis. Moins il donne son avis, plus Stan se sent seul.",
  "En nommant ce cercle vicieux, chacun a compris ce que l'autre vivait : Alex n'est pas lent, il analyse\u00a0; derrière l'impatience de Stan, un grand sentiment de solitude. Ils ont ajusté, le nœud s'est défait.",
  "Prise à ce stade, la tension s'est réglée sans grande douleur. Laissée courir des mois, elle aurait donné un associé exaspéré par la lenteur de l'autre, et un autre qui l'évitait pour ne pas se sentir nul sous son regard. Une relation qui ne fonctionne plus.",
];

const travaillerSteps = [
  {
    label: "Repérer les inconforts assez tôt.",
    body: "Le problème, c'est qu'on est occupé à bien le supporter. On l'a rangé dans les détails, on a pris sur soi, et ce qu'on a appris à ignorer, on ne le remarque plus. Il faut quelqu'un qui pose la bonne question, et qui ne nous laisse pas répondre «\u00a0ce n'est rien\u00a0», pour que ce qu'on ressentait sans le nommer remonte à la surface.",
  },
  {
    label: "Identifier ce que ça nous fait ressentir.",
    body: "Seul, on s'arrête à la surface : «\u00a0il m'agace\u00a0». On n'atteint pas ce qu'il y a dessous : «\u00a0je ne me sens pas reconnu\u00a0». Quand on est pris dans l'émotion, on la vit, on ne l'observe pas. Et on a encore moins accès à ce que vit l'autre. Un regard extérieur aide à descendre jusqu'au vrai ressenti, le sien et celui de l'associé.",
  },
  {
    label: "Ajuster nos comportements.",
    body: "On ne peut pas ajuster ce qu'on n'a pas ressenti. Une fois qu'on a nommé juste, l'ajustement se fait souvent sans effort.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  dateModified: post.date,
  inLanguage: "fr",
  url: `https://lorainehabib.com${post.path}`,
  author: {
    "@type": "Person",
    name: "Loraine Habib",
    url: "https://lorainehabib.com/",
  },
};

const LaConversationQuonEvite = () => {
  return (
    <SiteLayout>
      <Seo
        title={`${post.title} — Loraine Habib`}
        description={post.excerpt}
        path={post.path}
        structuredData={articleSchema}
      />

      <article>
        <header>
          <div className="mx-auto max-w-4xl px-6 md:px-10 pt-16 md:pt-28 pb-16 md:pb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
              <Link to="/blog/" className="hover:text-foreground transition-colors">
                {newsletterName}
              </Link>
              <span className="text-muted-foreground"> · {post.dateLabel}</span>
            </p>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance text-foreground">
              La conversation qu'on évite.
            </h1>
            <div className="mt-12 md:mt-14 max-w-3xl">
              <p className="font-serif text-2xl md:text-3xl leading-[1.25] text-foreground">
                <span className="text-accent">65 %</span> des start-ups à fort
                potentiel échouent pour des raisons humaines, contre 35 % à cause
                du produit ou du marché.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Source&nbsp;: Noam Wasserman,{" "}
                <em>The Founder's Dilemmas</em>, Harvard Business School.
              </p>
            </div>
          </div>
        </header>

        <section className="border-t border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28">
            <div className="space-y-6 text-lg text-foreground/85 leading-relaxed">
              <p>
                Derrière ces «&nbsp;raisons humaines&nbsp;», on imagine de
                grandes disputes, des trahisons, des egos qui s'affrontent. Ce
                que je vois est bien plus discret : ce qui casse une association,
                ce sont les petits inconforts qu'on a gardés pour soi.
              </p>
              <p>
                J'ai accompagné plusieurs dizaines d'associés en difficulté, dont
                certains n'arrivaient plus du tout à travailler ensemble. Ils
                décrivent la même chronologie des faits : les sujets de tension
                entre eux existaient depuis très tôt dans la relation, et c'est
                avec le temps qu'ils se sont transformés en sujets de conflit. Il
                ne s'est pas passé quelque chose de complètement imprévisible,
                l'autre n'est pas devenu une personne infernale du jour au
                lendemain. Mais les choses qui les agaçaient légèrement, à force
                de se répéter sans être résolues, sont devenues chaque jour un
                peu plus difficiles à encaisser, jusqu'à devenir carrément
                insupportables.
              </p>
              <p>
                Avant un conflit, il y a donc des tensions. Et avant les
                tensions, des inconforts – ces petites choses qui nous gênent
                dans la relation, mais qu'on ne juge pas assez graves pour en
                faire quoi que ce soit&nbsp;:
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {inconfortQuotes.map((q) => (
                <blockquote
                  key={q}
                  className="border-l-2 border-accent pl-5 py-2 font-serif italic text-lg md:text-xl text-foreground/90"
                >
                  «&nbsp;{q}&nbsp;»
                </blockquote>
              ))}
            </div>

            <p className="mt-10 font-serif italic text-xl md:text-2xl leading-snug text-foreground">
              Tous ces inconforts ne deviendront pas des conflits. Mais tous les
              conflits viennent d'inconforts non réglés.
            </p>
          </div>
        </section>

        <section className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
            <div className="max-w-4xl">
              <p className="text-lg text-foreground/85 leading-relaxed">
                Avec le recul, on sait identifier les signes avant-coureurs du
                conflit. On les avait bien ressentis, mais on n'en avait rien fait.
                On s'était dit quelque chose comme&nbsp;:
              </p>
              <ul className="mt-8 grid gap-3 md:grid-cols-2">
                {rationalisations.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-4 text-base md:text-lg text-foreground/85 leading-relaxed border-l border-border/70 pl-4 py-1"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <p className="italic">«&nbsp;{r}&nbsp;»</p>
                  </li>
                ))}
              </ul>

              <div className="mt-12 space-y-5 text-lg text-foreground/85 leading-relaxed">
                <p>
                  Toutes ces petites phrases qu'on se raconte, on leur donne un
                  nom : <em>prendre sur soi</em>. On se l'imagine comme une
                  qualité : on se croit patient, solide, endurant. Persévérant,
                  même.
                </p>
                <p>
                  Mais la persévérance, la vraie, sert à avancer vers quelque
                  chose. Ici, on n'avance vers rien : on encaisse un inconfort qui
                  revient, encore et encore. On est tellement occupé à bien le
                  supporter qu'on ne s'en occupe pas. Et c'est justement là qu'il
                  grandit.
                </p>
                <p className="font-serif italic text-xl md:text-2xl leading-snug text-foreground">
                  Ce qu'on prend pour de la persévérance, en l'occurrence, c'est de
                  l'évitement.
                </p>
              </div>
            </div>

            <div className="mt-14 md:mt-16">
              <EchelleDiagram />
            </div>
          </div>
        </section>

        <section
          id="alex-stan"
          className="border-t border-border/60 bg-secondary/30 scroll-mt-28"
        >
          <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
              À temps
            </p>
            <div className="space-y-5 text-lg text-foreground/85 leading-relaxed">
              {alexStanParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="mt-6 pt-6 border-t border-border/60 font-serif italic text-xl md:text-2xl leading-snug text-foreground">
                Ce qui a fait la différence, pour Alex et Stan, ce n'est pas
                d'avoir pris sur eux, ni d'avoir tout déballé. C'est d'avoir eu,
                à temps, la conversation qu'ils évitaient.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border/60">
          <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28">
            <p className="text-lg text-foreground/85 leading-relaxed">
              L'opposé de «&nbsp;se prendre la tête&nbsp;», ce n'est pas
              «&nbsp;prendre sur soi&nbsp;» indéfiniment. Il y a un chemin du
              milieu.
            </p>
            <p className="mt-6 font-serif text-2xl md:text-3xl leading-[1.2] text-foreground">
              Travailler une relation consiste à&nbsp;:
            </p>

            <ol className="mt-10 space-y-8">
              {travaillerSteps.map((s, i) => (
                <li key={s.label} className="grid gap-4 md:grid-cols-12">
                  <div className="md:col-span-1 font-serif text-3xl md:text-4xl text-accent leading-none">
                    {i + 1}
                  </div>
                  <div className="md:col-span-11 space-y-3">
                    <p className="font-serif text-xl md:text-2xl text-foreground leading-snug">
                      {s.label}
                    </p>
                    <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-14 text-lg text-foreground/85 leading-relaxed max-w-3xl">
              Si ces trois étapes ne se font pas d'elles-mêmes, ce n'est pas par
              manque de volonté ni de courage. C'est simplement qu'elles sont
              difficiles à réaliser seul. On ne voit pas clair dans une relation
              dont on fait partie.
            </p>
            <p className="mt-6 font-serif italic text-xl md:text-2xl leading-snug text-foreground max-w-3xl">
              Travailler la relation, ce n'est pas viser une association sans le
              moindre inconfort. C'est faire en sorte que les inconforts ne
              s'accumulent plus : on les repère, on les met sur la table, ils se
              règlent avant de peser. C'est comme ça qu'une association tient, et
              qu'elle avance.
            </p>
          </div>
        </section>
      </article>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28">
          <FreebieCapture source="blog-la-conversation-quon-evite" />
        </div>
      </section>
    </SiteLayout>
  );
};

export default LaConversationQuonEvite;
