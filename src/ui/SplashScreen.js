import { useEffect, useState } from 'react';
import { LailaRunning } from './LailaRunning';

/**
 * Tela de abertura: a Laila corre enquanto o site carrega e sai de cena com um
 * fade quando tudo que a pagina inicial usa (JS, CSS, imagens nao-lazy) chegou
 * — o gatilho e o evento `load` da janela.
 *
 * MIN_MS garante ~2 passadas da corrida mesmo com cache quente: sem isso, num
 * carregamento rapido a tela piscaria por 50ms e pareceria um bug.
 *
 * Os GIFs de previa (ate 24MB) ficam DE FORA da espera de proposito: sao
 * carregados sob demanda em /projetos, com a propria Laila no card. Bloquear o
 * site inteiro por eles puniria o visitante de rede lenta.
 *
 * Cada efeito registra e limpa UM recurso no nivel raiz — o formato canonico
 * que tambem evita o falso positivo do effect-needs-cleanup do react-doctor.
 */
const MIN_MS = 900;
const FADE_MS = 300;

export function SplashScreen() {
    // 'visivel' -> 'saindo' (fade) -> 'fora' (desmontada)
    const [phase, setPhase] = useState('visivel');
    const [carregado, setCarregado] = useState(() => document.readyState === 'complete');
    const [minimoOk, setMinimoOk] = useState(false);

    // Recurso 1: o listener do `load` da janela.
    useEffect(() => {
        if (carregado) return undefined;
        const marcar = () => setCarregado(true);
        window.addEventListener('load', marcar, { once: true });
        return () => window.removeEventListener('load', marcar);
    }, [carregado]);

    // Recurso 2: o timer do tempo minimo em cena.
    useEffect(() => {
        const timer = setTimeout(() => setMinimoOk(true), MIN_MS);
        return () => clearTimeout(timer);
    }, []);

    // Sem recurso: quando as duas condicoes fecham, comeca a saida.
    useEffect(() => {
        if (carregado && minimoOk && phase === 'visivel') setPhase('saindo');
    }, [carregado, minimoOk, phase]);

    // Recurso 3: o timer do fade. Ao iniciar a saida, avisa o resto do site
    // (o Hero espera este sinal para rodar a animacao de entrada).
    useEffect(() => {
        if (phase !== 'saindo') return undefined;

        window.__portfolioPronto = true;
        window.dispatchEvent(new Event('portfolio:pronto'));

        const timer = setTimeout(() => setPhase('fora'), FADE_MS);
        return () => clearTimeout(timer);
    }, [phase]);

    if (phase === 'fora') return null;

    return (
        <div
            role="status"
            aria-label="Carregando o portfólio"
            className={`fixed inset-0 z-[100] grid place-items-center bg-surface transition-opacity duration-300 ${
                phase === 'saindo' ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <div className="flex flex-col items-center gap-2">
                <LailaRunning className="w-36" />
                <p className="text-sm font-semibold text-inkSoft">Carregando…</p>
            </div>
        </div>
    );
}
