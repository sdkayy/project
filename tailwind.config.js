module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      borderRadius: {
        xl: "3rem"
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "100": "26rem",
        "150": "36rem",
        "175": "42rem",
        "200": "52rem"
      },
      inset: {
        "6": "1.5rem"
      }
    },
    opacity: {
      "0": "0",
      "10": ".1",
      "20": ".2",
      "30": ".3",
      "40": ".4",
      "50": ".5",
      "60": ".6",
      "70": ".7",
      "80": ".8",
      "90": ".9",
      "100": "1"
    },
    fontFamily: {
      sans: ["Muli", "Sans-serif"]
    }
  },
  variants: {},
  plugins: []
};
