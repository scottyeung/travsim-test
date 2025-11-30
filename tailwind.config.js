/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Exact colors from Figma
        primary: {
          red: '#B02235',
        },
        background: {
          light: '#F8FAFD',
          yellow: '#FFFBF2',
          pink: '#FBEFEF',
        },
        accent: {
          blue: '#00B1FF',
        },
      },
      spacing: {
        // Exact spacing from Figma
        '4.5': '18px',
        '18': '72px',
        '20': '80px',
        '26': '104px',
        '35': '140px',
        '58': '233px',
      },
      fontSize: {
        // Exact font sizes from Figma
        'heading-lg': ['32px', { lineHeight: '1.171875em', fontWeight: '700' }],
        'heading-md': ['24px', { lineHeight: '1.171875em', fontWeight: '700' }],
        'heading-sm': ['20px', { lineHeight: '1.171875em', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.171875em', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.2em', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.2em', fontWeight: '400' }],
        'button': ['18px', { lineHeight: 'normal', fontWeight: '500' }],
      },
      gap: {
        // Exact gaps from Figma
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12.5': '50px',
        '17': '68px',
        '20': '80px',
        '21.75': '87px',
      },
      maxWidth: {
        'container': '1440px',
      },
      borderRadius: {
        '3xl': '30px',
        '4xl': '40px',
      },
    },
  },
  plugins: [],
};
