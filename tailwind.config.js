module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        sans : ['IRANYekanX']
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}