import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import portrait from "@/assets/loraine-portrait-2.jpg";

const trainings = [
  { year: "2026", school: "Fabulous Systemic Learning", label: "L'approche systémique et stratégique" },
  { year: "2024", school: "HEC Paris", label: "Certificat de Coaching Professionnel Avancé" },
  { year: "2019", school: "Certificat de Thérapeute AEMD", label: "Méthode issue de la Thérapie Centrée sur les Émotions" },
  { year: "2012", school: "EM Lyon Business School", label: "MSc in Management" },
];

const APropos = () => {
  return (
    <SiteLayout>
      {/* Origin */}
      <section>
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 md:pt-28 pb-24 md:pb-36 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="relative">
                <div className="absolute -inset-4 md:-inset-6 border border-border/70 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6" />
                <img
                  src={portrait}
                  alt="Loraine Habib"
                  className="relative w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-8">
              À propos · Loraine Habib
            </p>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance text-foreground">
              Avant que ça devienne une activité, c'était une curiosité.
            </h1>
            <div className="mt-10 space-y-5 text-lg text-foreground/80 leading-relaxed">
              <p>
                Je me suis formée à la psychologie sans vraiment savoir où ça
                allait me mener. C'était pendant mes années chez BlaBlaCar
                (j'étais Chief of Staff du CEO, et membre du comité exécutif)
                et je n'avais pas de projet particulier derrière.
              </p>
              <p>
                Au bout de deux ans de formation, j'ai voulu pratiquer. Pas
                par ambition, mais par nécessité&nbsp;: sans pratique, j'allais
                tout perdre. J'ai donc commencé à recevoir des patients, un
                jour par semaine, en parallèle de mon activité.
              </p>
              <p>
                Pendant deux ans, j'ai vécu les deux mondes en même temps.
                Quatre jours par semaine, je gérais les situations humaines et
                relationnelles qui remontaient au comex d'une scale-up en
                forte croissance. Un jour par semaine, je travaillais avec des
                patients sur ce qui bloquait dans leurs relations, leur façon
                de fonctionner, leurs angles morts.
              </p>
              <p className="font-serif italic text-2xl text-foreground">
                C'est ce croisement qui a tout éclairé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Realization */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-24 md:py-36">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Ce que j'ai compris à ce moment-là
          </p>
          <div className="space-y-6 text-lg text-foreground/85 leading-relaxed">
            <p>
              Les mêmes schémas que je voyais en séance — des attentes non
              formulées, des réactions qui aggravent ce qu'elles cherchent à
              résoudre — je les retrouvais exactement dans les relations
              entre dirigeants. Avec les mêmes effets sur la capacité à
              décider, à avancer, à faire confiance.
            </p>
            <p className="font-serif italic text-3xl md:text-4xl text-foreground border-l-2 border-accent pl-6 my-10 leading-[1.2]">
              Ce travail avait de l'impact sur une personne. Appliqué aux
              relations entre fondateurs, il pouvait changer la trajectoire
              d'une entreprise.
            </p>
            <p>C'est comme ça que j'ai construit cette activité.</p>
          </div>
        </div>
      </section>

      {/* Practice */}
      <section>
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Ce que ça implique dans ma façon de travailler
          </p>
          <div className="space-y-6 text-lg text-foreground/85 leading-relaxed">
            <p>
              Je suis supervisée dans ma pratique, et je continue mon propre
              travail personnel. C'est ce qui me permet de faire ce métier
              avec la rigueur qu'il demande.
            </p>
            <p>
              Et un accompagnement avec moi a toujours une fin. Mon objectif
              n'est pas de m'installer dans la durée — c'est que vous n'ayez
              plus besoin de moi.
            </p>
          </div>
        </div>
      </section>

      {/* Trainings */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-36">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Formations & certifications
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-balance text-foreground mb-14 max-w-3xl">
            Le parcours derrière la pratique.
          </h2>
          <ul className="divide-y divide-border/70 border-y border-border/70">
            {trainings.map((t) => (
              <li
                key={t.year + t.school}
                className="grid grid-cols-12 gap-4 md:gap-8 py-7 items-baseline"
              >
                <span className="col-span-3 md:col-span-2 font-serif text-2xl text-accent">
                  {t.year}
                </span>
                <span className="col-span-9 md:col-span-4 font-serif text-xl md:text-2xl text-foreground">
                  {t.school}
                </span>
                <span className="col-span-12 md:col-span-6 text-sm md:text-base text-muted-foreground md:text-right">
                  {t.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBlock heading="Voyons ensemble si je peux vous aider." />
    </SiteLayout>
  );
};

export default APropos;
