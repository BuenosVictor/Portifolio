import { useEffect, useState } from 'react';
import { LailaRunning } from './LailaRunning';

const MIN_MS = 900;
const FADE_MS = 300;

export function SplashScreen() {

    const [phase, setPhase] = useState('visivel');
    const [carregado, setCarregado] = useState(() => document.readyState === 'complete');
    const [minimoOk, setMinimoOk] = useState(false);

    useEffect(() => {
        if (carregado) return undefined;
        const marcar = () => setCarregado(true);
        window.addEventListener('load', marcar, { once: true });
        return () => window.removeEventListener('load', marcar);
    }, [carregado]);

    useEffect(() => {
        const timer = setTimeout(() => setMinimoOk(true), MIN_MS);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (carregado && minimoOk && phase === 'visivel') setPhase('saindo');
    }, [carregado, minimoOk, phase]);

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
