import './index.css';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header-component/Header.js';
import { Footer } from './Footer-component/Footer.js';
import { SplashScreen } from './ui/SplashScreen.js';
import { prefetchRestante } from './data/prefetch.js';

function useScrollOnNavigate() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        let timer = null;

        const frame = requestAnimationFrame(() => {
            const target = document.querySelector(hash);
            if (!target) return;

            target.scrollIntoView({ behavior: 'smooth' });

            target.classList.add('destacado');
            timer = setTimeout(() => target.classList.remove('destacado'), 2000);
        });

        return () => {
            cancelAnimationFrame(frame);
            if (timer) clearTimeout(timer);
        };
    }, [pathname, hash]);
}

function usePrefetchAposSplash() {
    useEffect(() => {
        if (window.__portfolioPronto) {
            prefetchRestante();
            return undefined;
        }
        window.addEventListener('portfolio:pronto', prefetchRestante, { once: true });
        return () => window.removeEventListener('portfolio:pronto', prefetchRestante);
    }, []);
}

function App() {
    useScrollOnNavigate();
    usePrefetchAposSplash();

    const { pathname } = useLocation();

    return (
        <div className="min-h-screen bg-surface">

            <SplashScreen />

            <a className="skip-link" href="#conteudo">
                Pular para o conteúdo
            </a>

            <Header />

            <main id="conteudo" key={pathname} className="entra-pagina">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default App;
