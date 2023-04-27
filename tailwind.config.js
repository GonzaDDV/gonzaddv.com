/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        instagram:
          "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);",
      },

      colors: {
        mac: {
          yellow: "#F6B024",
          green: "#2FC131",
          red: "#F24646",
        },
        twitter: "#00ACEE",
        github: "#333333",
        linkedin: "#0E76A8",
        youtube: "#FF0000",
        mail: "#C71610",
      },

      fontSize: {
        headline: "17vw",
        "headline-mobile": "21.8vw",
        "headline-sm": "2.8vw",
        "headline-sm-mobile": "6vw",
        projects: "11.8vw",
        "projects-mobile": "14.5vw",
        contact: "14.3vw",
        "contact-mobile": "17.3vw",
      },

      width: {
        "70p": "calc(75% - 5rem)",
        "full-p": "calc(100% - 5rem)",
      },

      spacing: {
        "screen-x2": "200vw",
      },
    },
  },
  plugins: [],
};
