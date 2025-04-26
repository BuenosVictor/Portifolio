import '../index.css';
import EuComALaila from './img/Eu-com-a-laila.png';
import Github from './img/Github.svg';
import Linkedin from './img/Linkedin.svg';
import Curriculo from './img/Curriculo.svg';
import Gmail from './img/Gmail.svg';
import Whatsapp from './img/Whatsapp.svg';
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
        <section className='flex flex-col-reverse lg:flex-row items-center justify-between toFit h-[h-[100vh] md:h-[90vh] pb-8 pt-16 md:pt-14 px-6 md:px-12 lg:px-20 '>
            <main id='Introduction' className='w-full md:w-2/5 text-center lg:text-left' ref={textRef}>
                <h3 className={`text-4xl md:text-5xl font-semibold mb-3 leading-[1.3] md:leading-[1.6] transition-transform duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    Olá! Bem vindo ao meu <span className='border-4 rounded-md border-primaryL transition duration-300 hover:bg-primaryL hover:text-white'>Portfólio</span>
                </h3>
                <p className={`text-gray-700 text-medium md:text-xl mb-6 transition-transform duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    Sou especializado em programação front-end e meu foco é criar interfaces
                    intuitivas e tornar ideias em uma realidade online. Utilizo{' '}
                    <a className='border-b-2 rounded border-HTML transition duration-300 hover:bg-HTML hover:text-white hover:cursor-pointer' href="#SkillsAndAboutMe">HTML</a>,{' '}
                    <a className='border-b-2 rounded border-CSS transition duration-300 hover:bg-CSS hover:text-white hover:cursor-pointer' href="#SkillsAndAboutMe">CSS</a>,{' '}
                    <a className='border-b-2 rounded border-JS transition duration-300 hover:bg-JS hover:text-white hover:cursor-pointer' href="#SkillsAndAboutMe">Javascript</a>,{' '}
                    <a className='border-b-2 rounded border-REACT transition duration-300 hover:bg-REACT hover:text-white hover:cursor-pointer' href="#SkillsAndAboutMe">React</a>,{' '}
                    <a className='border-b-2 rounded border-TAILWIND transition duration-300 hover:bg-TAILWIND hover:text-white hover:cursor-pointer' href="#SkillsAndAboutMe">Tailwind</a> e{' '}
                    <a className='border-b-2 rounded border-GIT transition duration-300 hover:bg-GIT hover:text-white hover:cursor-pointer' href="#SkillsAndAboutMe">Git</a> como ferramentas de desenvolvimento.
                </p>

                <div className='flex flex-nowrap justify-center lg:justify-start items-center gap-6'>
                    <a className='transform hover:scale-105 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200 rounded-lg' href='https://github.com/BuenosVictor' target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt='Github' className='w-8' />
                    </a>
                    <a className='transform hover:scale-105 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200 rounded-lg' href='https://www.linkedin.com/in/victor-bueno-382054262/' target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} alt='Linkedin' className='w-8' />
                    </a>
                    <a className='transform hover:scale-105 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200 rounded-lg' href='https://1drv.ms/w/s!AtTcgXJuNhOUcPgyuOnSJbASfck?e=a2YDRp' target="_blank" rel="noopener noreferrer">
                        <img src={Curriculo} alt='Curriculo' className='w-8' />
                    </a>
                    <a className='transform hover:scale-105 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200 rounded-lg' href='https://mail.google.com/mail/?view=cm&to=buenos.victor2004@gmail.com' target="_blank" rel="noopener noreferrer">
                        <img src={Gmail} alt='Gmail' className='w-8' />
                    </a>
                    <a className='transform hover:scale-105 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-200 rounded-lg' href='https://wa.me/5511951694175' target="_blank" rel="noopener noreferrer">
                        <img src={Whatsapp} alt='Whatsapp' className='w-8' />
                    </a>
                </div>
            </main>

            <div className='flex justify-center'>
                <img src={EuComALaila} className='w-4/5' alt='Victor e Laila' />
            </div>
        </section>
    );
}
