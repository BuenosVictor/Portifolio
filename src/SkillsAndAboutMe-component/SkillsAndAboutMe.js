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
    { name: 'HTML', img: HTML, desc: 'Foi com o HTML que tudo começou. Não é uma linguagem de programação, mas foi o primeiro contato que tive com desenvolvimento. Só de conseguir colocar algo na tela, já me senti empolgado para continuar aprendendo 🚀' },
    { name: 'CSS', img: CSS, desc: 'CSS foi o que mais me deu trabalho no começo, mas também onde mais me interessei e evoluí. Foi nele que percebi que podia dar vida às ideias e realmente seguir como desenvolvedor frontend .Fiz um trabalho simples com low-code (o resultado não foi dos melhores 😅), mas ele me ajudou a melhorar no design, na comunicação com clientes e a entender melhor como os elementos da página se organizam.' },
    { name: 'Javascript', img: Javascript, desc: 'O JavaScript foi onde tudo começou a fazer mais sentido. Foi com ele que ganhei confiança de verdade e percebi que era hora de levar a sério. Me joguei nos projetos com JS puro, focando em lógica e em entender bem o que estava fazendo, porque sabia que isso seria a base pra encarar qualquer framework depois' },
    { name: 'Git', img: Git, desc: 'Aprendi Git no meio da correria, só porque precisava subir meus projetos. No começo foi meio bagunçado 😂, mas quando parei pra aprender de verdade, vi o quanto ele é essencial pra organização e controle dos meus códigos.' },
  ];

  const learning = [
    { name: 'React', img: ReactLogo, desc: 'Aprender React foi bem parecido com a experiência que tive com JavaScript, só que com alguns extras. No começo, fiquei meio perdido com a forma como os arquivos se comunicam, mas tudo começou a fazer sentido quando entendi os componentes. Ainda tô pegando o jeito, mas fico muito feliz de já ter criado meu primeiro projeto com React. Com mais prática, a confiança vai vir naturalmente, tenho certeza.💪' },
    { name: 'Tailwind', img: Tailwind, desc: 'Tailwind foi uma das ferramentas mais simples e úteis que aprendi. Comecei por ser leve, rápido e organizado, e logo percebi como ele é flexível e o quanto ajudaria nos novos projetos. O melhor de tudo foi ver que minha base em CSS fez total diferença para entender tudo com facilidade.' },
    { name: 'Figma', img: Figma, desc: 'Pra ser honesto, o Figma foi a ferramenta que menos explorei até agora 🖌️. Usei bastante no design deste portfólio e percebi como ele é valioso! Me ajudou a criar pontes com profissionais de UX/UI de forma online e a visualizar o site antes de partir pro código. Foi ótimo pra ajustar várias ideias que, na prática, talvez não funcionassem tão bem 🚧.' },
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

      <article className="flex flex-col lg:flex-row justify-between items-start gap-12 pt-16 w-full max-w-6xl">
        <aside className={`flex flex-col items-center text-center gap-y-7 w-full transition-all duration-500 ${expandedSkill ? 'lg:w-[40%]' : 'w-full'}`}>
          <h4 className="text-4xl font-black">Habilidades</h4>
          <ol className={`w-full grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center transition-all duration-500 ${expandedSkill ? '-translate-x-6' : 'translate-x-0'}`}>
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col items-center justify-center duration-300 transform hover:scale-105 Buttons w-24 p-1 cursor-pointer transition-all hover:bg-[#bbbbbb9c] rounded-lg"
                onClick={() => toggleSkill(skill.name)}
              >
                <img className="w-16" alt={skill.name} src={skill.img} />
                <p className="text-xl mt-1">{skill.name}</p>
              </li>
            ))}
          </ol>

          <h5 className="font-semibold text-xl mt-10">Em desenvolvimento</h5>
          <ol className={`w-full grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center transition-all duration-500 ${expandedSkill ? '-translate-x-6' : 'translate-x-0'}`}>
            {learning.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col items-center justify-center transform hover:scale-105 Buttons w-24 p-1 cursor-pointer transition-all duration-300 hover:bg-[#bbbbbb9c] rounded-lg"
                onClick={() => toggleSkill(skill.name)}
              >
                <img className="w-16" alt={skill.name} src={skill.img} />
                <p className="text-xl mt-1">{skill.name}</p>
              </li>
            ))}
          </ol>
        </aside>

        {expandedSkill && showDescriptionBox && (
          <div
            className={
              `text-center place-self-center p-5 mt-5 bg-white shadow-lg rounded-xl w-full lg:w-[45%] transform transition-all duration-700 ease-out
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
