import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';
import { Button } from '../ui/Button';
import { PageHeader } from '../ui/Section';
import { TechChip } from '../ui/TechChip';
import { LailaRunning } from '../ui/LailaRunning';
import externalIcon from '../assets/icons/external-link.svg';
import githubIcon from '../assets/icons/github.svg';

// Os GIFs ficam em `public/gifs/`, fora do bundle. Importados, os 32 MB
// entravam no JavaScript da rota e eram baixados so por abrir a pagina.
const gifUrl = (file) => `${process.env.PUBLIC_URL}/gifs/${file}`;

/**
 * Mostra o screenshot estatico e so busca o GIF quando o card entra na tela.
 * Sai da tela, o GIF e descartado (volta a mostrar o screenshot): economiza
 * dado de quem so passa o olho e nao trava com 4 GIFs tocando ao mesmo tempo.
 * Respeita `prefers-reduced-motion`, que ja e convencao no resto do site.
 */
function ProjectMedia({ project }) {
    const [playing, setPlaying] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const current = containerRef.current;
        if (!current) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const observer = new IntersectionObserver(
            ([entry]) => setPlaying(entry.isIntersecting),
            { threshold: 0.3 }
        );

        observer.observe(current);
        return () => observer.disconnect();
    }, []);

    return (
        <figure className="w-full">
            <div
                ref={containerRef}
                className="relative aspect-[800/360] overflow-hidden rounded-2xl border border-ink/10 bg-ink/5 shadow-md"
            >
                <img
                    src={project.screenshot}
                    alt={project.screenshotAlt}
                    width="800"
                    height="360"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover"
                />

                {playing && (
                    <>
                        {!loaded && (
                            <span className="absolute inset-0 grid place-items-center bg-white/90">
                                <span className="flex flex-col items-center gap-1">
                                    <LailaRunning className="w-28" />
                                    <span className="text-sm font-medium text-inkSoft">
                                        Carregando prévia…
                                    </span>
                                </span>
                            </span>
                        )}
                        <img
                            src={gifUrl(project.gif)}
                            alt={`Prévia animada do projeto ${project.name} em funcionamento`}
                            onLoad={() => setLoaded(true)}
                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                                loaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                    </>
                )}
            </div>
        </figure>
    );
}

export function ProjectsPage() {
    return (
        <>
            <PageHeader
                eyebrow="Projetos"
                title="Tudo o que eu construí"
                subtitle='Todos estão no ar e funcionando. Clique em "Ver funcionando" para testar direto no navegador. Não precisa instalar nada.'
            />

            <section className="pb-16">
                <div className="container-page flex flex-col gap-12 md:gap-16">
                    {projects.map((project, index) => (
                        <article
                            key={project.slug}
                            // `id` permite link direto (ex.: /projetos#ventus) vindo dos
                            // cards da home e da pagina de habilidades.
                            id={project.slug}
                            className={`scroll-mt-28 grid items-center gap-8 md:gap-12 lg:grid-cols-2 ${
                                index % 2 === 1 ? 'lg:[&>figure]:order-2' : ''
                            }`}
                        >
                            <ProjectMedia project={project} />

                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-ink">{project.name}</h2>
                                <p className="mt-2 font-semibold text-secondaryL">{project.tagline}</p>

                                <p className="mt-5 leading-relaxed text-inkSoft md:text-lg">
                                    {project.summary}
                                </p>

                                <div className="mt-6 rounded-2xl border-l-4 border-primaryL bg-white p-5 shadow-sm">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-inkSoft">
                                        O que esse projeto me ensinou
                                    </h3>
                                    <p className="mt-2 leading-relaxed text-inkSoft">{project.learned}</p>
                                </div>

                                <ul className="mt-6 flex flex-wrap gap-2">
                                    {project.techs.map((tech) => (
                                        <TechChip key={tech} name={tech} />
                                    ))}
                                </ul>

                                <div className="mt-7 flex gap-3">
                                    <Button
                                        href={project.liveUrl}
                                        external
                                        variant="primary"
                                        size="lg"
                                        className="flex-1 max-sm:px-3 max-sm:py-2.5 max-sm:text-sm sm:flex-none"
                                    >
                                        <img src={externalIcon} alt="" aria-hidden="true" className="w-4 h-4 shrink-0" />
                                        Ver funcionando
                                        <span className="sr-only"> do projeto {project.name}</span>
                                    </Button>
                                    <Button
                                        href={project.codeUrl}
                                        external
                                        variant="outline"
                                        size="lg"
                                        className="flex-1 max-sm:px-3 max-sm:py-2.5 max-sm:text-sm sm:flex-none"
                                    >
                                        <img src={githubIcon} alt="" aria-hidden="true" className="w-4 h-4 shrink-0" />
                                        Ver o código
                                        <span className="sr-only"> do projeto {project.name}</span>
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
