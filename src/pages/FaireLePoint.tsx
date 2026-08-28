import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import FreebieCapture from "@/components/FreebieCapture";

const FaireLePoint = () => (
  <SiteLayout>
    <Seo
      title="Le point sur votre association — Loraine Habib"
      description="En 20 minutes, faites le point sur votre association : un questionnaire pour évaluer votre niveau d'inconfort, puis une grille d'observation pour creuser."
      path="/faire-le-point/"
    />
    <section>
      <div className="mx-auto max-w-3xl px-6 md:px-10 pt-16 md:pt-28 pb-24 md:pb-36">
        <FreebieCapture headingLevel="h1" source="faire-le-point" />
      </div>
    </section>
  </SiteLayout>
);

export default FaireLePoint;
