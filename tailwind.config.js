/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'zen-dots': ['"Zen Dots"', 'cursive'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      backgroundImage:{
        Hero:"url('assets/images/global-business.png')",
        Team_bg:"url('assets/images/team_bg.png')",
        register_bg:"url('assets/images/register_left.png')",
        Mesh:"url('assets/images/mesh-testimonials-blockchain.png')",
        Token:"url('assets/images/tokens_b.png')",
        Road:"url('assets/images/road.png')",
        Banner:"url('assets/images/bg-banner.png')",
        Hero_bg:"url('assets/images/hero_right_image.png')",
        'button-gradient': 'linear-gradient(90deg,  #F0C238  0%, #F0C238 100%)',
        'button-level':'linear-gradient(90deg,  #F0C238  0%, #F0C238 100%)',
        'gradient': 'linear-gradient(90deg,  #F0C238  0%, #F0C238 100%)'
        
      
      },
      borderImageSource: {
        'gradient': 'linear-gradient(90deg,  #F0C238  0%, #F0C238 100%)',
      },
      borderWidth: {
        'custom': '2.14px',
      },
    },
  },
  plugins: [],
}

