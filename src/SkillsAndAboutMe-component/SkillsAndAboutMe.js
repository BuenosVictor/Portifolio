import '../index.css';
import { useState } from 'react';
import EuJuntoDaLaila from './Eu-com-a-laila.png';

import HTML from './HTML.svg';
import CSS from './CSS.svg';
import Javascript from './Javascript.svg';
import Git from './GIT.svg';
import ReactLogo from './React.svg';
import Tailwind from './Tailwind.svg';
import Figma from './Figma.svg';

export function SkillsAndAboutMe() {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const skills = [
    { name: 'Javascript', img: Javascript, desc: 'JavaScript é uma linguagem de programação que permite criar interatividade e funcionalidades dinâmicas.' },
    { name: 'CSS', img: CSS, desc: 'CSS é uma linguagem de estilo que controla a apresentação visual de páginas web.' },
    { name: 'HTML', img: HTML, desc: 'HTML é a linguagem de marcação utilizada para criar a estrutura de páginas na web.' },
    { name: 'Git', img: Git, desc: 'Git é um sistema de controle de versão distribuído para gerenciar projetos de qualquer escala.' },
  ];

  const learning = [
    { name: 'React', img: ReactLogo, desc: 'React é uma biblioteca JavaScript para criar interfaces de usuário.' },
    { name: 'Tailwind', img: Tailwind, desc: 'Tailwind é um framework CSS para criar designs responsivos.' },
    { name: 'Figma', img: Figma, desc: 'Figma é uma ferramenta de design colaborativo para criação de interfaces.' },
  ];

  const toggleSkill = (name) => {
    setExpandedSkill(expandedSkill === name ? null : name);
  };

  return (
    <section id="SkillsAndAboutMe" className="flex flex-col items-center pb-16 toFit">
      {/* Seção de Habilidades */}
      <article className="flex flex-col lg:flex-row justify-between items-center gap-7 pt-16 w-full max-w-6xl px-4">
        <aside className={`flex flex-col items-center gap-y-7 w-full transition-all duration-500 ${expandedSkill ? 'lg:w-[35%]' : 'w-full'}`}>
          <h4 className="text-4xl font-black">Habilidades</h4>
          <ol className={`w-full grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center transition-all duration-500 ${expandedSkill ? '-translate-x-10' : 'translate-x-0'}`}>
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="duration-300 transform hover:scale-105 Buttons w-24 place-items-center p-1 cursor-pointer transition-all hover:bg-[#bbbbbb9c] rounded-lg"
                onClick={() => toggleSkill(skill.name)}
              >
                <img className="w-16 mx-auto " alt={skill.name} src={skill.img} />
                <p className="text-xl text-center">{skill.name}</p>
              </li>
            ))}
          </ol>

          <h5 className="font-semibold text-xl mt-10 ">Em desenvolvimento</h5>
          <ol className={`w-full grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center transition-all duration-500 ${expandedSkill ? '-translate-x-10' : 'translate-x-0'}`}>
            {learning.map((skill) => (
              <li
                key={skill.name}
                className="transform hover:scale-105 Buttons w-24 place-items-center p-1 cursor-pointer transition-all duration-300 hover:bg-[#bbbbbb9c] rounded-lg"
                onClick={() => toggleSkill(skill.name)}
              >
                <img className="w-16 mx-auto" alt={skill.name} src={skill.img} />
                <p className="text-xl text-center">{skill.name}</p>
              </li>
            ))}
          </ol>
        </aside>

        {/* Descrição da Habilidade */}
        {expandedSkill && (
          <div className="text-center p-5 mt-5 bg-white shadow-lg rounded-xl transition-all duration-500 w-full lg:w-[45%] animate-fade-in">
            <h5 className="text-2xl font-bold mb-2">{expandedSkill}</h5>
            <p className="text-lg">
              {
                skills.find((skill) => skill.name === expandedSkill)?.desc ||
                learning.find((skill) => skill.name === expandedSkill)?.desc
              }
            </p>
            <button
              className="mt-4 bg-primaryL py-2 px-4 rounded-xl text-white transition duration-300 hover:bg-[#ecb900]"
              onClick={() => setExpandedSkill(null)}
            >
              Ocultar
            </button>
          </div>
        )}
      </article>

      {/* Seção Sobre Mim */}
      <article className="grid grid-cols-[30%_70%] grid-rows-[20%_80%] pt-14 toFit items-center justify-items-center">
        <h4 className="text-4xl font-black row-start-1 col-start-1 col-end-3 text-center">Sobre mim</h4>
        <img className="w-fit h-5/6" alt="EuJuntoDaLaila" src={EuJuntoDaLaila} />
        <div className="col-start-2 mx-14 p-9 bg-primaryL rounded-3xl">
          <p>
            Desde 2022, estudo linguagens de programação com o intuito de transformar conceitos em experiências digitais,
            ainda estou em transição de carreira, mas pretendo continuar me especializando por meio de networkings, eventos e cursos.
            Quando não estou desenvolvendo, provavelmente estarei cozinhando, jogando video games ou praticando algum esporte.
          </p>
        </div>
      </article>
    </section>
  );
}