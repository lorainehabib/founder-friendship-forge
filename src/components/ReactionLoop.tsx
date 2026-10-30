const box =
  "border border-[#e0d5c8] bg-[#f3eee8] px-4 py-4 text-center text-[17px] leading-snug text-foreground";

const ReactionLoop = ({ className = "" }: { className?: string }) => (
  <figure className={`mt-8 max-w-[40rem] ${className}`}>
    <svg
      className="hidden h-auto w-full sm:block"
      viewBox="0 0 640 250"
      role="img"
      aria-label="Schéma : l'un insiste pour en parler, l'autre se retire, et chacun réagit à la réaction de l'autre"
    >
      <defs>
        <marker id="reaction-loop-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#b85c38" />
        </marker>
      </defs>
      <path
        d="M150 90 C 250 16, 390 16, 490 90"
        fill="none"
        stroke="#b85c38"
        strokeWidth="1.75"
        markerEnd="url(#reaction-loop-arrow)"
      />
      <path
        d="M490 164 C 390 238, 250 238, 150 164"
        fill="none"
        stroke="#b85c38"
        strokeWidth="1.75"
        markerEnd="url(#reaction-loop-arrow)"
      />
      <rect x="8" y="86" width="176" height="82" fill="#f3eee8" stroke="#e0d5c8" />
      <text x="96" y="118" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="17" fill="#2c2420">
        L'un insiste
      </text>
      <text x="96" y="142" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="17" fill="#2c2420">
        pour en parler
      </text>
      <rect x="456" y="86" width="176" height="82" fill="#f3eee8" stroke="#e0d5c8" />
      <text x="544" y="132" textAnchor="middle" fontFamily="DM Sans, Arial, sans-serif" fontSize="17" fill="#2c2420">
        L'autre se retire
      </text>
      <text
        x="320"
        y="116"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontStyle="italic"
        fontSize="24"
        fill="#5c5148"
      >
        Chacun réagit
      </text>
      <text
        x="320"
        y="146"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontStyle="italic"
        fontSize="24"
        fill="#5c5148"
      >
        à la réaction de l'autre.
      </text>
    </svg>

    <div className="space-y-3 sm:hidden" role="img" aria-label="Schéma : l'un insiste pour en parler, l'autre se retire, et chacun réagit à la réaction de l'autre">
      <p className={box}>L'un insiste pour en parler</p>
      <p className="text-center text-xl leading-none text-accent" aria-hidden>
        ↓
      </p>
      <p className="text-balance px-2 text-center font-serif text-xl font-normal italic leading-snug text-[#5c5148]">
        Chacun réagit à la réaction de l'autre.
      </p>
      <p className="text-center text-xl leading-none text-accent" aria-hidden>
        ↓
      </p>
      <p className={box}>L'autre se retire</p>
      <p className="text-center text-sm text-[#5c5148]">Et ça recommence.</p>
    </div>
  </figure>
);

export default ReactionLoop;
