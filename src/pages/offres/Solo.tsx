import OfferPage, { OfferLede, OfferRead, OfferSection } from "@/components/OfferPage";
import SeanceRythme from "@/components/SeanceRythme";
import { soloSeo } from "@/seo-routes";

const Solo = () => (
  <OfferPage
    name="Solo"
    title={soloSeo.title}
    hook="Quand vous venez seul, pour faire bouger une situation."
    description={soloSeo.description}
    path="/offres/solo/"
    ogImage="/og/solo.png"
    facts={[
      { label: "Séances", value: "8 × 1h30" },
      { label: "Durée", value: "4 à 6 mois" },
      { label: "Tarif", value: "4\u00a0500\u00a0€\u00a0HT" },
    ]}
    price={"4\u00a0500\u00a0€\u00a0HT"}
    priceNote="8 séances d'1h30, sur 4 à 6 mois."
    start={
      <p>
        Le premier pas est un échange de 40{"\u00a0"}minutes, gratuit et confidentiel.
      </p>
    }
  >
    <OfferLede>
      <p>
        Une relation qui s'est tendue, un nouveau rôle, une décision que vous repoussez{"\u00a0"}:
        quelque chose que vous n'arrivez pas à régler seul.
      </p>
    </OfferLede>

    <OfferSection
      title="Sur quoi on travaille"
      kicker="Vous ne pouvez pas changer les autres. Vous pouvez changer ce que vous faites."
    >
      <OfferRead>
        <p>
          On part de ce qui ne fonctionne pas. Quand un problème dure, je cherche avec vous ce qui
          l'entretient, y compris dans ce que vous avez tenté pour le régler. Mon travail consiste
          ensuite à trouver le changement précis qui permet d'en sortir.
        </p>
      </OfferRead>
    </OfferSection>

    <OfferSection
      title="L'objectif"
      kicker={"«\u00a0Que ça aille mieux\u00a0» n'est pas un objectif."}
    >
      <OfferRead>
        <p>
          Au départ, la demande est large{"\u00a0"}: que la situation change. Mais à quoi saurez-vous
          qu'elle a changé{"\u00a0"}? Qu'est-ce que vous ferez, ou ne ferez plus{"\u00a0"}? Qu'est-ce que
          quelqu'un d'extérieur verrait de différent{"\u00a0"}?
        </p>
        <p>
          Fixer cet objectif sert à deux choses{"\u00a0"}: travailler sur le bon sujet, et savoir, à la
          fin, s'il est atteint.
        </p>
      </OfferRead>
    </OfferSection>

    <OfferSection
      title="Le rythme"
      kicker="Rapprochées au début, les séances s'espacent à mesure que les choses bougent."
    >
      <SeanceRythme />
    </OfferSection>
  </OfferPage>
);

export default Solo;
