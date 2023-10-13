/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          '1': '#FDFDFE',
          '2': '#FBFBFD',
          '3': '#F8F9FC',
          '4': '#F6F7FA',
          '5': '#F4F5F9',
          '10': '#E9EBF4',
          '20': '#D3D7E8',
          '30': '#BEC3DD',
          '40': '#A8AFD1',
          '50': '#929BC5',
          '60': '#7C87BA',
          '70': '#6673AF',
          '80': '#515FA3',
          '90': '#3B4B97',
          '100': '#25378C',
          '100r': '#25378c',
        },
        indigo: {
          'hover': '#8149A5',
          'focus': '#442262',
          '1': '#FDFDFE',
          '2': '#FBFBFC',
          '3': '#FAF8FB',
          '4': '#F8F6F9',
          '5': '#F6F4F8',
          '10': '#EDE9F1',
          '20': '#DCD3E3',
          '30': '#CABED5',
          '40': '#B8A8C7',
          '50': '#A692B8',
          '60': '#957CAA',
          '70': '#83669C',
          '80': '#71518E',
          '90': '#603B80',
          '100': '#4E2572',
        },
        dark: {
          '1': '#FDFDFD',
          '2': '#FBFBFB',
          '3': '#F8F8F8',
          '4': '#F6F6F6',
          '5': '#F4F4F4',
          '10': '#E9E9E9',
          '20': '#D3D3D3',
          '30': '#BDBDBD',
          '40': '#A7A7A7',
          '50': '#909090',
          '60': '#7A7A7A',
          '70': '#646464',
          '80': '#4E4E4E',
          '90': '#383838',
          '100': '#222222',
        },
      },
      screens: {
        // Mobile Até 320px
        'sm': '320px',
  
        // Tablet Até 768px
        'md': '768px',
        
        // Desktop Até 1024px
        'lg': '1024px',
        
        // Desktop Até 1366px
        'xl': '1366px',
  
        // Desktop Até 1920px
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
  safelist: []
}

