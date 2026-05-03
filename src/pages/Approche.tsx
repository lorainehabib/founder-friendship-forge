import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import Seo from "@/components/Seo";
import Picture from "@/components/Picture";
import { Link } from "react-router-dom";
import portraitJpg from "@/assets/loraine-portrait-2.jpg";
import portraitWebp from "@/assets/loraine-portrait-2.webp";

const faqSections = [
  {
    id: "pour-nous",
    theme: "Est-ce que c'est pour nous ?",
    items: [
      {
        q: "On ne se dispute pas. C'est quand même utile ?",
        a: "Les fondateurs qui me contactent ne sont pas toujours en conflit ouvert. C'est un désaccord qui revient sans se résoudre, des décisions qu'on repousse, un sujet qu'on contourne depuis des mois. Le travail est utile à ce moment-là. Avant que ça ne se fige.",
      },
      {
        q: "Mon associé n'est pas prêt à faire cette démarche, ça peut quand même marcher ?",
        a: "Oui. Une relation, c'est une dynamique : quand l'un des deux change sa façon d'agir, l'autre ne peut pas réagir exactement comme avant. La relation bouge, même si un seul des deux est engagé dans le travail.",
      },
      {
        q: "Tout va bien entre nous, est-ce que ça sert quand même de venir ?",
        a: "Il faut un sujet. Mais le sujet, ce n'est pas forcément un conflit. Ça peut être une levée qui arrive, une équipe qui double, des rôles qui ne sont plus clairs, un associé qui s'ajoute. Quand le contexte change, la relation doit s'ajuster. C'est ça qu'on travaille.",
      },
      {
        q: "Notre situation est vraiment spécifique, vous avez déjà vu ça ?",
        a: "Probablement. Mais ce qui importe ce n'est pas d'avoir vu exactement la même situation, c'est de comprendre ce qui la crée. Les tensions entre cofondateurs se ressemblent souvent en surface. Ce qui les alimente est singulier.",
      },
      {
        q: "C'est un problème de business, pas de relation. Un coach peut vraiment aider ?",
        a: "Parfois le problème a l'air business et il est relationnel. Parfois c'est l'inverse. Dans les deux cas, le travail permet d'identifier où se situe le vrai blocage.",
      },
    ],
  },
  {
    id: "differences",
    theme: "Qu'est-ce qui vous différencie ?",
    items: [
      {
        q: "Quelle est la différence entre un coach et un médiateur ?",
        a: "Un médiateur intervient quand la relation est trop abîmée pour fonctionner et qu'il faut se mettre d'accord sur des termes concrets. Mon travail se situe avant ça, quand on veut encore faire marcher la relation. Ou parfois en parallèle, en individuel, pour celui qui traverse la situation.",
      },
      {
        q: "Quelle différence avec un mentor ou un board member qui nous conseillerait ?",
        a: "Un mentor partage ce qu'il a vécu et ce qui a marché pour lui. C'est utile quand vous cherchez un retour d'expérience. Mais chaque dynamique relationnelle est unique. Un conseil qui a marché ailleurs ne résout pas ce qui se joue entre vous. Le coaching part de là : de ce qui se passe dans votre relation, pas dans celle de quelqu'un d'autre.",
      },
    ],
  },
  {
    id: "deroulement",
    theme: "Comment ça se passe ?",
    items: [
      {
        q: "À quel moment faut-il venir vous voir ?",
        a: "Le plus tôt possible. Les gros conflits entre fondateurs ne sortent pas de nulle part. Ce sont des petits irritants qu'on a laissé s'installer. Plus on attend, plus c'est difficile à démêler.",
      },
      {
        q: "Comment commence le travail ?",
        a: "Par un premier échange en visio, gratuit et sans engagement. Si on décide de travailler ensemble, la première séance sert à poser un objectif précis pour l'accompagnement. Vous arrivez avec votre demande, telle que vous la formulez aujourd'hui. À partir de là, on définit ensemble ce qu'on va vraiment travailler.",
      },
      {
        q: "Concrètement, comment se passe une séance ?",
        a: "On part toujours d'une situation réelle, quelque chose qui s'est passé récemment, un échange qui a coincé, une décision qui n'avance pas. À partir de là, on tire le fil : qu'est-ce qui a été dit, comment l'autre a réagi, ce que vous avez ressenti à ce moment-là. Pour voir ce qui se joue en dessous.",
      },
      {
        q: "Ça marche aussi à distance ?",
        a: "Oui, en visio. Pas de réunion juste avant ni juste après, un endroit calme, une porte qui ferme. C'est ce qui recrée ce que le présentiel offre naturellement : un espace à part, une coupure avec le quotidien.",
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
      <section className="relative lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 pt-16 md:pt-28 pb-24 md:pb-36">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance text-foreground max-w-5xl">
            <span className="text-accent">65 %</span> des startups à fort
            potentiel échouent à cause de conflits entre cofondateurs.
          </h1>
          <p className="mt-12 text-base text-muted-foreground max-w-2xl whitespace-normal">
            Source&nbsp;: Noam Wasserman,&nbsp;<em>The Founder's Dilemmas</em>,&nbsp;Harvard Business School.
          </p>
        </div>
      </section>

      {/* My perspective */}
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
              Mon regard
            </p>
            <div className="mt-2 space-y-5 text-lg text-foreground/80 leading-relaxed">
              <p>
                Dix ans dans des équipes dirigeantes de startups, dont Chief
                of Staff chez BlaBlaCar, m'ont appris à lire un contexte
                vite, à comprendre ce qui se joue vraiment derrière une
                décision qui traîne ou une tension qui monte.
              </p>
              <p>
                Une formation en psychologie et une pratique auprès de
                patients m'ont appris à ne pas rester en surface quand quelque
                chose de plus profond apparaît dans une relation.
              </p>
              <p className="font-serif italic text-2xl text-foreground">
                C'est ce croisement qui définit la façon dont je travaille.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section>
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-24 md:py-36">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Comment je travaille
          </p>
          <div className="mt-2 space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Face à des tensions, la plupart des fondateurs commencent par
              essayer de résoudre les choses entre eux&nbsp;: en parler,
              s'expliquer, trouver un fonctionnement qui convient à tout le
              monde. Quand ça ne suffit pas, c'est souvent parce que chacun
              aborde la discussion avec sa propre vision de ce qui est juste,
              efficace, prioritaire. Ces visions-là sont rarement explicitées.
              Mais elles orientent tout, et elles font que les interactions
              finissent par se ressembler, quel que soit le sujet.
            </p>
            <p className="font-serif italic text-2xl text-foreground border-l-2 border-accent pl-6 my-10">
              Pas dans le contenu du désaccord, mais dans ce que chacun fait
              pour le résoudre, et qui souvent l'aggrave.
            </p>
            <p>
              Je ne cherche pas qui a raison. Je regarde d'où chacun parle, et
              ce que ça produit entre eux. Je rends visible les mécanismes,
              les angles morts, les boucles dans lesquelles ils sont pris,
              pour qu'ils puissent enfin en sortir.
            </p>
          </div>

          <div className="mt-14 md:mt-16">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
              En séance
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Je ne commence pas par des tests de personnalité ou des
              diagnostics. Vous me racontez votre situation, et on part de
              là. Ça permet d'être concret dès la première séance, sur ce
              que vous vivez vraiment. Ce qui se passe entre vous ne se
              résume pas à des profils ou des typologies&nbsp;: c'est votre
              fonctionnement, vos dynamiques, vos zones aveugles à vous.
              Et personne ne se retrouve rangé dans une case, parce que
              «&nbsp;c'est normal, il est comme ça&nbsp;» devient vite une
              façon de ne rien bouger.
            </p>
          </div>

          <div className="mt-14">
            <Link
              to="/situations/"
              className="group inline-flex items-center gap-3 text-accent text-sm tracking-wide border-b border-accent/40 hover:border-accent pb-1 transition-all"
            >
              Voir des exemples concrets d'accompagnement
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-secondary/30">
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
