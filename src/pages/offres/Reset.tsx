import OfferPage, { OfferColumns, OfferLede, OfferRead, OfferSection, OfferSituation, OfferSteps } from "@/components/OfferPage";
import ReactionLoop from "@/components/ReactionLoop";

const Reset = () => (
  <OfferPage
    name="Reset"
    hook="Quand c'est déjà tendu, et que vous venez ensemble."
    description="Quand c'est déjà tendu, et que vous venez ensemble. Vous avez déjà eu la conversation."
    path="/offres/reset/"
    ogImage="/og/reset.png"
    facts={[
      { label: "Format", value: "Ensemble, avec chacun, puis ensemble" },
      { label: "Durée", value: "Trois mois" },
      { label: "Tarif", value: "Dès 6\u00a0000\u00a0€ HT" },
    ]}
    price={"Dès 6\u00a0000\u00a0€ HT"}
    priceNote="Selon la situation et le nombre d'associés. Le tarif exact est fixé après notre premier échange."
    start={
      <p>
        Le premier pas est un échange de 40{"\u00a0"}minutes, gratuit et confidentiel. Souvent, c'est
        l'un de vous qui prend contact. C'est normal{"\u00a0"}: la suite se fait à deux.
      </p>
    }
  >
    <OfferLede>
      <p>
        Vous avez déjà eu la conversation. Plusieurs fois, sous des formes différentes. Chacun a
        fait des efforts, à sa manière. Et le même désaccord revient.
      </p>
      <p>
        À ce stade, ce n'est plus le sujet qui bloque. C'est la façon dont vous réagissez l'un à
        l'autre, et elle s'est installée.
      </p>
    </OfferLede>

    <OfferSection
      title="Ce que je regarde"
      kicker="Chacun a le sentiment de réagir à l'autre. Les deux ont raison."
    >
      <OfferRead>
        <p>
          Je ne cherche pas à savoir qui a raison. Je regarde ce qui se passe entre vous quand le
          sujet arrive{"\u00a0"}: ce que chacun fait, et comment cela appelle la réaction de l'autre.
          C'est ce qui fait tourner le cercle.
        </p>
        <p>
          Souvent, ce que chacun fait pour arranger les choses est précisément ce qui les entretient.
          Celui qui insiste pour en parler pousse l'autre à se retirer. Celui qui se retire pousse
          l'autre à insister. Alors aucun argument ne passe, aussi juste soit-il.
        </p>
      </OfferRead>
      <ReactionLoop />
    </OfferSection>

    <OfferSection
      title={"Et le fond du désaccord\u00a0?"}
      kicker="Il faudra le trancher. Mais d'abord, arrêter le cercle."
    >
      <OfferRead>
        <p>
          Un partage des parts, un rôle mal défini, une stratégie qui diverge{"\u00a0"}: ce sont de
          vrais sujets. Mais tant que le cercle tourne, chaque tentative de les trancher le relance.
          Le travail consiste d'abord à l'arrêter, pour que vous puissiez ensuite décider. Les
          décisions restent les vôtres.
        </p>
      </OfferRead>
    </OfferSection>

    <OfferSection title="Comment ça se passe">
      <OfferSteps
        steps={[
          {
            together: true,
            text: (
              <p>
                Une séance pour commencer. Chacun dit ce qui l'amène, devant l'autre, et je pose le
                cadre, y compris ce que je fais de ce que chacun me dira seul.
              </p>
            ),
          },
          {
            together: false,
            text: (
              <p>
                1h30 avec chacun. Pour entendre ce qui ne se dit pas encore devant l'associé{"\u00a0"}:
                une lassitude, une crainte, l'envie de partir. Ce temps sert le travail commun{"\u00a0"}:
                ce qui doit être dit entre vous, je vous aide à le dire vous-même.
              </p>
            ),
          },
          {
            together: true,
            text: (
              <p>
                Quatre séances de 2h, sur trois mois. C'est là que le travail se fait. Entre les
                séances, il y a souvent une petite chose précise à essayer, et c'est généralement là
                que ça bouge.
              </p>
            ),
          },
        ]}
      />
    </OfferSection>

    <OfferSection
      title="Ce que vous en retirez"
      kicker="Une façon de vous parler qui ne relance plus le même cercle."
    >
      <OfferColumns
        items={[
          {
            title: "Si vous continuez ensemble",
            text: "Les décisions que vous repoussiez, enfin prises. Et des désaccords qui restent des désaccords, sans redevenir une boucle.",
          },
          {
            title: "Si l'un de vous part",
            text: "Une séparation décidée clairement, sans des mois de guerre froide. C'est aussi un bon résultat. Ce que Reset évite, c'est de rester dans l'entre-deux.",
          },
        ]}
      />
    </OfferSection>

    <OfferSection title="Ma place" kicker="Je ne prends parti pour aucun de vous.">
      <OfferRead>
        <p>
          C'est pour ça que, pendant Reset, et dans les six mois qui suivent, je n'accompagne aucun
          des associés seul.
        </p>
        <p>
          Quand les choses se tendent, ce qui ne se dit pas entre associés finit par circuler à
          côté{"\u00a0"}: en tête-à-tête, chez un tiers, dans le couloir. Mon rôle est l'inverse{"\u00a0"}:
          ramener entre vous ce qui circule à côté.
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
