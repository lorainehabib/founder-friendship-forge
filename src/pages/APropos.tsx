import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import Seo from "@/components/Seo";
import Picture from "@/components/Picture";
import portraitJpg from "@/assets/loraine-portrait-3.jpg";
import portraitWebp from "@/assets/loraine-portrait-3.webp";

const trainings = [
  {
    year: "2024",
    school: "HEC Paris",
    description: "",
    certificate: "Certificat de Coaching Professionnel Avancé",
  },
  {
    year: "2019",
    school: "AEMD",
    description: "Méthode issue de la Thérapie Centrée sur les Émotions",
    certificate: "Certificat de Thérapeute AEMD",
  },
  {
    year: "2012",
    school: "EM Lyon Business School",
    description: "",
    certificate: "MSc in Management",
  },
];

const APropos = () => {
  return (
    <SiteLayout>
      <Seo
        title="À propos — Loraine Habib"
        description="Ancienne Chief of Staff du CEO de BlaBlaCar et thérapeute formée à l'AEMD : deux regards à la fois pour travailler la relation entre fondateurs."
        path="/a-propos/"
      />

      {/* Origine */}
      <section>
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 md:pt-28 pb-20 md:pb-28 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Picture
                webp={portraitWebp}
                jpg={portraitJpg}
                alt="Loraine Habib"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance text-foreground">
              À propos.
            </h1>
            <div className="mt-10 space-y-5 text-lg text-foreground/85 leading-relaxed">
              <p>
                Pendant deux ans, j'ai mené deux vies de front. Quatre jours par
                semaine, Chief of Staff du CEO de BlaBlaCar : j'ai vu
                l'entreprise passer de 50 à 700 personnes, et mon travail
                consistait à faire du comité exécutif un vrai lieu de décision,
                au bon niveau de préparation et de discussion.
              </p>
              <p>
                Le cinquième jour, je recevais des patients en cabinet. Je
                m'étais formée à la psychologie en parallèle de mon poste.
              </p>
              <p>
                En séance, un thème revenait plus que les autres : les
                difficultés dans les relations. J'ai appris à les dénouer, en
                travaillant sur la façon dont les gens interagissent. Ces mêmes
                difficultés, je les retrouvais au comité exécutif, entre ses
                membres, avec les mêmes conséquences sur la capacité à décider,
                à avancer, à se faire confiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Échelle */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
            La différence tenait à l'échelle
          </p>
          <p className="font-serif italic text-2xl md:text-3xl text-foreground border-l-2 border-accent pl-6 leading-[1.25]">
            En cabinet, elle changeait une personne&nbsp;; entre dirigeants,
            elle pouvait changer la trajectoire d'une entreprise. J'ai décidé
            d'en faire mon métier.
          </p>
        </div>
      </section>

      {/* Deux regards */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28">
          <div className="space-y-6 text-lg text-foreground/85 leading-relaxed">
            <p>
              Je travaille avec deux regards à la fois : celui du terrain, qui
              connaît la pression des décisions et les tensions au sommet, et
              celui du clinicien, qui sait descendre là où les choses se
              jouent. Cette double vue me permet de voir ce que vous ne pouvez
              pas repérer de l'intérieur.
            </p>
            <p>
              Ce regard extérieur, j'en ai besoin moi aussi. Je fais ce métier
              sous supervision et je poursuis mon propre travail personnel,
              pour que mes angles morts ne deviennent jamais les vôtres.
            </p>
            <p>
              Aujourd'hui, j'accompagne les fondateurs et les équipes
              dirigeantes à faire tenir et avancer la relation qui porte leur
              projet.
            </p>
            <p className="font-serif italic text-xl md:text-2xl leading-snug text-foreground pt-4">
              Un accompagnement avec moi a toujours une fin. Ce qui me fait
              aimer ce métier, c'est de passer d'un avant à un après. Je ne
              veux pas être une béquille : le jour où vous n'avez plus besoin
              de moi, j'ai réussi.
            </p>
          </div>

          <div className="mt-12">
            <Link
              to="/offres/"
              className="group inline-flex items-center gap-3 text-accent text-sm tracking-wide border-b border-accent/40 hover:border-accent pb-1 transition-all"
            >
              Voir les accompagnements
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-balance text-foreground mb-12 md:mb-14 max-w-3xl">
            Formations & certifications
          </h2>
          <ul className="divide-y divide-border/70 border-y border-border/70">
            {trainings.map((t) => (
              <li
                key={t.year + t.school}
                className="grid grid-cols-12 gap-4 md:gap-6 py-7 items-baseline"
              >
                <span className="col-span-3 md:col-span-2 font-serif text-2xl text-accent">
                  {t.year}
                </span>
                <div className="col-span-9 md:col-span-5">
                  <p className="font-serif text-xl md:text-2xl text-foreground leading-tight">
                    {t.school}
                  </p>
                  {t.description && (
                    <p className="mt-1 text-base text-muted-foreground">
                      {t.description}
                    </p>
                  )}
                </div>
                <div className="col-span-12 md:col-span-5 md:text-right">
                  <span className="text-sm md:text-base text-foreground/85">
                    {t.certificate}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBlock onlyButton />
    </SiteLayout>
  );
};

export default APropos;
