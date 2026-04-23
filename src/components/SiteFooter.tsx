import { Link } from "react-router-dom";
import { CALENDLY_URL } from "@/lib/site";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl text-foreground leading-tight text-balance">
            Une première conversation, sans engagement.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-accent text-sm tracking-wide border-b border-accent/40 hover:border-accent pb-1 transition-colors"
          >
            Prendre rendez-vous →
          </a>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Navigation
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/approche" className="hover:text-accent transition-colors">Approche</Link></li>
            <li><Link to="/situations" className="hover:text-accent transition-colors">Situations</Link></li>
            <li><Link to="/a-propos" className="hover:text-accent transition-colors">À propos</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Contact
          </p>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>habib.loraine@gmail.com</li>
            <li>10 rue Saint Marc, 75002 Paris</li>
            <li>Présentiel & visio</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} LHG — SIRET 982 781 387 00013</p>
          <Link to="/mentions-legales" className="hover:text-accent transition-colors">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
