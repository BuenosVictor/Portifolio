import { journey } from '../data/skills';
import { PageHeader } from '../ui/Section';
import { Button } from '../ui/Button';
import { links } from '../data/profile';

export function ExperiencePage() {
    return (
        <>
            <PageHeader
                eyebrow="Experiência"
                title="De Operador de Risco a desenvolvedor"
                subtitle="A parte da minha bagagem que não aparece numa lista de tecnologias, e que continua valendo todo dia num time de produto."
            />

            <section className="pb-12">
                <div className="container-page max-w-4xl flex flex-col gap-6">
                    <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm md:p-10">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-secondaryL">
                            Trabalho atual
                        </p>
                        <h2 className="mt-2 text-3xl font-black text-ink">
                            Desenvolvedor Frontend Jr. na Noweb Publicidade
                        </h2>
                        <div className="mt-5 space-y-4 leading-relaxed text-inkSoft md:text-lg">
                            <p>
                                Desde maio de 2026 sou o principal responsável pelo app desktop multiplataforma
                                da empresa, feito com Tauri e TypeScript, rodando em Windows, macOS e Linux. Analiso e corrijo
                                bugs de build específicos de cada sistema, às vezes descendo até Rust para
                                resolver o que o resto do stack não cobre. Também desenvolvo a versão web do
                                mesmo produto, com WebSocket garantindo tempo real entre front-end e back-end.
                            </p>
                            <p>
                                Entrego em média sete telas, funcionalidades ou correções por dia. Não há time
                                dedicado de UX/UI ou QA, então interface, responsividade e teste antes de
                                publicar são comigo. Foi assim que criei do zero o sistema de limites por plano
                                da plataforma e refiz os filtros usados em todas as telas principais.
                            </p>
                        </div>
                    </article>

                    <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm md:p-10">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-secondaryL">
                            Experiência anterior
                        </p>
                        <h2 className="mt-2 text-3xl font-black text-ink">Operador de Risco</h2>
                        <div className="mt-5 space-y-4 leading-relaxed text-inkSoft md:text-lg">
                            <p>
                                Rastreava cargas valiosas em tempo real durante todo o trajeto e cuidava da
                                segurança da carga e do motorista, inclusive em situações de sinistro e
                                recuperação de carga. Qualquer desvio do previsto exigia resposta imediata e
                                coordenada com outras pessoas. Para isso, aprendi do zero mais de 9 tecnologias
                                de rastreadores e sensores, enquanto estudava programação fora do horário.
                            </p>
                            <p>
                                Trabalhava em equipe todos os dias e foi onde mais desenvolvi comunicação e
                                resolução de problemas, as duas coisas que eu mais uso hoje programando, muito
                                mais do que qualquer atalho de editor.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            {/* Os 4 cards de "O que isso me deu" sairam daqui de proposito:
                repetiam o "O que eu trago para o time" da home (mesma fonte,
                src/data/skills.js — o `detail` de cada strength ficou la, sem uso,
                caso ele queira de volta). */}
            <section className="border-y border-ink/10 bg-white py-12 md:py-16">
                <div className="container-page max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-black text-ink">Como eu aprendi</h2>
                    <p className="mt-2 text-inkSoft md:text-lg">
                        Sem faculdade de TI: cursos, comunidade e uma mentoria que me cobra de verdade.
                    </p>

                    <ol className="mt-8 flex flex-col gap-8 border-l-2 border-ink/10 pl-8">
                        {journey.map((item) => (
                            <li key={item.title} className="relative">
                                <span
                                    aria-hidden="true"
                                    // -2.7rem centra a bolinha de 20px sobre a linha:
                                    // o <li> comeca a 34px (borda 2px + pl-8) da borda da <ol>.
                                    className="absolute -left-[2.7rem] top-1.5 h-5 w-5 rounded-full border-4 border-surface bg-primaryL"
                                />
                                <p className="text-xs font-bold uppercase tracking-[0.14em] text-secondaryL">
                                    {item.kind}
                                </p>
                                <h3 className="mt-1 text-xl font-bold text-ink">{item.title}</h3>
                                <p className="mt-2 leading-relaxed text-inkSoft">{item.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container-page flex flex-col items-center gap-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-ink">
                        O currículo completo está aqui
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Button href={links.curriculo} external variant="primary" size="lg">
                            Baixar currículo
                        </Button>
                        <Button to="/sobre-mim" variant="outline" size="lg">
                            Conhecer minha história
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
