import '../index.css'
import { useState } from 'react'
import WeatherProject from './img/Weather.svg'
import WeatherGif from './img/Weather.gif'
import PokemonProject from './img/Pokemon.svg'
import PokemonGif from './img/pokedex.gif'
import OnePieceProject from './img/OnePiece.svg'
import OnePieceGif from './img/OnePiece.gif'
import MemoryProject from './img/Memory.svg'
import MemoryGif from './img/Memory.gif'
import gitHub from './img/Github.svg'
import ArrowForLinks from './img/ArrowForLinks.svg'

export function ProjectsPage() {
    const [hoverWeather, setHoverWeather] = useState(false)
    const [hoverMemory, setHoverMemory] = useState(false)
    const [hoverOnePiece, setHoverOnePiece] = useState(false)
    const [hoverPokemon, setHoverPokemon] = useState(false)

    return (
        <section className='pt-28 toFit flex flex-col gap-16 pb-24 px-4 md:px-8'>

    
            <div className='bg-white rounded-3xl drop-shadow-2xl transition duration-300 hover:scale-[1.015] hover:shadow-2xl border-2 border-gray-100 overflow-hidden'>
            <article className='flex flex-col lg:flex-row-reverse py-12 md:py-16 lg:py-20 px-8 md:px-12 lg:px-16 w-full m-auto justify-around items-center gap-8 md:gap-12'
                    onMouseEnter={() => setHoverWeather(true)}
                    onMouseLeave={() => setHoverWeather(false)}>
                    <div className='flex justify-center lg:justify-start lg:w-auto'>
                      
                        <img
                            className={`w-40 h-40 md:w-48 md:h-48 object-contain transition duration-300 ${hoverWeather ? "opacity-100 scale-150" : "opacity-100 scale-100"}`}
                            alt='PrevisãoPro'
                            src={hoverWeather ? WeatherGif : WeatherProject}
                        />
                    </div>
                    <div className='flex flex-col flex-1 items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl'>
                        <div className='w-full'>
                            <h3 className='text-3xl md:text-4xl font-bold text-secondaryL mb-4'>Ventus</h3>
                            <p className='text-gray-600 md:text-lg'>O site utiliza a Weather API para fornecer informações precisas sobre o clima em países ao redor do mundo. Desenvolvido com o objetivo de aprofundar meus conhecimentos em consumo de APIs, ele exibe dados como temperatura, umidade, previsão e outras informações úteis sobre o tempo de forma clara e acessível.</p>
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

            <div className='bg-white rounded-3xl drop-shadow-2xl transition duration-300 hover:scale-[1.015] hover:shadow-2xl border-2 border-gray-100 overflow-hidden'>
                <article className='flex flex-col lg:flex-row-reverse py-12 md:py-16 lg:py-20 px-8 md:px-12 lg:px-16 w-full m-auto justify-around items-center gap-8 md:gap-12'
                    onMouseEnter={() => setHoverMemory(true)}
                    onMouseLeave={() => setHoverMemory(false)}>
                    <div className='flex justify-center lg:justify-start lg:w-auto'>
                        <img
                            className={`w-40 h-40 md:w-48 md:h-48 object-contain transition duration-300 ${hoverMemory ? "opacity-100 scale-150 " : "opacity-100 scale-100"}`}
                            alt='MemoryQuest'
                            src={hoverMemory ? MemoryGif : MemoryProject}
                        />
                    </div>
                    <div className='flex flex-col flex-1 items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl'>
                        <div className='w-full'>
                            <h3 className='text-3xl md:text-4xl font-bold text-secondaryL mb-4'>Code Pairs</h3>
                            <p className='text-gray-600 md:text-lg'>Este projeto foi um grande desafio, pois exigia uma boa organização do código em CSS, HTML e JavaScript. Focado em melhorar minhas habilidades em JavaScript e lógica de programação, também foi quando recebi o maior apoio da minha mentoria. A orientação de um desenvolvedor sênior, que questionava e validava minhas escolhas de implementação, foi fundamental para o meu crescimento.</p>
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


            <div className='bg-white rounded-3xl drop-shadow-2xl transition duration-300 hover:scale-[1.015] hover:shadow-2xl border-2 border-gray-100 overflow-hidden'>
                <article
                    className='flex flex-col lg:flex-row py-12 md:py-16 lg:py-20 px-8 md:px-12 lg:px-16 w-full m-auto justify-around items-center gap-8 md:gap-12'
                    onMouseEnter={() => setHoverOnePiece(true)}
                    onMouseLeave={() => setHoverOnePiece(false)}
                >
                    <div className='flex justify-center lg:justify-start lg:w-auto'>
                        <img
                                className={`w-40 h-40 md:w-48 md:h-48 object-contain transition duration-300 ${hoverOnePiece ? "opacity-100 scale-150 " : "opacity-100 scale-100"}`}
                            alt='DevPiece'
                            src={hoverOnePiece ? OnePieceGif : OnePieceProject}
                        />
                    </div>
                    <div className='flex flex-col flex-1 items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl'>
                        <div className='w-full'>
                            <h3 className='text-3xl md:text-4xl font-bold text-secondaryL mb-4'>One Piece</h3>
                            <p className='text-gray-600 md:text-lg'>Este projeto foi desenvolvido durante um evento com os irmãos Ricardo e Roberto, fundadores do canal DevEmDobro. Criei uma aplicação inspirada no anime One Piece, usando animações em CSS e funcionalidades simples em JavaScript. Foi meu primeiro contato com uma comunidade de programadores, o que foi essencial para resolver problemas neste projeto e em outros futuros, além de fortalecer meu interesse pela área.</p>
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


            <div className='bg-white rounded-3xl drop-shadow-2xl transition duration-300 hover:scale-[1.015] hover:shadow-2xl border-2 border-gray-100 overflow-hidden'>
                <article
                    className='flex flex-col lg:flex-row-reverse py-12 md:py-16 lg:py-20 px-8 md:px-12 lg:px-16 w-full m-auto justify-around items-center gap-8 md:gap-12'
                    onMouseEnter={() => setHoverPokemon(true)}
                    onMouseLeave={() => setHoverPokemon(false)}
                >
                    <div className='flex justify-center lg:justify-start lg:w-auto'>
                        <img
                                className={`w-40 h-40 md:w-48 md:h-48 object-contain transition duration-300 ${hoverPokemon? "opacity-100 scale-150 " : "opacity-100 scale-100"}`}
                            alt='PokéStats'
                            src={hoverPokemon ? PokemonGif : PokemonProject}
                        />
                    </div>
                    <div className='flex flex-col flex-1 items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl'>
                        <div className='w-full'>
                            <h3 className='text-3xl md:text-4xl font-bold text-secondaryL mb-4'>Pokedex</h3>
                            <p className='text-gray-600 md:text-lg'>O projeto começou como um desafio para melhorar minhas habilidades em CSS e iniciar o aprendizado de lógica de programação, mas, com o tempo, pretendo incluir funcionalidades como "busca de Pokémons", com informações detalhadas sobre descrições, fraquezas e habitats.</p>
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