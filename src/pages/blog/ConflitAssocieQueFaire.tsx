import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import ReserveButton from "@/components/ReserveButton";
import { blogPosts, categoryLabels, newsletterName, publicationLabel } from "@/content/blog";
import BlogFigure from "@/components/BlogFigure";
import { blogPostingSchema, blogPostSeo } from "@/seo-routes";

const post = blogPosts.find((item) => item.slug === "conflit-associe-que-faire");

if (!post) {
  throw new Error("Article introuvable : conflit-associe-que-faire");
}

const tried = [
  "prendre sur vous\u00a0;",
  "en parler, gentiment ou fermement, en le valorisant ou en disant votre mécontentement\u00a0;",
  "lui redonner une chance\u00a0;",
  "revoir la répartition des rôles\u00a0;",
  "demander conseil autour de vous\u00a0;",
  "lâcher l'affaire.",
];

const toutEssaye = [
  "Quand une situation entre associés devient douloureuse, le stade du simple désaccord est dépassé. Au désaccord se sont superposées les réactions de chacun. Puis les réactions à ces réactions. Chacun fait ce qui lui paraît raisonnable, et la situation empire quand même\u00a0: votre associé était un peu contrôlant, il l'est devenu beaucoup plus. Un peu en retrait, il ne participe presque plus.",
  "Au début, on parle de ce que l'autre fait et qui nous agace. Plus les tentatives de solution échouent, plus c'est sa personnalité qui nous exaspère, et non plus ce qu'il fait. On est passé de «\u00a0il fait ça\u00a0» à «\u00a0il est comme ça\u00a0».",
  "De l'intérieur, rien de tout ça ne se voit. On ne voit pas clair dans une relation dont on fait partie. Tant qu'on a essayé seul, on n'a donc pas tout essayé.",
];

const sansAssocie = [
  "Oui, et c'est le cas le plus fréquent. La plupart du temps, une seule personne vient me voir, et le travail se fait avec elle. Puisqu'il suffit que l'un des deux réponde autrement pour que la boucle se défasse, votre part de l'échange suffit à faire bouger l'ensemble.",
];

const resterOuPartir = [
  "Parfois, la question n'est plus de faire fonctionner la relation, mais de savoir si on le veut encore.",
  "Ce qui est difficile, ce n'est pas de décider, c'est d'assumer les conséquences de sa décision. Et derrière cette difficulté, il y a souvent un conflit de loyauté\u00a0: on est fidèle à deux choses qui ne vont plus ensemble. D'un côté, quelqu'un avec qui on a tout construit. De l'autre, une boîte et une équipe à qui la situation coûte chaque jour. «\u00a0Comment je peux le faire sortir après tout ce qu'il a fait pour la boîte, même s'il y apporte moins aujourd'hui\u00a0?\u00a0» Choisir l'un, c'est avoir le sentiment de trahir l'autre. Alors on ne choisit pas.",
  "Une fois ce conflit nommé, la question change. Il ne s'agit plus de trouver la bonne décision, mais de savoir avec quelles conséquences on est capable de vivre.",
];

const quiAppeler = [
  "Tout dépend d'une question\u00a0: voulez-vous encore que ça fonctionne\u00a0?",
  "Si oui, ou si vous ne savez plus, c'est le travail d'un coach. C'est là que j'interviens, avant toute séparation.",
  "Si la séparation est décidée, d'autres prennent le relais. Le médiateur aide à organiser la séparation\u00a0: qui prend quoi, ce qui est juste, quelles répartitions et quels compromis. Un peu comme dans un divorce. L'avocat défend vos intérêts sur le plan juridique.",
];

const questions = [
  { q: "Tout essayé, vraiment\u00a0?", a: toutEssaye.join(" ") },
  { q: "Peut-on se faire coacher sur sa relation d'associés sans son associé\u00a0?", a: sansAssocie.join(" ") },
  {
    q: "Rester ou se séparer de son associé\u00a0: pourquoi la décision est si difficile",
    a: resterOuPartir.join(" "),
  },
  { q: "Coach, médiateur ou avocat\u00a0: qui appeler\u00a0?", a: quiAppeler.join(" ") },
];

const articleSchema = blogPostingSchema(post);
const postSeo = blogPostSeo(post);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const headingClass =
  "font-serif text-2xl leading-[1.2] text-balance text-foreground !mt-16 md:!mt-20 md:text-3xl";

const offerLinkClass =
  "group !mt-8 flex w-fit items-center gap-3 border-b border-accent/40 pb-1 text-sm tracking-wide text-accent transition-all hover:border-accent";

const ConflitAssocieQueFaire = () => {
  return (
    <SiteLayout>
      <Seo
        title={postSeo.title}
        description={postSeo.description}
        path={post.path}
        structuredData={[articleSchema, faqSchema]}
      />

      <article>
        <header>
          <div className="mx-auto max-w-4xl px-6 pb-12 pt-16 md:px-10 md:pb-16 md:pt-28">
            <p className="mb-6 text-sm text-muted-foreground">
              <Link to="/blog/" className="transition-colors hover:text-foreground">
                {newsletterName}
              </Link>
              <span> · {categoryLabels.situation}</span>
              <span> · {publicationLabel(post)}</span>
            </p>
            <h1 className="text-balance font-serif text-4xl leading-[1.05] text-foreground md:text-6xl">
              {post.title}.
            </h1>
            <BlogFigure slug={post.slug} className="mt-10 md:mt-12" />
          </div>
        </header>

        <section className="border-t border-border/60">
          <div className="mx-auto max-w-4xl space-y-6 px-6 py-16 text-lg leading-relaxed text-foreground/85 md:px-10 md:py-24">
            <p>
              Vous ne vous entendez plus avec votre associé, et vous avez l'impression d'avoir déjà
              tout essayé{"\u00a0"}:
            </p>
            <ul className="space-y-2">
              {tried.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-l border-border/70 py-1 pl-4"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p>Et ça n'a pas marché.</p>
            <p>Ça ne veut pas dire qu'il n'y a plus rien à faire.</p>

            <h2 className={headingClass}>{questions[0].q}</h2>
            {toutEssaye.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <h2 className={headingClass}>Comment je travaille avec des associés en conflit</h2>
            <p>
              Prenez Charles et Inès. Il est CTO, elle dirige la boîte et porte les ventes. Ils ont
              décidé ensemble de miser sur une nouvelle offre. En attendant qu'elle décolle, Inès
              continue de vendre l'ancienne, pour faire rentrer du chiffre. Pour Charles, chacune de
              ces ventes détourne l'équipe de ce qu'ils ont choisi de construire. Elle promet
              d'arrêter. Elle recommence.
            </p>
            <p>
              À partir de là, Charles ne la croit plus. Il vérifie tout, conteste, refuse de plus en
              plus vite. Inès, qui n'arrive plus à le convaincre, finit par décider sans lui. Ce
              qu'elle fait confirme les doutes de Charles. Ce qu'il fait la pousse à le contourner
              davantage. Chacun se protège, et en se protégeant, nourrit ce que l'autre redoute.
              Quelques mois plus tard, plus personne ne parle de l'ancienne offre. Charles dit
              qu'Inès n'est pas fiable. Inès dit que Charles n'est pas à la hauteur.
            </p>
            <p>
              À ce stade, chercher qui a raison et qui a tort est vain. Ce qui permet de sortir de
              la boucle, c'est de changer ce que vous y envoyez. Et ça, c'est entre vos mains. Pas
              ce que fait l'autre, mais ce que vous faites de ce qu'il fait. Autrement dit{"\u00a0"}:
              comment je réagis, moi, quand il fait ça{"\u00a0"}?
            </p>
            <p>
              C'est ce sur quoi je travaille quand j'accompagne des associés en conflit. Je ne creuse
              pas le fond du désaccord, je regarde la façon dont chacun réagit.
            </p>
            <p>
              Une boucle ne tient que parce que chacun y répond. Lorsque l'un des deux répond
              autrement, elle se défait.
            </p>
            <p>
              On commence donc par la relation. Le ou les sujets de fond viennent après{"\u00a0"}: une
              fois que vous arrivez de nouveau à travailler ensemble, ils redeviennent des questions
              qu'on peut trancher.
            </p>
            <p>
              Je raconte l'histoire de Charles et Inès en détail dans la lettre{" "}
              <Link
                to="/blog/c-est-lui-le-probleme/"
                className="text-accent underline-offset-4 hover:underline"
              >
                «{"\u00a0"}C'est lui le problème{"\u00a0"}»
              </Link>.
            </p>
            <Link to="/offres/reset/" className={offerLinkClass}>
              Le travail que je décris ici, c'est Reset
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <h2 className={headingClass}>{questions[1].q}</h2>
            {sansAssocie.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link to="/offres/solo/" className={offerLinkClass}>
              Quand vous venez seul, c'est Solo
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <h2 className={headingClass}>{questions[2].q}</h2>
            {resterOuPartir.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <h2 className={headingClass}>{questions[3].q}</h2>
            {quiAppeler.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60">
          <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
            <h2 className="font-serif text-2xl leading-[1.2] text-balance text-foreground md:text-3xl">
              Et maintenant{"\u00a0"}?
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/85">
              Si vous vous êtes reconnu dans cette page, le premier pas est un échange de
              40{"\u00a0"}minutes, gratuit et confidentiel.
            </p>
            <ReserveButton className="mt-8" />
            <Link to="/faire-le-point/" className={`${offerLinkClass} mt-8`}>
              Pas encore prêt à en parler{"\u00a0"}? Faites le point sur votre association
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
};

export default ConflitAssocieQueFaire;
