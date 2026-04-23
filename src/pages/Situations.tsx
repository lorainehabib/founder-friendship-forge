import SiteLayout from "@/components/SiteLayout";
import CtaBlock from "@/components/CtaBlock";

const situations = [
  {
    title: "S'associer avec quelqu'un qu'on connaît à peine",
    paragraphs: [
      "Deux entrepreneurs expérimentés, un nouveau projet ensemble, trois mois de travail en commun. L'un des deux me contacte — pas parce que ça se passe mal, mais pour vérifier. Il voulait un diagnostic : est-ce que les profils sont compatibles ? Est-ce que ça va tenir ? Il avait déjà vécu une association où il n'arrivait pas à trouver sa place, et il ne voulait pas revivre ça.",
      "Au fil du travail, ce qui le préoccupait vraiment a émergé. Ce n'était pas une question de compatibilité des profils. C'était quelque chose de plus personnel : quand quelque chose le dérangeait, il ne le disait pas. Il accumulait les doutes au lieu de les poser sur la table. Il cherchait des certitudes sur l'autre plutôt que d'aller vérifier directement avec lui. Il attendait d'être sûr avant d'oser une conversation — et cette certitude ne venait jamais.",
      "À la fin de l'accompagnement, il avait sa réponse — mais pas celle qu'il cherchait au départ. Il n'avait pas besoin d'un diagnostic. Il avait besoin de prendre ses doutes au sérieux — et d'aller chercher les réponses lui-même, directement avec son associé. Sur ses compétences, sur sa façon de manager, sur ce qui coinçait sans être dit.",
    ],
    pull: "Il s'est mis en mouvement.",
  },
  {
    title: "Cinq associés, un seul décideur",
    paragraphs: [
      "Une startup à impact en croissance. Cinq associés, une équipe qui avance — mais en surface. En coulisses, plus rien ne circule. Chacun vient se confier séparément, personne ne dit les choses en collectif. L'un d'entre eux envisage de partir sans l'avoir annoncé aux autres.",
      "L'associée qui m'a contactée avait le sentiment d'être devenue le réceptacle de tout ce qui ne se disait pas.",
      "Derrière ce qui ressemblait à un problème de communication, quelque chose de plus profond s'était installé. Le CEO prenait toutes les décisions — non pas parce qu'il voulait le contrôle, mais parce qu'il avait l'impression que personne d'autre ne tranchait. Et les autres avaient arrêté d'essayer, convaincus que de toute façon c'est lui qui déciderait. Le système tournait en boucle, chacun confirmant la croyance de l'autre.",
      "Le travail a permis de poser ce que personne n'avait jamais dit : le CEO voulait que les autres prennent plus de décisions. Les autres le voulaient depuis longtemps — mais ils avaient arrêté d'y croire.",
    ],
    pull: "Pour la première fois, le vrai problème était sur la table.",
  },
  {
    title: "Tout est mélangé, plus rien n'avance",
    paragraphs: [
      "Une startup e-commerce, deux associés. Celui qui me contacte n'en peut plus — mais il ne sait pas de quoi exactement. Est-ce que c'est la boîte qui ne va pas dans la direction qu'il veut ? Est-ce que c'est son associé qui n'a pas été à la hauteur cette année ? Est-ce qu'ils sont trop similaires pour se compléter ? Tout s'est mélangé, et la frustration a pris toute la place.",
      "D'une séance à l'autre, sa position changeait. Parfois plusieurs fois par semaine. Partir, rester, confronter, laisser couler. Cette hésitation permanente n'était pas un manque de lucidité — c'était le signe que quelque chose de plus profond bloquait la décision.",
      "Le travail a consisté à démêler. Séparer ce qui relevait du projet, de la relation, et de ce qu'il n'arrivait pas à se dire à lui-même. Ce qui est apparu au fil des séances, c'est qu'il savait. Il ne voulait plus travailler avec son associé. Non pas par colère, mais par clarté. Et assumer cette clarté — et ce que ça impliquait comme conversations difficiles —",
    ],
    pull: "C'est là que le vrai travail a commencé.",
  },
];

const Situations = () => {
  return (
    <SiteLayout>
      <section>
        <div className="mx-auto max-w-6xl px-6 md:px-10 pt-16 md:pt-24 pb-8 md:pb-12">
          <p className="text-sm text-muted-foreground italic">
            Les détails ont été modifiés pour préserver la confidentialité.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 md:px-10 divide-y divide-border/70">
          {situations.map((s) => (
            <article
              key={s.title}
              className="grid gap-10 lg:grid-cols-12 py-20 md:py-28"
            >
              <header className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                <h2 className="font-serif text-3xl md:text-4xl leading-[1.15] text-foreground text-balance">
                  {s.title}
                </h2>
              </header>
              <div className="lg:col-span-8 space-y-6 text-lg text-foreground/85 leading-relaxed">
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.pull && (
                  <p className="text-accent pt-2">
                    {s.pull}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBlock onlyButton />
    </SiteLayout>
  );
};

export default Situations;
