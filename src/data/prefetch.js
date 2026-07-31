import { projects } from './projects';
import park from '../PageAboutMe-component/img/Park.jpg';
import street from '../PageAboutMe-component/img/LailaInStreet.jpg';
import saxofone from '../PageAboutMe-component/img/saxophone.jpg';
import avo from '../PageAboutMe-component/img/grandmaAndMe.jpg';

/**
 * Pre-carregamento em segundo plano do que as OUTRAS abas vao precisar,
 * disparado depois que a splash libera o site (evento portfolio:pronto).
 *
 * Por que nao segurar a splash ate isso terminar: os GIFs somam 32MB — num 4G
 * real seriam ~30s de tela de carregamento, e num 3G, minutos. Em segundo
 * plano o visitante ja esta usando o site enquanto o cache enche; quando ele
 * clica em Projetos, as previas ja tocam na hora. Se ele for mais rapido que o
 * download, a Laila do proprio card cobre o restante.
 *
 * Um arquivo por vez, do menor para o maior: a banda continua livre para o que
 * o visitante esta fazendo, e a maioria das previas fica pronta cedo (o
 * pokedex.gif de 24MB, sozinho no fim, e o unico que demora).
 */
const gifUrl = (file) => `${process.env.PUBLIC_URL}/gifs/${file}`;

// Tamanho aproximado de cada GIF, so para ordenar a fila (menor primeiro).
// GIF novo sem entrada aqui vai para o fim da fila — nada quebra.
const TAMANHO_KB = {
    'Memory.gif': 980,
    'Weather.gif': 1100,
    'OnePiece.gif': 5300,
    'pokedex.gif': 24800,
};

const FILA = [
    // fotos da aba /sobre-mim (~330KB) — as da home nao entram aqui porque sao
    // `loading="eager"` e a propria splash ja espera por elas
    park,
    street,
    saxofone,
    avo,
    // GIFs de previa, do menor para o maior
    ...projects
        .map((p) => p.gif)
        .sort((a, b) => (TAMANHO_KB[a] ?? Infinity) - (TAMANHO_KB[b] ?? Infinity))
        .map(gifUrl),
];

let iniciado = false;

export function prefetchRestante() {
    if (iniciado) return;
    iniciado = true;

    // Respeita quem pediu economia de dados no navegador/sistema.
    if (navigator.connection?.saveData) return;

    const proximo = (i) => {
        if (i >= FILA.length) return;
        const img = new Image();
        img.onload = () => proximo(i + 1);
        img.onerror = () => proximo(i + 1);
        img.src = FILA[i];
    };

    proximo(0);
}
