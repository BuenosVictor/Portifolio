import '../index.css'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className='p-2 rounded-md bg-white bg-opacity-50 backdrop-blur-sm fixed left-[5vw] w-full z-50 flex justify-between items-center top-6 toFit transition duration-300'>
            <div className='p-1 flex flex-col items-center text-center duration-300 rounded-md border-2 border-transparent hover:border-black'>
                <Link to="/">
                    <h1 className='font-bold text-xl'>Victor de Souza</h1>
                    <h2 className='bg-primaryL text-white text-sm p-1 rounded-md font-bold'>Desenvolvedor Frontend</h2>
                </Link>
            </div>

            <nav className="dropdownmenu">
                <ul>
                    <li className='duration-300'>
                        <Link to="/" className='rounded-md'>Home</Link>
                    </li>
                    <li className='transition duration-300'>
                        <a className='rounded-t-md ' href="#SkillsAndAboutMe">Sobre Mim</a>
                        <ul className="submenu transition duration-300">
                            <li><Link to="/sobre-mim" className='rounded-b-md'>Detalhes</Link></li>
                        </ul>
                    </li>
                    <li className='transition duration-300'>
                        <a className='rounded-t-md' href="#ProjectsCarousel">Projetos</a>
                        <ul className="submenu transition duration-300">
                            <li> <Link to="/projetos" className='rounded-b-md'>Explorar</Link></li>
                        </ul>
                    </li>
                    <li className='duration-300'>
                        <a className='rounded-md' href="#Footer">Contatos</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
