const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class'],
  theme: {
    colors: {
      waikawa: {
        50: '#f2f7fb',
        100: '#e7f0f8',
        200: '#d3e2f2',
        300: '#b9cfe8',
        400: '#9cb6dd',
        500: '#839dd1',
        600: '#6a7fc1',
        700: '#6374ae',
        800: '#4a5989',
        900: '#414e6e',
        950: '#262c40',
      },
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      primary: colors.rose,
      gray: colors.gray,
      // gray: {
      //   50: '#f2f7fb',
      //   100: '#e7f0f8',
      //   200: '#d3e2f2',
      //   300: '#b9cfe8',
      //   400: '#9cb6dd',
      //   500: '#839dd1',
      //   600: '#6a7fc1',
      //   700: '#6374ae',
      //   800: '#4a5989',
      //   900: '#414e6e',
      //   950: '#262c40',
      // },
    },
    extend: {
      spacing: {
        18: '4.5rem',
      },
      keyframes: {
        show: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        show: 'show 225ms ease-in-out',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
