import '../index.css'
import EuComALaila from './Eu-com-a-laila.png'
import Github from './Github.svg'
import Linkedin from './Linkedin.svg'
import Curriculo from './Curriculo.svg'
import Gmail from './Gmail.svg'
import Whatsapp from './Whatsapp.svg'
import { useEffect, useState, useRef } from 'react';

export function Introduction() {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const currentRef = textRef.current; 

        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        observer.observe(currentRef);

        return () => {
            observer.unobserve(currentRef); 
        };
    }, []);

    return (
        <section className='flex items-center justify-between h-[90vh] toFit'>
            <main id='Introduction' className='max-w-lg' ref={textRef}>
                <h3 className={`text-5xl mb-6 leading-snug transition-transform duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    Olá! Bem vindo ao meu <span className='border-4 rounded-md border-primaryL transition duration-300 hover:bg-primaryL hover:text-white'>Portfólio</span>
                </h3>
                <p className={`mb-6 transition-transform duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    Sou especializado em programação front-end e meu foco é criar interfaces
                    intuitivas e tornar ideias em uma realidade online. Ultilizo {''}
                    <a className='border-b-2 rounded border-HTML transition duration-300 hover:bg-HTML hover:text-white hover:cursor-pointer' href="#SkillsAndAboutMe" >HTML</a> ,
                    <a className='border-b-2 rounded border-CSS transition duration-300 hover:bg-CSS hover:text-white hover:cursor-pointer' href="#SkillsAndAboutMe" >CSS</a> ,
                    <a className='border-b-2 rounded border-JS transition duration-300 hover:bg-JS hover:text-white hover:cursor-pointer' href="#SkillsAndAboutMe" >Javascript</a> ,
                    <a className='border-b-2 rounded border-REACT transition duration-300 hover:bg-REACT hover:text-white hover:cursor-pointer' href="#SkillsAndAboutMe" >React</a> ,
                    <a className='border-b-2 rounded border-TAILWIND transition duration-300 hover:bg-TAILWIND hover:text-white hover:cursor-pointer' href="#SkillsAndAboutMe" >tailwind</a>
                    {''} e {''}
                    <a className='border-b-2 rounded border-GIT hover:bg-GIT transition duration-300 hover:text-white hover:cursor-pointer' href="#SkillsAndAboutMe">Git</a>
                    {''} como ferramentas de desenvolvimento
                </p>
                <div className='flex justify-center items-center h-14 gap-7'>

                 <a className='transform hover:scale-105 Buttons place-items-center p-1 cursor-pointer transition-all duration-300 hover:bg-[#bbbbbb9c] rounded-lg' href='https://github.com/BuenosVictor' target="_blank" rel="noopener noreferrer">
                     <img  src={Github} alt='Github'/>
                     <div className='contrastLine bg-linksDetail'></div>
                 </a>
                 <a className='transform hover:scale-105 Buttons place-items-center p-1 cursor-pointer transition-all duration-300 hover:bg-[#bbbbbb9c] rounded-lg' href='https://www.linkedin.com/in/victor-bueno-382054262/' target="_blank" rel="noopener noreferrer">
                     <img  src={Linkedin} alt='Linkedin'/>
                     <div className='contrastLine bg-linksDetail'></div>
                 </a>
                 <a className='transform hover:scale-105 Buttons place-items-center p-1 cursor-pointer transition-all duration-300 hover:bg-[#bbbbbb9c] rounded-lg' href='https://1drv.ms/w/s!AtTcgXJuNhOUcPgyuOnSJbASfck?e=a2YDRp' target="_blank" rel="noopener noreferrer">
                     <img  src={Curriculo} alt='Curriculo'/>
                     <div className='contrastLine bg-linksDetail'></div>
                 </a>
                 <a className='transform hover:scale-105 Buttons place-items-center p-1 cursor-pointer transition-all duration-300 hover:bg-[#bbbbbb9c] rounded-lg' href='mailto:buenos.victor2004@gmail.com' target="_blank" rel="noopener noreferrer">
                     <img  src={Gmail} alt='Gmail'/>
                     <div className='contrastLine bg-linksDetail'></div>
                 </a>
                 <a className='transform hover:scale-105 Buttons place-items-center p-1 cursor-pointer transition-all duration-300 hover:bg-[#bbbbbb9c] rounded-lg' href='https://wa.me/5511951694175' target="_blank" rel="noopener noreferrer">
                     <img  src={Whatsapp} alt='Whatsapp'/>
                     <div className='contrastLine bg-linksDetail'></div>
                 </a>

             </div>
        
            </main>
            <img src={EuComALaila} className='w-4/12 mr-10' alt='Victor e Laila'/>
        </section>
    );
}