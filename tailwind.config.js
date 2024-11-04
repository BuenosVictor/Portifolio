{import('tailwindcss').Config}
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primaryL:'#FFC700',
        secondaryL:'#00509D',
        buttonColor:'#48639C',
        detail:'#4831D4',
        HTML:'#E14E1D',
        CSS:'#0277BD',
        JS:'#F0DB4F',
        REACT:'#61DAFA',
        TAILWIND:'#38BDF8',
        GIT:'#F34F29',
        linksDetail:'#114B5F',

      },
        
        animations:{
          
         animationOfLine:"animation: 3s linear 1s infinite running slidein"
        }
      }
    },
  plugins: [],
}

