/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
        "lightSilver": "#D9D9D9",
      },
      fontFamily: {
        "PoppinsLight": ["PoppinsLight", "Arial", "sans-serif"],
      },
      backgroundImage: {
        'homeBannerDesktop': "url('/assets/desktop-banner.webp')",
        'sosmedBackground': "url('/assets/sosmed-bg.svg')",
      },
    },
  },
  plugins: [],
}




