import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { profile } from '../data/profile';
import { Logo } from '../ui/Logo';

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

function useTabIndicator(pathname) {
    const navRef = useRef(null);
    const [bar, setBar] = useState({ left: 0, width: 0, visible: false });
    const [animated, setAnimated] = useState(false);

    useLayoutEffect(() => {
        const measure = () => {
            const nav = navRef.current;
            if (!nav) return;
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

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

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
                            transform: `translateX(${bar.left}px)`,
                            width: `${bar.width}px`,
                            opacity: bar.visible ? 1 : 0,
                        }}
                    />
                </nav>

                <button
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="grid h-11 w-11 place-items-center rounded-lg text-xl text-ink lg:hidden"
                    aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                    aria-expanded={menuOpen}
                    aria-controls="menu-mobile"
                >
                    <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
                </button>
            </div>

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
