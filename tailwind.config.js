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
        "floralWhite": "#FEFAF0",
        "lightSilver": "#D9D9D9",
        "metallicSilver": "#ABA7AF",
        "testing": "#98eb34",
      },
      fontFamily: {
        "PoppinsLight": ["PoppinsLight", "Arial", "sans-serif"],
      },
      backgroundImage: {
        'homeBannerDesktop': "url('@/assets/desktop-banner.webp')",
      },
    },
  },
  plugins: [],
}




