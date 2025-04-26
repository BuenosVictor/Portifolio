import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleNavigation = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMenuOpen(false);
        setActiveSubMenu(null);
    };

    return (
        <header className="p-2 rounded-md bg-white bg-opacity-50 backdrop-blur-sm fixed left-0 w-full z-50 flex flex-col md:flex-row md:justify-between md:items-center top-0 md:top-6 md:left-[5vw] toFit transition duration-300">
            {/* Topo com título e botão no mobile */}
            <div className="flex justify-between items-center w-full px-4 md:px-0">
                <div className="flex flex-col items-start md:items-center text-left md:text-center p-1 duration-300 rounded-md border-2 border-transparent hover:border-black">
                    <Link to="/" onClick={handleNavigation}>
                        <h1 className="font-bold text-xl">Victor de Souza</h1>
                        <h2 className="bg-primaryL text-white text-sm p-1 rounded-md font-bold">
                            Desenvolvedor Frontend
                        </h2>
                    </Link>
                </div>

                {/* Botão hamburguer apenas para telas menores */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 text-black focus:outline-none text-xl font-bold z-50"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Menu Mobile */}
            <div className={`w-full pl-2 transition-all duration-300 overflow-hidden md:hidden ${menuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
                <ul className="flex flex-col space-y-4 pl-4 pr-4">
                    <li>
                        <Link
                            to="/"
                            className="text-lg font-semibold bg-primaryL p-1 rounded-md"
                            onClick={handleNavigation}
                        >
                            Home
                        </Link>
                    </li>

                    <li className="flex items-center justify-between">
                        <button
                            className="text-lg w-fit font-semibold text-left bg-primaryL p-1 h-10 rounded-md"
                            onClick={() => setActiveSubMenu(activeSubMenu === 'sobre' ? null : 'sobre')}
                        >
                            Sobre Mim
                        </button>
                        {activeSubMenu === 'sobre' && (
                            <ul className="flex flex-col space-y-2">
                                <li>
                                    <Link
                                        to="/sobre-mim"
                                        className="text-base text-center font-medium p-2 bg-primaryL rounded-md"
                                        onClick={handleNavigation}
                                    >
                                        Detalhes
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="flex items-center justify-between">
                        <button
                            className="text-lg w-fit font-semibold text-left bg-primaryL p-1 h-10 rounded-md"
                            onClick={() => setActiveSubMenu(activeSubMenu === 'projetos' ? null : 'projetos')}
                        >
                            Projetos
                        </button>
                        {activeSubMenu === 'projetos' && (
                            <ul className="flex flex-col space-y-2">
                                <li>
                                    <Link
                                        to="/projetos"
                                        className="text-base font-medium p-2 bg-primaryL rounded-md"
                                        onClick={handleNavigation}
                                    >
                                        Explorar
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <a
                            href="#Footer"
                            className="text-lg font-semibold bg-primaryL p-1 rounded-md"
                            onClick={() => {
                                setMenuOpen(false);
                                setActiveSubMenu(null);
                            }}
                        >
                            Contatos
                        </a>
                    </li>
                </ul>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:block dropdownmenu">
                <ul className="flex gap-6 pr-6 items-center">
                    <li className="duration-300">
                        <Link to="/" className="rounded-md" onClick={handleNavigation}>
                            Home
                        </Link>
                    </li>
                    <li className="transition duration-300 relative group">
                        <a className="rounded-t-md whitespace-nowrap" href="#SkillsAndAboutMe">
                            Sobre Mim
                        </a>
                        <ul className="submenu absolute hidden group-hover:block transition duration-300">
                            <li>
                                <Link to="/sobre-mim" className="rounded-b-md" onClick={handleNavigation}>
                                    Detalhes
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="transition duration-300 relative group">
                        <a className="rounded-t-md" href="#ProjectsCarousel">
                            Projetos
                        </a>
                        <ul className="submenu absolute hidden group-hover:block transition duration-300">
                            <li>
                                <Link to="/projetos" className="rounded-b-md" onClick={handleNavigation}>
                                    Explorar
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="duration-300">
                        <a className="rounded-md" href="#Footer">
                            Contatos
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
