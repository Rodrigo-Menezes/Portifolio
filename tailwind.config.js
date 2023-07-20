/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgux":"url('/uiux.jpg')",
        "bgfront":"url('/front.jpg')",
      },
      colors:{
        'azul':'#006CB9 ',
        'prata':' #ffffff',
        'vermelho':'#f80b0e',
        'minhacor':'#FFBC42',
        
      },
      animation: {
        'pulse-fast': 'pulse 1s linear infinite',
      },
      scale: {
        '200': '2',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      dropShadow:{
        dark1:'1px 1px 1px black',
        dark2:'1px 1px 1px #1A1A1A',
        dark3:'1px 1px 0.5px #B2CAD8',
      },
      boxShadow: {
        'custom': '5px 5px rgba(0, 108, 185, 0.4), 10px 10px rgba(0, 108, 185, 0.3), 15px 15px rgba(0, 108, 185, 0.2), 20px 20px rgba(0, 108, 185, 0.1), 25px 25px rgba(0, 108, 185, 0.05)',
      },

    },
  },
  plugins: [],
}
