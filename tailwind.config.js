module.exports = {
  content: ["./dist/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
], 

  theme: {
    extend: {
      colors: {
      
      },
      fontFamily:{
        bodyFont:["Cairo"]
      }
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
