import { Link } from "react-router-dom";
import { LINKEDIN_URL } from "@/lib/site";

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const SiteFooter = () => {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link
            to="/"
            onClick={scrollTop}
            className="font-serif text-2xl text-foreground hover:text-accent transition-colors leading-tight"
          >
            Loraine Habib
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Coach de fondateurs et équipes dirigeantes
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Navigation
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" onClick={scrollTop} className="hover:text-accent transition-colors">Accueil</Link></li>
            <li><Link to="/approche/" onClick={scrollTop} className="hover:text-accent transition-colors">Approche</Link></li>
            <li><Link to="/offres/" onClick={scrollTop} className="hover:text-accent transition-colors">Offres</Link></li>
            <li><Link to="/situations/" onClick={scrollTop} className="hover:text-accent transition-colors">Situations</Link></li>
            <li><Link to="/a-propos/" onClick={scrollTop} className="hover:text-accent transition-colors">À propos</Link></li>
            <li><Link to="/blog/" onClick={scrollTop} className="hover:text-accent transition-colors">Blog</Link></li>
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
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} LHG — SIRET 982 781 387 00013</p>
          <Link to="/mentions-legales/" onClick={scrollTop} className="hover:text-accent transition-colors">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
