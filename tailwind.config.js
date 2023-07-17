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
        "bg": "url('/bg.png')",
        "bgux":"url('/uiux.jpg')",
        "bgfront":"url('/front.jpg')"
      },
      colors:{
        azul:'#5671A6',
        prata:' #B2CAD8'
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
      },
    },
  },
  plugins: [],
}
