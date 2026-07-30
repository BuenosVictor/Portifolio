/**
 * Marca do Victor. Duas versoes construidas — troque a constante abaixo.
 *
 *   'wave' — forma de onda. Le como onda sonora (ele toca sax desde os 8 anos)
 *            E como sinal/dado (desenvolvimento). Funciona ate 16px.
 *   'sax'  — saxofone literal. Mais pessoal e direto, mas perde legibilidade
 *            abaixo de ~32px: vira um gancho. Ver nota no fim do arquivo.
 *
 * Depois de trocar aqui, rode o script que regera favicon e icones
 * (ver memoria do projeto) para a aba do navegador acompanhar.
 */
const MARK = 'wave';

// --- Onda -----------------------------------------------------------------
// 5 barras. Alturas levemente assimetricas de proposito: perfeitamente
// simetrico parece equalizador de aparelho de som, nao uma onda gravada.
const waveBars = [
    { x: 3, half: 3.2 },
    { x: 7.5, half: 6.0 },
    { x: 12, half: 8.4 },
    { x: 16.5, half: 6.6 },
    { x: 21, half: 3.8 },
];

function WaveMark() {
    return (
        <g stroke="#1A1A1A" strokeWidth="2.6" strokeLinecap="round">
            {waveBars.map(({ x, half }) => (
                <line key={x} x1={x} y1={12 - half} x2={x} y2={12 + half} />
            ))}
        </g>
    );
}

// --- Saxofone -------------------------------------------------------------
// Tres decisoes de desenho, cada uma consertando um erro anterior:
//
// 1. O CORPO e silhueta preenchida com largura variavel (1,7 em cima -> 3,8
//    embaixo), nao um traco uniforme. Corpo de espessura constante e
//    literalmente a silhueta de um oboé — foi o primeiro erro.
// 2. A CAMPANA sobe quase vertical, nao para o lado. Deitada, o conjunto
//    virava um cachimbo.
// 3. O ARO e um vazado na cor do fundo. Sem ele a campana preenchida le como
//    uma pa; com ele, o olho entende "tubo oco aberto".
const SAX_NECK = 'M 4.2 1.8 C 3.3 4.6 4.4 6.9 7 8.4';
const SAX_BODY =
    'M 7 8.6 L 6.8 16.2 C 6.8 20 9.2 21.6 12.2 21.2 C 15.4 20.8 17.6 18.2 19 14.6 ' +
    'C 20.4 11 21.2 7.6 21.2 5.2 C 20.2 3.6 17.4 3.4 15.8 4.6 ' +
    'C 15.6 8.2 15.2 12.2 13.8 15.4 C 13 17.4 11.4 18.6 10 18 ' +
    'C 10.6 17.4 10.7 16.4 10.6 15.2 L 8.7 8.6 Z';
const saxKeys = [
    { cx: 8.8, cy: 10.6 },
    { cx: 9.1, cy: 12.4 },
    { cx: 9.4, cy: 14.2 },
];

function SaxMark() {
    return (
        <g>
            <path d={SAX_BODY} fill="#1A1A1A" />
            {/* Aro vazado da campana. O eixo dela aponta a -64 graus, entao o aro,
                perpendicular, fica a 24. */}
            <ellipse
                cx="18.5"
                cy="4.5"
                rx="2.7"
                ry="1.15"
                transform="rotate(24 18.5 4.5)"
                fill="#FFC700"
            />
            <path
                d={SAX_NECK}
                fill="none"
                stroke="#1A1A1A"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
            {/* Chaves na cor do fundo, acompanhando a inclinacao do cone. */}
            {saxKeys.map(({ cx, cy }) => (
                <circle key={cy} cx={cx} cy={cy} r="0.72" fill="#FFC700" />
            ))}
        </g>
    );
}

// Quanto cada marca ocupa do quadrado amarelo. O sax e alto e estreito, entao
// precisa de mais area para nao ficar minusculo ao lado da onda, que e larga.
const scale = { sax: 'h-[78%] w-[78%]', wave: 'h-[64%] w-[64%]' };

export function Logo({ className = '' }) {
    return (
        <span
            aria-hidden="true"
            className={`grid shrink-0 place-items-center rounded-lg bg-primaryL ${className}`}
        >
            <svg viewBox="0 0 24 24" className={scale[MARK]} role="presentation" focusable="false">
                {MARK === 'sax' ? <SaxMark /> : <WaveMark />}
            </svg>
        </span>
    );
}

/*
 * NOTA SOBRE O SAXOFONE
 *
 * Um saxofone precisa de tres detalhes para ser reconhecido — a campana
 * abrindo, a curva do tudel e as chaves. Em 16px (o favicon na aba do
 * navegador) existem 256 pixels no total, e esses detalhes somem: a silhueta
 * vira um gancho ou uma bota.
 *
 * Se for para ficar com o sax, o caminho honesto e um sistema de duas marcas:
 * sax no header (36px, onde ele respira) e onda no favicon. E o mesmo que
 * marcas grandes fazem — versao completa e versao reduzida.
 */
