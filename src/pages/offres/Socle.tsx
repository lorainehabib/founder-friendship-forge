import { Link } from "react-router-dom";
import OfferPage, { OfferColumns, OfferLede, OfferRead, OfferSection, OfferSituation, OfferSteps } from "@/components/OfferPage";

const Socle = () => (
  <OfferPage
    name="Socle"
    hook="Quand tout va bien, et que vous voulez que ça dure."
    description="Quand tout va bien, et que vous voulez que ça dure. Tout va bien entre vous."
    path="/offres/socle/"
    ogImage="/og/socle.png"
    facts={[
      { label: "Format", value: "Avec chacun, puis ensemble" },
      { label: "Séances", value: "1h30 chacun, puis 2 séances de 2 à 3h" },
      { label: "Tarif", value: "3\u00a0000\u00a0€ HT à deux" },
    ]}
    price={"3\u00a0000\u00a0€ HT"}
    priceNote={"À deux · 4\u00a0000\u00a0€ HT à trois · au-delà sur devis."}
    start={
      <p>
        Le premier pas est un échange de 40{"\u00a0"}minutes, gratuit et confidentiel. Souvent, c'est
        l'un de vous qui prend contact. C'est normal{"\u00a0"}: la suite se fait à deux.
      </p>
    }
  >
    <OfferLede>
      <p>
        Tout va bien entre vous. Et vous savez aussi que les associations qui cassent allaient
        presque toutes bien, au début. Ce qui les a abîmées, ce n'est généralement pas une grande
        dispute. Ce sont de petites choses, qu'on a rangées dans les détails, et qui sont revenues.
      </p>
      <p>
        Vous n'avez pas besoin d'avoir un problème pour venir. Socle sert à se parler tant que
        c'est encore simple de le faire.
      </p>
    </OfferLede>

    <OfferSection
      title="Ce qu'on fait"
      kicker="Une gêne qui passe une fois n'a rien d'inquiétant. Celle qui revient mérite qu'on s'y arrête."
    >
      <OfferColumns
        items={[
          {
            title: "Ce qui revient",
            text: "On fait remonter ce que chacun a rangé dans les détails, s'il y a quelque chose, avant que ça ne devienne une tension.",
          },
          {
            title: "Ce qui va changer",
            text: "Une levée, un recrutement, des rôles qui bougent. On en parle avant que ça change.",
          },
        ]}
      />
    </OfferSection>

    <OfferSection title="Comment ça se passe">
      <OfferSteps
        steps={[
          {
            together: false,
            text: (
              <p>
                1h30 avec chacun. Seul, on dit plus facilement ce qu'on range dans les détails
                devant son associé. Ce temps sert le travail commun{"\u00a0"}: ce qui doit être dit
                entre vous, je vous aide à le dire vous-même.
              </p>
            ),
          },
          {
            together: true,
            text: (
              <p>
                Deux séances de 2 à 3h. On pose sur la table ce qui est remonté, on regarde comment
                ça se joue entre vous, et ce que chacun peut faire autrement. Entre les deux, il y a
                souvent quelque chose à observer.
              </p>
            ),
          },
        ]}
      />
    </OfferSection>

    <OfferSection
      title="Ce que vous en retirez"
      kicker="Ce que vous avez su faire une fois, vous pourrez le refaire sans moi."
    >
      <OfferRead>
        <p>
          L'expérience d'avoir eu cette conversation ensemble, et ce que chacun a décidé de faire
          autrement.
        </p>
      </OfferRead>
    </OfferSection>

    <OfferSection title="Si quelque chose de plus sérieux apparaît">
      <OfferRead>
        <p>
          Il arrive que Socle fasse apparaître une tension déjà installée. Dans ce cas, je vous le
          dis à tous les deux en même temps, et nous voyons ensemble si{" "}
          <Link to="/offres/reset/" className="text-accent hover:underline">
            Reset
          </Link>{" "}
          a du sens. Rien n'est automatique.
        </p>
      </OfferRead>
    </OfferSection>

    <OfferSection title="Ma place" kicker="Je ne prends parti pour aucun de vous.">
      <OfferRead>
        <p>
          C'est pour ça que, pendant l'accompagnement, et dans les six mois qui suivent, je
          n'accompagne aucun des associés seul.
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
