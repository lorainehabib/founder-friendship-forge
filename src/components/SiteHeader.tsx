import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { newsletterName } from "@/content/blog";

const links = [
  { to: "/", label: "Accueil", end: true },
  { to: "/approche/", label: "Approche" },
  { to: "/offres/", label: "Offres" },
  { to: "/situations/", label: "Situations" },
  { to: "/a-propos/", label: "À propos" },
  { to: "/blog/", label: newsletterName },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <Link
          to="/"
          className="font-serif text-base md:text-lg tracking-tight text-foreground hover:text-accent transition-colors leading-tight"
        >
          Loraine Habib
          <span className="hidden sm:inline text-muted-foreground"> — Coach de fondateurs et équipes dirigeantes</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                cn(
                  "text-sm tracking-wide transition-colors relative py-1",
                  isActive
                    ? "text-accent"
                    : "text-foreground/80 hover:text-foreground"
                )
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {l.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-accent transition-all duration-500",
                      isActive ? "w-full" : "w-0"
                    )}
                  />
                </span>
              )}
            </NavLink>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-sm tracking-wide hover:bg-foreground transition-colors duration-300"
          >
            Prendre rendez-vous
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </a>
        </nav>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground p-2 -mr-2"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out bg-background border-b border-border/60",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                cn(
                  "font-serif text-2xl",
                  isActive ? "text-accent" : "text-foreground"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center bg-accent text-accent-foreground px-5 py-3 text-sm tracking-wide"
          >
            Prendre rendez-vous →
          </a>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
