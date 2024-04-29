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
        'heropattern': "linear-gradient(to_top_bottom, rgba('#162154',0.8), rgba('#375c9d',0.8)), url('/plumbing-home.jpg')",
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
      },
      white: '#ffffff'
    },
    lineHeight: {
      'extra-tight': '1.15',
    }
  },
  plugins: [],
}
export default config
