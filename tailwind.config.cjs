/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'slider-1': 'url(./assets/slider-images/image-1.jpg)',
        'slider-2': 'url(./assets/slider-images/image-2.jpg)',
        'slider-3': 'url(./assets/slider-images/image-3.jpg)',
        'slider-4': 'url(./assets/slider-images/image-4.jpg)',
      },
    },
  },
  plugins: [require('daisyui')],
};
