import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '30': '7.5rem',
        '290px': '290px',
        '396px': '396px',
        '500px': '500px',
        '980px': '980px',
        '14': '3.5rem',
        '125px': '125px',
        '7': '1.75rem',
        '75px': '75px',
        '210px': '210px'
      },
      colors: {
        'darkblue-500': '#485769',
        'darkblue-600': '#37475a',
        'darkblue-700': '#232f3e',
        'darkblue-900': '#191e26',
        'darkblue-950': "#131a22",
        'gold-100': '#febd69',
        'gold-200': '#faa63a',
        'orange-650': '#e47911',
        'yellow-350': '#f0c14b',
        'main-gray': '#f0f2f5',
        'main-blue': '#1877f2',
        'main-blue-hover': '#166fe5',
        'main-green': '#42b72a',
        'main-green-hover': '#36a420',
        'hoverspt': '#18d760',
        'purple-main': '#2d46b9',
        'green-main': '#1ed760',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: theme => ({
        'spotify-theme': "url('/img/bursts.svg')",
        'spotify-theme-mobile': "url('/img/bursts-mobile.svg')",
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize: {
        '9xl': '9rem',
        'subtitle': '1.7rem'
      },
      fontFamily: {
        'arial': 'Arial',
      }
    },
  },
  plugins: [],
} satisfies Config;
