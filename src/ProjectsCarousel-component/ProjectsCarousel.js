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
    const [animate, setAnimate] = useState(false);

    const projects = [
        {
            image: WheatherProject,
            text: 'PrevisãoPro: O site utiliza a Weather API para fornecer informações precisas sobre o clima em países ao redor do mundo. Desenvolvido com o objetivo de aprofundar meus conhecimentos em consumo de APIs, ele exibe dados como temperatura, umidade, previsão e outras informações úteis sobre o tempo de forma clara e acessível.',
            githubLink: 'https://github.com/BuenosVictor/App-Clima',
            accessLink: 'https://app-clima-victor.netlify.app/',
        },
        {
            image: PokemonProject,
            text: 'PokeInfo: O projeto começou como um desafio para melhorar minhas habilidades em CSS e iniciar o aprendizado de lógica de programação, mas, com o tempo, pretendo incluir funcionalidades como "busca de Pokémons", com informações detalhadas sobre descrições, fraquezas e habitats.',
            githubLink: 'https://github.com/BuenosVictor/Pokedex',
            accessLink: 'https://victor-pokedex.netlify.app/',
        },
        {
            image: OnePieceProject,
            text: 'DevPiece: Este projeto foi desenvolvido durante um evento com os irmãos Ricardo e Roberto, fundadores do canal DevEmDobro. Criei uma aplicação inspirada no anime One Piece, usando animações em CSS e funcionalidades simples em JavaScript. Foi meu primeiro contato com uma comunidade de programadores, o que foi essencial para resolver problemas neste projeto e em outros futuros, além de fortalecer meu interesse pela área.',
            githubLink: 'https://github.com/BuenosVictor/One-Piece',
            accessLink: 'https://one-piece-layout.netlify.app/',
        },
        {
            image: MemoryProject,
            text: 'MemoryQuest: Este projeto foi um grande desafio, pois exigia uma boa organização do código em CSS, HTML e JavaScript. Focado em melhorar minhas habilidades em JavaScript e lógica de programação, também foi quando recebi o maior apoio da minha mentoria. A orientação de um desenvolvedor sênior, que questionava e validava minhas escolhas de implementação, foi fundamental para o meu crescimento.',
            githubLink: 'https://github.com/BuenosVictor/Jogo-da-Memoria',
            accessLink: 'https://jogo-da-memoria-victor.netlify.app/',
        },
    ];

    const nextProject = () => {
        if (currentIndex < projects.length - 1) {
            setAnimate(true);
            setTimeout(() => {
                setCurrentIndex((prev) => prev + 1);
                setAnimate(false);
            }, 400);
        }
    };

    const prevProject = () => {
        if (currentIndex > 0) {
            setAnimate(true);
            setTimeout(() => {
                setCurrentIndex((prev) => prev - 1);
                setAnimate(false);
            }, 400);
        }
    };

    const currentProject = projects[currentIndex];
    const [title, description] = currentProject.text.split(':');

    return (
        <section className="bg-primaryL text-black border-y-2 border-black py-6 px-4 sm:px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-black text-center ">Projetos</h2>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mt-10 mx-auto">
                <div className="flex-1 flex items-center justify-center gap-4 sm:gap-8 w-full">
                    <button onClick={prevProject} className="hover:scale-110 transition">
                        <img
                            src={ArrowLeft}
                            alt="Anterior"
                            className="w-8 sm:w-10 h-auto opacity-70 hover:opacity-100"
                        />
                    </button>

                    <div
                        className={`transition-all duration-500 w-48 sm:w-64 md:w-72 h-auto max-h-[40vh] ${animate ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                            }`}
                    >
                        <img
                            src={currentProject.image}
                            alt={`Projeto ${currentIndex + 1}`}
                            className="w-full h-auto rounded-3xl bg-white p-4 shadow-xl"
                        />
                    </div>

                    <button onClick={nextProject} className="hover:scale-110 transition">
                        <img
                            src={ArrowRight}
                            alt="Próximo"
                            className="w-8 sm:w-10 h-auto opacity-70 hover:opacity-100"
                        />
                    </button>
                </div>

                <div
                    className={`flex-1 flex flex-col place-content-center transition-all duration-500 max-h-56 text-center lg:text-left ${animate ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'
                        }`}
                >
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h3>
                    <p className="text-base sm:text-lg">{description}</p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
                        <a
                            href={currentProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-primaryL text-white px-4 py-2 rounded-lg hover:bg-[#ecb900] transition border-2 border-black"
                        >
                            <img src={gitHub} alt="GitHub" className="w-6" />
                            Código
                        </a>
                        <a
                            href={currentProject.accessLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-primaryLs text-white px-4 py-2 rounded-lg hover:bg-[#ecb900] transition border-2 border-black"
                        >
                            <img src={ArrowForLinks} alt="Acessar" className="w-6" />
                            Acessar
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <h4 className="text-xl sm:text-2xl font-semibold mb-4">Tecnologias Utilizadas:</h4>
                <div className="flex justify-center gap-6 flex-wrap">
                    {[HTML, CSS, Javascript].map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-xl hover:bg-[#ecb900] transition cursor-pointer"
                        >
                            <img src={tech} alt={`Tecnologia ${index}`} className="w-10" />
                            <p className="text-xs sm:text-sm mt-1">{['HTML', 'CSS', 'JavaScript'][index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
