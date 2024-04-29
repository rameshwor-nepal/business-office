import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      blue: {
        1: '#162154',
        2: '#375c9d',
        3: '#267fe0',
      },
      cyan: {
        1: "#34d6ff",
      },
      gray: {
        1: '#2c262e',
        2: '#878f9f',
      }
    }
  },
  plugins: [],
}
export default config
