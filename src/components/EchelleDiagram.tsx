import { cn } from "@/lib/utils";

const stages = [
  {
    title: "Inconfort",
    label: "diffus",
    feel: "Une gêne, un agacement par moments.",
    say: "«\u00a0C'est un détail. Il est comme\u00a0ça.\u00a0»",
    card: "border border-dashed border-border bg-background/80",
  },
  {
    title: "Tension",
    label: "on la sent",
    feel: "De l'irritation, presque à chaque fois.",
    say: "«\u00a0C'est une phase, ça\u00a0passera.\u00a0»",
    card: "border border-border bg-secondary/50",
  },
  {
    title: "Conflit",
    label: "évident",
    feel: "De l'exaspération. Je ne le supporte plus.",
    say: "«\u00a0J'ai tout essayé, c'est\u00a0insoluble.\u00a0»",
    card: "border-2 border-accent bg-accent/10",
  },
];

type EchelleDiagramProps = {
  className?: string;
  showIntro?: boolean;
};

const EchelleDiagram = ({ className, showIntro = true }: EchelleDiagramProps) => (
  <figure className={cn("w-full", className)}>
    {showIntro && (
      <div className="mb-8 md:mb-10 max-w-3xl">
        <p className="font-serif text-2xl md:text-3xl text-foreground leading-tight">
          L'échelle de l'inconfort
        </p>
        <p className="mt-3 text-base md:text-lg text-foreground/80 leading-relaxed">
          Un conflit, c'est un inconfort qui s'est répété sans être réglé,
          jusqu'à devenir insupportable.
        </p>
      </div>
    )}

    <div className="grid gap-6 md:gap-8 md:grid-cols-[minmax(0,8.5rem)_1fr_1fr_1fr] items-stretch">
      <div className="hidden md:flex flex-col justify-around py-8 text-[10px] uppercase tracking-[0.22em] text-muted-foreground leading-snug">
        <p>Ce qu'on ressent</p>
        <p>Ce qu'on se dit pour ne rien faire</p>
      </div>

      {stages.map((s) => (
        <div key={s.title} className={cn("flex flex-col p-5 md:p-6", s.card)}>
          <p className="font-serif text-2xl md:text-[1.7rem] text-foreground leading-none">
            {s.title}
          </p>
          <p className="mt-1 text-sm italic text-muted-foreground">{s.label}</p>
          <div className="mt-6 space-y-5 flex-1">
            <div>
              <p className="md:hidden text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                Ce qu'on ressent
              </p>
              <p className="text-sm md:text-[15px] text-foreground/85 leading-relaxed">
                {s.feel}
              </p>
            </div>
            <div>
              <p className="md:hidden text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                Ce qu'on se dit
              </p>
              <p className="text-sm md:text-[15px] italic text-foreground/80 leading-relaxed text-pretty">
                {s.say}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8 md:mt-10 md:ml-[8.5rem] md:pl-8">
      <p className="text-center text-sm italic text-accent mb-2">ça monte</p>
      <div className="relative h-px bg-accent/70" aria-hidden>
        <span className="absolute right-0 top-1/2 -translate-y-1/2 border-y-[5px] border-y-transparent border-l-[9px] border-l-accent/70" />
      </div>
    </div>
  </figure>
);

export default EchelleDiagram;
