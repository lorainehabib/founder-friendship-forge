import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import type { ReactNode } from "react";

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-3">
    <h2 className="font-serif text-2xl md:text-3xl text-foreground">{title}</h2>
    <div className="text-foreground/80 leading-relaxed space-y-3">{children}</div>
  </section>
);

const MentionsLegales = () => (
  <SiteLayout>
    <Seo
      title="Mentions légales — Loraine Habib | Coaching fondateurs"
      description="Mentions légales, éditeur du site, RGPD et hébergement de lorainehabib.com, spécialisé en accompagnement de fondateurs."
      path="/mentions-legales/"
    />
    <article className="mx-auto max-w-3xl px-6 md:px-10 py-16 md:py-28">
      <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-foreground mb-12">
        Mentions légales.
      </h1>

      <div className="space-y-12">
        <Section title="Éditeur du site">
          <p>Nom&nbsp;: Loraine Habib<br />Nom commercial&nbsp;: LHG<br />Statut&nbsp;: Entreprise individuelle<br />SIRET&nbsp;: 982 781 387 00013<br />Adresse&nbsp;: 10 rue Saint Marc, 75002 Paris<br />Email&nbsp;: habib.loraine@gmail.com</p>
          <p>Directrice de la publication&nbsp;: Loraine Habib</p>
        </Section>

        <Section title="Hébergeur">
          <p>GitHub Pages (GitHub, Inc.)<br />Adresse&nbsp;: 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis<br />Site&nbsp;: <a href="https://pages.github.com" target="_blank" rel="noreferrer" className="text-accent underline-offset-4 hover:underline">pages.github.com</a></p>
        </Section>

        <Section title="Propriété intellectuelle">
          <p>L'ensemble du contenu de ce site (textes, images, photographies, logo, structure) est la propriété exclusive de LHG, sauf mention contraire. Toute reproduction, représentation, modification ou adaptation, totale ou partielle, est interdite sans autorisation écrite préalable.</p>
          <p>Crédits photos&nbsp;: Camille Collin et Aurélie Deglane.</p>
        </Section>

        <Section title="Données personnelles & RGPD">
          <p><strong className="font-medium text-foreground">Responsable du traitement.</strong> Loraine Habib — LHG, habib.loraine@gmail.com</p>
          <p><strong className="font-medium text-foreground">Données collectées.</strong> Si vous laissez votre adresse email pour recevoir le PDF «&nbsp;Le point sur votre association&nbsp;», elle est collectée via MailerLite, qui agit en tant que sous-traitant. Vous pouvez vous désinscrire à tout moment via le lien présent dans chaque email. La prise de rendez-vous s'effectue via la plateforme Cal.com, qui agit en tant que sous-traitant et dispose de sa propre politique de confidentialité&nbsp;: <a href="https://cal.com/privacy" target="_blank" rel="noreferrer" className="text-accent underline-offset-4 hover:underline">cal.com/privacy</a>.</p>
          <p><strong className="font-medium text-foreground">Vos droits.</strong> Conformément au RGPD&nbsp;: accès, rectification, effacement, limitation, opposition, portabilité. Pour les exercer&nbsp;: habib.loraine@gmail.com. En cas de difficulté, vous pouvez saisir la CNIL&nbsp;: <a href="https://www.cnil.fr" target="_blank" rel="noreferrer" className="text-accent underline-offset-4 hover:underline">www.cnil.fr</a>.</p>
        </Section>

        <Section title="Cookies">
          <p>Ce site n'utilise pas de cookies.</p>
        </Section>

        <Section title="Loi applicable">
          <p>Le présent site et ses mentions légales sont régis par le droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
        </Section>

        <p className="text-sm text-muted-foreground pt-8">Dernière mise à jour&nbsp;: 26 août 2026</p>
      </div>
    </article>
  </SiteLayout>
);

export default MentionsLegales;
