import ventusShot from '../assets/screenshots/ventus.jpg';
import codePairsShot from '../assets/screenshots/code-pairs.jpg';
import onePieceShot from '../assets/screenshots/one-piece.jpg';
import pokedexShot from '../assets/screenshots/pokedex.jpg';

export const projects = [
    {
        slug: 'ventus',
        name: 'Ventus',
        tagline: 'Previsão do tempo de qualquer cidade do mundo',
        screenshot: ventusShot,
        screenshotAlt:
            'Tela do Ventus mostrando o clima de São Paulo: 16,2 °C, nublado, com umidade e velocidade do vento',
        summary:
            'Você digita o nome de uma cidade e o site mostra na hora a temperatura, se está nublado ou ensolarado, a umidade do ar e a velocidade do vento. Os dados são reais e vêm de um serviço de meteorologia.',
        learned:
            'Foi o projeto onde aprendi a consumir uma API REST de verdade: montar a URL da requisição com os parâmetros de busca, ler a resposta em JSON e diferenciar dois tipos de erro, a falha de conexão e o erro que a própria API devolve quando a cidade não existe. Também mapeei os códigos de condição do tempo que ela retorna para pintar o card com o clima certo.',
        techs: ['API', 'HTML', 'CSS', 'JavaScript'],
        codeUrl: 'https://github.com/BuenosVictor/App-Clima',
        liveUrl: 'https://app-clima-victor.netlify.app/',
        gif: 'Weather.gif',
    },
    {
        slug: 'code-pairs',
        name: 'Code Pairs',
        tagline: 'Jogo da memória com cartas de tecnologias',
        screenshot: codePairsShot,
        screenshotAlt:
            'Tela do Code Pairs: um tabuleiro roxo com cartas azuis viradas para baixo e duas cartas do CSS reveladas formando um par',
        summary:
            'Um jogo da memória jogável no navegador. O jogador vira duas cartas por vez e precisa encontrar os pares de logos de tecnologias até limpar o tabuleiro.',
        learned:
            'Lógica de programação era uma das minhas maiores fragilidades, e foi por isso que decidi criar este projeto: para treinar justamente o que eu era ruim. Escrevi toda a lógica do jogo eu mesmo, virar carta por carta, comparar os pares, controlar o que já tinha sido acertado sem virar bagunça. Foi o projeto com mais acompanhamento do meu mentor, cobrando cada decisão de como eu estruturei esse controle de estado.',
        techs: ['HTML', 'CSS', 'JavaScript'],
        codeUrl: 'https://github.com/BuenosVictor/Jogo-da-Memoria',
        liveUrl: 'https://jogo-da-memoria-victor.netlify.app/',
        gif: 'Memory.gif',
    },
    {
        slug: 'one-piece',
        name: 'One Piece',
        tagline: 'Página interativa sobre os personagens do anime',
        screenshot: onePieceShot,
        screenshotAlt:
            'Tela do projeto One Piece mostrando o personagem Monkey D. Luffy em destaque, com nome, descrição e um menu lateral de personagens',
        summary:
            'Ao clicar em cada personagem no menu lateral, a página troca a arte, o nome e a história dele com uma transição animada. Feito durante um evento ao vivo com o canal DevEmDobro.',
        learned:
            'Começou principalmente como um projeto para treinar animação em CSS na prática e fazer a página reagir ao clique sem recarregar. Foi meu primeiro contato de verdade com a comunidade dev. Hoje é outro projeto: estou transformando ele num mini jogo de adivinhação que atualiza todo dia. Não vou contar muito pra não dar spoiler, mas em breve dá pra ver como vai ficar.',
        techs: ['HTML', 'CSS', 'JavaScript'],
        codeUrl: 'https://github.com/BuenosVictor/One-Piece',
        liveUrl: 'https://one-piece-layout.netlify.app/',
        gif: 'OnePiece.gif',
    },
    {
        slug: 'pokedex',
        name: 'Pokedex',
        tagline: 'Catálogo visual dos Pokémon',
        screenshot: pokedexShot,
        screenshotAlt:
            'Tela da Pokedex: cartas dos primeiros Pokémon, cada uma com ilustração, número, tipo e descrição, sobre um cenário de floresta',
        summary:
            'Um catálogo no estilo da enciclopédia do desenho, com a ilustração, o número, o tipo e a descrição de cada Pokémon organizados em cartas.',
        learned:
            'Meu primeiro projeto de verdade. Serviu para dominar posicionamento e layout em CSS. Quero evoluí-lo com uma busca por nome e informações mais detalhadas.',
        techs: ['HTML', 'CSS', 'JavaScript'],
        codeUrl: 'https://github.com/BuenosVictor/Pokedex',
        liveUrl: 'https://victor-pokedex.netlify.app/',
        gif: 'pokedex.gif',
    },
];
