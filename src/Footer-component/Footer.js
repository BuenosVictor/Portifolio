import '../index.css';
import drinkImage from './img/drinkImage.png';
import Whitelinkedin from './img/Whitelinkedin.svg';
import Whitegmail from './img/Whitegmail.svg';
import Whitegithub from './img/Whitegithub.svg';
import Whitewhatsapp from './img/Whitewhatsapp.svg';

export function Footer() {
  return (
    <footer id="Footer" className="bg-secondaryL text-white h-[45vh] lg:h-[60vh] grid grid-cols-2 grid-rows-[10%_90%] place-items-center relative px-2 sm:px-6 lg:px-20">
      
      {/* Top Message */}
      <div className="bg-primaryL rounded-2xl p-3 sm:p-6 row-span-1 col-span-2 -top-[10%] absolute w-full max-w-3xl mx-auto">
        <p className="text-sm sm:text-base text-black text-center">
          Interessado em trabalhar juntos? Vamos marcar um horário para conversar!
        </p>
      </div>

      {/* Contacts */}
      <div className="row-start-2 row-end-3 col-start-1 col-end-2 w-full place-items-center max-w-md">
        <h6 className="bg-detail flex justify-center items-center w-24 sm:w-28 h-8 sm:h-10 text-center rounded-lg mb-4 sm:mb-6 text-xs sm:text-sm">
          Contatos
        </h6>

        <ol className="flex flex-col space-y-2 w-fit sm:space-y-3">
          {[
            { img: Whitelinkedin, url: 'https://www.linkedin.com/in/victor-bueno-382054262/', text: 'linkedin.com/in/victor-bueno' },
            { img: Whitegmail, url: 'https://mail.google.com/mail/?view=cm&to=buenos.victor2004@gmail.com', text: 'buenos.victor2004@gmail.com' },
            { img: Whitegithub, url: 'https://github.com/BuenosVictor', text: 'github.com/BuenosVictor' },
            { img: Whitewhatsapp, url: 'https://wa.me/5511951694175', text: 'Whatsapp: (11) 95169-4175' }
          ].map(({ img, url, text }, index) => (
            <li key={index}>
              <a
                className="flex items-center  place-self-center whitespace-nowrap text-center p-1 md:p-2 sm:p-3 hover:bg-detail rounded-lg transition-transform duration-200 transform hover:scale-105 text-xs sm:text-sm"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt={`Ícone de ${text}`} src={img} className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {text}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Drink Image */}
      <div className="row-start-2 row-end-3 col-start-2 col-end-3 flex justify-center items-center">
        <img alt="Drinking and smilling" src={drinkImage} className="w-fit rounded-lg h-44 md:h-72" />
      </div>

    </footer>
  );
}
