const stages = [
  {
    title: "Inconfort",
    label: "diffus",
    feel: "Une gêne, un agacement par moments.",
    say: "«\u00a0C'est un détail. Il est comme ça.\u00a0»",
    card: "border border-dashed border-[#d8c6b4] bg-[#f9f3ea]",
  },
  {
    title: "Tension",
    label: "palpable",
    feel: "De l'irritation, presque à chaque fois.",
    say: "«\u00a0C'est une phase, ça passera.\u00a0»",
    card: "border border-[#c2b39c] bg-[#ece0cd]",
  },
  {
    title: "Conflit",
    label: "évident",
    feel: "De l'exaspération. Je ne le supporte plus.",
    say: "«\u00a0J'ai tout essayé, c'est insoluble.\u00a0»",
    card: "border-2 border-[#b8552e] bg-[#ddccb2]",
  },
];

const EchelleInconfort = () => (
  <figure>
    <img
      src="/echelle-de-l-inconfort.svg"
      alt={"L'échelle de l'inconfort\u00a0: inconfort, tension, conflit."}
      className="hidden w-full md:block"
    />
    <div className="md:hidden">
      <p className="font-serif text-2xl leading-tight text-foreground">L'échelle de l'inconfort</p>
      <p className="mt-2 text-base leading-relaxed text-[#5c5148]">
        Un conflit, c'est un inconfort qui s'est répété sans être réglé, jusqu'à devenir insupportable.
      </p>
      <ol className="mt-6 space-y-3">
        {stages.map((stage) => (
          <li key={stage.title} className={`px-5 py-5 ${stage.card}`}>
            <p className="font-serif text-2xl leading-none text-foreground">{stage.title}</p>
            <p className="mt-1 text-sm italic text-[#8a7d68]">{stage.label}</p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Ce qu'on ressent</p>
            <p className="mt-1 text-base leading-relaxed text-foreground">{stage.feel}</p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Ce qu'on se dit pour ne rien faire
            </p>
            <p className="mt-1 text-base italic leading-relaxed text-accent">{stage.say}</p>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-center text-sm text-accent">ça monte →</p>
    </div>
  </figure>
);

export default EchelleInconfort;
