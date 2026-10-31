import { ReactNode } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Seo from "@/components/Seo";
import ReserveButton from "@/components/ReserveButton";

export type OfferFact = {
  label: string;
  value: string;
};

type OfferPageProps = {
  name: string;
  hook: string;
  description: string;
  path: string;
  ogImage: string;
  facts: OfferFact[];
  price: string;
  priceNote: string;
  start: ReactNode;
  children: ReactNode;
};

export const OfferLede = ({ children }: { children: ReactNode }) => (
  <div className="space-y-5 text-lg leading-relaxed text-foreground md:text-xl md:leading-[1.6]">{children}</div>
);

export const OfferRead = ({ children }: { children: ReactNode }) => (
  <div className="space-y-4 text-lg leading-relaxed text-foreground">{children}</div>
);

export const OfferSection = ({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker?: string;
  children?: ReactNode;
}) => (
  <section className="mt-16 border-t border-[#e0d5c8] pt-10">
    <h2 className="font-sans text-sm font-medium tracking-normal text-accent">{title}</h2>
    {kicker && (
      <p className="mt-4 font-serif text-[1.7rem] font-normal leading-snug text-foreground md:text-[2.05rem]">
        {kicker}
      </p>
    )}
    {children && <div className="mt-8 space-y-8">{children}</div>}
  </section>
);

export const OfferSteps = ({
  steps,
}: {
  steps: { label: string; duration?: string; text: ReactNode }[];
}) => (
  <div
    role="list"
    className="flex flex-col gap-1 md:grid md:grid-cols-[minmax(0,1fr)_1.75rem_minmax(0,1fr)_1.75rem_minmax(0,1fr)] md:items-stretch md:gap-x-2 md:gap-y-0"
  >
    {steps.map((step, index) => {
      const last = index === steps.length - 1;
      return (
        <div key={step.label + index} className="contents">
          <div
            role="listitem"
            className={`rounded px-6 py-7 md:px-7 ${last ? "bg-accent text-white" : "bg-[#f3eee8] text-foreground"}`}
          >
            <p
              className={`font-serif text-[64px] font-normal leading-none lining-nums ${
                last ? "text-[#fbe9df]" : "text-accent"
              }`}
            >
              {index + 1}
            </p>
            <h3 className="mt-4 font-serif text-[25px] font-medium leading-tight">{step.label}</h3>
            {step.duration && (
              <p className={`mt-1 font-sans text-sm font-normal tracking-normal lining-nums ${last ? "text-[#fbe9df]" : "text-[#5c5148]"}`}>
                {step.duration}
              </p>
            )}
            <div className={`mt-4 text-base leading-relaxed ${last ? "text-white" : "text-foreground"}`}>{step.text}</div>
          </div>
          {index < steps.length - 1 && (
            <span aria-hidden className="flex items-center justify-center text-[1.75rem] leading-none text-accent">
              <span className="inline-block rotate-90 md:rotate-0">›</span>
            </span>
          )}
        </div>
      );
    })}
  </div>
);

export const OfferSituation = ({
  children,
  to,
  label,
}: {
  children: ReactNode;
  to: string;
  label: string;
}) => (
  <section className="mt-16 border-t border-[#e0d5c8] pt-10">
    <h2 className="mb-4 font-sans text-sm font-medium tracking-normal text-accent">Une situation réelle</h2>
    <aside className="border-l-4 border-accent bg-[#f3eee8] px-6 py-6 md:px-8">
      <div className="text-lg leading-relaxed text-foreground">{children}</div>
      <Link to={to} className="mt-4 inline-flex items-center gap-2 text-base text-accent hover:underline">
        {label}
      </Link>
    </aside>
  </section>
);

const OfferPage = ({
  name,
  hook,
  description,
  path,
  ogImage,
  facts,
  price,
  priceNote,
  start,
  children,
}: OfferPageProps) => (
  <SiteLayout>
    <Seo title={`${name} · Loraine Habib`} description={description} path={path} ogImage={ogImage} />
    <article className="lining-nums">
      <div className="mx-auto max-w-[760px] px-6">
        <p className="mb-5 mt-8 text-sm text-muted-foreground md:mt-10">
          <Link to="/offres/" className="text-muted-foreground transition-colors hover:text-accent">
            Offres
          </Link>
          <span aria-hidden> › </span>
          {name}
        </p>
        <h1 className="font-serif text-5xl font-normal leading-[0.95] text-foreground sm:text-6xl md:text-7xl">
          {name}
        </h1>
        <p className="mt-4 font-serif text-2xl font-normal italic leading-snug text-[#5c5148] md:text-[1.7rem]">
          {hook}
        </p>

        <dl className="mb-14 mt-8 grid gap-3 md:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="min-w-0 bg-[#f3eee8] px-5 py-4">
              <dt className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-accent">{fact.label}</dt>
              <dd className="mt-1 font-serif text-[1.35rem] font-normal leading-snug text-foreground lining-nums sm:text-[1.45rem]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        {children}
      </div>

      <div className="mt-16 bg-[#ebe3d9]">
        <div className="mx-auto max-w-[760px] px-6 py-12 md:py-16">
          <p className="font-serif text-4xl font-normal leading-tight text-foreground lining-nums sm:text-5xl">
            {price}
          </p>
          <p className="mt-3 text-base leading-snug text-[#5c5148] lining-nums">{priceNote}</p>
          <div className="mt-8 text-base leading-relaxed text-foreground">{start}</div>
          <div className="mt-5">
            <ReserveButton />
          </div>
        </div>
      </div>

      <p className="mx-auto max-w-[760px] px-6 py-8 text-base md:pb-16">
        <Link to="/offres/" className="text-accent hover:underline">
          ← Voir les trois offres
        </Link>
      </p>
    </article>
  </SiteLayout>
);

export default OfferPage;
