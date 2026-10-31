const SeanceRythme = () => (
  <figure className="w-full max-w-[560px]">
    <svg
      viewBox="0 0 494 64"
      className="h-auto w-full"
      role="img"
      aria-label="Huit séances, rapprochées au début puis de plus en plus espacées"
    >
      <line x1="12" y1="22" x2="482" y2="22" stroke="#B85C38" strokeOpacity="0.35" strokeWidth="1.5" />
      <circle cx="12" cy="22" r="9" fill="#B85C38" />
      <circle cx="46" cy="22" r="9" fill="#B85C38" />
      <circle cx="84" cy="22" r="9" fill="#B85C38" />
      <circle cx="130" cy="22" r="9" fill="#B85C38" />
      <circle cx="188" cy="22" r="9" fill="#B85C38" />
      <circle cx="262" cy="22" r="9" fill="#B85C38" />
      <circle cx="358" cy="22" r="9" fill="#B85C38" />
      <circle cx="482" cy="22" r="9" fill="#B85C38" />
      <text x="12" y="58" fill="#8C7B6B" fontFamily="DM Sans, sans-serif" fontSize="13">
        Début
      </text>
      <text x="482" y="58" textAnchor="end" fill="#8C7B6B" fontFamily="DM Sans, sans-serif" fontSize="13">
        Fin
      </text>
    </svg>
  </figure>
);

export default SeanceRythme;
