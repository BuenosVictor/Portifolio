import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { profile } from '../data/profile';
import { Logo } from '../ui/Logo';

// Cada aba e uma pagina com profundidade. A home continua tendo tudo resumido.
const tabs = [
    { to: '/', label: 'Início', end: true },
    { to: '/projetos', label: 'Projetos' },
    { to: '/habilidades', label: 'Habilidades' },
    { to: '/experiencia', label: 'Experiência' },
    { to: '/sobre-mim', label: 'Sobre mim' },
];

const tabClass = ({ isActive }) =>
    `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive ? 'text-ink' : 'text-inkSoft hover:bg-ink/5 hover:text-ink'
    }`;

/**
 * Barra amarela que desliza ate a aba ativa.
 *
 * E UM elemento so, posicionado por medicao da aba atual — nao um `::after`
 * em cada link. Por isso ela nunca "teleporta": mudar de aba so muda o alvo
 * da mesma transicao de CSS.
 *
 * Como a posicao deriva da rota (fonte unica), clicar rapido em varias abas
 * apenas redireciona a animacao em curso. Nao ha fila de animacoes para
 * dessincronizar, que era o risco levantado.
 */
function useTabIndicator(pathname) {
    const navRef = useRef(null);
    const [bar, setBar] = useState({ left: 0, width: 0, visible: false });
    const [animated, setAnimated] = useState(false);

    // useLayoutEffect: mede e posiciona antes do navegador pintar, senao a
    // barra aparece um frame na posicao antiga.
    useLayoutEffect(() => {
        const measure = () => {
            const nav = navRef.current;
            if (!nav) return;
            // O NavLink do React Router marca a aba atual com aria-current="page".
            const active = nav.querySelector('[aria-current="page"]');
            if (!active) {
                setBar((b) => ({ ...b, visible: false }));
                return;
            }
            setBar({ left: active.offsetLeft, width: active.offsetWidth, visible: true });
        };

        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [pathname]);

    // Liga a transicao so DEPOIS da primeira medicao valida, para a barra nao
    // deslizar desde a borda esquerda ao abrir o site direto numa aba interna.
    //
    // Sem guard por `ref` de proposito: em StrictMode o React monta, desmonta e
    // remonta os efeitos. Um guard por ref faria a segunda execucao virar no-op
    // logo depois de a limpeza da primeira cancelar o frame — e `animated`
    // ficaria `false` para sempre, deixando a barra sem transicao nenhuma.
    // Assim, a segunda execucao reagenda e o efeito acontece.
    useEffect(() => {
        if (!bar.visible || animated) return;
        const frame = requestAnimationFrame(() => setAnimated(true));
        return () => cancelAnimationFrame(frame);
    }, [bar.visible, animated]);

    return { navRef, bar, animated };
}

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { navRef, bar, animated } = useTabIndicator(location.pathname);

    // Fundo solido so depois de rolar: no topo o header flutua sobre o hero.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Fecha o menu ao navegar — inclusive quando a rota muda pelo botao voltar.
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
                scrolled ? 'bg-surface/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
            }`}
        >
            <div className="container-page flex items-center justify-between gap-4 py-3">
                <Link
                    to="/"
                    className="flex items-center gap-3 rounded-lg"
                    aria-label={`${profile.name}, página inicial`}
                >
                    <Logo className="h-9 w-9" />
                    <span className="hidden sm:block">
                        <span className="block text-sm font-bold leading-tight text-ink">{profile.name}</span>
                        <span className="block text-xs leading-tight text-inkSoft">{profile.role}</span>
                    </span>
                </Link>

                {/* NavLink marca a aba atual com aria-current; a barra amarela
                    torna isso visivel sem depender so da cor do texto. */}
                <nav
                    ref={navRef}
                    aria-label="Navegação principal"
                    className="relative hidden items-center gap-1 lg:flex"
                >
                    {tabs.map(({ to, label, end }) => (
                        <NavLink key={to} to={to} end={end} className={tabClass}>
                            {label}
                        </NavLink>
                    ))}

                    <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute bottom-0 left-0 h-0.5 rounded-full bg-primaryL ${
                            animated ? 'transition-[transform,width,opacity] duration-300 ease-out' : ''
                        }`}
                        style={{
                            // translateX em vez de `left`: anima na GPU e nao
                            // forca recalculo de layout a cada frame.
                            transform: `translateX(${bar.left}px)`,
                            width: `${bar.width}px`,
                            opacity: bar.visible ? 1 : 0,
                        }}
                    />
                </nav>

                <button
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    // 44x44: minimo confortavel para o dedo em tela sensivel ao toque.
                    className="grid h-11 w-11 place-items-center rounded-lg text-xl text-ink lg:hidden"
                    aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                    aria-expanded={menuOpen}
                    aria-controls="menu-mobile"
                >
                    <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
                </button>
            </div>

            {/* `invisible` quando fechado: sem isso os links continuam alcancaveis
                por Tab mesmo com o menu recolhido. */}
            <nav
                id="menu-mobile"
                aria-label="Navegação principal"
                className={`overflow-hidden bg-surface/95 backdrop-blur-md transition-[max-height,visibility] duration-300 lg:hidden ${
                    menuOpen ? 'max-h-96 visible border-t border-ink/10' : 'max-h-0 invisible'
                }`}
            >
                <ul className="container-page flex flex-col gap-1 py-4">
                    {tabs.map(({ to, label, end }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                end={end}
                                className={({ isActive }) =>
                                    `block rounded-lg px-3 py-3 font-medium transition-colors duration-200 ${
                                        isActive ? 'bg-primaryL/25 text-ink' : 'text-ink hover:bg-ink/5'
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
