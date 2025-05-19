export function SpinningLogoText() {
  return (
    <svg viewBox="0 0 180 180" className="h-full w-full">
      <defs>
        <path id="circlePathFooter" d="M 90, 90 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"></path>
      </defs>
      <circle cx="90" cy="90" r="70" fill="none" stroke="hsl(var(--accent))" strokeWidth="2"></circle>
      <g>
        <use xlinkHref="#circlePathFooter" fill="none"></use>
        <text className="origin-center fill-white text-[14.5px] font-heading tracking-wider" style={{ letterSpacing: '0.5px' }}>
          <textPath xlinkHref="#circlePathFooter">
            <tspan>| STREAMER UNIVERSITY | STREAMER UNIVERSITY</tspan>
          </textPath>
          <animateTransform attributeName="transform" type="rotate" from="0 90 90" to="360 90 90" dur="20s" repeatCount="indefinite"></animateTransform>
        </text>
      </g>
    </svg>
  );
}
