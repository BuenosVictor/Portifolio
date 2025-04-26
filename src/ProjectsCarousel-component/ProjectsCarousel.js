import { useState } from 'react';
import ArrowLeft from './img/Arrow-left.svg';
import ArrowRight from './img/Arrow-right.svg';
import HTML from './img/HTML.svg';
import CSS from './img/CSS.svg';
import Javascript from './img/Javascript.svg';
import WheatherProject from './img/Weather.svg';
import PokemonProject from './img/Pokemon.svg';
import OnePieceProject from './img/OnePiece.svg';
import MemoryProject from './img/Memory.svg';
import gitHub from './img/Github.svg';
import ArrowForLinks from './img/ArrowForLinks.svg';

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
            <h2 className="text-3xl sm:text-4xl font-black text-center">Projetos</h2>

            {/* Área principal */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5 max-w-7xl mt-6 mx-auto">
                {/* Imagem e Botões */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-6 w-full lg:w-auto">
                    <div className="flex items-center gap-4 sm:gap-8">
                        <button 
                            onClick={prevProject}
                            className={`hover:scale-110 transition ${currentIndex === 0 ? 'opacity-30 cursor-default' : 'opacity-70 hover:opacity-100'}`}
                            disabled={currentIndex === 0}
                        >
                            <img src={ArrowLeft} alt="Anterior" className="w-8 sm:w-10 h-auto" />
                        </button>

                        <div className={`transition-all duration-500 w-48 sm:w-64 md:w-72 h-auto max-h-[40vh] ${animate ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                            <img src={currentProject.image} alt={`Projeto ${currentIndex + 1}`} className="w-full h-auto rounded-3xl bg-white p-4 shadow-xl" />
                        </div>

                        <button 
                            onClick={nextProject}
                            className={`hover:scale-110 transition ${currentIndex === projects.length - 1 ? 'opacity-30 cursor-default' : 'opacity-70 hover:opacity-100'}`}
                            disabled={currentIndex === projects.length - 1}
                        >
                            <img src={ArrowRight} alt="Próximo" className="w-8 sm:w-10 h-auto" />
                        </button>
                    </div>
                </div>

                {/* Texto */}
                <div className={`flex-1 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-500 max-h-[24rem] ${animate ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}`}>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h3>
                    <p className="text-base sm:text-lg">{description}</p>

                    {/* Botões de links */}
                    <div className="flex sm:flex-row gap-4 mt-4 justify-center lg:justify-start w-full sm:w-auto">
                        <a
                            href={currentProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center sm:justify-start gap-2 bg-primaryL text-white px-4 py-2 rounded-lg hover:text-black transition border-2 border-black"
                        >
                            <img src={gitHub} alt="GitHub" className="w-6" />
                            Código
                        </a>
                        <a
                            href={currentProject.accessLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center sm:justify-start gap-2 bg-primaryL text-white px-4 py-2 rounded-lg hover:text-black transition border-2 border-black"
                        >
                            <img src={ArrowForLinks} alt="Acessar" className="w-6" />
                            Acessar
                        </a>
                    </div>
                </div>
            </div>

            {/* Tecnologias */}
            <div className="mt-5 text-center">
                <h4 className="text-xl sm:text-2xl font-semibold mb-4">Tecnologias Utilizadas:</h4>
                <div className="flex justify-center gap-6 flex-wrap">
                    {[HTML, CSS, Javascript].map((tech, index) => (
                        <a
                            key={index}
                            className="flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-xl hover:bg-[#ecb900] transition cursor-pointer p-4"
                            href="#SkillsAndAboutMe"
                        >
                            <img src={tech} alt={`Tecnologia ${index}`} className="w-10" />
                            <p className="text-xs sm:text-sm mt-1">{['HTML', 'CSS', 'JavaScript'][index]}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
