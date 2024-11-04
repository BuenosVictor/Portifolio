import '../index.css'
import ArrowLeft from './Arrow-left.svg'
import ArrowRight from './Arrow-right.svg'
import HTML from './HTML.svg'
import CSS from './CSS.svg'
import Javascript from './Javascript.svg'
import WheatherProject from './Weather.svg'

export function ProjectsCarousel() {
    return (
        <section id='ProjectsCarousel'className='bg-primaryL grid grid-cols-[50%_50%] grid-rows-[10%_90%] h-fit pt-10 pb-10 place-items-center gap-y-7'>


            <h4 className='row-span-1 col-span-3 text-4xl font-black'>Projetos</h4>



            <figure className='w-2/4 col-start-1 col-end-2 place-content-center flex gap-10 place-items-center'>

                <img className='cursor-pointer h-fit' src={ArrowLeft} alt="Seta Esquerda" />

                <img className='m-auto bg-white w-3/4 rounded-3xl drop-shadow-2xl' src={WheatherProject} />
                <img className='cursor-pointer h-fit' src={ArrowRight} alt="Seta Direita" />

            </figure>

            <article className='col-start-2 col-end-3 flex gap-y-10 pt-3 flex-col items-center w-[40vw]'>
                <h5 className='text-center font-bold text-4xl border-b-[3px] border-detail'>App para Clima</h5>
                <p className='text-center text-2xl '>Digite o nome da cidade desejada na barra de pesquisa e tenha acesso ao clima, velocidade do vento e umidade em suas mãos!</p>
                <h6 className='text-center text-2xl'>Tecnologias Ultilizadas:</h6>

                <div className='w-fit gap-x-24 grid grid-cols-3 grid-rows-2 justify-items-center'>
                    <img className='row-start-1 w-12' src={HTML} />
                    <p className='text-xl'>HTML</p>

                    <img className='row-start-1 w-12' src={CSS} />
                    <p className='text-xl'>CSS</p>

                    <img className='row-start-1 w-12' src={Javascript} />
                    <p id='SkillsAndAboutMe' className='text-xl'>Javascript</p>

                </div>

            </article>




        </section>
    )
}

