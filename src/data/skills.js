import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';
import javascript from '../assets/icons/javascript.svg';
import typescript from '../assets/icons/typescript.svg';
import api from '../assets/icons/external-link.svg';
import git from '../assets/icons/git.svg';
import react from '../assets/icons/react.svg';
import tailwind from '../assets/icons/tailwind.svg';
import figma from '../assets/icons/figma.svg';
import tauri from '../assets/icons/tauri.svg';
import rust from '../assets/icons/rust.svg';
import nodejs from '../assets/icons/nodejs.svg';
import jest from '../assets/icons/jest.svg';

/**
 * Cada habilidade tem tres camadas, para tres profundidades de leitura:
 *   `plain`  — o que a tecnologia faz, sem jargao. Aparece na home.
 *   `canDo`  — o que eu consigo entregar com ela. Aparece em /habilidades.
 *   `note`   — minha experiencia pessoal aprendendo. Aparece em /habilidades.
 * `usedIn` referencia os `slug` de src/data/projects.js.
 */
export const dailySkills = [
    {
        name: 'HTML',
        icon: html,
        dot: 'bg-HTML',
        plain: 'A estrutura da página: títulos, textos, botões e imagens.',
        canDo: [
            'Montar páginas com estrutura semântica, que leitores de tela e o Google entendem',
            'Formulários com os campos e rótulos corretos',
            'Estrutura acessível: navegação por teclado e textos alternativos em imagens',
        ],
        note: 'Foi por aqui que tudo começou. Só de conseguir colocar algo na tela, já me empolguei para continuar 🚀',
        usedIn: ['ventus', 'code-pairs', 'one-piece', 'pokedex'],
    },
    {
        name: 'CSS',
        icon: css,
        dot: 'bg-CSS',
        plain: 'A aparência: cores, espaçamento, animações e a adaptação a celular e computador.',
        canDo: [
            'Layouts responsivos com Flexbox e Grid, do celular ao monitor grande',
            'Animações e transições sem travar a página',
            'Traduzir um desenho do Figma para a tela com fidelidade',
        ],
        note: 'O que mais me deu trabalho no começo e onde mais evoluí. Foi nele que percebi que dava para dar vida às ideias e seguir como frontend.',
        usedIn: ['ventus', 'code-pairs', 'one-piece', 'pokedex'],
    },
    {
        name: 'JavaScript',
        icon: javascript,
        dot: 'bg-JS',
        plain: 'O comportamento: o que acontece quando alguém clica, digita ou envia um formulário.',
        canDo: [
            'Buscar dados de um serviço externo e tratar erro, demora e resposta vazia',
            'Controlar o estado de uma aplicação: o que já foi feito, o que falta',
            'Reagir a cliques e digitação sem recarregar a página',
        ],
        note: 'Onde tudo começou a fazer sentido. Fui fundo em projetos com JavaScript puro, focando em lógica, porque sabia que seria a base para qualquer framework depois.',
        usedIn: ['ventus', 'code-pairs', 'one-piece', 'pokedex'],
    },
    {
        name: 'TypeScript',
        icon: typescript,
        dot: 'bg-TYPESCRIPT',
        plain: 'Uma versão do JavaScript que avisa sobre erro de tipo antes mesmo do código rodar.',
        canDo: [
            'Tipar dados, funções e props para pegar erro ainda no editor, antes de ir pra produção',
            'Ler e manter um projeto já tipado sem quebrar o contrato entre as partes do código',
            'Migrar um trecho de JavaScript puro para TypeScript aos poucos, sem reescrever a lógica do zero',
        ],
        note: 'Comecei a usar na Noweb, no mesmo app desktop onde uso Tauri. Ainda não tenho projeto pessoal publicado com TypeScript: uso só no trabalho por enquanto, mas pretendo trazer isso pro portfólio em breve.',
        usedIn: [],
    },
    {
        name: 'API',
        icon: api,
        dot: 'bg-API',
        plain: 'A busca por dados que não estão no próprio site: pede a informação para um serviço de fora e recebe a resposta pronta para mostrar na tela.',
        canDo: [
            'Consumir uma API REST: montar a URL com os parâmetros certos e ler a resposta em JSON',
            'Tratar erro de conexão e erro que a própria API retorna no corpo da resposta, sem quebrar a tela',
            'Mapear os campos que a resposta traz para o que a tela precisa mostrar',
        ],
        note: 'Aprendi na prática buscando dados reais de clima no Ventus: o formato da resposta, os erros que a própria API devolve e como traduzir tudo isso para uma tela que faz sentido pra quem não é técnico.',
        usedIn: ['ventus'],
    },
    {
        name: 'Git',
        icon: git,
        dot: 'bg-GIT',
        plain: 'O controle de versões: guarda o histórico do código e permite trabalhar em equipe sem um atrapalhar o outro.',
        canDo: [
            'Versionar o trabalho em commits que contam o que mudou e por quê',
            'Trabalhar em ramificações separadas sem quebrar o que já está no ar',
            'Publicar projetos direto do repositório',
        ],
        note: 'Aprendi na correria porque precisava publicar meus projetos. Quando parei para estudar de verdade, vi o quanto é essencial em time.',
        usedIn: ['ventus', 'code-pairs', 'one-piece', 'pokedex'],
    },
    {
        name: 'React',
        icon: react,
        dot: 'bg-REACT',
        plain: 'Ferramenta para montar aplicações maiores em blocos reutilizáveis. É o padrão do mercado hoje.',
        canDo: [
            'Quebrar uma tela em componentes que se reaproveitam',
            'Controlar estado e efeitos com hooks',
            'Montar navegação entre páginas com React Router',
        ],
        note: 'No começo me perdi na forma como os arquivos conversam entre si, mas tudo fez sentido quando entendi os componentes. Este portfólio foi meu primeiro projeto em React: hoje já uso no dia a dia.',
        usedIn: [],
    },
    {
        name: 'Tailwind',
        icon: tailwind,
        dot: 'bg-TAILWIND',
        plain: 'Acelera a parte visual sem abrir mão de controle: é CSS organizado de outro jeito.',
        canDo: [
            'Construir interfaces responsivas rápido, sem folha de estilo separada',
            'Manter espaçamento e cores consistentes por um sistema de design',
        ],
        note: 'Uma das ferramentas mais simples e úteis que aprendi. Minha base em CSS fez toda a diferença para pegar rápido.',
        usedIn: [],
    },
    {
        name: 'Tauri',
        icon: tauri,
        dot: 'bg-TAURI',
        plain: 'Framework que empacota o mesmo projeto num app de verdade para Windows e macOS: um código só, rodando fora do navegador em dois sistemas diferentes.',
        canDo: [
            'Manter e evoluir um app desktop multiplataforma em produção',
            'Diagnosticar e corrigir bugs de build que só aparecem num sistema operacional específico',
            'Ligar a versão web do mesmo produto ao back-end em tempo real, com WebSocket',
        ],
        note: 'É a ferramenta que mais uso hoje: na Noweb, sou o principal responsável pelo app desktop da empresa, em Windows e macOS, e também pela versão web dele. Ainda não tenho um projeto pessoal publicado com Tauri: uso só no trabalho por enquanto, mas pretendo trazer isso pro portfólio em breve.',
        usedIn: [],
    },
];

export const learningSkills = [
    {
        name: 'Figma',
        icon: figma,
        dot: 'bg-detail',
        plain: 'Onde o design da tela é desenhado antes de virar código. É a ponte com quem faz design.',
        canDo: [
            'Desenhar a tela antes de programar, para testar ideias barato',
            'Ler um arquivo de design e extrair medidas, cores e tipografia',
        ],
        note: 'Usei bastante no desenho deste portfólio. Ajudou a testar ideias antes de programar e a conversar com gente de UX/UI.',
        usedIn: [],
    },
    {
        name: 'Rust',
        icon: rust,
        dot: 'bg-RUST',
        plain: 'Linguagem que entra quando o JavaScript não alcança, geralmente para resolver algo específico do sistema operacional, por baixo do app desktop.',
        canDo: [
            'Ler e ajustar código Rust já existente para corrigir um bug nativo',
            'Reconhecer quando um problema é da parte nativa do app, não do frontend',
        ],
        note: 'Comecei mexendo nisso para resolver bugs de build do macOS que o resto do stack não cobria. É a linguagem que menos domino das que uso na Noweb, e ainda não tenho projeto pessoal com ela: uso só no trabalho por enquanto, mas é algo que pretendo levar comigo pra carreira.',
        usedIn: [],
    },
    {
        name: 'Node.js',
        icon: nodejs,
        dot: 'bg-NODE',
        plain: 'JavaScript rodando fora do navegador: o mesmo código que faz a tela funcionar também pode ficar do lado do servidor.',
        canDo: [
            'Entender a lógica de programar pro lado do servidor, vindo da base que já tenho no frontend',
            'Acompanhar tecnicamente as conversas sobre o backend com o dev da Noweb',
        ],
        note: 'É o próximo passo depois de me sentir seguro em React: já sei o conceito de programar pro lado do servidor, mas a prática com Node em si eu tô começando a estudar agora. A meta é virar minha porta de entrada pro backend.',
        usedIn: [],
    },
    {
        name: 'Jest',
        icon: jest,
        dot: 'bg-JEST',
        plain: 'Framework de teste automático: um código que verifica se outro código continua funcionando certo, sem precisar clicar em tudo manualmente toda vez.',
        canDo: [
            'Entender o que um teste automatizado verifica e por que ele existe, de tanto testar manualmente antes de publicar na Noweb',
            'Ler um teste já escrito e entender o que ele espera do código',
        ],
        note: 'Já conhecia o conceito de teste, mas nunca escrevi um teste automatizado de verdade. Meu próprio projeto já roda Jest por baixo dos panos (o `npm test` deste portfólio), então vou aprender testando o código daqui mesmo.',
        usedIn: [],
    },
];

/**
 * O diferencial de quem vem de outra area. Um entrevistador nao tecnico avalia
 * exatamente isto — e cada item esta ancorado num fato real da trajetoria,
 * nada generico.
 */
export const strengths = [
    {
        title: 'Comunicação clara',
        text: 'Como Operador de Risco, explicava situações complexas para quem precisava agir na hora. Hoje, na Noweb, é assim que alinho soluções com o backend e com quem usa a plataforma.',
        detail: 'Passava informação para motoristas, equipes e clientes, cada um com um nível diferente de contexto, e aprendi a cortar o excesso e falar o que a pessoa precisa para decidir. Hoje, na Noweb, uso isso todo dia: alinhar a solução com o dev backend e explicar o que fiz e por quê, sem esconder atrás de termo técnico.',
    },
    {
        title: 'Aprendizado constante',
        text: 'No meu primeiro emprego aprendi rastreamento do zero junto com programação: mais de 9 tecnologias de rastreadores e sensores, enquanto estudava programação fora do horário.',
        detail: 'Entrei no rastreamento sem saber nada da área e aprendi mais de 9 tecnologias de rastreadores e sensores usadas no monitoramento das cargas, tudo isso enquanto estudava programação fora do horário. Desde 2022 sigo o mesmo ritmo: cursos, eventos presenciais e comunidades. Este portfólio foi construído com React e Tailwind, duas ferramentas que eu não conhecia quando comecei a montá-lo.',
    },
    {
        title: 'Decisão sob pressão',
        text: 'Rastreava cargas valiosas e lidava com situações de sinistro e recuperação de carga: decisões que não podiam esperar.',
        detail: 'Rastreava cargas valiosas em tempo real e atuava em situações de sinistro e recuperação de carga. Não dava para adiar decisão: quando algo fugia do previsto, a resposta precisava sair em minutos e estar certa. Isso me deu o hábito de agir com a informação que existe, em vez de travar esperando o cenário perfeito, que é exatamente o que um bug em produção exige.',
    },
    {
        title: 'Trabalho em equipe',
        text: 'Trabalho em conjunto com o desenvolvedor backend da Noweb para otimizar a plataforma, de recarregamentos desnecessários ao volume de dados nas requisições.',
        detail: 'Não dá para melhorar performance sozinho: eu vejo o sintoma na tela, ele enxerga a causa no servidor. Já reduzimos recarregamentos causados por re-renderização e diminuímos requisições que traziam mais dado do que a tela usava. É a mesma troca constante que uma boa revisão de código em time exige.',
    },
];

/** Formacao — tudo o que o Victor cita na propria trajetoria. */
export const journey = [
    {
        title: 'Programador BR',
        kind: 'Curso',
        text: 'O primeiro curso, em 2022. Foi onde tive o primeiro contato com lógica de programação e com HTML e CSS.',
    },
    {
        title: 'Dev em Dobro',
        kind: 'Curso e comunidade',
        text: 'Acompanho o conteúdo dos irmãos Ricardo e Roberto. Foi num evento ao vivo deles que construí o projeto One Piece e tive meu primeiro contato com a comunidade dev.',
    },
    {
        title: 'Rocketseat',
        kind: 'Curso',
        text: 'Conteúdo que usei para aprofundar JavaScript e dar os primeiros passos no ecossistema React.',
    },
    {
        title: 'Mentoria individual',
        kind: 'Acompanhamento contínuo',
        text: 'Um desenvolvedor sênior, também amigo, revisa meu código e questiona minhas escolhas de implementação. É a parte que mais acelerou meu aprendizado.',
    },
];
