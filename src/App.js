import './index.css';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header-component/Header.js';
import { Footer } from './Footer-component/Footer.js';
import { SplashScreen } from './ui/SplashScreen.js';
import { prefetchRestante } from './data/prefetch.js';

/**
 * O React Router v6 nao restaura scroll nem pula para a ancora sozinho.
 * Sem isto, clicar em "Projetos" estando em /sobre-mim so trocava a URL.
 */
function useScrollOnNavigate() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        let timer = null;

        // rAF: o elemento alvo pode ainda nao estar montado no primeiro paint.
        const frame = requestAnimationFrame(() => {
            const target = document.querySelector(hash);
            if (!target) return;

            // O recuo do header fixo vem do `scroll-padding-top` em index.css.
            target.scrollIntoView({ behavior: 'smooth' });

            // Pisca o card de destino. Feito por classe, e nao pelo `:target` do
            // CSS, porque o pushState do React Router muda a URL mas nao o
            // elemento-alvo do documento — `:target` nunca casaria.
            target.classList.add('destacado');
            timer = setTimeout(() => target.classList.remove('destacado'), 2000);
        });

        return () => {
            cancelAnimationFrame(frame);
            if (timer) clearTimeout(timer);
        };
    }, [pathname, hash]);
}

/**
 * Quando a splash libera o site, comeca a baixar em segundo plano o que as
 * outras abas usam (GIFs de previa e fotos) — ao navegar, ja esta no cache.
 */
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
    // `key` pelo pathname: trocar de aba remonta o <main> e a animacao roda de
    // novo. Sem o key, o CSS so animaria no primeiro carregamento. Fica de fora
    // o hash — ir para /habilidades#css nao deve reanimar a pagina inteira.
    const { pathname } = useLocation();

    return (
        <div className="min-h-screen bg-surface">
            {/* Tela de abertura com a Laila; some sozinha quando o site carrega. */}
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
