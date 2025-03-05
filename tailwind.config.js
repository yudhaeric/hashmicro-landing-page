/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile-sm": "360px",
        "mobile-md": "385px",
        "mobile-lg": "410px",
        "desktop-md": "1380px",
        "desktop-lg": "1440px",
        "desktop-xl": "1710px",
      },  
      colors: {
        "floralWhite": "#FEFAF0",
        "lightSilver": "#D9D9D9",
        "metallicSilver": "#ABA7AF",
      },
      fontFamily: {
      },
      backgroundImage: {
        'home-banner-desktop': "url('@/assets/desktop-banner.webp')",
      },
    },
  },
  plugins: [],
};
