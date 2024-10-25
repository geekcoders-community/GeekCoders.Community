/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'md': '8px', // You can adjust the blur value as needed
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translate(-50%, 100%)', opacity: '0' },
          '100%': { transform: 'translate(-50%, -50%)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translate(-50%, -50%)', opacity: '1' },
          '100%': { transform: 'translate(-50%, 100%)', opacity: '0' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.6s ease-out forwards',
        slideDown: 'slideDown 0.6s ease-out forwards',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        clash: ['ClashDisplay', 'sans-serif'], // Custom font
        jb: ['JetBrainsMono', 'sans-serif'],   // Custom font
      },
    },
  },
  plugins: [],
};
