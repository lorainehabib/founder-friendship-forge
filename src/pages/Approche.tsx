import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import { Link } from "react-router-dom";
import portrait from "@/assets/loraine-portrait-2.jpg";

const faq = [
  {
    q: "Mon associé n'est pas prêt à faire cette démarche — ça peut quand même marcher ?",
    a: "Oui. Une relation, c'est une dynamique : quand l'un des deux change sa façon d'agir, l'autre ne peut pas réagir exactement comme avant. La relation bouge, même si un seul des deux est engagé dans le travail.",
  },
  {
    q: "Notre situation est vraiment spécifique — vous avez déjà vu ça ?",
    a: "Probablement. Mais ce qui importe ce n'est pas d'avoir vu exactement la même situation — c'est de comprendre ce qui la crée. Les tensions entre cofondateurs se ressemblent souvent en surface. Ce qui les alimente est presque toujours singulier.",
  },
  {
    q: "À quel moment faut-il venir vous voir ?",
    a: "Le plus tôt possible. Les conflits importants qu'on voit des années après la création étaient presque toujours présents dès le début — sous forme de petits irritants qu'on a minimisés. Plus on travaille tôt, moins on laisse ces signaux s'installer.",
  },
  {
    q: "Concrètement, comment se passe une séance ?",
    a: "On part toujours d'une situation réelle — quelque chose qui s'est passé récemment, un échange qui a coincé, une décision qui n'avance pas. À partir de là, je pose des questions : qu'est-ce qui a été dit, comment l'autre a réagi, ce que vous avez ressenti à ce moment-là. Pas pour rejouer la scène, mais pour comprendre ce qui se joue en dessous — ce que chacun cherche vraiment, ce qui n'a pas été dit, ce qui fait que ça bloque. C'est ce travail-là qui permet de bouger.",
  },
  {
    q: "Ça dure combien de temps ?",
    a: "En moyenne 8 séances sur 4 à 6 mois. L'accompagnement peut se faire avec un seul fondateur ou avec les cofondateurs ensemble, en présentiel à Paris ou en visio.",
  },
];

const Approche = () => {
  return (
    <SiteLayout>
      {/* Stat hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 md:px-10 pt-16 md:pt-28 pb-24 md:pb-36">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance text-foreground max-w-5xl">
            <span className="text-accent">65 %</span> des startups à fort
            potentiel échouent à cause de conflits entre cofondateurs.
          </h1>
          <p className="mt-12 text-base text-muted-foreground max-w-xl">
            Source&nbsp;: Noam Wasserman,{" "}
            <em>The Founder's Dilemmas</em>, Harvard Business School.
          </p>
        </div>
      </section>

      {/* My perspective */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-36 grid gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <img
              src={portrait}
              alt="Loraine Habib"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
              Mon regard
            </p>
            <div className="mt-2 space-y-5 text-lg text-foreground/80 leading-relaxed">
              <p>
                Dix ans dans des équipes dirigeantes de startups — dont Chief
                of Staff chez BlaBlaCar — m'ont appris à lire un contexte
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
              essayer de résoudre les choses entre eux : en parler,
              s'expliquer, trouver un fonctionnement qui convient à tout le
              monde. Quand ça ne suffit pas, c'est souvent parce que chacun
              aborde la discussion avec sa propre vision de ce qui est juste,
              efficace, prioritaire. Ces convictions sont rarement posées sur
              la table. Pourtant, elles orientent tout&nbsp;: la façon dont on
              interprète un désaccord, ce qu'on attend de l'autre, ce qu'on
              est prêt à lâcher ou pas.
            </p>
            <p className="font-serif italic text-2xl text-foreground border-l-2 border-accent pl-6 my-10">
              Même quand les sujets changent, ils finissent toujours par
              buter sur le même désaccord.
            </p>
            <p>
              Mon travail commence là. Pas dans le contenu du désaccord, mais
              dans ce qui le fait revenir. Je rends visible ce qui se joue
              entre les fondateurs — les mécanismes, les angles morts, les
              schémas qui se répètent — pour qu'ils puissent enfin en sortir.
            </p>
          </div>
          <div className="mt-14">
            <Link
              to="/situations"
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
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-12">
            Ce qu'on me demande souvent
          </p>
          <div className="divide-y divide-border/70 border-y border-border/70">
            {faq.map((item, i) => (
              <details key={i} className="group py-8">
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

      <CtaBlock onlyButton />
    </SiteLayout>
  );
};

export default Approche;
