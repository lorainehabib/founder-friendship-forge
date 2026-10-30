import { CALENDLY_URL } from "@/lib/site";

const ReserveButton = ({ className = "" }: { className?: string }) => (
  <a
    href={CALENDLY_URL}
    target="_blank"
    rel="noreferrer"
    className={`group inline-flex items-center justify-center gap-2 bg-accent px-5 py-3.5 text-sm tracking-wide text-accent-foreground transition-colors duration-300 hover:bg-foreground ${className}`}
  >
    Réserver un échange
    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
      →
    </span>
  </a>
);

export default ReserveButton;
