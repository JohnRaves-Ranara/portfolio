/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'hnd-black' : ['HelveticaNowDisplay-Black','sans-serif'],
        'hnd-bold' : ['HelveticaNowDisplay-Bold', 'sans-serif'],
        'hnd-regular' : ['HelveticaNowDisplay-Regular', 'sans-serif'],
        'hnd-medium' : ['HelveticaNowDisplay-Medium', 'sans-serif'],
        'hnd-light' : ['HelveticaNowDisplay-Light', 'sans-serif'],
        'hnd-thin' : ['HelveticaNowDisplay-Light', 'sans-serif']
      },
      screens: {
        'mobile-s' : '320px',
        'mobile-m' : '375px',
        'mobile-l' : '425px'
      }
    },
  },
  plugins: [],
}

