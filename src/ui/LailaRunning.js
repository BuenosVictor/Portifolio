/**
 * Laila (a cachorra do Victor) correndo — estado de carregamento das mídias
 * pesadas e da tela de abertura, no lugar de um spinner generico.
 *
 * Ela e uma poodle branca, e o desenho usa o truque de nuvem para o pelo
 * encaracolado: cada parte fofa e um conjunto de circulos desenhado DUAS vezes
 * — primeiro todos com contorno, depois todos so com preenchimento por cima.
 * O preenchimento engole os contornos internos e sobra a silhueta escalopada.
 *
 * Gait: trote simples, patas em pares diagonais girando como pendulo rigido.
 * Duas tentativas mais "realistas" foram testadas e descartadas pelo Victor:
 * caminhada atravessando o palco (parecia forcada) e pernas articuladas com
 * joelho no estilo de um codepen que ele mandou (nao ficou natural). Este
 * trote foi a versao que ele gostou desde o comeco — voltamos pra ela.
 *
 * Zero bibliotecas, tudo em CSS (bloco .laila-* em index.css). Com
 * prefers-reduced-motion o ciclo congela num quadro parado (regra global).
 */
const outline = { fill: '#fff', stroke: '#1A1A1A', strokeWidth: 3 };

const RABO = [
    [31, 31, 7],
    [36, 36, 5],
];
// Massa interna (3 circulos grandes) + fileira de bolinhas pequenas pelo
// contorno — mesma receita da coroa da cabeca, aplicada ao corpo inteiro.
// A barriga (embaixo, perto das pernas) fica sem bolinha: duas bolas ali
// criavam curvas descendo em direcao as patas, que o Victor achou estranho.
const CORPO = [
    [46, 48, 13],
    [62, 46, 15],
    [76, 48, 12],
    [36, 52, 5.9],
    [34, 44, 5.9],
    [38, 37, 6.4],
    // Estes dois (46,32 e 55,29.5) tem raio 7.4, maior que os vizinhos: no
    // raio original (5.5) sobrava um ponto preto no ombro — a costura entre
    // os contornos ficava a ~6.6-6.9 do centro, fora do alcance do
    // preenchimento (r=5.5). Aumentar o raio nao muda a silhueta externa
    // (quem desenha o contorno visivel sao os circulos grandes por baixo),
    // so faz o preenchimento cobrir a costura por completo.
    [46, 32, 7.4],
    [55, 29.5, 7.4],
    [64, 29, 6.4],
    [72, 31, 6.4],
    [79, 35, 5.9],
];
// pescoco + crânio + coroa de caracois + focinho.
// A coroa e uma fileira de bumps RASOS seguindo o arco do cranio: o proprio
// contorno do topo e escalopado, em vez de um blob solto em cima (que ja foi
// rejeitado duas vezes por parecer calombo).
const CABECA = [
    [89, 39, 8],
    [100, 30, 13],
    [91, 20, 5],
    [97, 16.5, 5.5],
    [104, 17, 5],
    [110, 21, 4.5],
    [112, 36, 7],
];
// orelha caida: 2 caracois descendo pela lateral, colados na cabeca
const ORELHA = [
    [87, 29, 6],
    [87, 38, 5.5],
];
// pares diagonais do trote: a = dianteira+traseira opostas, b = as outras duas
const PATAS = [
    { x: 40, y: 56, par: 'a' },
    { x: 52, y: 57, par: 'b' },
    { x: 70, y: 57, par: 'b' },
    { x: 82, y: 56, par: 'a' },
];

function Fofo({ circles }) {
    return (
        <>
            {circles.map(([x, y, r]) => (
                <circle key={`c${x}-${y}`} cx={x} cy={y} r={r} {...outline} />
            ))}
            {circles.map(([x, y, r]) => (
                <circle key={`p${x}-${y}`} cx={x} cy={y} r={r} fill="#fff" />
            ))}
        </>
    );
}

export function LailaRunning({ className = '' }) {
    return (
        <svg
            viewBox="0 0 132 92"
            role="img"
            aria-label="Laila correndo enquanto o conteúdo carrega"
            className={className}
        >
            {/* sombra no chao, achatando no ritmo do quique.
                cy=80: as patas terminam em y=79 (y=56 + altura 23) — com
                cy=84 sobrava um vao de 5px entre pata e sombra, dando
                impressao de flutuar. */}
            <ellipse className="laila-shadow" cx="66" cy="80" rx="32" ry="4" fill="#1A1A1A" opacity="0.12" />

            <g className="laila-bob">
                {/* pompom do rabo, abanando */}
                <g className="laila-tail">
                    <Fofo circles={RABO} />
                </g>

                {PATAS.map(({ x, y, par }) => (
                    <g key={x} className={`laila-leg laila-leg-${par}`}>
                        <rect x={x} y={y} width="8" height="23" rx="4" {...outline} />
                    </g>
                ))}

                <Fofo circles={CORPO} />
                <Fofo circles={CABECA} />

                {/* Grupo externo: inclinacao fixa de 4 graus da orelha.
                    Grupo interno: o balanco animado — o CSS `transform` substituiria
                    o atributo `transform` se estivessem no mesmo elemento. */}
                <g transform="rotate(4 87 26)">
                    <g className="laila-ear">
                        <Fofo circles={ORELHA} />
                    </g>
                </g>

                {/* lingua de fora (assinatura da Laila), nariz e olho */}
                <rect x="109.5" y="41.5" width="5.5" height="9" rx="2.75" fill="#FB7185" stroke="#1A1A1A" strokeWidth="2" />
                <circle cx="117" cy="33" r="2.6" fill="#1A1A1A" />
                <circle cx="102" cy="26" r="2.2" fill="#1A1A1A" />
            </g>
        </svg>
    );
}
