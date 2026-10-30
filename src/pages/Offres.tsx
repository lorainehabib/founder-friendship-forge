import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";
import Seo from "@/components/Seo";
import ReserveButton from "@/components/ReserveButton";

const LETTER_CONVERSATION = "/blog/la-conversation-quon-evite/";
const LETTER_BOUCLE = "/blog/c-est-lui-le-probleme/";

type Offer = {
  id: string;
  aliases?: string[];
  name: string;
  title: string;
  who: string;
  format: string;
  price: string;
  priceNote: string;
  signs: [string, string, string];
  description: string;
  detail?: string;
  situation?: { title: string; to: string };
};

const offers: Offer[] = [
  {
    id: "socle",
    aliases: ["s-associer", "entretenir"],
    name: "Socle",
    title: "Quand tout va bien, et que vous voulez que ça dure",
    who: "À deux ou plus",
    format: "1h30 chacun, puis 2 séances de 2 à 3h ensemble",
    price: "3\u00a0000\u00a0€ HT",
    priceNote: "À deux · 4\u00a0000\u00a0€ HT à trois · au-delà sur devis",
    signs: [
      "Tout va bien, et vous savez que c'est maintenant que ça se travaille.",
      "Vous vous associez, et vous voulez poser de bonnes bases.",
      "Vous venez de lever, et les rôles vont changer.",
    ],
    description:
      "Seul avec moi, chacun dit ce qu'il a remarqué, même ce qu'il range dans les détails. Ensemble, on regarde comment ça se joue entre vous, et ce que chacun peut faire autrement. Vous repartez capables d'avoir cette conversation sans moi.",
    detail: "/offres/socle/",
    situation: {
      title: "La conversation qu'on évite",
      to: LETTER_CONVERSATION,
    },
  },
  {
    id: "reset",
    aliases: ["debloquer"],
    name: "Reset",
    title: "Quand c'est déjà tendu, et que vous venez ensemble",
    who: "À deux ou plus",
    format: "Une séance ensemble, 1h30 chacun, puis 4 séances de 2h, sur trois mois",
    price: "Dès 6\u00a0000\u00a0€ HT",
    priceNote: "Selon la situation et le nombre d'associés",
    signs: [
      "Vous avez le sentiment d'avoir déjà tout essayé.",
      "Le même désaccord revient, sous des formes différentes.",
      "L'un de vous se demande s'il veut continuer.",
    ],
    description:
      "Je ne creuse pas le fond du désaccord, je regarde la façon dont vous réagissez l'un à l'autre. C'est à cet endroit que la relation peut bouger. Le temps seul avec chacun sert à entendre ce qui ne se dit pas encore devant l'autre. Entre les séances, il y a souvent quelque chose à essayer.",
    detail: "/offres/reset/",
    situation: {
      title: "C'est lui le problème",
      to: LETTER_BOUCLE,
    },
  },
  {
    id: "solo",
    name: "Solo",
    title: "Quand vous venez seul",
    who: "Coaching individuel",
    format: "8 séances d'1h30, sur cinq mois",
    price: "4\u00a0500\u00a0€ HT",
    priceNote: "",
    signs: [
      "La relation avec votre associé vous pèse, et vous voulez que quelque chose change, même s'il ne vient pas.",
      "Vous prenez un nouveau poste, ou un nouveau périmètre.",
      "Une décision traîne depuis des mois.",
    ],
    description:
      "On part du concret\u00a0: un moment précis, une réaction, une décision qui coince. On fixe dès la première séance un objectif clair\u00a0: à quoi vous verrez que ça a changé. Entre deux séances, il y a souvent une chose à essayer, choisie ensemble.",
  },
];

const faqItems = [
  {
    q: "Mon associé n'est pas prêt à faire cette démarche, ça peut quand même marcher ?",
    a: "Oui. Une relation, c'est une dynamique : quand l'un des deux change sa façon d'agir, l'autre ne peut pas réagir exactement comme avant. La relation bouge, même si un seul des deux est engagé dans le travail.",
  },
  {
    q: "Notre situation est vraiment spécifique, vous avez déjà vu ça ?",
    a: "Probablement. Mais ce qui importe ce n'est pas d'avoir vu exactement la même situation, c'est de comprendre ce qui la crée. Les tensions entre associés se ressemblent souvent en surface, mais ce qui les alimente est propre à chaque individu.",
  },
  {
    q: "Comment commence le travail ?",
    a: "Par un premier échange en visio, gratuit et sans engagement. Si on décide de travailler ensemble, la première séance sert à poser un objectif précis pour l'accompagnement à partir de votre demande, telle que vous la formulez aujourd'hui.",
  },
  {
    q: "Ça marche aussi à distance ?",
    a: "Oui, en visio, en recréant les conditions que le présentiel offre naturellement : pas de réunion juste avant ni juste après, un endroit calme, une porte qui ferme, etc.",
  },
  {
    q: "Ce qui se dit en séance reste confidentiel ?",
    a: "Oui, sans exception. Même quand l'accompagnement est initié par un investisseur ou un fonds, rien de ce qui se dit en séance ne leur est transmis. C'est une condition non négociable pour que le travail fonctionne.",
  },
  {
    q: "Comment ça se passe si on se rend compte qu'on doit se séparer ?",
    a: "Ça arrive. Le travail fait bouger la relation, et parfois, en y voyant plus clair, l'un des deux se rend compte que les conditions ne lui conviennent plus. Cette décision serait venue de toute façon. Elle vient juste plus vite, et plus lucidement.",
  },
  {
    q: "Ce que je dis seul, vous le répéterez à mon associé\u00a0?",
    a: "Ce qui se dit en séance individuelle sert le travail commun. Je ne répète rien à votre place, mais je ne garde pas non plus un secret qui empêcherait d'avancer\u00a0: si quelque chose doit être dit entre vous, je vous aide à trouver comment le dire vous-même.",
  },
  {
    q: "Puis-je être coaché seul pendant que nous sommes accompagnés à deux\u00a0?",
    a: "Non. Pendant un accompagnement à deux ou plus, et dans les six mois qui suivent, je n'accompagne aucun des associés individuellement. Ma place est d'être la même pour chacun. Si l'un de vous a besoin d'un travail personnel, je vous oriente vers un ou une collègue.",
  },
  {
    q: "Et si toutes les séances ne sont pas nécessaires\u00a0?",
    a: "Pour Reset et Solo, on s'arrête quand l'objectif est atteint. Les séances que vous n'avez pas utilisées restent disponibles pendant un an, si vous en avez besoin plus tard.",
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

const Offres = () => {
  return (
    <SiteLayout>
      <Seo
        title="Travailler ensemble · Loraine Habib"
        description={"Socle, Reset, Solo\u00a0: qui vient, dans quel ordre, seul ou ensemble."}
        path="/offres/"
        structuredData={faqSchema}
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 pt-[88px] md:px-10 md:pt-[133px]">
          <h1 className="max-w-4xl font-serif text-[48px] font-normal leading-none text-foreground md:text-[72px]">
            Travailler ensemble.
          </h1>
          <p className="mt-5 text-base text-[#5c5148]">
            Trois façons de travailler, selon votre situation.
          </p>
        </div>
      </section>

      <section className="relative">
        <nav
          aria-label="Les trois offres"
          className="absolute left-6 right-6 top-[calc(-50px+8px)] flex flex-wrap gap-2 md:left-10 lg:hidden"
        >
          {offers.map((offer) => (
            <a
              key={offer.id}
              href={`#${offer.id}`}
              className="border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {offer.name}
            </a>
          ))}
        </nav>
        <div className="mx-auto mt-[50px] max-w-7xl px-6 pb-20 md:mt-16 md:px-10 md:pb-28">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:grid-rows-[repeat(11,auto)] lg:items-stretch lg:gap-x-6 lg:gap-y-0">
            {offers.map((offer) => (
              <article
                key={offer.id}
                id={offer.id}
                className="relative flex scroll-mt-28 flex-col rounded border border-border bg-secondary p-6 md:p-8 lg:grid lg:grid-rows-subgrid lg:[grid-row:span_11] lg:gap-0 lg:[&>*]:self-start"
              >
                {offer.aliases?.map((alias) => (
                  <span key={alias} id={alias} className="absolute top-0 scroll-mt-28" aria-hidden />
                ))}

                <h2 className="font-serif text-5xl leading-[0.9] text-foreground md:text-6xl">{offer.name}</h2>
                <p className="mt-4 font-serif text-xl italic leading-snug text-foreground text-balance">
                  {offer.title}
                </p>
                <p className="mt-3 text-[17px] leading-snug text-foreground">{offer.format}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">{offer.who}</p>
                <p className="mt-5 font-serif text-3xl leading-none text-foreground lining-nums">{offer.price}</p>
                <p className="mt-2 min-h-[1.25rem] text-[13px] leading-snug text-muted-foreground lining-nums">
                  {offer.priceNote}
                </p>

                <div>
                  <p className="mt-6 font-serif text-lg italic leading-snug text-foreground">
                    Vous en êtes peut-être là
                  </p>
                  <ul className="mt-2.5 flex flex-col gap-2.5">
                    {offer.signs.map((sign) => (
                      <li key={sign} className="flex items-start gap-3 text-[15px] leading-snug text-foreground/85">
                        <span aria-hidden className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-accent" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 text-[15px] leading-relaxed text-foreground/85">{offer.description}</p>

                {offer.detail ? (
                  <Link
                    to={offer.detail}
                    className="group mt-8 inline-flex w-fit items-center gap-2 text-sm text-accent"
                  >
                    <span className="border-b border-transparent pb-0.5 group-hover:border-accent">
                      Voir le détail
                    </span>
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                ) : (
                  <span className="mt-8" aria-hidden />
                )}

                <ReserveButton className="mt-4 w-full" />

                {offer.situation ? (
                  <Link
                    to={offer.situation.to}
                    className="group mt-4 inline-flex w-fit flex-col gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="inline-flex items-center gap-2">
                      Lire une situation réelle
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                    <span>«{"\u00a0"}{offer.situation.title}{"\u00a0"}»</span>
                  </Link>
                ) : (
                  <span className="mt-4" aria-hidden />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-accent">Ce qu'on me demande souvent</p>
          <div className="divide-y divide-border/70 border-y border-border/70">
            {faqItems.map((item) => (
              <details key={item.q} className="group py-8">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-8">
                  <h3 className="text-balance font-serif text-xl leading-snug text-foreground transition-colors group-open:text-accent md:text-2xl">
                    {item.q}
                  </h3>
                  <span className="mt-1 font-serif text-2xl leading-none text-accent transition-transform duration-500 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/80">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />

      <div className="offer-mobile-reserve fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
        <ReserveButton className="w-full" />
      </div>
    </SiteLayout>
  );
};

export default Offres;
