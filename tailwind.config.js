/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // --- Cores de marca do site (inalteradas) ---
        primaryL: '#FFC700',
        primaryHover: '#ecb900', // tom de hover que ja era usado no projeto
        secondaryL: '#00509D',
        secondaryHover: '#003D78',
        buttonColor: '#48639C',
        detail: '#4831D4',
        linksDetail: '#114B5F',

        // --- Neutros ---
        ink: '#1A1A1A',
        inkSoft: '#4B5563',
        surface: '#FAF9F6',

        // --- Cores das tecnologias, exatamente como no site original ---
        // Usadas so como PONTO/ACENTO ao lado do nome, nunca como cor de texto
        // sobre fundo claro. Assim o amarelo do JS (#F0DB4F) aparece do jeito
        // que ele e, e o texto continua legivel em neutro escuro.
        HTML: '#E14E1D',
        CSS: '#0277BD',
        JS: '#F0DB4F',
        TYPESCRIPT: '#3178C6',
        REACT: '#61DAFA',
        TAILWIND: '#38BDF8',
        GIT: '#F34F29',
        // Rust nao tem cor de marca oficial (o logo e preto/monocromatico) — usei o
        // laranja-ferrugem associado a comunidade Rust, senao o ponto sumiria perto
        // do `ink`. TAURI e o hex oficial (perto do `primaryL` do site por coincidencia).
        RUST: '#CE422B',
        TAURI: '#FFC131',
        // API tambem nao tem marca propria. Roxo mais escuro que o `detail`
        // (Figma, #4831D4) para nao repetir a mesma cor entre os dois pontos.
        API: '#6B21A8',
        NODE: '#5FA04E',
        JEST: '#C21325',
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
