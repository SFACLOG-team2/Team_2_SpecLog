import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        neutral: {
          100: '#030303',
          90: '#1A1A1A',
          80: '#333333',
          70: '#4D4D4D',
          60: '#666666',
          50: '#808080',
          40: '#999999',
          30: '#B3B3B3',
          20: '#CCCCCC',
          10: '#E6E6E6',
          5: '#F3F3F3',
          0: '#FFFFFF',
        },
        primary: {
          100: '#0059FF',
          90: '#196AFF',
          80: '#337AFF',
          70: '#4C8BFF',
          60: '#669BFF',
          50: '#7FACFF',
          40: '#99BDFF',
          30: '#B2CDFF',
          20: '#CCDEFF',
          10: '#E5EEFF',
          5: '#F5F8FF',
        },
        stroke: { blue: '#99BDFF', 10: '#E6E6E6', 5: '#F3F3F3' },
        background: {
          100: '#666666',
          50: '#A9A9A9',
          5: '#F8F8F9',
          blue: '#F5F8FF',
          pink: '#FFE5EB',
          green: '#E3FFFA',
          purple: '#EFE8FF',
          orange: '#FFECCF',
        },
        system: {
          warning: '#FF0000',
          success: '#07A320',
        },
        hover: {
          red: '#FF527C',
          green: '#06C9A6',
          purple: '#925EFF',
          orange: '#FF9900',
        },
      },
    },
  },
  plugins: [],
};
export default config;
