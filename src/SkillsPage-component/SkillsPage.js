import { Link } from 'react-router-dom';
import { dailySkills, learningSkills } from '../data/skills';
import { projects } from '../data/projects';
import { PageHeader } from '../ui/Section';

const projectName = (slug) => projects.find((p) => p.slug === slug)?.name ?? slug;

function SkillDetail({ skill }) {
    return (

        <article
            id={skill.name.toLowerCase()}
            className="scroll-mt-24 flex h-full flex-col rounded-2xl border border-ink/10 bg-white px-4 py-5 shadow-sm md:px-5 md:py-6"
        >
            <header className="flex items-center gap-3">
                <img src={skill.icon} alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
                <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-ink">

                        <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${skill.dot}`} />
                        {skill.name}
                    </h3>
                </div>
            </header>

            <div className="flex-1">
                <p className="mt-3 text-sm leading-relaxed text-inkSoft">{skill.plain}</p>

                <h4 className="mt-3 text-xs font-bold uppercase tracking-wider text-inkSoft">
                    O que eu consigo fazer
                </h4>
                <ul className="mt-2 flex flex-col gap-1.5">
                    {skill.canDo.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-inkSoft">
                            <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primaryL" />
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="mt-3 rounded-xl border-l-4 border-primaryL bg-surface p-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-inkSoft">
                        Minha experiência
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-inkSoft">{skill.note}</p>
                </div>
            </div>

            {skill.usedIn.length > 0 && (
                <p className="mt-3 text-sm text-inkSoft">
                    <span className="font-semibold text-ink">Usei em: </span>
                    {skill.usedIn.map((slug, i) => (
                        <span key={slug}>
                            <Link
                                to={`/projetos#${slug}`}

                                className="text-ink underline decoration-primaryL decoration-1 underline-offset-4 transition-colors duration-200 hover:text-primaryL"
                            >
                                {projectName(slug)}
                            </Link>
                            {i < skill.usedIn.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                </p>
            )}
        </article>
    );
}

export function SkillsPage() {
    return (
        <>
            <PageHeader
                eyebrow="Habilidades"
                title="As ferramentas que eu uso"
                subtitle="O que cada tecnologia faz, em português comum, e o que eu consigo entregar com ela hoje."
            />

            <section className="pb-12">
                <div className="container-page">
                    <h2 className="text-2xl font-black text-ink">Uso no dia a dia</h2>
                    <p className="mt-2 text-inkSoft">
                        As bases do frontend, usadas nos projetos publicados aqui, e também no meu trabalho
                        na Noweb.
                    </p>

                    <div className="mt-6 grid gap-4 lg:grid-cols-2">
                        {dailySkills.map((skill) => (
                            <SkillDetail key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-ink/10 bg-white py-12 md:py-16">
                <div className="container-page">
                    <h2 className="text-2xl font-black text-ink">Aprendendo agora</h2>
                    <p className="mt-2 text-inkSoft">
                        Em estudo ativo, dentro dos projetos publicados aqui e também no meu trabalho na Noweb.
                    </p>
                    <div className="mt-6 grid gap-4 lg:grid-cols-2">
                        {learningSkills.map((skill) => (
                            <SkillDetail key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
