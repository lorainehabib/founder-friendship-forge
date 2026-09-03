import FreebieForm from "@/components/FreebieForm";
import { MAILERLITE_NEWSLETTER_URL } from "@/lib/site";
import { newsletterName } from "@/content/blog";

const NewsletterCapture = () => (
  <div className="border border-border/70 bg-secondary/40 px-6 py-8 md:px-8 md:py-10">
    <p className="font-serif text-xl md:text-2xl leading-snug text-foreground">
      Recevoir la lettre
    </p>
    <div className="mt-6">
      <FreebieForm
        source="newsletter-angle-mort"
        subscribeUrl={MAILERLITE_NEWSLETTER_URL}
        submitLabel="Je m'abonne"
        successMessage={`Merci. Vous êtes inscrit(e) à ${newsletterName}.`}
        consentLabel={`J'accepte de recevoir ${newsletterName} et des emails de Loraine Habib.`}
        consentError="Cochez la case pour vous inscrire."
      />
    </div>
  </div>
);

export default NewsletterCapture;
