import '../index.css'
import EuComALaila from './Eu-com-a-laila.png'

export function PageAboutMe() {
    return (
        <div className='pt-28 toFit flex flex-col gap-y-20'>
            <img src={EuComALaila} alt='EuComALaila' className='w-1/3 h-fit m-auto' />

            <h3 className='text-4xl text-center -mb-5'>Experiencia profissional</h3>
            <p className='text-xl leading-loose'>Atualmente trabalho como Operador de Risco, onde sigo veículos e cuido da segurança deles durante todo o trajeto. Gosto de trabalhar em equipe, pois valorizo a troca de conhecimentos. Na minha função atual, aprendi muito sobre comunicação e desenvolvimento profissional. No entanto, depois de conhecer melhor o desenvolvimento de software, decidi mudar de carreira. Durante meu tempo nessa área, aprendi muito sobre comunicação e resolução de problemas, habilidades que considero essenciais e que melhorei bastante no meu trabalho atual.</p>

            <div className='grid grid-cols-2 place-items-center'>

                <div className='w-fit col-start-1'>
                    <h3 className='text-3xl pb-5 text-center'>Fatos aleatorios sobre mim</h3>
                    <ul className='flex flex-col gap-3 list-disc'>
                        <li>Faria qualquer coisa por uma pizza deliciosa</li>
                        <li>Minha cachorrinha Laila é minha musa no portfólio</li>
                        <li>Recentemente tenho mudado bastante meu visual</li>
                        <li>Músico desde os 8 anos, comecei com o sax alto</li>
                        <li>Amo filosofia e estudo desde sempre</li>
                        <li>Plantas são o assunto principal nas visitas à casa da minha avó</li>
                    </ul>
                </div>
                <img src={EuComALaila} alt='EuComALaila' className='w-1/3 h-fit m-auto' />
            </div>
            <h3 className='text-center text-3xl'>Minha parte mais <strong>Descontraída</strong></h3>
            <p className='text-xl leading-loose'>Quando não estou imerso em código, você provavelmente me encontrará praticando artes marciais, jogando online ou testando uma nova receita na cozinha. Gosto de estar cercado de amigos e família, seja em um churrasco ou curtindo um bom restaurante. Além disso, a música é uma parte importante da minha rotina, ajudando a relaxar e manter o equilíbrio.</p>

            <h3 className='text-3xl text-center'>E pro futuro?</h3>
            <p className='text-xl leading-loose pb-28'>Minha jornada na programação começou há dois anos com o curso do Programador BR. Desde então, aprendi com diversos professores online, como o Dev em Dobro e a Rocketseat, e conto com a ajuda de amigos da área e mentoria com um programador sênior, e tambem amigo, para aprimorar meu código. No futuro, quero participar de hackathons e expandir meu conhecimento para backend, começando com Node.js depois de dominar React.</p>



        </div>
    )
}