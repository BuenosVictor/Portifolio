import '../index.css'
import EuJuntoDaLaila from './Eu-com-a-laila.png'

import HTML from './HTML.svg'
import CSS from './CSS.svg'
import Javascript from './Javascript.svg'
import Git from './GIT.svg'
import React from './React.svg'
import Tailwind from './Tailwind.svg'
import Figma from './Figma.svg'

export function SkillsAndAboutMe() {
    return (
        <section className='flex flex-col items-center pb-16'>
            <article className='flex flex-col items-center gap-y-7 pt-16'>
                <h4 className='text-4xl font-black'>Habilidades</h4>
                <div className='w-fit gap-x-4 grid grid-cols-4 grid-rows-2 justify-items-center'>
                    <img className='row-start-1 col-start-1' src={Javascript} />
                    <p className='text-xl row-start-2 col-start-1'>Javascript</p>

                    <img className='row-start-1 col-start-2' src={CSS} />
                    <p className='text-xl row-start-2 col-start-2'>CSS</p>

                    <img className='row-start-1 col-start-3' src={HTML} />
                    <p className='text-xl row-start-2 col-start-3 '>HTML</p>
                    <img className='row-start-1 col-start-4' src={Git} />
                    <p className='text-xl row-start-2 col-start-4 '>Git</p>
                </div>

                <h5 className='font-semibold text-xl'>Em desenvolvimento</h5>
                <div className='w-fit gap-x-4 grid grid-cols-3 grid-rows-2 justify-items-center'>

                    <img className='row-start-1 col-start-1' src={React} />
                    <p className='text-xl row-start-2 col-start-1 '>React</p>

                    <img className='row-start-1 col-start-2' src={Tailwind} />
                    <p className='text-xl row-start-2 col-start-2 '>Tailwind</p>

                    <img className='row-start-1 col-start-3' src={Figma} />
                    <p className='text-xl row-start-2 col-start-3 '>Figma</p>
                </div>
            </article>
            <article className='grid grid-cols-[30%_70%] grid-rows-[20%_80%] pt-14 toFit items-center justify-items-center'>
            <h4 className='text-4xl font-black row-start-1 col-start-1 col-end-3 text-center'>Sobre mim</h4>
       
            <img className='w-fit h-5/6 'src={EuJuntoDaLaila} />
            <div className='col-start-2 mx-14 p-9 bg-primaryL rounded-3xl'>

                <p>    Desde 2022, estudo linguagens de programação com o intuito de transformar conceitos em experiências 
                    digitais, ainda estou em transição de carreira, mas pretendo continuar me especializando por meio de
                     networkings, eventos e cursos. Quando não estou desenvolvendo, provavelmente estarei cozinhando, jogando 
                     video games ou praticando algum esporte.</p>
           

        </div>
            </article>
        </section>
    )
}