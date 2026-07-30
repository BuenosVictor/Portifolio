import { strengths } from '../data/skills';
import { Section, SectionHeading } from '../ui/Section';
import { Button } from '../ui/Button';

export function Strengths() {
    return (
        <Section id="experiencia" labelledBy="titulo-forcas" className="bg-surface">
            <SectionHeading
                id="titulo-forcas"
                eyebrow="Além do código"
                title="O que eu trago para o time"
                subtitle="Venho de uma área com responsabilidade real sobre pessoas e prazos. Essas habilidades vieram junto."
            />

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {strengths.map((item, index) => (
                    <li
                        key={item.title}
                        className="relative rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
                    >
                        <span
                            aria-hidden="true"
                            className="absolute left-6 top-0 h-1 w-10 -translate-y-1/2 rounded-full bg-primaryL"
                        />
                        <p className="text-xs font-bold text-inkSoft/60">
                            {String(index + 1).padStart(2, '0')}
                        </p>
                        <h3 className="mt-2 text-lg font-bold text-ink">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-inkSoft">{item.text}</p>
                    </li>
                ))}
            </ul>

            <div className="mt-10 flex justify-center">
                <Button to="/experiencia" variant="dark" size="lg">
                    Ver minha experiência e formação
                </Button>
            </div>
        </Section>
    );
}
