const BoucleCharles = () => (
  <figure className="my-10">
    <svg viewBox="0 0 760 388" role="img" className="h-auto w-full" aria-labelledby="boucle-charles-title">
      <title id="boucle-charles-title">Chacun réagit à la réaction de l'autre</title>
      <desc>Charles et Inès réagissent chacun à la réaction de l'autre. Il contrôle, elle contourne.</desc>
      <defs>
        <marker
          id="boucle-charles-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="9"
          markerHeight="9"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="#b8552e" />
        </marker>
      </defs>
      <rect x="2" y="2" width="756" height="384" rx="16" fill="#fdfbf7" stroke="#e7e1d5" />
      <text x="30" y="46" fontFamily="DM Sans, sans-serif" fontSize="17" fill="#8a8378">
        Chacun réagit à la réaction de l'autre.
      </text>
      <g transform="translate(0,-22)">
        <path
          d="M250,176 Q380,72 500,170"
          fill="none"
          stroke="#b8552e"
          strokeWidth="2"
          markerEnd="url(#boucle-charles-arrow)"
        />
        <text x="380" y="102" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="16" fill="#3a352c">
          Il contrôle : vérifie, conteste, dit non.
        </text>
        <path
          d="M510,294 Q380,398 260,300"
          fill="none"
          stroke="#b8552e"
          strokeWidth="2"
          markerEnd="url(#boucle-charles-arrow)"
        />
        <text x="380" y="378" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="16" fill="#3a352c">
          Elle contourne : décide sans lui.
        </text>
        <rect
          x="280"
          y="196"
          width="200"
          height="78"
          rx="6"
          fill="none"
          stroke="#c9b9a6"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <text
          x="380"
          y="218"
          textAnchor="middle"
          fontFamily="DM Sans, sans-serif"
          fontSize="10.5"
          letterSpacing="0.04em"
          fill="#8c7b6b"
        >
          LE DÉSACCORD DE DÉPART
        </text>
        <text
          x="380"
          y="242"
          textAnchor="middle"
          fontFamily="DM Sans, sans-serif"
          fontSize="14"
          fontStyle="italic"
          fill="#5c5148"
        >
          Continuer à vendre
        </text>
        <text
          x="380"
          y="261"
          textAnchor="middle"
          fontFamily="DM Sans, sans-serif"
          fontSize="14"
          fontStyle="italic"
          fill="#5c5148"
        >
          l'ancienne offre ?
        </text>
        <circle cx="180" cy="235" r="80" fill="#ece0cd" stroke="#c2b39c" strokeWidth="1.5" />
        <text x="180" y="215" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="22" fill="#2b2b2b">
          Charles
        </text>
        <line x1="135" y1="228" x2="225" y2="228" stroke="#dccfb9" />
        <text x="180" y="250" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="14" fontStyle="italic" fill="#b8552e">
          « Elle ne tient
        </text>
        <text x="180" y="269" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="14" fontStyle="italic" fill="#b8552e">
          pas parole. »
        </text>
        <circle cx="580" cy="235" r="80" fill="#ece0cd" stroke="#c2b39c" strokeWidth="1.5" />
        <text x="580" y="215" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="22" fill="#2b2b2b">
          Inès
        </text>
        <line x1="535" y1="228" x2="625" y2="228" stroke="#dccfb9" />
        <text x="580" y="250" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="14" fontStyle="italic" fill="#b8552e">
          « Il dit non
        </text>
        <text x="580" y="269" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="14" fontStyle="italic" fill="#b8552e">
          à tout. »
        </text>
      </g>
    </svg>
  </figure>
);

export default BoucleCharles;
