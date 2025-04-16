import '../index.css'
import WheatherProject from './img/Weather.svg'
import PokemonProject from './img/Pokemon.svg'
import OnePieceProject from './img/OnePiece.svg'
import MemoryProject from './img/Memory.svg'
import gitHub from './img/Github.svg'
import ArrowForLinks from './img/ArrowForLinks.svg'

export function ProjectsPage() {
    return (
        <section className='pt-28 toFit flex flex-col gap-16 pb-24 px-4 md:px-8'>

            {/* 1º Projeto */}
            <div className='bg-white rounded-3xl drop-shadow-2xl transition duration-300 hover:scale-[1.015] hover:shadow-2xl border-2 border-gray-100 overflow-hidden'>
                <article className='flex flex-col lg:flex-row py-12 md:py-16 lg:py-20 px-8 md:px-12 lg:px-16 w-full m-auto justify-around items-center gap-8 md:gap-12'>
                    <div className='flex justify-center lg:justify-start lg:w-auto'>
                        <img className='w-40 h-40 md:w-48 md:h-48 object-contain' alt='PrevisãoPro' src={WheatherProject} />
                    </div>
                    <div className='flex flex-col flex-1 items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl'>
                        <div className='w-full'>
                            <h3 className='text-3xl md:text-4xl font-bold text-secondaryL mb-4'>PrevisãoPro</h3>
                            <p className='text-gray-600 md:text-lg'>Receba informações meteorológicas em tempo real, como temperatura, vento e umidade, ao digitar o nome de qualquer cidade.</p>
                        </div>
                        <div className='w-full flex flex-col items-center lg:items-start gap-6'>
                            <div className='flex flex-wrap justify-center gap-4'>
                                <a href="https://github.com/BuenosVictor/App-Clima" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL h-12 md:h-14 flex items-center gap-x-2 text-gray-900 font-medium py-2 px-6 rounded-xl border-2 border-gray-900 transition duration-300 hover:bg-[#ecb900] hover:shadow-md">
                                        <img src={gitHub} alt="GitHub" className='w-5' /> Código
                                    </button>
                                </a>
                                <a href="https://app-clima-victor.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL h-12 md:h-14 flex items-center gap-x-2 text-gray-900 font-medium py-2 px-6 rounded-xl border-2 border-gray-900 transition duration-300 hover:bg-[#ecb900] hover:shadow-md">
                                        <img src={ArrowForLinks} alt="Acessar" className='w-5' /> Acessar
                                    </button>
                                </a>
                            </div>
                            <ol className='flex flex-wrap justify-center gap-3'>
                                <li className='border-2 px-4 py-1 rounded-full border-CSS text-CSS font-medium shadow-sm transition duration-300 hover:bg-CSS hover:text-white hover:scale-105 text-sm md:text-base'>CSS</li>
                                <li className='border-2 px-4 py-1 rounded-full border-HTML text-HTML font-medium shadow-sm transition duration-300 hover:bg-HTML hover:text-white hover:scale-105 text-sm md:text-base'>HTML</li>
                                <li className='border-2 px-4 py-1 rounded-full border-JS text-JS font-medium shadow-sm transition duration-300 hover:bg-JS hover:text-gray-800 hover:scale-105 text-sm md:text-base'>Javascript</li>
                            </ol>
                        </div>
                    </div>
                </article>
            </div>

            {/* 2º Projeto */}
            <div className='bg-white rounded-3xl drop-shadow-2xl transition duration-300 hover:scale-[1.015] hover:shadow-2xl border-2 border-gray-100 overflow-hidden'>
                <article className='flex flex-col lg:flex-row-reverse py-12 md:py-16 lg:py-20 px-8 md:px-12 lg:px-16 w-full m-auto justify-around items-center gap-8 md:gap-12'>
                    <div className='flex justify-center lg:justify-start lg:w-auto'>
                        <img className='w-40 h-40 md:w-48 md:h-48 object-contain' alt='MemoryQuest' src={MemoryProject} />
                    </div>
                    <div className='flex flex-col flex-1 items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl'>
                        <div className='w-full'>
                            <h3 className='text-3xl md:text-4xl font-bold text-secondaryL mb-4'>MemoryQuest</h3>
                            <p className='text-gray-600 md:text-lg'>Treine sua memória encontrando pares de personagens de animes populares. Cada jogada conta para o seu recorde final!</p>
                        </div>
                        <div className='w-full flex flex-col items-center lg:items-start gap-6'>
                            <div className='flex flex-wrap justify-center gap-4'>
                                <a href="https://github.com/BuenosVictor/Jogo-da-Memoria" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL h-12 md:h-14 flex items-center gap-x-2 text-gray-900 font-medium py-2 px-6 rounded-xl border-2 border-gray-900 transition duration-300 hover:bg-[#ecb900] hover:shadow-md">
                                        <img src={gitHub} alt="GitHub" className='w-5' /> Código
                                    </button>
                                </a>
                                <a href="https://jogo-da-memoria-victor.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL h-12 md:h-14 flex items-center gap-x-2 text-gray-900 font-medium py-2 px-6 rounded-xl border-2 border-gray-900 transition duration-300 hover:bg-[#ecb900] hover:shadow-md">
                                        <img src={ArrowForLinks} alt="Acessar" className='w-5' /> Acessar
                                    </button>
                                </a>
                            </div>
                            <ol className='flex flex-wrap justify-center gap-3'>
                                <li className='border-2 px-4 py-1 rounded-full border-CSS text-CSS font-medium shadow-sm transition duration-300 hover:bg-CSS hover:text-white hover:scale-105 text-sm md:text-base'>CSS</li>
                                <li className='border-2 px-4 py-1 rounded-full border-HTML text-HTML font-medium shadow-sm transition duration-300 hover:bg-HTML hover:text-white hover:scale-105 text-sm md:text-base'>HTML</li>
                                <li className='border-2 px-4 py-1 rounded-full border-JS text-JS font-medium shadow-sm transition duration-300 hover:bg-JS hover:text-gray-800 hover:scale-105 text-sm md:text-base'>Javascript</li>
                            </ol>
                        </div>
                    </div>
                </article>
            </div>

            {/* 3º Projeto */}
            <div className='bg-white rounded-3xl drop-shadow-2xl transition duration-300 hover:scale-[1.015] hover:shadow-2xl border-2 border-gray-100 overflow-hidden'>
                <article className='flex flex-col lg:flex-row py-12 md:py-16 lg:py-20 px-8 md:px-12 lg:px-16 w-full m-auto justify-around items-center gap-8 md:gap-12'>
                    <div className='flex justify-center lg:justify-start lg:w-auto'>
                        <img className='w-40 h-40 md:w-48 md:h-48 object-contain' alt='DevPiece' src={OnePieceProject} />
                    </div>
                    <div className='flex flex-col flex-1 items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl'>
                        <div className='w-full'>
                            <h3 className='text-3xl md:text-4xl font-bold text-secondaryL mb-4'>DevPiece</h3>
                            <p className='text-gray-600 md:text-lg'>Explore o mundo de One Piece com uma enciclopédia interativa que exibe informações sobre seus personagens favoritos da série.</p>
                        </div>
                        <div className='w-full flex flex-col items-center lg:items-start gap-6'>
                            <div className='flex flex-wrap justify-center gap-4'>
                                <a href="https://github.com/BuenosVictor/One-Piece" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL h-12 md:h-14 flex items-center gap-x-2 text-gray-900 font-medium py-2 px-6 rounded-xl border-2 border-gray-900 transition duration-300 hover:bg-[#ecb900] hover:shadow-md">
                                        <img src={gitHub} alt="GitHub" className='w-5' /> Código
                                    </button>
                                </a>
                                <a href="https://one-piece-layout.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL h-12 md:h-14 flex items-center gap-x-2 text-gray-900 font-medium py-2 px-6 rounded-xl border-2 border-gray-900 transition duration-300 hover:bg-[#ecb900] hover:shadow-md">
                                        <img src={ArrowForLinks} alt="Acessar" className='w-5' /> Acessar
                                    </button>
                                </a>
                            </div>
                            <ol className='flex flex-wrap justify-center gap-3'>
                                <li className='border-2 px-4 py-1 rounded-full border-CSS text-CSS font-medium shadow-sm transition duration-300 hover:bg-CSS hover:text-white hover:scale-105 text-sm md:text-base'>CSS</li>
                                <li className='border-2 px-4 py-1 rounded-full border-HTML text-HTML font-medium shadow-sm transition duration-300 hover:bg-HTML hover:text-white hover:scale-105 text-sm md:text-base'>HTML</li>
                                <li className='border-2 px-4 py-1 rounded-full border-JS text-JS font-medium shadow-sm transition duration-300 hover:bg-JS hover:text-gray-800 hover:scale-105 text-sm md:text-base'>Javascript</li>
                            </ol>
                        </div>
                    </div>
                </article>
            </div>

            {/* 4º Projeto */}
            <div className='bg-white rounded-3xl drop-shadow-2xl transition duration-300 hover:scale-[1.015] hover:shadow-2xl border-2 border-gray-100 overflow-hidden'>
                <article className='flex flex-col lg:flex-row-reverse py-12 md:py-16 lg:py-20 px-8 md:px-12 lg:px-16 w-full m-auto justify-around items-center gap-8 md:gap-12'>
                    <div className='flex justify-center lg:justify-start lg:w-auto'>
                        <img className='w-40 h-40 md:w-48 md:h-48 object-contain' alt='PokeInfo' src={PokemonProject} />
                    </div>
                    <div className='flex flex-col flex-1 items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl'>
                        <div className='w-full'>
                            <h3 className='text-3xl md:text-4xl font-bold text-secondaryL mb-4'>PokeInfo</h3>
                            <p className='text-gray-600 md:text-lg'>Descubra informações detalhadas dos seus pokémons favoritos: tipo, habilidades, número na pokédex e muito mais.</p>
                        </div>
                        <div className='w-full flex flex-col items-center lg:items-start gap-6'>
                            <div className='flex flex-wrap justify-center gap-4'>
                                <a href="https://github.com/BuenosVictor/Pokedex" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL h-12 md:h-14 flex items-center gap-x-2 text-gray-900 font-medium py-2 px-6 rounded-xl border-2 border-gray-900 transition duration-300 hover:bg-[#ecb900] hover:shadow-md">
                                        <img src={gitHub} alt="GitHub" className='w-5' /> Código
                                    </button>
                                </a>
                                <a href="https://victor-pokedex.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL h-12 md:h-14 flex items-center gap-x-2 text-gray-900 font-medium py-2 px-6 rounded-xl border-2 border-gray-900 transition duration-300 hover:bg-[#ecb900] hover:shadow-md">
                                        <img src={ArrowForLinks} alt="Acessar" className='w-5' /> Acessar
                                    </button>
                                </a>
                            </div>
                            <ol className='flex flex-wrap justify-center gap-3'>
                                <li className='border-2 px-4 py-1 rounded-full border-CSS text-CSS font-medium shadow-sm transition duration-300 hover:bg-CSS hover:text-white hover:scale-105 text-sm md:text-base'>CSS</li>
                                <li className='border-2 px-4 py-1 rounded-full border-HTML text-HTML font-medium shadow-sm transition duration-300 hover:bg-HTML hover:text-white hover:scale-105 text-sm md:text-base'>HTML</li>
                                <li className='border-2 px-4 py-1 rounded-full border-JS text-JS font-medium shadow-sm transition duration-300 hover:bg-JS hover:text-gray-800 hover:scale-105 text-sm md:text-base'>Javascript</li>
                            </ol>
                        </div>
                    </div>
                </article>
            </div>

        </section>
    )
}