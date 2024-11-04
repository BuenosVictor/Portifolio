import '../index.css'
import HTML from './HTML.svg'
import CSS from './CSS.svg'
import Javascript from './Javascript.svg'
import WheatherProject from './Weather.svg'
import PokemonProject from './Pokemon.svg'
import OnePieceProject from './OnePiece.svg'
import MemoryProject from './Memory.svg'

export function ProjectsPage() {


    return (

        <section className='pt-24 toFit flex flex-col gap-10'>
            <article className='flex py-32 items-center justify-around bg-white rounded-3xl drop-shadow-2xl'>
                <img className='w-1/4' alt='Projeto de Clima' src={WheatherProject} />

                <div className='flex flex-col items-center gap-7 text-center'>
                    <h3>App para o Clima</h3>
                    <p>Digite o nome da cidade desejada na barra de pesquisa e tenha acesso ao clima, velocidade do vento e umidade em suas mãos!</p>
                    <h3>Tecnologias:</h3>
                    <div className='w-fit gap-x-24 grid grid-cols-3 grid-rows-2 justify-items-center'>
                        <img className='row-start-1 w-12' alt='HTML' src={HTML} />
                        <p className='text-xl'>HTML</p>

                        <img className='row-start-1 w-12' alt='CSS' src={CSS} />
                        <p className='text-xl'>CSS</p>

                        <img className='row-start-1 w-12' alt='Javascript'  src={Javascript} />
                        <p className='text-xl'>Javascript</p>
                    </div>
                </div>
            </article>

            <article className='flex py-32 items-center justify-around bg-white rounded-3xl drop-shadow-2xl'>

                <div className='flex flex-col items-center gap-7 text-center'>
                    <h3>App para o Clima</h3>
                    <p>Digite o nome da cidade desejada na barra de pesquisa e tenha acesso ao clima, velocidade do vento e umidade em suas mãos!</p>
                    <h3>Tecnologias:</h3>
                    <div className='w-fit gap-x-24 grid grid-cols-3 grid-rows-2 justify-items-center'>
                        <img className='row-start-1 w-12' alt='HTML' src={HTML} />
                        <p className='text-xl'>HTML</p>

                        <img className='row-start-1 w-12' alt='CSS'src={CSS} />
                        <p className='text-xl'>CSS</p>

                        <img className='row-start-1 w-12' alt='Javascript'src={Javascript} />
                        <p className='text-xl'>Javascript</p>
                    </div>
                </div>

                <img alt='Jogo da memoria'src={MemoryProject} />
            </article>

            <article className='flex py-32 items-center justify-around bg-white rounded-3xl drop-shadow-2xl'>
                <img alt='Projeto de One Piece'src={OnePieceProject} />

                <div className='flex flex-col items-center gap-7 text-center'>
                    <h3>App para o Clima</h3>
                    <p>Digite o nome da cidade desejada na barra de pesquisa e tenha acesso ao clima, velocidade do vento e umidade em suas mãos!</p>
                    <h3>Tecnologias:</h3>
                    <div className='w-fit gap-x-24 grid grid-cols-3 grid-rows-2 justify-items-center'>
                        <img className='row-start-1 w-12' alt='HTML'src={HTML} />
                        <p className='text-xl'>HTML</p>

                        <img className='row-start-1 w-12'alt='CSS' src={CSS} />
                        <p className='text-xl'>CSS</p>

                        <img className='row-start-1 w-12'alt='Javascript' src={Javascript} />
                        <p className='text-xl'>Javascript</p>
                    </div>
                </div>

            </article>

            <article className='flex py-32 items-center justify-around bg-white rounded-3xl drop-shadow-2xl'>

            <div>
                <h3>App para o Clima</h3>
                <p>Digite o nome da cidade desejada na barra de pesquisa e tenha acesso ao clima, velocidade do vento e umidade em suas mãos!</p>
                <h3>Tecnologias:</h3>
                <div className='w-fit gap-x-24 grid grid-cols-3 grid-rows-2 justify-items-center'>
                    <img className='row-start-1 w-12'alt='HTML' src={HTML} />
                    <p className='text-xl'>HTML</p>

                    <img className='row-start-1 w-12'alt='CSS' src={CSS} />
                    <p className='text-xl'>CSS</p>

                    <img className='row-start-1 w-12'alt='Javascript' src={Javascript} />
                    <p className='text-xl'>Javascript</p>
                </div>
            </div>

            <img alt='Projeto de Pokemons'src={PokemonProject} />
            </article>

            <article className='flex py-32 mb-28 items-center justify-around bg-white rounded-3xl drop-shadow-2xl'>
                <img className='w-1/4' alt='Projeto de Clima' src={WheatherProject} />

                <div className='flex flex-col items-center gap-7 text-center'>
                    <h3>App para o Clima</h3>
                    <p>Digite o nome da cidade desejada na barra de pesquisa e tenha acesso ao clima, velocidade do vento e umidade em suas mãos!</p>
                    <h3>Tecnologias:</h3>
                    <div className='w-fit gap-x-24 grid grid-cols-3 grid-rows-2 justify-items-center'>
                        <img className='row-start-1 w-12' alt='HTML'src={HTML} />
                        <p className='text-xl'>HTML</p>

                        <img className='row-start-1 w-12' alt='CSS'src={CSS} />
                        <p className='text-xl'>CSS</p>

                        <img className='row-start-1 w-12' alt='Javascript'src={Javascript} />
                        <p className='text-xl'>Javascript</p>
                    </div>
                </div>
            </article>

        </section >

    )
}