import grandma from './img/grandmaAndMe.jpg';
import saxophone from './img/saxophone.jpg';
import Street from './img/LailaInStreet.jpg';
import park from './img/Park.jpg';
import { Button } from '../ui/Button';
import { links } from '../data/profile';

// A trajetoria profissional completa mora em /experiencia — aqui e so contexto
// rapido antes da parte que o Victor pediu pra ser o foco desta pagina: a pessoal.
//
// Conceito: fileira unica em zigue-zague, do jeito que ele desenhou num mockup
// (5 quadrados numa linha so, alternando meia altura pra cima/baixo). Mantem as
// rotacoes da tentativa anterior, mas: (1) fileira unica (`flex`, nao `columns`
// nem `flex-wrap`) em vez de mural em varias linhas; (2) o deslocamento vertical
// agora e o zigue-zague alternado (par sobe, impar desce — calculado no render
// pelo indice), nao mais um `stagger`/`mb` por item; (3) tamanhos mais proximos
// entre si (96–128px, contra 80–144px de antes) — ele achou a variacao anterior
// grande demais. `nudge` (translate-x) saiu: junto com fileira unica + zigue-
// zague, deslocamento horizontal por cima so ia atrapalhar o espacamento.
//
// `photoShape`: sax e Laila sao retrato 2:3 de verdade (288x432 e 768x1152);
// a avo e quadrada de verdade (288x288). Nunca forcar outra proporcao — ja
// cortou errado uma vez (Laila num molde paisagem) e ele reclamou.
//
// `zigzag`: 'up'/'down' e explicito por item (nao mais par/impar por indice) —
// ele pediu pra inverter especificamente os 3 com foto (foram pro 'down') com
// artes marciais/jogos online/cozinha (foram pro 'up'). Filosofia nao foi
// mencionada, ficou como estava ('up').
const hobbies = [
    {
        icon: '🎷',
        photo: saxophone,
        photoAlt: 'Victor tocando saxofone',
        photoShape: 'portrait',
        title: 'Saxofone',
        text: 'Desde os 8 anos. É como desacelero.',
        width: 'w-32',
        tilt: '-rotate-8',
        zigzag: 'down',
    },
    {
        icon: '🥋',
        title: 'Artes marciais',
        text: 'Disciplina, dentro e fora do tatame.',
        width: 'w-28',
        tilt: 'rotate-6',
        zigzag: 'up',
    },
    {
        icon: '🐶',
        photo: Street,
        photoAlt: 'Victor passeando com a Laila na rua',
        photoShape: 'portrait',
        title: 'Laila',
        text: 'Musa oficial. Passeio é sagrado.',
        width: 'w-32',
        tilt: '-rotate-4',
        zigzag: 'down',
    },
    {
        icon: '🎮',
        title: 'Jogos online',
        text: 'Sobrou um tempo, eu já chamo os amigo.',
        width: 'w-24',
        tilt: 'rotate-9',
        zigzag: 'up',
    },
    {
        icon: '👨‍👩‍👧',
        photo: grandma,
        photoAlt: 'Victor ao lado da sua avó',
        photoShape: 'square',
        title: 'Amigos & família',
        text: 'Churrasco, restaurante, casa da vó.',
        width: 'w-28',
        tilt: '-rotate-7',
        zigzag: 'down',
    },
    {
        icon: '🍳',
        title: 'Cozinha',
        text: 'Gosto de uma receita nova e amo pizza.',
        width: 'w-28',
        tilt: 'rotate-3',
        zigzag: 'up',
    },
    {
        icon: '📚',
        title: 'Filosofia',
        text: 'Curiosidade antes de obrigação.',
        width: 'w-24',
        tilt: '-rotate-9',
        zigzag: 'up',
    },
];

export function PageAboutMe() {
    return (
        <>
            <section className="pt-24 pb-8 md:pt-28 md:pb-10">
                <div className="container-page flex flex-col items-center gap-8 text-center">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-secondaryL">
                            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primaryL" />
                            Sobre mim
                        </span>
                        <h1 className="mt-3 text-4xl md:text-5xl font-black text-ink">Minha história</h1>
                        <p className="mx-auto mt-4 max-w-2xl text-inkSoft md:text-lg leading-relaxed">
                            De onde venho, o que me move e o que faço fora do código.
                        </p>
                    </div>

                    <img
                        src={park}
                        alt="Victor passeando no parque com a sua cachorra Laila"
                        width="744"
                        height="810"
                        decoding="async"
                        className="w-4/5 max-w-md rounded-3xl shadow-lg sm:w-2/3 md:w-1/2 lg:w-1/3"
                    />
                </div>
            </section>

            {/* Contexto profissional em UM paragrafo, nao mais timeline: a trajetoria
                completa ja tem casa propria em /experiencia. */}
            <section className="pb-12 md:pb-16">
                <div className="container-page max-w-2xl text-center">
                    <p className="leading-relaxed text-inkSoft md:text-lg">
                        Conheci o desenvolvimento de software em 2022 e não parei mais: o que me prendeu foi
                        pegar uma ideia e ver ela virar algo que existe e que outras pessoas usam. Hoje sou
                        desenvolvedor frontend júnior na Noweb Publicidade, meu primeiro time de produto, a
                        trajetória completa está na aba Experiência.
                    </p>
                </div>
            </section>

            {/* O foco real da pagina, a pedido do Victor: fileira unica em
                zigue-zague, do jeito que ele desenhou. Cada hobby diz se sobe ou
                desce via `hobby.zigzag` (nao mais par/impar por indice — ele
                pediu pra inverter especificamente as fotos com alguns emoji).
                `flex` sem wrap mantem tudo numa linha so. */}
            <section className="border-y border-ink/10 bg-white py-12 md:py-20">
                <div className="container-page">
                    <h2 className="text-center text-2xl md:text-3xl font-bold text-ink">
                        O que eu curto fazer fora do código
                    </h2>
                </div>

                {/* Full-bleed sem o truque de `w-screen`/`left-1/2`: esta div e filha
                    direta da `<section>`, e nenhum ancestral ate o body tem padding
                    (so os `container-page` tem, e este elemento nao esta dentro de
                    um) — entao ela ja cobre a tela inteira sozinha, sem risco da
                    barra de rolagem vertical cortar 1 fileira de pixels como
                    aconteceria com `100vw`.
                    `py-10` aqui nao e estetico, e funcional: como `translate-y` e so
                    transform, nao conta pro tamanho da caixa em layout — sem essa
                    folga vertical o zigue-zague cortava as pontas de cima/baixo das
                    fotos deslocadas. */}
                <div className="mt-4 overflow-x-auto md:mt-8">
                    <div className="flex items-center justify-center gap-3 px-4 py-10 md:gap-5">
                        {hobbies.map((hobby) => (
                            <div
                                key={hobby.title}
                                className={`shrink-0 text-center ${
                                    hobby.zigzag === 'up' ? '-translate-y-10' : 'translate-y-10'
                                }`}
                            >
                                <div
                                    className={`inline-block rounded-sm bg-white p-2 pb-3 shadow-lg ${hobby.width} ${hobby.tilt}`}
                                >
                                    {hobby.photo ? (
                                        <img
                                            src={hobby.photo}
                                            alt={hobby.photoAlt}
                                            loading="lazy"
                                            decoding="async"
                                            className={`w-full object-cover ${
                                                hobby.photoShape === 'square' ? 'aspect-square' : 'aspect-[2/3]'
                                            }`}
                                        />
                                    ) : (
                                        <span
                                            aria-hidden="true"
                                            className="grid aspect-square w-full place-items-center bg-primaryL/15 text-3xl"
                                        >
                                            {hobby.icon}
                                        </span>
                                    )}
                                </div>
                                <h3 className="mt-3 text-sm font-bold text-ink">{hobby.title}</h3>
                                <p className="mt-1 text-xs italic leading-snug text-inkSoft">{hobby.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container-page flex flex-col items-center gap-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-ink">
                        Quer ver o lado profissional?
                    </h2>
                    <div className="flex w-full gap-3 sm:w-auto">
                        <Button
                            to="/experiencia"
                            variant="primary"
                            size="lg"
                            className="flex-1 max-sm:px-3 max-sm:py-2.5 max-sm:text-sm sm:flex-none"
                        >
                            Minha experiência
                        </Button>
                        <Button
                            href={links.curriculo}
                            external
                            variant="outline"
                            size="lg"
                            className="flex-1 max-sm:px-3 max-sm:py-2.5 max-sm:text-sm sm:flex-none"
                        >
                            Baixar currículo
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
