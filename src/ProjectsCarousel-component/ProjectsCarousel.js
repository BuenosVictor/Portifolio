import { useState } from 'react';
import ArrowLeft from './Arrow-left.svg';
import ArrowRight from './Arrow-right.svg';
import HTML from './HTML.svg';
import CSS from './CSS.svg';
import Javascript from './Javascript.svg';
import WheatherProject from './Weather.svg';
import PokemonProject from './Pokemon.svg';
import OnePieceProject from './OnePiece.svg';
import MemoryProject from './Memory.svg';
import gitHub from './Github.svg';
import ArrowForLinks from './ArrowForLinks.svg';

export function ProjectsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("right");
    const [animate, setAnimate] = useState(false);

    const projects = [
        { 
            image: WheatherProject, 
            text: 'PrevisãoPro: O site utiliza a Weather API para fornecer informações precisas sobre o clima em países ao redor do mundo. Desenvolvido com o objetivo de aprofundar meus conhecimentos em consumo de APIs, ele exibe dados como temperatura, umidade, previsão e outras informações úteis sobre o tempo de forma clara e acessível.',
            githubLink: 'https://github.com/BuenosVictor/App-Clima',
            accessLink: 'https://app-clima-victor.netlify.app/'
        },
        { 
            image: PokemonProject, 
            text: 'PokeInfo: O projeto começou como um desafio para melhorar minhas habilidades em CSS e iniciar o aprendizado de lógica de programação, mas, com o tempo, evoluiu para incluir funcionalidades como busca de Pokémons, com informações detalhadas sobre descrições, fraquezas e habitats.',
            githubLink: 'https://github.com/BuenosVictor/Pokedex',
            accessLink: 'https://victor-pokedex.netlify.app/'
        },
        { 
            image: OnePieceProject, 
            text: 'DevPiece: Este projeto foi desenvolvido durante um evento com os irmãos Ricardo e Roberto, fundadores do canal DevEmDobro. Criei uma aplicação inspirada no anime One Piece, usando animações em CSS e funcionalidades simples em JavaScript. Foi meu primeiro contato com uma comunidade de programadores, o que foi essencial para resolver problemas neste projeto e em outros futuros, além de fortalecer meu interesse pela área.',
            githubLink: 'https://github.com/BuenosVictor/One-Piece',
            accessLink: 'https://one-piece-layout.netlify.app/'
        },
        { 
            image: MemoryProject, 
            text: 'MemoryQuest: Este projeto foi um grande desafio, pois exigia uma boa organização do código em CSS, HTML e JavaScript. Focado em melhorar minhas habilidades em JavaScript e lógica de programação, também foi quando recebi o maior apoio da minha mentoria. A orientação de um desenvolvedor sênior, que questionava e validava minhas escolhas de implementação, foi fundamental para o meu crescimento.',
            githubLink: 'https://github.com/BuenosVictor/Jogo-da-Memoria',
            accessLink: 'https://jogo-da-memoria-victor.netlify.app/'
        },
    ];

    const nextProject = () => {
        if (currentIndex < projects.length - 1) {
            setAnimate(true);
            setDirection("right");
            setTimeout(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1);
                setAnimate(false);
            }, 500); // Tempo da animação
        }
    };

    const prevProject = () => {
        if (currentIndex > 0) {
            setDirection("left");
            setAnimate(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => prevIndex - 1);
                setAnimate(false);
            }, 500); // Tempo da animação
        }
    };

    return (
        <section id="ProjectsCarousel" className="bg-primaryL grid grid-cols-[50vw_50vw] grid-rows-[10%_90%] border-y-2 border-black  h-fit pt-10 pb-10 place-items-center gap-y-7">
            <h4 className="row-span-1 col-span-3 text-4xl font-black">Projetos</h4>

            <div className="flex items-center col-start-1 col-end-2 place-content-center gap-10 flex-col">
                <div className="flex gap-10 justify-between items-center w-full">
                    <img
                        src={ArrowLeft}
                        alt="Seta Esquerda"
                        className="cursor-pointer h-fit border-2 rounded-xl border-transparent hover:border-black"
                        onClick={prevProject}
                    />

                    
                    <div className="w-fit">
                        <img
                            src={projects[currentIndex]?.image}
                            alt={`Projeto ${currentIndex + 1}`}
                            className="bg-white rounded-3xl drop-shadow-2xl p-4 place-self-center object-contain w-[20vw] h-[40vh]"
                        />

                        <div className='flex pt-5 justify-between gap-5'>
                            <a
                                href={projects[currentIndex]?.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primaryL w-full flex justify-center items-center text-white py-2 px-4 rounded-xl border-2 border-black transition duration-300 hover:bg-[#ecb900]"
                            >
                                <img src={gitHub} alt="GitHub" /> Código
                            </a>
                            <a
                                href={projects[currentIndex]?.accessLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primaryL w-full flex justify-center items-center text-white py-2 px-4 rounded-xl border-2 border-black transition duration-300 hover:bg-[#ecb900]"
                            >
                                <img src={ArrowForLinks} alt="Acessar" /> Acessar
                            </a>
                        </div>
                    </div>

                    <img
                        src={ArrowRight}
                        alt="Seta Direita"
                        className="border-2 border-transparent rounded-xl hover:border-black cursor-pointer h-fit"
                        onClick={nextProject}
                    />
                </div>
            </div>

            {/* Contêiner com overflow hidden para limitar o espaço da animação */}
            <article className="col-start-2 col-end-3 flex gap-y-10 pt-3 pb-5 flex-col items-center w-[40vw] overflow-hidden">
                <h5
                    className={`text-center font-bold text-4xl border-b-[3px] border-detail transform transition-all duration-500 ease-in-out ${animate ? (direction === "right" ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0') : 'translate-x-0 opacity-100'
                        }`}
                >
                    {projects[currentIndex]?.text.split(':')[0]}
                </h5>
                <p
                    className={`text-center text-2xl transform transition-all duration-500 h-[40vh] ease-in-out delay-200 ${animate ? (direction === "right" ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0') : 'translate-x-0 opacity-100'
                        }`}
                >
                    {projects[currentIndex]?.text.split(':')[1]}
                </p>
                <h6
                    className={`text-center text-2xl transform transition-all duration-500 ease-in-out delay-400 ${animate ? (direction === "right" ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0') : 'translate-x-0 opacity-100'
                        }`}
                >
                    Tecnologias Utilizadas:
                </h6>
                <div
                    className={`w-fit gap-x-24 flex place-items-center transform transition-all duration-500 ease-in-out delay-600 ${animate ? (direction === "right" ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0') : 'translate-x-0 opacity-100'
                        }`}
                >
                    <div className='flex flex-col items-center transition duration-300 rounded-lg hover:bg-[#ecb900] w-24 h-24 justify-center cursor-pointer'>
                        <img className="row-start-1 w-12" alt="HTML" src={HTML} />
                        <p className="text-xl">HTML</p>
                    </div>
                    <div className='flex flex-col items-center transition duration-300 rounded-lg hover:bg-[#ecb900] w-24 h-24 justify-center cursor-pointer'>
                        <img className="row-start-1 w-12" alt="CSS" src={CSS} />
                        <p className="text-xl">CSS</p>
                    </div>
                    <div className='flex flex-col items-center transition duration-300 rounded-lg hover:bg-[#ecb900] w-24 h-24 justify-center cursor-pointer'>
                        <img className="row-start-1 w-12" alt="Javascript" src={Javascript} />
                        <p className="text-xl">Javascript</p>
                    </div>
                </div>
            </article>
        </section>
    );
}