const defaultTheme = require('tailwindcss/defaultTheme');
import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      rustica: ['rustica', 'sans-serif'],
    },
    fontSize: {
      largeTitle: ['84px', '88px'],
      title1: ['28px', '34px'],
      title2: ['22px', '28px'],
      title3: ['20px', '26px'],
      body: ['16px', '20px'],
      callout: ['16px', '22px'],
      compare: ['16px', '18px'],
      subHeadline: ['15px', '20px'],
      footnote: ['14px', '18px'],
      compare2: ['14px', '15px'],
      caption1: ['13px', '16px'],
      caption2: ['12px', '13px'],
      caption3: ['10px', '13px'],
    },
    screens: {
      desktop: '1435px',
      ...defaultTheme.screens,
    },
    extend: {
      rotate: {
        '45': '45deg',
        '135': '135deg',
      },
      height: {
        '7.5': '30px',
      },
      maxHeight: {
        '2/3': 'calc(100vh / 3)',
        '1/2': 'calc(100vh / 2)',
      },
      cursor: {
        copy: 'copy',
      },
      colors: {
        fliff: {
          white: '#FFFFFF',
          black: '#000000',
          gray: {
            1000: '#1e1e1e',
            900: '#3c3c43',
            800: '#58585e',
            700: '#747479',
            600: '#909095', 
            500: '#acacb0',
            400: '#c8c8cb',
            300: '#e4e4e6', 
            200: '#ebebec',
            100: '#f2f2f2',
          },
          blue: {
            1000: '#080a1a',
            900: '#151544', // FLiff Blue
            800: '#271d77',
            700: '#433a8a',
            600: '#5f579e',
            500: '#7b74b1',
            400: '#9692c5', 
            300: '#b2afd8',
            200: '#ceccec', 
            100: '#eae9ff',
          },
          green: {
            1000: '#003a07',
            900: '#0b5615',
            800: '#167222',
            700: '#218f30',
            600: '#2cab3e',
            500: '#37c74b',
            400: '#28E646', // Fliff Green
            300: '#84ed93',
            200: '#aff5b8',
            100: '#d9fcdd',
          },
          red: {
            1000: '#6d0612',
            900: '#85121e',
            800: '#9e1d2a',
            700: '#b62937',
            600: '#ce3543',
            500: '#e7404f', 
            400: '#ff4c5b',
            300: '#fbb6b6',
            200: '#fdcece',
            100: '#ffe6e6',
          },
          yellow: {
            1000: '#513600',
            900: '#6e4f0e',
            800: '#8b671c',
            700: '#a8802a',
            600: '#c59938',
            500: '#e2b146',
            400: '#FFCD3D', // Fliff Yellow
            300: '#ffdc90',
            200: '#ffe8b6',
            100: '#fff3dc',
          },
        },
      },
      dropShadow: {
        outline: ['-1px 1px 0 #FFF', '1px 1px 0 #FFF', '1px -1px 0 #FFF', '-1px -1px 0 #FFF'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(12deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config

