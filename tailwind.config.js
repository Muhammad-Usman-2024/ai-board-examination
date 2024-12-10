module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        "main-green": "#3AB0FF",
        "main-dark": "#1B263B",
        "main-light": "#EAF6FF",
        "accent-blue": "#0077B6",
        "text-color": "#0D1B2A",
      },
      fontFamily: {
        aeonik: ["Aeonik", "sans-serif"],
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(30px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 2s ease-in-out",
        "fade-in-delay": "fadeIn 3s ease-in-out",
        "slide-in": "slideIn 2s ease-out",
        bounce: "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
