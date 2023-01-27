/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns :{
        'gallary': 'repeat(auto-fit,minmax(100px, auto))'
      }
    },
  },
  plugins: [],
  variants: {
    /* ... */
    transform: ['hover'],
    /* ... */
}
}
