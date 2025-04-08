import { useState } from 'react';
import '../index.css';

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
  const [showDescription, setShowDescription] = useState(false);
  const [showDescriptionBox, setShowDescriptionBox] = useState(false);

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
    if (expandedSkill === name) {
      setShowDescription(false);
      setTimeout(() => {
        setExpandedSkill(null);
        setShowDescriptionBox(false);
      }, 300);
    } else {
      setExpandedSkill(name);
      setShowDescriptionBox(false);
      setTimeout(() => {
        setShowDescriptionBox(true);
        setShowDescription(true);
      }, 300);
    }
  };

  return (
    <section id="SkillsAndAboutMe" className="flex flex-col items-center pb-16 toFit">
      {/* Habilidades */}
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
                <img className="w-16 mx-auto" alt={skill.name} src={skill.img} />
                <p className="text-xl text-center">{skill.name}</p>
              </li>
            ))}
          </ol>

          <h5 className="font-semibold text-xl mt-10">Em desenvolvimento</h5>
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

        {/* Descrição animada */}
        {expandedSkill && showDescriptionBox && (
          <div
            className={
              `text-center p-5 mt-5 bg-white shadow-lg rounded-xl w-full lg:w-[45%] transform transition-all duration-700 ease-out
              ${showDescription ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`
            }
          >
            <h5 className="text-2xl font-bold mb-2">{expandedSkill}</h5>
            <p className="text-lg">
              {
                skills.find((skill) => skill.name === expandedSkill)?.desc ||
                learning.find((skill) => skill.name === expandedSkill)?.desc
              }
            </p>
            <button
              className="mt-4 bg-primaryL py-2 px-4 rounded-xl text-white transition duration-300 hover:bg-[#ecb900]"
              onClick={() => toggleSkill(expandedSkill)}
            >
              Ocultar
            </button>
          </div>
        )}
      </article>

      {/* Sobre mim */}
      <article className="pt-24 w-full max-w-4xl mx-auto px-6">
        <h4 className="text-4xl font-black text-center mb-12 text-gray-900">Sobre mim</h4>

        <div className="flex flex-col items-center gap-10 bg-white/90 border border-gray-200 rounded-3xl shadow-xl p-8 md:flex-row md:items-start md:gap-14">
          <img
            className="w-48 h-48 object-cover shadow-md"
            alt="Eu junto da Laila"
            src={EuJuntoDaLaila}
          />
          <div className="text-center md:text-left text-gray-800">
            <p className="text-lg leading-relaxed">
              Olá! Me chamo <span className="font-semibold text-gray-900">Victor</span> e desde 2022 venho estudando
              linguagens de programação com o intuito de transformar conceitos em experiências digitais reais. Estou em
              transição de carreira e sigo me especializando através de{' '}
              <span className="font-medium text-gray-900">networking, eventos e cursos online</span>.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Quando não estou codando, você provavelmente vai me encontrar{' '}
              <span className="italic">cozinhando uma receita nova, jogando algum game ou praticando esportes</span>. Ah,
              e claro: sempre com a Laila por perto!
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
