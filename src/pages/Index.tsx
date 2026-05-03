import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import Seo from "@/components/Seo";
import portrait from "@/assets/loraine-portrait-1.jpg";

const recognitionItems = [
  "Vous mettez trois réunions à trancher ce qui se décidait en cinq minutes.",
  "Il y a des sujets que vous avez arrêté d'aborder.",
  "Quel que soit le sujet, vous finissez toujours par buter sur le même désaccord.",
  "Vous préparez ce que vous allez dire avant d'en parler à votre associé.",
  "Vous avez l'impression de porter plus que votre part.",
  "Vous parlez de votre associé à d'autres, plutôt qu'à lui.",
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Loraine Habib",
  legalName: "LHG",
  url: "https://lorainehabib.com/",
  founder: {
    "@type": "Person",
    name: "Loraine Habib",
  },
  sameAs: ["https://www.linkedin.com/in/loraine-habib"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "habib.loraine@gmail.com",
      availableLanguage: ["fr"],
    },
  ],
};

const homeFaq = [
  {
    q: "A quel moment consulter pour une tension entre cofondateurs ?",
    a: "Le plus tot possible. Plus un conflit entre cofondateurs s'installe, plus il devient couteux pour la relation et pour l'entreprise.",
  },
  {
    q: "Faut-il venir a deux pour commencer un accompagnement ?",
    a: "Non. Un seul fondateur peut commencer. Quand la posture d'une personne evolue, la dynamique de la relation entre cofondateurs bouge aussi.",
  },
  {
    q: "Quels sujets peut-on traiter en coaching de fondateurs ?",
    a: "Desaccords repetitifs, tensions de communication, decisions bloquees, perte de confiance, difficultes de repartition des roles ou du pouvoir.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const Index = () => {
  return (
    <SiteLayout>
      <Seo
        title="Loraine Habib — Coach de fondateurs | Relation entre cofondateurs"
        description="La relation entre fondateurs, ça se travaille. J'accompagne les cofondateurs pour que leur association tienne et avance, dès les premiers signes de tension."
        path="/"
        structuredData={[organizationSchema, faqSchema]}
      />
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-12 md:pt-24 pb-20 md:pb-32">
          <div className="grid gap-12 md:gap-16 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-balance text-foreground">
                La relation entre fondateurs,
                <span className="block italic text-muted-foreground mt-2">
                  ça se travaille.
                </span>
              </h1>
              <div className="mt-10 space-y-5 max-w-xl text-xl md:text-2xl text-foreground/80 leading-relaxed text-pretty">
                <p className="text-foreground">
                  J'accompagne les fondateurs pour que leur association tienne, et avance. Dès le début, ou quand c'est déjà tendu.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Coaching de fondateurs a Paris et a distance, avec un focus sur la relation entre cofondateurs et la resolution des conflits.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 animate-fade-in">
              <div className="relative">
                <img
                  src={portrait}
                  alt="Portrait de Loraine Habib"
                  className="relative w-full aspect-[4/5] object-cover grayscale-[15%]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-balance text-foreground mb-12 md:mb-14">
            Signes frequents de conflit entre cofondateurs
          </h2>
          <ul className="space-y-5">
            {recognitionItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-5 text-base md:text-lg text-foreground/85 leading-relaxed"
              >
                <span
                  aria-hidden
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* Respiration claire entre les deux blocs sombres */}
      <section className="bg-background border-y border-border/60">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28 text-center">
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed mb-10 md:mb-12">
            Ce sont des signes que des tensions se sont installées entre vous — et elles ne se résoudront pas toutes seules.
          </p>
          <p className="font-serif text-2xl md:text-4xl leading-[1.2] text-balance text-foreground">
            Mais ça se travaille.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Même si vous êtes seul·e à faire la démarche.
          </p>
          <div className="mt-12">
            <Link
              to="/approche/"
              className="group inline-flex items-center gap-3 text-accent text-sm tracking-wide border-b border-accent/40 hover:border-accent pb-1 transition-all"
            >
              Découvrir mon approche
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28">
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-balance text-foreground mb-10">
            Questions frequentes sur la relation entre cofondateurs
          </h2>
          <div className="divide-y divide-border/70 border-y border-border/70">
            {homeFaq.map((item) => (
              <details key={item.q} className="group py-7">
                <summary className="flex cursor-pointer items-start justify-between gap-8 list-none">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug group-open:text-accent transition-colors text-balance">
                    {item.q}
                  </h3>
                  <span className="text-accent text-2xl font-serif leading-none mt-1 transition-transform duration-500 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-foreground/80 leading-relaxed text-lg">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <Link to="/approche/" className="text-accent border-b border-accent/40 hover:border-accent">
              Voir l'approche de coaching
            </Link>
            <Link to="/situations/" className="text-accent border-b border-accent/40 hover:border-accent">
              Lire des exemples clients
            </Link>
          </div>
        </div>
      </section>

      <CtaBlock />
    </SiteLayout>
  );
};

export default Index;
