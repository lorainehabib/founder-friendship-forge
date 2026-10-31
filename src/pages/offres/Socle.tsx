import { Link } from "react-router-dom";
import EchelleInconfort from "@/components/EchelleInconfort";
import OfferPage, { OfferLede, OfferRead, OfferSection, OfferSituation, OfferSteps } from "@/components/OfferPage";

const Socle = () => (
  <OfferPage
    name="Socle"
    hook="Quand tout va bien, à quelques détails près."
    description="Quand tout va bien, à quelques détails près. Socle sert à repérer un inconfort tant qu'il est petit."
    path="/offres/socle/"
    ogImage="/og/socle.png"
    facts={[
      { label: "Séances", value: "Une avec chacun, puis deux ensemble" },
      { label: "Durée", value: "1 à 3 mois" },
      { label: "Tarif", value: "3\u00a0000\u00a0€ HT à deux" },
    ]}
    price={"3\u00a0000\u00a0€ HT"}
    priceNote={"À deux · 4\u00a0000\u00a0€ HT à trois · au-delà sur devis."}
    start={
      <p>
        Le premier pas est un échange de 40{"\u00a0"}minutes, gratuit et confidentiel, seul ou ensemble.
      </p>
    }
  >
    <OfferLede>
      <p>
        Tout va bien entre vous. Et vous savez que les associations qui cassent allaient bien, au
        début. Ce qui les a abîmées, ce n'est pas une grande dispute. Ce sont de petits inconforts
        qu'on a gardés pour soi, et qui sont revenus.
      </p>
    </OfferLede>

    <OfferSection
      title="Ce que je regarde"
      kicker="Un inconfort qui revient finit par devenir une tension."
    >
      <EchelleInconfort />
      <OfferRead>
        <p>
          Un inconfort qui passe une fois n'a rien d'inquiétant. C'est celui qui revient qu'il faut
          écouter. Socle sert à le repérer tant qu'il est petit, avant qu'il ne monte d'un cran.
        </p>
      </OfferRead>
    </OfferSection>

    <OfferSection title="Comment ça se passe">
      <OfferSteps
        steps={[
          {
            together: false,
            duration: "1h30",
            text: (
              <p>
                Chacun me raconte, de son côté, comment il vit votre relation, et ce qu'il a déjà
                essayé quand quelque chose ne lui convenait pas.
              </p>
            ),
          },
          {
            together: true,
            duration: "2 à 3h",
            text: <p>On met sur la table ce qui est apparu, pour que ça se règle avant de peser.</p>,
          },
          {
            together: true,
            duration: "2 à 3h",
            text: (
              <p>
                Quelques semaines plus tard, on regarde ce que la première séance a fait bouger, et
                on ajuste.
              </p>
            ),
          },
        ]}
      />
    </OfferSection>

    <OfferSection
      title="Ce que vous en retirez"
      kicker="Des inconforts désamorcés à temps, avant qu'ils ne deviennent des tensions."
    />

    <OfferSection title="Si la tension est déjà là">
      <OfferRead>
        <p>
          Il arrive que Socle fasse apparaître une tension déjà installée. Dans ce cas, on en parle
          ensemble, et{" "}
          <Link to="/offres/reset/" className="text-accent hover:underline">
            Reset
          </Link>{" "}
          peut prendre le relais.
        </p>
      </OfferRead>
    </OfferSection>

    <OfferSituation
      to="/blog/la-conversation-quon-evite/"
      label={"Lire leur histoire dans «\u00a0La conversation qu'on évite\u00a0» →"}
    >
      <p>
        Alex et Stan venaient de boucler leur série A. Tout allait bien, à un détail près{"\u00a0"}:
        une réponse coupée devant les investisseurs, une contradiction devant l'équipe. Rien de
        grave, mais ce n'était pas la première fois.
      </p>
    </OfferSituation>
  </OfferPage>
);

export default Socle;
