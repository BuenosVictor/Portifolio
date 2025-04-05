import '../index.css'
import WheatherProject from './Weather.svg'
import PokemonProject from './Pokemon.svg'
import OnePieceProject from './OnePiece.svg'
import MemoryProject from './Memory.svg'
import gitHub from './Github.svg'
import ArrowForLinks from './ArrowForLinks.svg'

export function ProjectsPage() {
    return (
        <section className='pt-28 toFit flex flex-col gap-10 pb-24'>

            {/* 1º Projeto */}
            <div className='bg-white place-content-center rounded-3xl drop-shadow-2xl'>
                <article className='flex py-32 px-16 w-full m-auto justify-around gap-x-8'>
                    <img className='w-48 h-48 object-cover' alt='PrevisãoPro' src={WheatherProject} />
                    <div className='flex flex-col h-[30vh] w-2/4 items-center text-center justify-around'>
                        <h3 className='text-4xl mb-6 leading-snug'>PrevisãoPro</h3>
                        <p>Receba informações meteorológicas em tempo real, como temperatura, vento e umidade, ao digitar o nome de qualquer cidade.</p>
                        <div className='flex justify-around w-full h-full'>
                            <div className='flex items-center gap-x-6'>
                                <a href="https://github.com/BuenosVictor/App-Clima" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL h-14 flex justify-center items-center text-white py-2 px-4 rounded-xl border-2 border-black transition duration-300 hover:bg-[#ecb900]">
                                        <img src={gitHub} alt="GitHub" /> Código
                                    </button>
                                </a>
                                <a href="https://app-clima-victor.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL flex h-14 justify-center items-center text-white py-2 px-4 rounded-xl border-2 border-black transition duration-300 hover:bg-[#ecb900]">
                                        <img src={ArrowForLinks} alt="Acessar" /> Acessar
                                    </button>
                                </a>
                            </div>
                            <ol className='flex gap-x-4 items-center'>
                                <li className='border-2 p-2 rounded-2xl border-CSS text-CSS transition duration-300 hover:bg-CSS hover:text-white'>CSS</li>
                                <li className='border-2 p-2 rounded-2xl border-HTML text-HTML transition duration-300 hover:bg-HTML hover:text-white'>HTML</li>
                                <li className='border-2 p-2 rounded-2xl border-JS text-JS transition duration-300 hover:bg-JS hover:text-white'>Javascript</li>
                            </ol>
                        </div>
                    </div>
                </article>
            </div>

            {/* 2º Projeto */}
            <div className='bg-white place-content-center rounded-3xl drop-shadow-2xl'>
                <article className='flex flex-row-reverse py-32 px-16 w-full m-auto justify-around gap-x-8'>
                    <img className='w-48 h-48 object-cover' alt='MemoryQuest' src={MemoryProject} />
                    <div className='flex flex-col h-[30vh] w-2/4 items-center text-center justify-around'>
                        <h3 className='text-4xl mb-6 leading-snug'>MemoryQuest</h3>
                        <p>Treine sua memória encontrando pares de personagens de animes populares. Cada jogada conta para o seu recorde final!</p>
                        <div className='flex justify-around w-full h-full'>
                            <div className='flex items-center gap-x-6'>
                                <a href="https://github.com/BuenosVictor/Jogo-da-Memoria" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL h-14 flex justify-center items-center text-white py-2 px-4 rounded-xl border-2 border-black transition duration-300 hover:bg-[#ecb900]">
                                        <img src={gitHub} alt="GitHub" /> Código
                                    </button>
                                </a>
                                <a href="https://jogo-da-memoria-victor.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL flex h-14 justify-center items-center text-white py-2 px-4 rounded-xl border-2 border-black transition duration-300 hover:bg-[#ecb900]">
                                        <img src={ArrowForLinks} alt="Acessar" /> Acessar
                                    </button>
                                </a>
                            </div>
                            <ol className='flex gap-x-4 items-center'>
                                <li className='border-2 p-2 rounded-2xl border-CSS text-CSS transition duration-300 hover:bg-CSS hover:text-white'>CSS</li>
                                <li className='border-2 p-2 rounded-2xl border-HTML text-HTML transition duration-300 hover:bg-HTML hover:text-white'>HTML</li>
                                <li className='border-2 p-2 rounded-2xl border-JS text-JS transition duration-300 hover:bg-JS hover:text-white'>Javascript</li>
                            </ol>
                        </div>
                    </div>
                </article>
            </div>

            {/* 3º Projeto */}
            <div className='bg-white place-content-center rounded-3xl drop-shadow-2xl'>
                <article className='flex py-32 px-16 w-full m-auto justify-around gap-x-8'>
                    <img className='w-48 h-48 object-cover' alt='DevPiece' src={OnePieceProject} />
                    <div className='flex flex-col h-[30vh] w-2/4 items-center text-center justify-around'>
                        <h3 className='text-4xl mb-6 leading-snug'>DevPiece</h3>
                        <p>Explore o mundo de One Piece com uma enciclopédia interativa que exibe informações sobre seus personagens favoritos da série.</p>
                        <div className='flex justify-around w-full h-full'>
                            <div className='flex items-center gap-x-6'>
                                <a href="https://github.com/BuenosVictor/One-Piece" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL h-14 flex justify-center items-center text-white py-2 px-4 rounded-xl border-2 border-black transition duration-300 hover:bg-[#ecb900]">
                                        <img src={gitHub} alt="GitHub" /> Código
                                    </button>
                                </a>
                                <a href="https://one-piece-layout.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL flex h-14 justify-center items-center text-white py-2 px-4 rounded-xl border-2 border-black transition duration-300 hover:bg-[#ecb900]">
                                        <img src={ArrowForLinks} alt="Acessar" /> Acessar
                                    </button>
                                </a>
                            </div>
                            <ol className='flex gap-x-4 items-center'>
                                <li className='border-2 p-2 rounded-2xl border-CSS text-CSS transition duration-300 hover:bg-CSS hover:text-white'>CSS</li>
                                <li className='border-2 p-2 rounded-2xl border-HTML text-HTML transition duration-300 hover:bg-HTML hover:text-white'>HTML</li>
                                <li className='border-2 p-2 rounded-2xl border-JS text-JS transition duration-300 hover:bg-JS hover:text-white'>Javascript</li>
                            </ol>
                        </div>
                    </div>
                </article>
            </div>

            {/* 4º Projeto */}
            <div className='bg-white place-content-center rounded-3xl drop-shadow-2xl'>
                <article className='flex flex-row-reverse py-32 px-16 w-full m-auto justify-around gap-x-8'>
                    <img className='w-48 h-48 object-cover' alt='PokeInfo' src={PokemonProject} />
                    <div className='flex flex-col h-[30vh] w-2/4 items-center text-center justify-around'>
                        <h3 className='text-4xl mb-6 leading-snug'>PokeInfo</h3>
                        <p>Descubra informações detalhadas dos seus pokémons favoritos: tipo, habilidades, número na pokédex e muito mais.</p>
                        <div className='flex justify-around w-full h-full'>
                            <div className='flex items-center gap-x-6'>
                                <a href="https://github.com/BuenosVictor/Pokedex" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL h-14 flex justify-center items-center text-white py-2 px-4 rounded-xl border-2 border-black transition duration-300 hover:bg-[#ecb900]">
                                        <img src={gitHub} alt="GitHub" /> Código
                                    </button>
                                </a>
                                <a href="https://victor-pokedex.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primaryL flex h-14 justify-center items-center text-white py-2 px-4 rounded-xl border-2 border-black transition duration-300 hover:bg-[#ecb900]">
                                        <img src={ArrowForLinks} alt="Acessar" /> Acessar
                                    </button>
                                </a>
                            </div>
                            <ol className='flex gap-x-4 items-center'>
                                <li className='border-2 p-2 rounded-2xl border-CSS text-CSS transition duration-300 hover:bg-CSS hover:text-white'>CSS</li>
                                <li className='border-2 p-2 rounded-2xl border-HTML text-HTML transition duration-300 hover:bg-HTML hover:text-white'>HTML</li>
                                <li className='border-2 p-2 rounded-2xl border-JS text-JS transition duration-300 hover:bg-JS hover:text-white'>Javascript</li>
                            </ol>
                        </div>
                    </div>
                </article>
            </div>

        </section>
    )
}
