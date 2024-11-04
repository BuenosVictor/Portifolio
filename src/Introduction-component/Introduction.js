import '../index.css'
import EuComALaila from './Eu-com-a-laila.png'
import Github from './Github.svg'
import Linkedin from './Linkedin.svg'
import Curriculo from './Curriculo.svg'
import Gmail from './Gmail.svg'
import Whatsapp from './Whatsapp.svg'

export function Introduction() {
    return (
        <section className='flex items-center justify-between pt-14 pb-10 toFit'>
            
            <main id='Introduction' className='max-w-lg'>
                <h3 className='text-5xl mb-6 leading-snug'>Olá! Bem vindo ao meu <span className='border-4 rounded-md border-primaryL'>Portfólio</span></h3>
                <p className='mb-6'>
                    Sou especializado em programação front-end e meu foco é criar interfaces
                    intuitivas e tornar ideias em uma realidade online. Ultilizo {''}
                    <span className='border-b-2 border-HTML'>HTML</span> ,
                    <span className='border-b-2 border-CSS'>CSS</span> ,
                    <span className='border-b-2 border-JS'>Javascript</span> ,
                    <span className='border-b-2 border-REACT'>React</span> ,
                    <span className='border-b-2 border-TAILWIND'>tailwind</span>
                    {''} e {''}
                    <span className='border-b-2 border-GIT'>Git</span>
                    {''} como ferramentas de desenvolvimento
                </p>
                <div className='flex justify-center items-center h-14 gap-7'>

                    <a href='https://github.com/BuenosVictor' target="_blank" rel="noopener noreferrer">
                        <img  src={Github} alt='Github'/>
                        <div className='contrastLine bg-linksDetail'></div>
                    </a>
                    <a href='https://www.linkedin.com/in/victor-bueno-382054262/' target="_blank" rel="noopener noreferrer">
                        <img  src={Linkedin} alt='Linkedin'/>
                        <div className='contrastLine bg-linksDetail'></div>
                    </a>
                    <a href='https://1drv.ms/w/s!AtTcgXJuNhOUcPgyuOnSJbASfck?e=a2YDRp' target="_blank" rel="noopener noreferrer">
                        <img  src={Curriculo} alt='Curriculo'/>
                        <div className='contrastLine bg-linksDetail'></div>
                    </a>
                    <a href='mailto:buenos.victor2004@gmail.com' target="_blank" rel="noopener noreferrer">
                        <img  src={Gmail} alt='Gmail'/>
                        <div className='contrastLine bg-linksDetail'></div>
                    </a>
                    <a href='https://wa.me/5511951694175' target="_blank" rel="noopener noreferrer">
                        <img  src={Whatsapp} alt='Whatsapp'/>
                        <div className='contrastLine bg-linksDetail'></div>
                    </a>

                </div>
            </main>
            <img src={EuComALaila} className='w-4/12 mr-10' alt='Victor e Laila'/>

        </section>
    )
}