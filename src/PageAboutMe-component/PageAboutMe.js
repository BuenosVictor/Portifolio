import '../index.css'
import EuComALaila from './Eu-com-a-laila.png'

export function PageAboutMe() {
    return (
        <div className="pt-28 toFit flex flex-col gap-y-20 px-4 sm:px-6 md:px-10 lg:px-20 text-neutral-800">
            <img 
                src={EuComALaila} 
                alt="Eu com a Laila" 
                className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto m-auto rounded-3xl shadow-lg transition-transform hover:scale-105 duration-300" 
            />

            <div className="text-center px-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondaryL mb-4">Experiência profissional</h3>
                <p className="text-base sm:text-lg md:text-xl leading-loose max-w-4xl mx-auto">
                    Atualmente trabalho como Operador de Risco, onde sigo veículos e cuido da segurança deles durante todo o trajeto. Gosto de trabalhar em equipe, pois valorizo a troca de conhecimentos. Na minha função atual, aprendi muito sobre comunicação e desenvolvimento profissional. No entanto, depois de conhecer melhor o desenvolvimento de software, decidi mudar de carreira. Durante meu tempo nessa área, aprendi muito sobre comunicação e resolução de problemas, habilidades que considero essenciais e que melhorei bastante no meu trabalho atual.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
                <div className="w-full px-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl pb-5 text-primaryL text-center md:text-left">Fatos aleatórios sobre mim</h3>
                    <ul className="flex flex-col gap-3 list-disc pl-6 text-base sm:text-lg">
                        <li>Faria qualquer coisa por uma pizza deliciosa 🍕</li>
                        <li>Minha cachorrinha Laila é minha musa no portfólio 🐶</li>
                        <li>Recentemente tenho mudado bastante meu visual ✂️</li>
                        <li>Músico desde os 8 anos, comecei com o sax alto 🎷</li>
                        <li>Amo filosofia e estudo desde sempre 📚</li>
                        <li>Plantas são o assunto principal nas visitas à casa da minha avó 🌿</li>
                    </ul>
                </div>
                <img 
                    src={EuComALaila} 
                    alt="Eu com a Laila" 
                    className="w-3/4 sm:w-2/3 md:w-1/2 h-auto rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300" 
                />
            </div>

            <div className="text-center px-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl text-buttonColor font-semibold">
                    Minha parte mais <span className="text-primaryL">Descontraída</span>
                </h3>
                <p className="text-base sm:text-lg md:text-xl leading-loose max-w-4xl mx-auto mt-4">
                    Quando não estou imerso em código, você provavelmente me encontrará praticando artes marciais, jogando online ou testando uma nova receita na cozinha. Gosto de estar cercado de amigos e família, seja em um churrasco ou curtindo um bom restaurante. Além disso, a música é uma parte importante da minha rotina, ajudando a relaxar e manter o equilíbrio.
                </p>
            </div>

            <div className="text-center px-2 pb-28">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondaryL">E pro futuro?</h3>
                <p className="text-base sm:text-lg md:text-xl leading-loose max-w-4xl mx-auto mt-4">
                    Minha jornada na programação começou há dois anos com o curso do Programador BR. Desde então, aprendi com diversos professores online, como o Dev em Dobro e a Rocketseat, e conto com a ajuda de amigos da área e mentoria com um programador sênior, e também amigo, para aprimorar meu código. No futuro, quero participar de hackathons e expandir meu conhecimento para backend, começando com Node.js depois de dominar React.
                </p>
            </div>
        </div>
    )
}
