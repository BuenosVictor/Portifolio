import { profile, links } from '../data/profile';
import { Button } from '../ui/Button';
import whiteLinkedin from '../assets/icons/white-linkedin.svg';
import whiteGmail from '../assets/icons/white-gmail.svg';
import whiteGithub from '../assets/icons/white-github.svg';
import whiteWhatsapp from '../assets/icons/white-whatsapp.svg';
import curriculoIcon from '../assets/icons/curriculo.svg';

const channels = [
    { label: 'E-mail', value: profile.email, href: links.email, icon: whiteGmail, external: false },
    { label: 'WhatsApp', value: profile.phone, href: links.whatsapp, icon: whiteWhatsapp },
    { label: 'LinkedIn', value: 'linkedin.com/in/victor-bueno', href: links.linkedin, icon: whiteLinkedin },
    { label: 'GitHub', value: 'github.com/BuenosVictor', href: links.github, icon: whiteGithub },
];

export function Footer() {
    return (
        <footer id="contato" aria-labelledby="titulo-contato" className="bg-secondaryL text-white">
            <div className="container-page py-12 md:py-16">
                <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primaryL">
                            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primaryL" />
                            Contato
                        </span>

                        <h2 id="titulo-contato" className="mt-3 text-3xl md:text-4xl font-black">
                            Vamos conversar?
                        </h2>

                        {/* Convite profissional, sem tom de busca de emprego (decisao do
                            Victor). "Do que voce tiver em mente" deixa recrutador ler
                            "entrevista" sem o site dizer isso. Sem referencia de posicao
                            ("canais abaixo"): no desktop os canais ficam ao LADO. */}
                        <p className="mt-4 max-w-md text-white/80 md:text-lg leading-relaxed">
                            Um café é sempre um bom começo: para falar de projetos, de tecnologia ou do que
                            você tiver em mente. Me chama por onde preferir.
                        </p>

                        <div className="mt-8">
                            <Button href={links.curriculo} external variant="primary" size="lg">
                                <img src={curriculoIcon} alt="" aria-hidden="true" className="w-5 h-5" />
                                Baixar meu currículo
                            </Button>
                        </div>
                    </div>

                    <ul className="grid gap-3 sm:grid-cols-2 lg:content-start">
                        {channels.map(({ label, value, href, icon, external = true }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-4 transition-colors duration-200 hover:bg-white/15"
                                >
                                    <img
                                        src={icon}
                                        alt=""
                                        aria-hidden="true"
                                        className="h-5 w-5 shrink-0"
                                    />
                                    <span className="min-w-0">
                                        <span className="block text-xs font-semibold uppercase tracking-wider text-white/60">
                                            {label}
                                        </span>
                                        <span className="block truncate text-sm font-medium">{value}</span>
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="mt-16 border-t border-white/15 pt-8 text-center text-sm text-white/60">
                    © {new Date().getFullYear()} {profile.name}, feito com React e Tailwind.
                </p>
            </div>
        </footer>
    );
}
