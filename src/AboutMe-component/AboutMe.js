import { Section, SectionHeading } from '../ui/Section';
import { Button } from '../ui/Button';
import retrato from '../assets/photos/retrato.jpg';

const facts = [
    { label: 'Emprego atual', value: 'Noweb Publicidade' },
    { label: 'Estudando desde', value: '2022' },
    { label: 'Projetos publicados', value: '4' },

    {
        label: 'Mentoria',
        value: 'Clecio Almeida',
        href: 'https://www.linkedin.com/in/clecio-de-ameida-junior/',
    },
];

export function AboutMe() {
    return (
        <Section id="sobre" labelledBy="titulo-sobre" className="bg-surface">
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="flex justify-center lg:justify-start">
                    <div className="relative">
                        <div
                            aria-hidden="true"
                            className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-primaryL"
                        />
                        <img
                            src={retrato}
                            alt="Ilustração de Victor de Souza sorrindo, de moletom"
                            width="420"
                            height="630"
                            loading="eager"
                            decoding="async"
                            className="relative h-80 w-64 rounded-3xl object-cover shadow-lg md:h-96 md:w-72"
                        />
                    </div>
                </div>

                <div>
                    <SectionHeading
                        id="titulo-sobre"
                        eyebrow="Sobre mim"
                        title="Mudei de área porque encontrei o que eu queria fazer"
                        align="left"
                    />

                    <div className="mt-6 space-y-4 text-inkSoft md:text-lg leading-relaxed">
                        <p>
                            Comecei a estudar programação em 2022, por conta própria, enquanto trabalhava como
                            Operador de Risco. Desde então venho construindo projetos de verdade, participando de
                            eventos e aprendendo com gente mais experiente que eu.
                        </p>
                        <p>
                            Em maio de 2026 comecei como desenvolvedor frontend júnior na Noweb Publicidade, meu
                            primeiro time de produto.
                        </p>
                        <p>
                            Hoje meu foco é criar interfaces que as pessoas consigam usar sem pensar, que sejam: bonitas,
                            rápidas e que funcionem tão bem no celular quanto no computador.
                        </p>
                        <p>
                            Fora do código, você provavelmente vai me encontrar tocando saxofone, testando uma
                            receita nova ou passeando com a Laila.
                        </p>
                    </div>

                    <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                        {facts.map((fact) => (
                            <div key={fact.label}>
                                <dt className="text-xs font-semibold uppercase tracking-wider text-inkSoft">
                                    {fact.label}
                                </dt>
                                <dd className="mt-1 text-2xl font-black text-ink">
                                    {fact.href ? (

                                        <a
                                            href={fact.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline decoration-primaryL decoration-4 underline-offset-4 transition-colors duration-200 hover:text-primaryL"
                                        >
                                            {fact.value}
                                            <span className="sr-only"> (perfil no LinkedIn, abre em uma nova aba)</span>
                                        </a>
                                    ) : (
                                        fact.value
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>

                    <div className="mt-8">
                        <Button to="/sobre-mim" variant="outline" size="lg">
                            Conhecer minha história completa
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
