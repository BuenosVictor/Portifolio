/**
 * Laila (a cachorra do Victor) correndo — estado de carregamento das mídias
 * pesadas, no lugar de um spinner generico.
 *
 * SVG desenhado a mao + keyframes de CSS (ver bloco .laila-* em index.css),
 * zero bibliotecas — mesmo espirito do carrossel e do logo. As pecas (patas,
 * rabo, orelha, sombra) sao grupos separados animados por rotacao/translacao.
 * Com prefers-reduced-motion o ciclo congela num quadro parado (regra global).
 */
const outline = { fill: '#fff', stroke: '#1A1A1A', strokeWidth: 3.5 };

export function LailaRunning({ className = '' }) {
    return (
        <svg
            viewBox="0 0 132 92"
            role="img"
            aria-label="Laila correndo enquanto o conteúdo carrega"
            className={className}
        >
            {/* sombra no chao, achatando no ritmo do quique */}
            <ellipse className="laila-shadow" cx="66" cy="85" rx="32" ry="4" fill="#1A1A1A" opacity="0.12" />

            <g className="laila-bob">
                {/* rabo: pluma fofa atras, abanando */}
                <g className="laila-tail">
                    <circle cx="28" cy="29" r="10" {...outline} />
                </g>

                {/* patas traseiras e dianteiras em pares diagonais (trote) */}
                <g className="laila-leg laila-leg-a">
                    <rect x="40" y="56" width="8" height="25" rx="4" {...outline} strokeWidth="3" />
                </g>
                <g className="laila-leg laila-leg-b">
                    <rect x="52" y="57" width="8" height="25" rx="4" {...outline} strokeWidth="3" />
                </g>
                <g className="laila-leg laila-leg-b">
                    <rect x="70" y="57" width="8" height="25" rx="4" {...outline} strokeWidth="3" />
                </g>
                <g className="laila-leg laila-leg-a">
                    <rect x="82" y="56" width="8" height="25" rx="4" {...outline} strokeWidth="3" />
                </g>

                {/* corpo */}
                <ellipse cx="63" cy="47" rx="31" ry="18" {...outline} />

                {/* cabeca: orelha caida, focinho, nariz, olho e a lingua de fora
                    (marca registrada da Laila nas ilustracoes do site) */}
                <g>
                    <g className="laila-ear">
                        <circle cx="87" cy="17" r="7.5" {...outline} strokeWidth="3" />
                    </g>
                    <circle cx="99" cy="30" r="15" {...outline} />
                    <circle cx="113" cy="37" r="7.5" {...outline} strokeWidth="3" />
                    <rect x="110.5" y="42.5" width="5.5" height="9" rx="2.75" fill="#FB7185" stroke="#1A1A1A" strokeWidth="2" />
                    <circle cx="118.5" cy="34" r="2.6" fill="#1A1A1A" />
                    <circle cx="100" cy="25" r="2.3" fill="#1A1A1A" />
                </g>
            </g>
        </svg>
    );
}
