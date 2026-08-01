module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryL: '#FFC700',
        primaryHover: '#ecb900',
        secondaryL: '#00509D',
        secondaryHover: '#003D78',
        buttonColor: '#48639C',
        detail: '#4831D4',
        linksDetail: '#114B5F',

        ink: '#1A1A1A',
        inkSoft: '#4B5563',
        surface: '#FAF9F6',

        HTML: '#E14E1D',
        CSS: '#0277BD',
        JS: '#F0DB4F',
        TYPESCRIPT: '#3178C6',
        REACT: '#61DAFA',
        TAILWIND: '#38BDF8',
        GIT: '#F34F29',
        RUST: '#CE422B',
        TAURI: '#FFC131',
        API: '#6B21A8',
        NODE: '#5FA04E',
        JEST: '#C21325',
      },
      maxWidth: {
        content: '72rem',
      },
      rotate: {
        4: '4deg',
        5: '5deg',
        7: '7deg',
        9: '9deg',
        10: '10deg',
        11: '11deg',
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
