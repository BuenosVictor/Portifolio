import { Link } from 'react-router-dom';

/**
 * Etiqueta de tecnologia. Em repouso a cor de marca e so um PONTO — usada como
 * cor de texto sobre branco, o amarelo do JavaScript (#F0DB4F) da 1,4:1 e
 * desaparece da tela.
 *
 * No hover o fundo assume a cor de marca cheia e o texto fica BRANCO em todas,
 * por decisao do Victor (consistencia visual). Contraste medido do branco sobre
 * cada fundo — o minimo legivel e 4,5:1:
 *
 *   API   #6B21A8   8,72:1  OK
 *   Figma #4831D4   7,88:1  OK
 *   CSS   #0277BD   4,80:1  OK
 *   TS    #3178C6   4,53:1  OK (no limite)
 *   HTML  #E14E1D   3,95:1  abaixo
 *   Git   #F34F29   3,52:1  abaixo
 *   Tail. #38BDF8   1,75:1  ilegivel
 *   React #61DAFA   1,63:1  ilegivel
 *   JS    #F0DB4F   1,40:1  ilegivel
 *
 * Se um dia quiser legibilidade nas cinco de baixo, ha dois caminhos:
 *   1. voltar `hover:text-ink` nelas (era o estado anterior, todas passavam);
 *   2. escurecer SO o fundo do hover — HTML #B03A12 da 6,07:1 e Git #C1350F da
 *      5,55:1 e ambos seguem reconheciveis. Para JS, React e Tailwind nao ha
 *      saida: escurecer o suficiente destroi a identidade da cor.
 */
const styles = {
    HTML: { dot: 'bg-HTML', hover: 'hover:bg-HTML' },
    CSS: { dot: 'bg-CSS', hover: 'hover:bg-CSS' },
    Javascript: { dot: 'bg-JS', hover: 'hover:bg-JS' },
    JavaScript: { dot: 'bg-JS', hover: 'hover:bg-JS' },
    TypeScript: { dot: 'bg-TYPESCRIPT', hover: 'hover:bg-TYPESCRIPT' },
    React: { dot: 'bg-REACT', hover: 'hover:bg-REACT' },
    Tailwind: { dot: 'bg-TAILWIND', hover: 'hover:bg-TAILWIND' },
    Git: { dot: 'bg-GIT', hover: 'hover:bg-GIT' },
    Figma: { dot: 'bg-detail', hover: 'hover:bg-detail' },
    API: { dot: 'bg-API', hover: 'hover:bg-API' },
};

export function TechChip({ name }) {
    const style = styles[name] ?? { dot: 'bg-inkSoft', hover: 'hover:bg-ink/10' };

    return (
        <li>
            <Link
                to={`/habilidades#${name.toLowerCase()}`}
                className={`group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1 text-sm font-medium text-ink shadow-sm transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:text-white ${style.hover}`}
            >
                {/* `bg-current` faz o ponto acompanhar a cor do texto no hover —
                    senao ele desapareceria dentro do fundo da mesma cor. */}
                <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full transition-colors duration-300 group-hover:bg-current ${style.dot}`}
                />
                {name}
                <span className="sr-only">, ver o que eu faço com {name}</span>
            </Link>
        </li>
    );
}
