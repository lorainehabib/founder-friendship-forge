import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import EchelleDiagram from "@/components/EchelleDiagram";
import NewsletterCapture from "@/components/NewsletterCapture";
import ReserveButton from "@/components/ReserveButton";
import { blogPosts, newsletterName } from "@/content/blog";
import { blogPostingSchema, blogPostSeo } from "@/seo-routes";
import BlogFigure from "@/components/BlogFigure";

const post = blogPosts.find((item) => item.slug === "la-conversation-quon-evite");

if (!post) {
  throw new Error("Lettre introuvable : la-conversation-quon-evite");
}

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
  "Elle apporte tellement au projet que ça vaut le coup.",
  "C'est peut-être moi le problème.",
];

const alexStanParagraphs = [
  "Un binôme de fondateurs que j'ai accompagnés, appelons-les Alex et Stan, a su désamorcer les inconforts à temps. Tout allait bien : série A tout juste bouclée, ils venaient travailler leur relation par précaution.",
  "Quand je demande à Alex si quelque chose le gêne, il répond d'abord non. Puis : «\u00a0Ah si, mais c'est vraiment un détail.\u00a0» La veille, devant leurs investisseurs, Stan avait répondu à sa place\u00a0; la semaine d'avant, il l'avait contredit devant l'équipe. Sur le coup, pas de quoi en faire tout un plat. Mais Alex s'était senti un peu dénigré, sans le dire.",
  "Stan, de son côté, ne mentionne aucun de ces épisodes. Lui aussi trouve que tout va bien. Il faut creuser un peu pour qu'il finisse par dire ce qui lui pèse : la lenteur d'Alex, et le sentiment d'être seul à décider.",
  "En séance commune, tout se pose. Alex a besoin de temps pour se forger un avis\u00a0; Stan n'en sait rien, alors il le presse, l'interrompt, lui laisse moins de place. Et le cercle vicieux apparaît : plus Stan veut aller vite, plus Alex se sent dénigré. Plus Alex se sent dénigré, moins il ose donner son avis. Moins il donne son avis, plus Stan se sent seul.",
  "En nommant ce cercle vicieux, chacun a compris ce que l'autre vivait : Alex n'est pas lent, il analyse\u00a0; derrière l'impatience de Stan, un sentiment de solitude. Chacun ajuste alors son comportement. Et ce qu'ils ont su faire une fois, ils pourront le refaire.",
  "Désamorcé à ce stade, l'inconfort ne deviendra pas une tension. Laissé courir des mois, ce même inconfort aurait donné un associé exaspéré par la lenteur de l'autre, et un autre l'évitant pour ne pas se sentir nul sous son regard. Une relation qui ne fonctionne plus.",
];

const travaillerConsists = [
  "Repérer les inconforts suffisamment tôt.",
  "Identifier ce que ça nous fait ressentir (chez Alex, «\u00a0pas considéré\u00a0»\u00a0; chez Stan, «\u00a0seul dans les décisions\u00a0»).",
  "Ajuster nos comportements (ce qui se fait sans effort, quand on a visé juste à l'étape précédente).",
];

const travaillerWhy = [
  {
    label: "Repérer l'inconfort.",
    body: "Le problème, c'est qu'on est occupé à bien le supporter. On l'a rangé dans les détails, on a pris sur soi, et ce qu'on a appris à ignorer, on ne le remarque plus. Il faut quelqu'un qui pose la bonne question, et qui ne nous laisse pas répondre «\u00a0ce n'est rien\u00a0», pour faire remonter à la surface ce qu'on ressentait sans le nommer.",
  },
  {
    label: "Identifier ce que ça nous fait ressentir.",
    body: "Quand on s'arrête à la surface : «\u00a0il m'agace\u00a0», on n'atteint pas ce qu'il y a dessous : «\u00a0je ne me sens pas reconnu\u00a0». Quand on est pris dans l'émotion, on la vit, on ne l'observe pas. Et on a encore moins accès à ce que vit l'autre. Un regard extérieur aide à descendre jusqu'au vrai ressenti, le sien et celui de l'associé.",
  },
  {
    label: "Ajuster nos comportements.",
    body: "Quand on a mis des mots sur ce qu'on ressent, on ne réagit plus tout à fait pareil.",
  },
];

const articleSchema = blogPostingSchema(post);
const postSeo = blogPostSeo(post);

const LaConversationQuonEvite = () => {
  return (
    <SiteLayout>
      <Seo
        title={postSeo.title}
        description={postSeo.description}
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
            <BlogFigure slug={post.slug} className="mt-10 md:mt-12" />
            <div className="mt-12 md:mt-14 max-w-3xl">
              <p className="font-serif text-2xl md:text-3xl leading-[1.25] text-foreground">
                <span className="text-accent">65 %</span> des échecs de start-ups
                tiennent à des raisons humaines au sein de l'équipe dirigeante,
                contre 35 % au produit ou au marché.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Source&nbsp;: enquête de Gorman et Sahlman auprès d'investisseurs
                en capital-risque (<em>Journal of Business Venturing</em>, 1989),
                citée par Noam Wasserman dans <em>The Founder's Dilemmas</em>{" "}
                (2012).
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
                décrivent la même chronologie : les sujets de tension entre eux
                existaient déjà très tôt dans la relation, et avec le temps, se
                sont transformés en sujets de conflit. L'autre n'est pas devenu
                une personne infernale du jour au lendemain. Mais les choses qui
                les agaçaient légèrement, à force de se répéter sans être
                résolues, sont devenues chaque jour un peu plus difficiles à
                encaisser, jusqu'à devenir carrément insupportables.
              </p>
              <p>
                Avant un conflit, il y a des tensions. Et avant les tensions,
                des inconforts : ces petites choses qui nous gênent dans la
                relation, mais qu'on ne juge pas assez graves pour en faire quoi
                que ce soit&nbsp;:
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

            <p className="mt-14 font-serif text-2xl md:text-3xl leading-[1.2] text-foreground">
              Alors comment savoir si un inconfort le restera, ou se
              transformera en tension&nbsp;?
            </p>
            <p className="mt-6 text-lg text-foreground/85 leading-relaxed">
              C'est la répétition. L'inconfort qui passe une fois n'a rien
              d'inquiétant&nbsp;; c'est celui qui revient qu'il faut écouter.
              S'il revient, c'est un signal : il touche à quelque chose
              d'important pour nous, et notre façon de passer à autre chose ne
              fonctionne pas.
            </p>
          </div>
        </section>

        <section className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
            <div className="max-w-4xl">
              <p className="text-lg text-foreground/85 leading-relaxed">
                Avec le recul, on sait identifier les signes avant-coureurs du
                conflit. On les avait bien ressentis, mais on n'en avait rien
                fait. On s'était dit quelque chose comme&nbsp;:
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
                  qualité. De patience, de solidité, d'endurance. De
                  persévérance, même.
                </p>
                <p>
                  Mais la persévérance, la vraie, sert à avancer vers quelque
                  chose. Ici, on n'avance vers rien : on encaisse un inconfort
                  qui revient, encore et encore. On est tellement occupé à bien
                  le supporter qu'on ne s'en occupe pas. Et c'est justement là
                  qu'il grandit.
                </p>
                <p className="font-serif italic text-xl md:text-2xl leading-snug text-foreground">
                  Ce qu'on prend pour de la persévérance, en l'occurrence, c'est
                  de l'évitement.
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
            <div className="space-y-5 text-lg text-foreground/85 leading-relaxed">
              {alexStanParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="mt-6 pt-6 border-t border-border/60 font-serif italic text-xl md:text-2xl leading-snug text-foreground">
                Ce qui a fait la différence, pour Alex et Stan, ce n'est pas
                d'avoir pris sur eux, ni d'avoir tout balancé d'un coup. C'est
                d'avoir eu, à temps, la conversation qu'ils évitaient.
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

            <ol className="mt-10 space-y-6">
              {travaillerConsists.map((label, i) => (
                <li key={label} className="grid gap-4 md:grid-cols-12">
                  <div className="md:col-span-1 font-serif text-3xl md:text-4xl text-accent leading-none">
                    {i + 1}
                  </div>
                  <p className="md:col-span-11 font-serif text-xl md:text-2xl text-foreground leading-snug">
                    {label}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-14 text-lg text-foreground/85 leading-relaxed max-w-3xl">
              Si ces trois étapes ne se font pas d'elles-mêmes, ce n'est pas par
              manque de volonté ni de courage. C'est simplement qu'elles sont
              difficiles à réaliser de l'intérieur. Car on ne voit pas clair
              dans une relation dont on fait partie&nbsp;:
            </p>

            <ol className="mt-10 space-y-8">
              {travaillerWhy.map((s, i) => (
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

            <p className="mt-14 font-serif italic text-xl md:text-2xl leading-snug text-foreground max-w-3xl">
              Travailler la relation, ce n'est pas viser une association sans le
              moindre inconfort. C'est faire en sorte que les inconforts ne
              s'accumulent plus : on les repère, on les met sur la table, ils se
              règlent avant de peser. C'est comme ça qu'une association tient, et
              qu'elle avance.
            </p>
          </div>
        </section>

        <section className="border-t border-border/60">
          <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
            <p className="max-w-3xl text-sm italic leading-relaxed text-muted-foreground">
              Je m'appelle Loraine Habib. J'accompagne les associés pour que leur association
              tienne, et avance, quand tout va bien ou quand c'est déjà tendu. J'ai été Chief of Staff du
              CEO de BlaBlaCar, et je suis formée à la psychologie des relations.
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/85">
              Si vous voulez prendre du recul sur votre association, réservez un premier échange de
              40{"\u00a0"}minutes, gratuit et confidentiel.
            </p>
            <ReserveButton className="mt-8" />
            <Link
              to="/offres/socle/"
              className="group mt-8 flex w-fit items-center gap-3 border-b border-accent/40 pb-1 text-sm tracking-wide text-accent transition-all hover:border-accent"
            >
              Le travail que je décris ici avec Alex et Stan, c'est Socle
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-foreground/85">
              Si cette lettre vous a fait penser à quelqu'un, partagez-la.
            </p>
            <p className="mt-6 text-lg text-foreground">Loraine</p>
          </div>
        </section>
      </article>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28">
          <NewsletterCapture />
        </div>
      </section>
    </SiteLayout>
  );
};

export default LaConversationQuonEvite;
