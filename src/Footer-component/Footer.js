import '../index.css';
import Whitelinkedin from './img/Whitelinkedin.svg';
import Whitegmail from './img/Whitegmail.svg';
import Whitegithub from './img/Whitegithub.svg';
import Whitewhatsapp from './img/Whitewhatsapp.svg';

export function Footer() {
  return (
    <footer id="Footer" className="bg-secondaryL text-white h-[60vh] grid grid-cols-2 grid-rows-[10%_90%] place-items-center relative">
      <div className="bg-primaryL rounded-2xl p-6 row-span-1 col-span-2 -top-[10%] absolute">
        <p className="text-black text-center">
          Interessado em trabalhar juntos? Vamos marcar um horário para conversar!
        </p>
      </div>

      <div className="row-start-2 row-end-3 col-start-1 col-end-2">
        <h6 className="bg-detail flex justify-center items-center w-28 h-10 text-center rounded-lg mb-6">
          Contatos
        </h6>
        <ol className="flex flex-col">
          {[
            { img: Whitelinkedin, url: 'https://www.linkedin.com/in/victor-bueno-382054262/', text: 'www.linkedin.com/in/victor-bueno' },
            { img: Whitegmail, url: 'https://mail.google.com/mail/?view=cm&to=buenos.victor2004@gmail.com', text: 'buenos.victor2004@gmail.com' },
            { img: Whitegithub, url: 'https://github.com/BuenosVictor', text: 'github.com/BuenosVictor' },
            { img: Whitewhatsapp, url: 'https://wa.me/5511951694175', text: 'Whatsapp:(11)95169-4175' }
          ].map(({ img, url, text }, index) => (
            <li key={index}>
              <a
                className="flex p-3 hover:bg-detail rounded-lg transition-transform duration-300 transform hover:scale-105"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt={`Ícone de ${text}`} src={img} className="mr-2" />{text}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </footer>
  );
}
