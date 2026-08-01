import { useEffect, useRef, useState } from 'react';
import { profile, links } from '../data/profile';
import { Button } from '../ui/Button';
import retrato from '../assets/photos/victor-laila.png';
import curriculoIcon from '../assets/icons/curriculo.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github.svg';
import gmailIcon from '../assets/icons/gmail.svg';

const quickLinks = [
    { label: 'LinkedIn', href: links.linkedin, icon: linkedinIcon },
    { label: 'GitHub', href: links.github, icon: githubIcon },
    { label: 'E-mail', href: links.email, icon: gmailIcon, external: false },
];

export function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const [pronto, setPronto] = useState(() => Boolean(window.__portfolioPronto));

    useEffect(() => {
        if (pronto) return undefined;
        const marcar = () => setPronto(true);
        window.addEventListener('portfolio:pronto', marcar, { once: true });
        return () => window.removeEventListener('portfolio:pronto', marcar);
    }, [pronto]);

    useEffect(() => {
        if (!pronto) return undefined;
        const current = sectionRef.current;
        if (!current) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(current);
        return () => observer.disconnect();
    }, [pronto]);

    const revealText = isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0';

    const revealPhoto = isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0';

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden pt-24 pb-6 md:pt-28 md:pb-8"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-primaryL/25 blur-3xl"
            />

            <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <div className={`text-center transition-[transform,opacity] duration-1000 lg:text-left ${revealText}`}>

                    <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-sm font-semibold text-ink shadow-sm">
                        <span
                            aria-hidden="true"
                            className="ponto-respira h-2 w-2 shrink-0 rounded-full bg-primaryL"
                        />
                        {profile.badge}
                    </p>

                    <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.1] text-ink">
                        {profile.name}
                    </h1>

                    <p className="mt-3 text-xl md:text-2xl font-bold text-ink">
                        <span className="bg-primaryL/60 px-2 py-0.5 rounded-md decoration-clone">
                            {profile.role}
                        </span>
                    </p>

                    <p className="mt-6 mx-auto max-w-xl text-lg md:text-xl leading-relaxed text-inkSoft lg:mx-0">
                        {profile.headline}
                    </p>

                    <div className="mt-8 flex gap-3">
                        <Button
                            href={links.curriculo}
                            external
                            variant="primary"
                            size="lg"
                            className="flex-1 text-center max-sm:px-3 max-sm:py-2.5 max-sm:text-sm sm:flex-none"
                        >
                            <img src={curriculoIcon} alt="" aria-hidden="true" className="w-5 h-5 shrink-0" />
                            Baixar currículo
                        </Button>
                        <Button
                            to="/projetos"
                            variant="dark"
                            size="lg"
                            className="flex-1 text-center max-sm:px-3 max-sm:py-2.5 max-sm:text-sm sm:flex-none"
                        >
                            Ver meus projetos
                        </Button>
                    </div>

                    <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
                        {quickLinks.map(({ label, href, icon, external = true }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}

                                    className="inline-flex items-center gap-2 text-sm font-medium text-inkSoft transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-ink"
                                >
                                    <img src={icon} alt="" aria-hidden="true" className="w-5 h-5" />
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className={`relative order-first flex justify-center transition-[transform,opacity] duration-1000 lg:order-none lg:justify-end ${revealPhoto}`}
                >
                    <img
                        src={retrato}
                        width="545"
                        height="619"
                        decoding="async"
                        alt="Victor de Souza sorrindo ao lado da sua cachorra Laila"
                        className="relative w-64 sm:w-80 lg:w-full max-w-md h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
