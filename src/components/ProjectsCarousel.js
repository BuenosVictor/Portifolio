import '../index.css'
import arrowLeft from '../images/arrow-left.svg'
import arrowRight from '../images/arrow-right.svg'
import Javascript from '../images/Javascript.svg'
import CSS from '../images/CSS.svg'
import HTML from '../images/HTML.svg'
import WheatherProject from '../images/Weather.svg'
import zigzagArrow from '../images/zigzagArrow.svg'

export function ProjectsCarousel() {
    return (
        <section className='bg-primaryL grid grid-cols-[20%_60%_20%] grid-rows-[10%_90%] h-[100vh] pt-3 pb-4 items-center justify-items-center'>
            <div className='col-span-3 row-span-1'>
                <h4 className='text-4xl font-black text-center'>Projetos</h4>
            </div>
            
            <div className='flex '>
                <p className=''>Passe o mouse por cima e explore um pouco mais sobre o projeto</p>
                <img className='' src={zigzagArrow} />
            <img className='col-start-3 row-start-2 w-12' src={arrowLeft} />
            </div>
            <div className='col-start-2 col-end-3 row-start-2 row-end-3 pt-9 flex flex-col items-center mainContent'>
                <figure className='bg-white w-1/3 rounded-3xl drop-shadow-2xl'>

                    <img className='m-auto w-fit' src={WheatherProject} />
                </figure>
                <figcaption className='flex gap-y-3 pt-3 flex-col items-center'>

                    <h5 className='text-center font-bold text-2xl border-b-[3px] border-detail'>App para Clima</h5>
                    <p className='text-center text-xl'>Digite o nome da cidade desejada na barra de pesquisa e tenha acesso ao clima, velocidade do vento e umidade em suas mãos!</p>
                    <h6 className='text-center'>Tecnologias Ultilizadas:</h6>

                    <div className='w-72 gap-x-24 grid grid-cols-3 grid-rows-2 justify-items-center'>
                        <img className='row-start-1 col-start-1' src={Javascript} />
                        <p className='text-xl row-start-2 col-start-1'>Javascript</p>

                        <img className='row-start-1 col-start-2' src={CSS} />
                        <p className='text-xl row-start-2 col-start-2'>CSS</p>

                        <img className='row-start-1 col-start-3' src={HTML} />
                        <p className='text-xl row-start-2 col-start-3 '>HTML</p>
                    </div>



                </figcaption>
            </div>
            <img className='w-12 col-start-3 col-end-4 row-start-2 row-end-3 justify-self-start' src={arrowRight} />
        </section>
    )
}

