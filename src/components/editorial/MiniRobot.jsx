import { useId, useRef } from 'react';
import { useRobotGaze } from '../../hooks/useRobotGaze.js';

/** Original layered SVG duck robot; no third-party model or branded reference. */
export default function MiniRobot() {
  const root = useRef(null);
  const id = useId().replaceAll(':', '');
  const paint = name => `url(#${id}-${name})`;
  useRobotGaze(root);
  return (
    <div className="mini-robot duck-robot" ref={root}>
      <svg viewBox="0 0 480 440" role="img" aria-label="Friendly miniature duck robot with large expressive eyes and an orange bill">
        <defs>
          <radialGradient id={`${id}-shell`} cx="32%" cy="18%" r="88%">
            <stop offset="0" stopColor="#fffefa" /><stop offset=".55" stopColor="#f1eee7" /><stop offset=".84" stopColor="#d9d5cc" /><stop offset="1" stopColor="#bcb7ae" />
          </radialGradient>
          <linearGradient id={`${id}-underside`} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#e6e1d8" /><stop offset="1" stopColor="#a8a297" />
          </linearGradient>
          <linearGradient id={`${id}-face`} x1="0" y1="0" x2=".8" y2="1">
            <stop stopColor="#494b4d" /><stop offset=".5" stopColor="#242628" /><stop offset="1" stopColor="#121416" />
          </linearGradient>
          <radialGradient id={`${id}-eye`} cx="35%" cy="20%" r="90%">
            <stop stopColor="#fff" /><stop offset=".7" stopColor="#f7f3e8" /><stop offset="1" stopColor="#c8c7c3" />
          </radialGradient>
          <radialGradient id={`${id}-iris`} cx="35%" cy="25%" r="80%">
            <stop stopColor="#5b6267" /><stop offset=".45" stopColor="#262c30" /><stop offset="1" stopColor="#101215" />
          </radialGradient>
          <linearGradient id={`${id}-orange`} x1=".2" y1="0" x2=".7" y2="1">
            <stop stopColor="#ffc776" /><stop offset=".45" stopColor="var(--orange)" /><stop offset="1" stopColor="#cf6504" />
          </linearGradient>
          <radialGradient id={`${id}-shadow`}>
            <stop stopColor="#25211d" stopOpacity=".2" /><stop offset="1" stopColor="#25211d" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g aria-hidden="true">
          <ellipse cx="240" cy="385" rx="132" ry="20" fill={paint('shadow')} />
          <path d="M175 353q-18 1-22 16-2 11 28 12h29q14-1 11-12-6-17-27-16zm130 0q18 1 22 16 2 11-28 12h-29q-14-1-11-12 6-17 27-16z" fill={paint('orange')} />
          <path d="M168 374q22 5 43 0m58 0q20 5 42 0" fill="none" stroke="#bc5e05" strokeWidth="2" opacity=".5" strokeLinecap="round" />
          <g className="duck-body-idle">
            <path d="M167 273q-9-20-24-12-17 13-12 44 3 18 19 11l24-20m139-23q9-20 24-12 17 13 12 44-3 18-19 11l-24-20" fill={paint('underside')} />
            <path d="M173 252q67-35 134 0 27 31 13 83-9 32-80 32t-80-32q-14-52 13-83" fill={paint('shell')} stroke="#d6d0c5" strokeWidth="1.5" />
            <path d="M181 319q59 22 118 0" stroke="#d1cbc0" strokeWidth="1.5" fill="none" />
            <ellipse cx="239" cy="289" rx="25" ry="18" fill="#d5cfc3" opacity=".6" />
            <rect x="217" y="272" width="44" height="30" rx="14" fill={paint('face')} />
            <path d="M228 287h20" stroke="var(--orange)" strokeWidth="4" strokeLinecap="round" />
            <path d="M190 262q-13 14-14 33" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".7" />
          </g>
          <ellipse cx="240" cy="254" rx="52" ry="11" fill="#302a23" opacity=".13" />
          <g data-robot-head>
            <path d="M124 183q-13-2-15 15t15 22m232-37q13-2 15 15t-15 22" fill={paint('underside')} />
            <rect x="112" y="72" width="256" height="192" rx="81" fill={paint('underside')} />
            <rect x="111" y="62" width="258" height="190" rx="79" fill={paint('shell')} stroke="#d6d1c7" strokeWidth="1.5" />
            <path d="M139 112q15-28 51-31" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" opacity=".75" />
            <rect x="132" y="91" width="216" height="137" rx="53" fill="#b2afa6" />
            <rect x="134" y="94" width="212" height="134" rx="51" fill={paint('face')} />
            <path d="M155 118q16-15 41-15" stroke="#fff" strokeWidth="3" opacity=".13" fill="none" strokeLinecap="round" />
            {[192, 288].map(x => (
              <g key={x}>
                <ellipse data-eye cx={x} cy="160" rx="33" ry="39" fill="none" />
                <g className="duck-eye" data-blink style={{ transformOrigin: `${x}px 160px` }}>
                  <ellipse cx={x} cy="162" rx="35" ry="40" fill="#101214" opacity=".65" />
                  <ellipse cx={x} cy="160" rx="33" ry="39" fill={paint('eye')} />
                  <g data-pupil>
                    <ellipse cx={x} cy="161" rx="15" ry="23" fill={paint('iris')} />
                    <ellipse cx={x - 4} cy="153" rx="5.5" ry="7" fill="#fff" opacity=".96" />
                    <circle cx={x + 6} cy="171" r="2.4" fill="#fff" opacity=".55" />
                  </g>
                </g>
              </g>
            ))}
            <ellipse cx="240" cy="229" rx="48" ry="21" fill="#151719" opacity=".32" />
            <path d="M196 218q2-16 44-16t44 16v14q-4 18-44 18t-44-18z" fill="#c56809" />
            <path d="M192 217q0-18 48-18t48 18q-3 20-48 20t-48-20" fill={paint('orange')} />
            <path d="M205 211q28-10 60-2" fill="none" stroke="#ffe0ac" strokeWidth="4" strokeLinecap="round" opacity=".8" />
            <path d="M207 231q34 7 66-1" fill="none" stroke="#b5620c" strokeWidth="2" opacity=".6" strokeLinecap="round" />
            <ellipse cx="225" cy="212" rx="2.3" ry="1.7" fill="#9c540d" /><ellipse cx="255" cy="212" rx="2.3" ry="1.7" fill="#9c540d" />
            <circle cx="146" cy="205" r="5" fill="var(--orange)" opacity=".65" /><circle cx="334" cy="205" r="5" fill="var(--orange)" opacity=".65" />
          </g>
        </g>
      </svg>
    </div>
  );
}
