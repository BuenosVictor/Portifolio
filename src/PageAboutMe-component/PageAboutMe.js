import '../index.css'
import grandma from './img/grandmaAndMe.png'
import saxophone from './img/saxophone.png'
import Street from './img/LailaInStreet.png'
import park from './img/Park.png'
export function PageAboutMe() {
    return (
        <div className="pt-28 toFit flex flex-col gap-y-10 md:gap-y-16 px-4 sm:px-6 md:px-10 lg:px-20 text-neutral-800">
            <img
                src={park}
                alt="Eu com a Laila"
                className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto m-auto rounded-3xl shadow-lg transition-transform hover:scale-105 duration-300"
            />

            <div className="text-center px-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondaryL mb-4">Experiência profissional</h3>
                <p className="text-sm sm:text-base md:text-lg leading-loose max-w-4xl mx-auto">
                    Atualmente trabalho como Operador de Risco, onde sigo veículos e cuido da segurança deles durante todo o trajeto. Gosto de trabalhar em equipe, pois valorizo a troca de conhecimentos. Na minha função atual, aprendi muito sobre comunicação e desenvolvimento profissional. No entanto, depois de conhecer melhor o desenvolvimento de software, decidi mudar de carreira. Durante meu tempo nessa área, aprendi muito sobre comunicação e resolução de problemas, habilidades que considero essenciais e que melhorei bastante no meu trabalho atual.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
                <div className="w-full px-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl  pb-5 text-primaryL text-center md:text-left">Fatos aleatórios sobre mim</h3>
                    <ul className="flex flex-col gap-3 list-disc pl-6 text-sm sm:text-base">
                        <li>Músico desde os 8 anos, comecei com o sax alto 🎷</li>
                        <li>Amo filosofia e estudo desde sempre 📚</li>
                        <li>Plantas são o assunto principal nas visitas à casa da minha avó 🌿</li>
                        <li>Minha cachorrinha Laila é minha musa no portfólio 🐶</li>
                        <li>Faria qualquer coisa por uma pizza deliciosa 🍕</li>
                    </ul>
                </div>
                <div className="relative flex flex-col items-center w-full">

                    <img
                        src={Street}
                        alt="Passeando com a Laila"
                        className="rounded-3xl shadow-xl w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-cover z-10"
                    />
                    <img
                        src={saxophone}
                        alt="Tocando saxofone"
                        className="absolute top-4 left-4 w-24 sm:w-28 md:w-32 rounded-2xl shadow-md object-cover transform hover:scale-105 transition-transform duration-300 z-20"
                    />


                    <img
                        src={grandma}
                        alt="Com minha avó"
                        className="absolute bottom-4 right-4 w-24 sm:w-28 md:w-32 rounded-2xl shadow-md object-cover transform hover:scale-105 transition-transform duration-300 z-20"
                    />
                </div>


            </div>

            <div className="text-center px-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl text-buttonColor font-semibold">
                    Minha parte mais <span className="text-primaryL">Descontraída</span>
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-loose max-w-4xl mx-auto mt-4">
                    Quando não estou imerso em código, você provavelmente me encontrará praticando artes marciais, jogando online ou testando uma nova receita na cozinha. Gosto de estar cercado de amigos e família, seja em um churrasco ou curtindo um bom restaurante. Além disso, a música é uma parte importante da minha rotina, ajudando a relaxar e manter o equilíbrio.
                </p>
            </div>

            <div className="text-center px-2 pb-28">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondaryL">E pro futuro?</h3>
                <p className="text-sm sm:text-base md:text-lg leading-loose max-w-4xl mx-auto mt-4">
                    Minha jornada na programação começou há dois anos com o curso do Programador BR. Desde então, aprendi com diversos professores online, como o Dev em Dobro e a Rocketseat, e conto com a ajuda de amigos da área e mentoria com um programador sênior, e também amigo, para aprimorar meu código. No futuro, quero participar de hackathons e expandir meu conhecimento para backend, começando com Node.js depois de dominar React.
                </p>
            </div>
        </div>
    )
}
