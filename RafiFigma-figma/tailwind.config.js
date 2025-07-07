module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          1: "var(--global-1)",
          2: "var(--global-2)",
          3: "var(--global-3)",
          4: "var(--global-4)",
          5: "var(--global-5)"
        },
        header: {
          1: "var(--header-1)"
        },
        button: {
          1: "var(--button-1)"
        },
        footer: {
          1: "var(--footer-1)",
          2: "var(--footer-2)"
        }
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inder: ['Inder', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        sarpanch: ['Sarpanch', 'sans-serif'],
        sansita: ['Sansita', 'sans-serif'],
        scada: ['Scada', 'sans-serif'],
        lucida: ['"Lucida Bright"', 'serif'],
      }
    }
  },
  plugins: []
};