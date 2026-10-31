import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import EchelleDiagram from "@/components/EchelleDiagram";
import FreebieCapture from "@/components/FreebieCapture";
import { approcheSeo } from "@/seo-routes";

const faqItems = [
  {
    q: "Coach ou médiateur ?",
    a: "Un médiateur intervient quand la décision d'arrêter est déjà prise, pour organiser la séparation. Moi, j'interviens quand vous voulez encore avancer ensemble (ou que vous hésitez).",
  },
  {
    q: "Coach, mentor ou board member ?",
    a: "Un mentor partage ce qui a marché pour lui\u00a0; un board conseille sur le business. Je ne travaille ni votre stratégie ni vos décisions en direct : je travaille la relation qui les porte.",
  },
  {
    q: "«\u00a0Notre problème est business, pas relationnel.\u00a0»",
    a: "Parfois un problème a l'air business alors qu'il est relationnel\u00a0; parfois c'est l'inverse. Dans les deux cas, c'est en travaillant qu'on démêle les deux.",
  },
  {
    q: "Et si je ne veux pas parler de mes émotions ?",
    a: "On n'en fera pas un sujet en soi. On part du concret : un moment précis, une réaction, une décision qui coince. L'objectif est opérationnel : décider et avancer avec votre associé.",
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

const Approche = () => {
  return (
    <SiteLayout>
      <Seo
        title={approcheSeo.title}
        description={approcheSeo.description}
        path="/approche/"
        structuredData={faqSchema}
      />

      <section>
        <div className="mx-auto max-w-4xl px-6 md:px-10 pt-16 md:pt-28 pb-16 md:pb-20">
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance text-foreground">
            Travailler la relation, avant d'en avoir besoin.
          </h1>
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
      </section>

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
              J'ai accompagné plusieurs dizaines d'associés en difficulté. Tous
              décrivent la même chronologie : ce qui les oppose aujourd'hui
              était là très tôt, sous la forme de petites gênes qu'ils ne
              jugeaient pas assez graves pour en parler. C'est la répétition
              qui les a rendues insupportables.
            </p>
          </div>

          <p className="mt-10 font-serif italic text-xl md:text-2xl leading-snug text-foreground">
            Tous les inconforts ne deviendront pas des conflits. Mais tous les
            conflits viennent d'inconforts non réglés.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
          <EchelleDiagram />
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28">
          <div className="space-y-6 text-lg text-foreground/85 leading-relaxed">
            <p>
              L'opposé de «&nbsp;se prendre la tête&nbsp;», ce n'est pas
              «&nbsp;prendre sur soi&nbsp;» indéfiniment. Il y a un chemin du
              milieu : travailler la relation, pour que les inconforts ne
              s'accumulent plus. On les repère, on les met sur la table, on les
              règle avant qu'ils ne pèsent.
            </p>
            <p className="font-serif italic text-xl md:text-2xl leading-snug text-foreground">
              C'est comme ça qu'une association tient, et qu'elle avance.
            </p>
            <div className="flex flex-col items-start gap-5 pt-2">
              <Link
                to="/blog/la-conversation-quon-evite/"
                className="group inline-flex items-center gap-3 text-accent text-sm tracking-wide border-b border-accent/40 hover:border-accent pb-1 transition-all"
              >
                Lire une situation réelle&nbsp;: «&nbsp;La conversation qu'on évite&nbsp;»
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                to="/offres/"
                className="group inline-flex items-center gap-3 text-accent text-sm tracking-wide border-b border-accent/40 hover:border-accent pb-1 transition-all"
              >
                Voir les offres
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-8">
            Ce qu'on me demande souvent
          </p>
          <div className="divide-y divide-border/70 border-y border-border/70">
            {faqItems.map((item) => (
              <details key={item.q} className="group py-8">
                <summary className="flex cursor-pointer items-start justify-between gap-8 list-none">
                  <h2 className="font-serif text-xl md:text-2xl text-foreground leading-snug group-open:text-accent transition-colors text-balance">
                    {item.q}
                  </h2>
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

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28">
          <FreebieCapture source="approche" />
        </div>
      </section>
    </SiteLayout>
  );
};

export default Approche;
