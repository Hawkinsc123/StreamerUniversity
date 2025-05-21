export function SpinningLogoText() {
  return (
    <svg viewBox="0 0 180 180" className="h-full w-full">
 <defs>
 <path id="circlePathFooter" d="M 90, 90 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"></path>
      </defs>
      <circle cx="90" cy="90" r="70" fill="none" stroke="hsl(var(--accent))" strokeWidth="2"></circle>
      <g>
 <animateTransform attributeName="transform" type="rotate" from="0 90 90" to="360 90 90" dur="20s" repeatCount="indefinite" additive="sum"></animateTransform>
        <use xlinkHref="#circlePathFooter" fill="none"></use>
 <text className="origin-center fill-white text-[14.5px] font-heading tracking-wider font-bold" style={{ letterSpacing: '0.5px' }}>
          <textPath xlinkHref="#circlePathFooter">
            <tspan>| STREAMER UNIVERSITY | STREAMER UNIVERSITY</tspan>
          </textPath>
        </text>
      </g>
    </svg>
  );
}
