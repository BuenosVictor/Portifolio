import grandma from './img/grandmaAndMe.jpg';
import saxophone from './img/saxophone.jpg';
import Street from './img/LailaInStreet.jpg';
import park from './img/Park.jpg';

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
        tilt: 'rotate-9',
        zigzag: 'down',
    },
    {
        icon: '🥋',
        title: 'Artes marciais',
        text: 'Disciplina, dentro e fora do tatame.',
        width: 'w-28',
        tilt: '-rotate-5',
        zigzag: 'up',
    },
    {
        icon: '🎮',
        title: 'Jogos online',
        text: 'Sobrou um tempo, eu já chamo os amigo.',
        width: 'w-24',
        tilt: 'rotate-11',
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
        tilt: 'rotate-6',
        zigzag: 'down',
    },
    {
        icon: '📚',
        title: 'Filosofia',
        text: 'Curiosidade antes de obrigação.',
        width: 'w-24',
        tilt: '-rotate-4',
        zigzag: 'up',
    },
    {
        icon: '🍳',
        title: 'Cozinha',
        text: 'Gosto de uma receita nova e amo pizza.',
        width: 'w-28',
        tilt: 'rotate-10',
        zigzag: 'up',
    },
    {
        icon: '👨‍👩‍👧',
        photo: grandma,
        photoAlt: 'Victor ao lado da sua avó',
        photoShape: 'square',
        title: 'Amigos & família',
        text: 'Churrasco, restaurante, casa da vó.',
        width: 'w-32',
        tilt: '-rotate-7',
        zigzag: 'down',
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

            {/* A pedido do Victor: fileira unica em zigue-zague no desktop, do jeito
                que ele desenhou. Os 7 quadrados (96-128px cada) nao cabem numa linha
                so abaixo de ~904px de conteudo + gap (contando o padding do
                `container-page`, sobra por volta de 1216px de tela pra caber) — por
                isso o scroll lateral que existia antes. Trocado por `flex-wrap`:
                abaixo de `xl` os itens quebram em varias linhas (zigue-zague
                desligado, so ativa em `xl:` onde a linha unica realmente cabe, senao
                o translate-y de uma linha vaza visualmente por cima da vizinha).
                Cada hobby diz se sobe ou desce via `hobby.zigzag` (nao mais
                par/impar por indice — ele pediu pra inverter especificamente as
                fotos com alguns emoji). */}
            <section className="border-y border-ink/10 bg-white py-12 md:py-20">
                <div className="container-page">
                    <h2 className="text-center text-2xl md:text-3xl font-bold text-ink">
                        O que eu curto fazer fora do código
                    </h2>
                </div>

                {/* `xl:py-10` acompanha o `xl:translate-y-10` do zigue-zague: como
                    transform nao conta pro tamanho da caixa em layout, sem essa folga
                    vertical o deslocamento cortava as pontas de cima/baixo das fotos. */}
                <div className="container-page mt-4 md:mt-8">
                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-10 py-6 md:gap-x-5 xl:flex-nowrap xl:py-10">
                        {hobbies.map((hobby) => (
                            <div
                                key={hobby.title}
                                className={`shrink-0 text-center ${
                                    hobby.zigzag === 'up' ? 'xl:-translate-y-10' : 'xl:translate-y-10'
                                }`}
                            >
                                <div
                                    className={`inline-block rounded-sm bg-white p-2 pb-3 shadow-lg ${hobby.width} ${hobby.tilt}`}
                                >
                                    {hobby.photo ? (
                                        <img
                                            src={hobby.photo}
                                            alt={hobby.photoAlt}
                                            loading="eager"
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
        </>
    );
}
