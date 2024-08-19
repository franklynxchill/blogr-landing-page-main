/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "450px",
      md: "768px",
      lg: "992px",
      xl: "1124px",
    },
    container : {
      center: true,
      padding: {
        sm: '2rem',
      },
    },
    extend: {
      colors: {
        ctaText: 'hsl(356, 100%, 66%)',
        ctaHoverBg: 'hsl(355, 100%, 74%)',
        headings: 'hsl(208, 49%, 24%)',
        textColor: 'hsl(0, 0%, 100%)',
        footerText: 'hsl(240, 2%, 79%)',
        bodyCopy: 'hsl(207, 13%, 34%)',
        footerBackground: 'hsl(240, 10%, 16%)',

        intro_CTA_MobileNav: {
          veryLightRed: 'hsl(13, 100%, 72%)',
          LightRed: 'hsl(353, 100%, 62%)',
        },
        
        bodyColor: {
          very_dark_Gray_Blue: 'hsl(237, 17%, 21%)',
          very_dark_desaturated_blue: 'hsl(237, 23%, 32%)',
        }
      },
      backgroundImage: {
        circle: "url('/assets/images/bg-pattern-circles.svg')",
        introDesktop: "url('/assets/images/bg-pattern-intro-desktop.svg')",
        introMobile: "url('/assets/images/bg-pattern-intro-mobile.svg')",
        editorDesktop: "url('/assets/images/illustration-editor-desktop.svg')",
        editorMobile: "url('/assets/images/illustration-editor-mobile.svg')",
        laptopDesktop: "url('/assets/images/illustration-laptop-desktop.svg')",
        laptopMobile: "url('/assets/images/illustration-laptop-mobile.svg')",
        phone: "url('/assets/images/illustration-phones.svg')",
      }, 
      fontFamily: {
        primaryFont: 'Overpass',
        secondaryFont: 'Ubuntu',
      },
    },
  },
  plugins: [],
}

