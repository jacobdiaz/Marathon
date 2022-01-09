module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          black: "var(--color-primary-black)",
          white: "var(--color-primary-white)",
          darkgrey: "var(--color-primary-dark-grey)",
          grey: "var(--color-primary-grey)",
        },
        secondary: {
          green: "var(--color-secondary-green)",
          orange: "var(--color-secondary-orange)",
          blue: "var(--color-secondary-blue)",
          purple: "var(--color-secondary-purple)",
          pink: "var(--color-secondary-pink)",
          red: "var(--color-secondary-red)",
        },
      },
      backgroundColor: {
        primary: {
          purple: "var(--color-primary-purple)",
          navy: "var(--color-primary-navy)",
        },
        seconday: {
          green: "var(--color-secondary-green)",
          orange: "var(--color-secondary-orange)",
          blue: "var(--color-secondary-blue)",
          purple: "var(--color-secondary-purple)",
          pink: "var(--color-secondary-pink)",
          red: "var(--color-secondary-red)",
        },
        shade: {
          purple: "var(--color-shade-purple)",
          orange: "var(--color-shade-orange)",
          blue: "var(--color-shade-blue)",
          green: "var(--color-shade-green)",
          grey: "var(--color-shade-grey)",
          red: "var(--color-shade-red)",
        },
      },
    },
  },
  plugins: [],
};
