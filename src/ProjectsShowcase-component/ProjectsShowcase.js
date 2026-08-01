import { projects } from '../data/projects';
import { SectionHeading } from '../ui/Section';
import { Button } from '../ui/Button';
import { Carousel } from '../ui/Carousel';
import { TechChip } from '../ui/TechChip';
import externalIcon from '../assets/icons/external-link.svg';

function ProjectCard({ project }) {
    return (
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl lg:flex-row">

            <div className="aspect-[800/360] overflow-hidden bg-ink/5 lg:aspect-auto lg:grid lg:w-[52%] lg:shrink-0 lg:place-items-center lg:bg-transparent lg:p-5">
                <img
                    src={project.screenshot}
                    alt={project.screenshotAlt}
                    width="800"
                    height="360"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover lg:h-auto lg:rounded-lg lg:shadow-md lg:ring-1 lg:ring-ink/10"
                />
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold leading-tight text-ink">{project.name}</h3>
                <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.07em] text-secondaryL">
                    {project.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-inkSoft">{project.summary}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                        <TechChip key={tech} name={tech} />
                    ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-5">
                    <Button href={project.liveUrl} external variant="primary">
                        <img src={externalIcon} alt="" aria-hidden="true" className="w-4 h-4" />
                        Ver funcionando
                        <span className="sr-only"> do projeto {project.name}</span>
                    </Button>
                    <Button to={`/projetos#${project.slug}`} variant="outline">
                        Detalhes
                        <span className="sr-only"> do projeto {project.name}</span>
                    </Button>
                </div>
            </div>
        </article>
    );
}

export function ProjectsShowcase() {
    return (

        <section
            id="projetos"
            aria-labelledby="titulo-projetos"
            className="border-y border-ink/10 bg-white py-8 md:py-10"
        >
            <div className="container-page flex flex-col items-center">
                <SectionHeading
                    id="titulo-projetos"
                    eyebrow="Projetos"
                    title="O que eu já construí"
                    subtitle="Todos estão no ar. É só clicar e testar."
                />
            </div>

            <div className="mt-4">
                <Carousel label="Projetos do Victor">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}
