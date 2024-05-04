/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],

	theme: {
		screens: {
			sm: '320px',
			// => @media (min-width: 320px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				ribeye: ['RibeyeRegular', 'sans-serif'],
				earwig: ['Earwig', 'sans-serif']
			},
			colors: {
				primary: '#EE821B',
				'primary-50': '#FAF6EF',
				'primary-100': '#F3ECDE',
				'primary-200': '#E8D9BD',
				'primary-300': '#DCC69B',
				'primary-400': '#D1B37A',
				'primary-500': '#C5A059',
				'primary-600': '#947843',
				'primary-700': '#63502D',
				'primary-800': '#312816',
				'primary-900': '#141009',

				'gray-50': '#EBEBEB',
				'gray-100': '#D6D6D6',
				'gray-200': '#ADADAD',
				'gray-300': '#858585',
				'gray-400': '#5C5C5C',
				'gray-500': '#333333',
				'gray-600': '#262626',
				'gray-700': '#1A1A1A',
				'gray-800': '#0D0D0D',
				'gray-900': '#050505',

				background: '#E5E5E5',
				'side-bg': '#FAFAFA'
			}
		}
	},

	plugins: []
};

module.exports = config;
