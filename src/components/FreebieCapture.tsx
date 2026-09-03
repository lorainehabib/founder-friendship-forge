import FreebieForm from "@/components/FreebieForm";
import { cn } from "@/lib/utils";

type FreebieCaptureProps = {
  headingLevel?: "h1" | "h2";
  source?: string;
  className?: string;
};

const FreebieCapture = ({
  headingLevel = "h2",
  source = "unknown",
  className,
}: FreebieCaptureProps) => {
  const Heading = headingLevel;

  return (
    <div className={cn("max-w-3xl", className)}>
      <Heading
        className={
          headingLevel === "h1"
            ? "font-serif text-4xl md:text-6xl leading-[1.05] text-balance text-foreground"
            : "font-serif text-3xl md:text-4xl leading-[1.15] text-balance text-foreground"
        }
      >
        Le point sur votre association
      </Heading>
      <p
        className={
          headingLevel === "h1"
            ? "mt-10 text-lg text-foreground/85 leading-relaxed"
            : "mt-6 text-base md:text-lg text-foreground/80 leading-relaxed"
        }
      >
        Les petits inconforts d'aujourd'hui sont les tensions de demain. En 20
        minutes, faites le point sur votre association&nbsp;: un questionnaire
        pour évaluer votre niveau d'inconfort, puis une grille d'observation
        pour y voir plus clair.
      </p>
      <div className="mt-10">
        <FreebieForm source={source} />
      </div>
    </div>
  );
};

export default FreebieCapture;
