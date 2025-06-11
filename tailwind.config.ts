import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#DC2626',
        'cream-white': '#FEFCE8',
        'olive-green': '#65A30D',
        'charcoal-gray': '#1F2937',
        'warm-beige': '#FEF3C7',
      },
    },
  },
  plugins: [],
};

export default config; 