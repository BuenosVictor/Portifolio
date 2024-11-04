import '../index.css'
import { Link } from 'react-router-dom';

export function Header() {


    return (
        <header className='p-2 rounded-md bg-white bg-opacity-50 backdrop-blur-sm fixed left-[5vw] w-full z-50 flex justify-between items-center top-6 toFit'>

            <div className='flex flex-col items-center'>
                <Link to="/">
                    <h1 className='font-bold text-xl'>Victor de Souza</h1>
                    <h2 className='bg-primaryL text-white text-sm p-1 rounded-md font-bold'>Desenvolvedor Frontend</h2>
                </Link>
            </div>


            <nav class="dropdownmenu">
                <ul>
                    <li>
                        <Link to="/" className='rounded-md'>Home</Link>
                    </li>
                    <li >
                        <a className='rounded-t-md ' href="#SkillsAndAboutMe">Sobre Mim</a>
                        <ul className="submenu">
                            <li><Link to="Sobre mim" className=' rounded-b-md'>Detalhes</Link></li>
                        </ul>
                    </li>
                    <li>
                        <a className='rounded-t-md' href="#ProjectsCarousel">Projetos</a>
                        <ul className="submenu">
                            <li> <Link to="Projetos" className='rounded-b-md'>Explorar</Link></li>
                        </ul>
                    </li>
                    <li>
                        <a className='rounded-md' href="#Footer">Contatos</a>
                    </li>
                </ul>
            </nav>

        </header>
    );

}