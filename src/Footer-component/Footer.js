import '../index.css'

import Whitelinkedin from './Whitelinkedin.svg'
import Whitegmail from './Whitegmail.svg'
import Whitegithub from './Whitegithub.svg'
import Whitewhatsapp from './Whitewhatsapp.svg'

export function Footer() {
    return (
        <footer className='bg-secondaryL text-white h-[60vh] grid grid-cols-2 grid-rows-[10%_90%] place-items-center relative'>
            <div className='bg-primaryL rounded-2xl p-6 row-span-1 col-span-2 -top-[10%] absolute' >
                <p className='text-black text-center'>
                    Interessado em trabalhar juntos? Vamos
                    marcar um horario para coversar!
                </p>

            </div>
        <div className='rol-start-2 row-end-3 col-start-1 col-end-2 '>
            <h6 className='bg-detail flex justify-center items-center self w-28 h-10 text-center rounded-lg mb-6'>Contatos</h6>
            <ol className='flex flex-col gap-y-4'>
                <li >
                    <a className='flex' href='https://www.linkedin.com/in/victor-bueno-382054262/' target="_blank" rel="noopener noreferrer">
                        <img alt='Foto do Linkedin' src={Whitelinkedin} />www.linkedin.com/in/victor-bueno
                    </a>
                </li>
                <li >
                    <a className='flex' href='mailto:buenos.victor2004@gmail.com' target="_blank" rel="noopener noreferrer">

                        <img alt='Foto do Gmail' src={Whitegmail} />buenos.victor2004@gmail.com
                    </a>
                </li>

                <li >
                    <a className='flex' href='https://github.com/BuenosVictor' target="_blank" rel="noopener noreferrer">
                        <img alt='Foto do Github' src={Whitegithub} />github.com/BuenosVictor
                    </a>
                </li>

                <li >
                    <a className='flex' href='https://wa.me/5511951694175' target="_blank" rel="noopener noreferrer">
                        <img alt='Foto do Whatsapp' src={Whitewhatsapp} />Whatsapp:(11)95169-4175
                    </a>
                </li>
            </ol>
            </div>

        </footer>
    )
}