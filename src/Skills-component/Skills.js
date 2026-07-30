import { dailySkills, learningSkills } from '../data/skills';
import { Section, SectionHeading } from '../ui/Section';
import { Button } from '../ui/Button';

function SkillPill({ skill }) {
    return (
        <li className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white px-4 py-3 shadow-sm">
            <img src={skill.icon} alt="" aria-hidden="true" className="h-8 w-8 shrink-0 object-contain" />
            <span className="flex items-center gap-2 font-semibold text-ink">
                {/* A cor da tecnologia vira ponto, nao cor de texto. */}
                <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${skill.dot}`} />
                {skill.name}
            </span>
        </li>
    );
}

export function Skills() {
    return (
        <Section id="habilidades" labelledBy="titulo-habilidades" className="bg-white border-y border-ink/10">
            <SectionHeading
                id="titulo-habilidades"
                eyebrow="Habilidades"
                title="As ferramentas que eu uso"
                subtitle="Um resumo. Na aba de habilidades tem o que cada uma faz, sem jargão, e o que eu consigo entregar com ela."
            />

            <div className="mt-10 grid gap-10 md:grid-cols-2">
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-inkSoft">
                        Uso no dia a dia
                    </h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {dailySkills.map((skill) => (
                            <SkillPill key={skill.name} skill={skill} />
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-inkSoft">
                        Aprendendo agora
                    </h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {learningSkills.map((skill) => (
                            <SkillPill key={skill.name} skill={skill} />
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-10 flex justify-center">
                <Button to="/habilidades" variant="dark" size="lg">
                    Ver o que eu faço com cada uma
                </Button>
            </div>
        </Section>
    );
}
