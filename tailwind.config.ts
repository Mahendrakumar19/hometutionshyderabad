import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002855',
        secondary: '#FFA500',
        accent: '#0052cc',
      },
    },
  },
  plugins: [],
}
export default config
