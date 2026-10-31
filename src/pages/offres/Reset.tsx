import OfferPage, { OfferLede, OfferRead, OfferSection, OfferSituation, OfferSteps } from "@/components/OfferPage";
import ReactionLoop from "@/components/ReactionLoop";

const Reset = () => (
  <OfferPage
    name="Reset"
    hook="Quand c'est déjà tendu, et que vous venez ensemble."
    description="Quand c'est déjà tendu, et que vous venez ensemble. Reset regarde la façon dont vous réagissez l'un à l'autre."
    path="/offres/reset/"
    ogImage="/og/reset.png"
    facts={[
      { label: "Séances", value: "Une ensemble, une avec chacun, puis quatre ensemble" },
      { label: "Durée", value: "3 à 4 mois" },
      { label: "Tarif", value: "Dès 6\u00a0000\u00a0€ HT" },
    ]}
    price={"Dès 6\u00a0000\u00a0€ HT"}
    priceNote="Selon la situation et le nombre d'associés. Le tarif exact est fixé après notre premier échange."
    start={
      <p>
        Le premier pas est un échange de 40{"\u00a0"}minutes, gratuit et confidentiel, seul ou ensemble.
      </p>
    }
  >
    <OfferLede>
      <p>
        Vous avez déjà eu la conversation. Plusieurs fois, sous des formes différentes. Chacun a
        fait des efforts, à sa manière. Et le même désaccord revient.
      </p>
      <p>
        À ce stade, ce qui bloque n'est plus le sujet. Ce sont vos réactions l'un à l'autre, qui se
        répètent à chaque fois.
      </p>
    </OfferLede>

    <OfferSection
      title="Sur quoi on travaille"
      kicker="Chacun réagit à la réaction de l'autre, sans s'en rendre compte."
    >
      <OfferRead>
        <p>
          Je ne creuse pas le fond du désaccord, je regarde la façon dont vous réagissez l'un à
          l'autre{"\u00a0"}: c'est à cet endroit que la relation peut bouger.
        </p>
        <p>
          Souvent, ce que chacun fait pour arranger les choses est précisément ce qui les entretient.
          Celui qui insiste pour en parler pousse l'autre à se retirer. Celui qui se retire pousse
          l'autre à insister. Une boucle s'est enclenchée, et aucun argument ne passe, aussi juste
          soit-il.
        </p>
      </OfferRead>
      <ReactionLoop />
    </OfferSection>

    <OfferSection
      title={"Et le fond du désaccord\u00a0?"}
      kicker="Il faudra le trancher. Mais d'abord, sortir de la boucle."
    >
      <OfferRead>
        <p>
          Un partage des parts, un rôle mal défini, une stratégie qui diverge{"\u00a0"}: ce sont de
          vrais sujets. Mais tant que la boucle est enclenchée, chaque tentative de les trancher la
          relance.
        </p>
      </OfferRead>
    </OfferSection>

    <OfferSection title="Comment ça se passe">
      <OfferSteps
        steps={[
          {
            label: "Ensemble",
            duration: "2h",
            text: <p>On part de ce qui bloque aujourd'hui entre vous.</p>,
          },
          {
            label: "Avec chacun",
            duration: "1h30",
            text: (
              <p>
                Chacun me raconte, de son côté, comment il vit la situation, et ce qu'il a déjà
                essayé pour en sortir.
              </p>
            ),
          },
          {
            label: "Ensemble",
            duration: "4 séances de 2h",
            text: (
              <p>On travaille à en sortir. Le travail se fait à la fois pendant les séances et entre elles.</p>
            ),
          },
        ]}
      />
    </OfferSection>

    <OfferSection
      title="Ce que vous en retirez"
      kicker="Vous sortez de la boucle, et une autre dynamique devient possible entre vous."
    >
      <OfferRead>
        <p>
          Il arrive aussi qu'en chemin, l'un de vous se rende compte qu'il veut faire autre chose.
          Une séparation décidée clairement, sans des mois de guerre froide, est aussi un bon
          résultat. Ce que Reset évite, c'est de rester dans l'entre-deux.
        </p>
      </OfferRead>
    </OfferSection>

    <OfferSituation
      to="/blog/c-est-lui-le-probleme/"
      label={"Lire leur histoire dans «\u00a0C'est lui le problème\u00a0» →"}
    >
      <p>
        Charles et Inès s'étaient mis d'accord{"\u00a0"}: l'équipe tech se concentre sur la nouvelle
        offre. Puis Inès a continué de vendre l'ancienne. Quelques mois plus tard, il disait
        «{"\u00a0"}elle n'est pas fiable{"\u00a0"}», et elle «{"\u00a0"}il n'a aucune vision business{"\u00a0"}».
      </p>
    </OfferSituation>
  </OfferPage>
);

export default Reset;
