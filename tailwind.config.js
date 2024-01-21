/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode:"class"//setting this removes external influence of System preference color settings
  
}


//tailwind is picking up color from system and is ceating discolor on 
//dark and light mode
//as By default, Tailwind CSS supports the automatic application of dark mode styles based on 
//the user's system preferences (e.g., operating system dark mode settings).