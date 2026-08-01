import { projects } from './projects';
import park from '../PageAboutMe-component/img/Park.jpg';
import street from '../PageAboutMe-component/img/LailaInStreet.jpg';
import saxofone from '../PageAboutMe-component/img/saxophone.jpg';
import avo from '../PageAboutMe-component/img/grandmaAndMe.jpg';

const gifUrl = (file) => `${process.env.PUBLIC_URL}/gifs/${file}`;

const TAMANHO_KB = {
    'Memory.gif': 980,
    'Weather.gif': 1100,
    'OnePiece.gif': 5300,
    'pokedex.gif': 24800,
};

const FILA = [

    park,
    street,
    saxofone,
    avo,

    ...projects
        .map((p) => p.gif)
        .sort((a, b) => (TAMANHO_KB[a] ?? Infinity) - (TAMANHO_KB[b] ?? Infinity))
        .map(gifUrl),
];

let iniciado = false;

export function prefetchRestante() {
    if (iniciado) return;
    iniciado = true;

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
