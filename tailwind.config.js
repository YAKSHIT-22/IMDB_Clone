/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
			xxs: "300px",
			xs: "390px",
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
    extend: {
      width: {
				'128': '32rem',
			  },
			height: {
				'128': '32rem',
			  },
        fontFamily: {
          monts: ["Poppins", "Helvetica","sans-serif"],
        },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/line-clamp')
  ],
  darkMode: "class",
}
