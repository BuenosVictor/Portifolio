import arrowDown from '../images/arrow-down.svg'
import styles from './Header.module.css'
import '../index.css'


export function Header() {

    




    return (
        <header className='flex justify-between items-center pt-6'>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-xl'>Victor de Souza</h1>

                <h2 className='bg-primaryL text-white text-sm p-1 rounded-md font-bold'>Desenvolvedor Frontend</h2>
            </div>
            <nav className='flex flex-wrap'>
                <ol className='flex px-5'>
                    <li className='m-2 font-bold'>
                        <a href="#">
                            <p className='inline'>Projetos</p>
                            <img className='w-5 inline' src={arrowDown} />
                            <div className='contrastLine bg-linksDetail'></div>
                        </a>
                    </li>
                    <li className='m-2 font-bold'>
                        <a href="#">
                            <p className='inline'>Sobre mim</p>
                            <img className='w-5 inline' src={arrowDown} />
                            <div className='contrastLine bg-linksDetail'></div>
                        </a>

                    </li>
                    <li className='m-2 font-bold'>
                        <a href="#">
                            Habilidades
                        </a>
                    </li>
                    <li className='m-2 font-bold'>
                        <a href="#">
                            Contatos
                        </a>
                    </li>

                </ol>

            </nav>

        </header>
    );

}