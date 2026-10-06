/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#090A0F',
        card: '#0F111A',
        cardHover: '#141724',
        borderHairline: '#1E2235',
        accentViolet: '#8A2BE2',
        accentCyan: '#00F2FE',
        accentEmerald: '#10B981',
      },
    },
  },
  plugins: [],
};
