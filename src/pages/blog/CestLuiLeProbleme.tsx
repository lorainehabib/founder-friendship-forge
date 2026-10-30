import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import BoucleCharles from "@/components/BoucleCharles";
import ReserveButton from "@/components/ReserveButton";
import NewsletterCapture from "@/components/NewsletterCapture";
import { blogPosts, newsletterName } from "@/content/blog";

const post = blogPosts.find((item) => item.slug === "c-est-lui-le-probleme");

if (!post) {
  throw new Error("Lettre introuvable : c-est-lui-le-probleme");
}

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

const CestLuiLeProbleme = () => {
  return (
    <SiteLayout>
      <Seo
        title={`${post.title} · Loraine Habib`}
        description={post.excerpt}
        path={post.path}
        structuredData={articleSchema}
      />

      <article>
        <header>
          <div className="mx-auto max-w-4xl px-6 pb-12 pt-16 md:px-10 md:pb-16 md:pt-28">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">
              <Link to="/blog/" className="transition-colors hover:text-foreground">
                {newsletterName}
              </Link>
              <span className="text-muted-foreground"> · {post.dateLabel}</span>
            </p>
            <h1 className="text-balance font-serif text-4xl leading-[1.05] text-foreground md:text-6xl">
              C'est lui le problème.
            </h1>
          </div>
        </header>

        <section className="border-t border-border/60">
          <div className="mx-auto max-w-4xl space-y-6 px-6 py-16 text-lg leading-relaxed text-foreground/85 md:px-10 md:py-24">
            <p>
              Le mois dernier, j'écrivais sur les inconforts qu'on garde pour soi. Ce mois-ci, je
              m'intéresse aux désaccords dont on a parlé, et qui s'aggravent quand même.
            </p>
            <p>
              Dans cette deuxième lettre, j'explore un autre angle mort{"\u00a0"}: la part que
              prennent nos propres réactions dans un désaccord qui s'enlise.
            </p>
            <p>
              Votre associé vous épuise. Il tranche sans vous consulter, ou il rouvre chaque
              décision déjà prise, ou il ne s'investit pas autant que vous. Vous avez essayé de lui
              parler, de le convaincre, de laisser couler. Rien ne bouge.
            </p>
            <p>Le constat est clair{"\u00a0"}: c'est lui le problème.</p>
            <p>
              Et si ce n'était pas tout à fait le cas{"\u00a0"}? Et si vous faisiez, vous aussi,
              partie du problème{"\u00a0"}?
            </p>
            <p>Dit comme ça, ce n'est pas agréable à entendre. C'est pourtant plutôt une bonne nouvelle.</p>
            <p className="font-medium text-foreground">
              Votre associé, vous ne pouvez pas le changer. Vos réactions, si.
            </p>
            <p>
              Prenez Charles et Inès. Si vous aviez demandé à l'un ou à l'autre, chacun vous aurait
              expliqué, de façon très convaincante, que le problème, c'était l'autre.
            </p>
            <p>
              Charles est CTO. Inès, son associée, dirige la boîte et porte les ventes. Quelques
              mois plus tôt, ils ont pivoté vers une nouvelle offre, plus ambitieuse, sur laquelle
              ils viennent de lever des fonds. Ils se sont mis d'accord{"\u00a0"}: l'équipe tech se
              concentre dessus.
            </p>
            <p>
              Mais la nouvelle offre ne se vend pas encore. Alors Inès continue de vendre
              l'ancienne, plus facile à placer, et demande à l'équipe de suivre. Charles lui
              rappelle ce qu'ils avaient décidé. Elle n'arrive pas à le convaincre que c'est
              nécessaire. Elle lui dit qu'elle arrêtera. Et elle recommence.
            </p>
            <p>
              Pour Inès, c'est une question de survie. Tant que la nouvelle offre ne se vend pas,
              l'ancienne fait rentrer du chiffre et retient des clients qui, sinon, partiraient.
            </p>
            <p>
              Pour Charles, chaque vente de l'ancienne offre retire du temps à l'équipe sur la
              nouvelle, celle qui doit faire la boîte qu'ils ont décidé de construire. Et surtout,
              Inès refait ce qu'elle avait promis d'arrêter. Il ne se dit plus «{"\u00a0"}on n'est pas
              d'accord{"\u00a0"}». Il se dit «{"\u00a0"}elle m'a promis, et elle l'a refait{"\u00a0"}». Il
              ne la croit plus.
            </p>
            <p>Les deux lectures tiennent. Et à partir de là, chacun réagit à la réaction de l'autre.</p>
            <p>
              Charles, qui ne la croit plus, vérifie, conteste, dit non plus vite. Inès, face à un
              non de plus en plus systématique, arrête d'essayer de le convaincre{"\u00a0"}: elle
              décide sans lui. Plus elle décide sans lui, moins il lui fait confiance. Moins il lui
              fait confiance, plus il bloque. Plus il bloque, plus elle contourne. Une boucle se
              crée.
            </p>

            <BoucleCharles />

            <p>
              Charles se protège en contrôlant, Inès en contournant. Chacune de ces réponses est
              logique, vue de l'intérieur. Ensemble, elles fabriquent exactement ce que l'autre
              redoute.
            </p>
            <p>
              Au bout de quelques tours, plus personne ne parle du désaccord de départ. Charles ne
              dit plus «{"\u00a0"}elle continue de vendre l'ancienne offre{"\u00a0"}». Il dit «{"\u00a0"}elle
              vend n'importe quoi, elle n'est pas fiable{"\u00a0"}». Inès ne dit plus «{"\u00a0"}il ne
              voit pas qu'on a besoin de chiffre{"\u00a0"}». Elle dit «{"\u00a0"}il n'est pas à la
              hauteur, c'est un CTO sans aucune vision business{"\u00a0"}».
            </p>

            <p className="border-l-2 border-accent py-2 pl-5 font-serif text-2xl italic leading-snug text-foreground md:text-[1.7rem]">
              On est passé de «{"\u00a0"}il fait ça{"\u00a0"}» à «{"\u00a0"}il est comme ça{"\u00a0"}».
            </p>

            <p>
              C'est là qu'on se met à parler de valeurs. Pour Charles, on ne construit pas avec
              quelqu'un qui ne tient pas parole. Pour Inès, on ne construit pas avec quelqu'un qui
              dit non à tout. Chacun a de bonnes raisons de le penser. Au départ, pourtant, il y
              avait une question à trancher{"\u00a0"}: en attendant que la nouvelle offre se vende,
              est-ce qu'on continue à vendre l'ancienne{"\u00a0"}?
            </p>
            <p>
              S'ils étaient allés au bout de cette question à ce moment-là, la suite aurait sans
              doute été différente. Ils n'y sont pas parvenus, et la boucle a fait le reste.
            </p>
            <p>
              Ni l'un ni l'autre ne l'a vue se mettre en place. De l'intérieur, une boucle ne se
              voit pas. Il y a pourtant un signe qui ne trompe pas{"\u00a0"}: la situation empire.
              Votre associé était un peu contrôlant, il l'est devenu beaucoup plus. Un peu en
              retrait, il ne participe presque plus. Il n'en est pas arrivé là tout seul. Vous non
              plus. Chacun ne fait plus que réagir à l'autre.
            </p>
            <p>
              À ce stade, chercher qui a le plus tort est vain. Ce qui permet de sortir de la
              boucle, c'est de changer ce que vous y envoyez. Et ça, c'est entre vos mains.{" "}
              <span className="font-medium text-foreground">
                Pas ce que fait l'autre, mais ce que vous faites de ce qu'il fait.
              </span>{" "}
              Autrement dit{"\u00a0"}: comment je réagis, moi, quand il fait ça{"\u00a0"}?
            </p>
            <p>
              C'est ce qui m'intéresse en séance. Je ne creuse pas le fond du désaccord, je
              regarde la façon dont chacun réagit.
            </p>
            <p>Une boucle ne tient que parce que chacun y répond. Lorsque l'un des deux répond autrement, elle se défait.</p>

            <p className="pt-4 font-serif text-2xl leading-snug text-foreground md:text-3xl">
              «{"\u00a0"}C'est lui le problème{"\u00a0"}» vous laisse sans prise. «{"\u00a0"}Comment je
              réagis, moi, quand il fait ça{"\u00a0"}?{"\u00a0"}» vous en redonne une.
            </p>
          </div>
        </section>

        <section className="border-t border-border/60">
          <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
            <p className="max-w-3xl text-sm italic leading-relaxed text-muted-foreground">
              Je m'appelle Loraine Habib. J'accompagne les fondateurs pour que leur association
              tienne, et avance, dès le début ou quand c'est déjà tendu. J'ai été Chief of Staff du
              CEO de BlaBlaCar, et je suis formée à la psychologie des relations.
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/85">
              Si vous voulez prendre du recul sur votre association, réservez un premier échange de
              40{"\u00a0"}minutes, gratuit et confidentiel.
            </p>
            <ReserveButton className="mt-8" />
            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-foreground/85">
              Si cette lettre vous a fait penser à quelqu'un, transférez-la-lui.
            </p>
            <p className="mt-6 text-lg text-foreground">Loraine</p>
          </div>
        </section>
      </article>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
          <NewsletterCapture />
        </div>
      </section>
    </SiteLayout>
  );
};

export default CestLuiLeProbleme;
