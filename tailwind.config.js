/** @type {import('tailwindcss').Config} */
const assetPrefix = "/i";
const cdnUrl = "https://d1mshiayusd6zv.cloudfront.net";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const designSystem = require('@coolsday/polaron-design-system/tailwind/tailwind.config');

module.exports = {
  presets: [designSystem],
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/@coolsday/polaron-design-system/**/*.{js,ts,jsx,tsx}', // 👈 Add this line
  ],
  prefix: "",
  theme: {
    screens: {
      window1: "1920px", // Add margin to the left and right
      window2: "1200px", // PC UI, Font Design
      tablet1: "980px", // Tablet => PC Font Design
      tablet2: "767px", // Tablet UI, Font Design
      mobile1: "490px", // Mobile => Tablet Font Design
      mobile2: "320px", // Mobile UI, Font Design

      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "630px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      // FINAL STANDARD
      desktop: "1920px",
      lglaptop: "1440px",
      smLaptop: "1280px",
      tablet: "768px",
      mobile: "390px",
    },
    extend: {
      aspectRatio: {
        "16/14": "16 / 14",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "dark-yellow": "#FF8100",
        "dark-green": "#076032",
        "light-blue": "#75D2FF",
        "open-green": "#007505",
        "digit-blue": "#0C4CF2",
        "light-orange": "#FC932B",
        "dark-orange": "#E18047",
        "savvanah-blue": "#28AADC",
        "light-yellow": "#FED438",
        "dark-gary": "#52536D",
        "secondary-text": "#040614",
        "btn-green": "#60BF9C",
        "light-green": "#03A613",
        "sky-blue": "#1D57DE",
        "polaron-black": "#272848",
        "polaron-sky-blue": "#1D58D7",
        "polaron-blue": "#1853F6",
        "incentive-title": "#272848",
        "incentive-tag": "#687292",
        "btn-default": "#214083",
        "btn-gray": "#E9E9ED",
        "btn-hover": "#357ABD",
        "btn-active": "#2C5C8A",
        "success-green": "#15B097",
        "neutral-25": "#F9F9FB",
        "neutral-50": "#F9FAFB",
        "neutral-100": "#F3F4F6",
        "neutral-200": "#E5E7EB",
        "neutral-300": "#D1D5DB",
        "neutral-400": "#9CA3AF",
        "neutral-500": "#6B7280",
        "neutral-600": "#4B5563",
        "neutral-700": "#374151",
        "neutral-800": "#1F2937",
        "neutral-900": "#272848",
        "neutral-950": "#030712",
        "neutral-1000": "#040616",
        "adventure-blue": "#01a9e0",
        "olive-green": "#00463A",
        "dark-olive": "#112526",
        inactive: "#687292",
        "dark-blue": "#214083",
        disable: "#9393A3",
        yellow: "#FFA600",
        "select-yellow": "#FFDC9B",
      },
      borderRadius: {
        md: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        10: "10%",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        aurora: "aurora 60s linear infinite",
      },
      boxShadow: {
        "3xl": "0 0 100px -15px rgba(0, 0, 0, 0.3)",
        "light-card": "0px 4px 20px 0px #2140831A",
        "light-polaron": "0px 4px 20px 0px rgba(33, 64, 131, 0.1)",
        "logo-card": "0px 4px 10px 0px #2728481A",
      },
      margin: {
        window1: "64px",
        window2: "64px",
        tablet: "32px",
        mobile: "16px",
      },
      padding: {
        window1: "128px",
        window2: "64px",
        tablet: "32px",
        mobile: "16px",
      },
      backgroundImage: {
        main: "url('/bg/main.avif')",
        solar: "url('/bg/solar.avif')",
        "solar-com": "url('/bg/solar-com.jpg')",
        "solar-res": "url('/bg/solar-res.jpg')",
        battery: "url('/bg/battery.avif')",
        construction: "url('/bg/construction.avif')",
        "faded-black-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.08) 8.05%, #000000 100%)",
        "glass-effect":
          "linear-gradient(95.99deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%)",
        "gradient-blue": `linear-gradient(274.84deg, #4CCDFF 0.1%, #1D57DE 100%)`,
      },
    },
   fontSize: {
      "h0-desktop-md": ["62px", { lineHeight: "1.2" }],
      "h1-desktop-md": ["48px", { lineHeight: "1.2" }],
      "h2-desktop-md": ["32px", { lineHeight: "1.2" }],
      "h3-desktop-md": ["24px", { lineHeight: "1.2" }],
      "h4-desktop-md": ["20px", { lineHeight: "1.2" }],
      "h5-desktop-md": ["16px", { lineHeight: "1.2" }],
      "p-md-desktop-md": ["18px", { lineHeight: "1.5" }],
      "p-desktop-md": ["16px", { lineHeight: "1.5" }],
      "p-small-desktop-md": ["14px", { lineHeight: "1.5" }],
      "p-xsmall-desktop-md": ["12px", { lineHeight: "1.5" }],
      "h1-desktop": ["32px", { lineHeight: "1.2" }],
      "h2-desktop": ["24px", { lineHeight: "1.2" }],
      "h3-desktop": ["20px", { lineHeight: "1.2" }],
      "h4-desktop": ["16px", { lineHeight: "1.2" }],
      "h5-desktop": ["14px", { lineHeight: "1.2" }],
      "p-md-desktop": ["18px", { lineHeight: "1.5" }],
      "p-desktop": ["16px", { lineHeight: "1.5" }],
      "p-small-desktop": ["14px", { lineHeight: "1.5" }],
      "p-xsmall-desktop": ["12px", { lineHeight: "1.5" }],
      "h1-tablet": ["32px", { lineHeight: "1.2" }],
      "h2-tablet": ["22px", { lineHeight: "1.2" }],
      "h3-tablet": ["18px", { lineHeight: "1.2" }],
      "h4-tablet": ["16px", { lineHeight: "1.2" }],
      "h5-tablet": ["14px", { lineHeight: "1.2" }],
      "p-md-tablet": ["18px", { lineHeight: "1.5" }],
      "p-tablet": ["16px", { lineHeight: "1.5" }],
      "p-small-tablet": ["14px", { lineHeight: "1.5" }],
      "p-xsmall-tablet": ["12px", { lineHeight: "1.5" }],
      "h1-mobile": ["28px", { lineHeight: "1.2" }],
      "h2-mobile": ["22px", { lineHeight: "1.2" }],
      "h3-mobile": ["18px", { lineHeight: "1.2" }],
      "h4-mobile": ["16px", { lineHeight: "1.2" }],
      "h5-mobile": ["14px", { lineHeight: "1.2" }],
      "p-md-mobile": ["18px", { lineHeight: "1.5" }],
      "p-mobile": ["16px", { lineHeight: "1.5" }],
      "p-small-mobile": ["14px", { lineHeight: "1.5" }],
      "p-xsmall-mobile": ["12px", { lineHeight: "1.5" }],

      xxs: ["10px", { lineHeight: "1.2" }],
      xs: ["12px", { lineHeight: "1.4" }],
      sm: ["14px", { lineHeight: "1.5" }],
      base: ["16px", { lineHeight: "1.6" }],
      md: ["18px", { lineHeight: "1.7" }],
      xl: ["20px", { lineHeight: "1.8" }],
      "2xl": ["24px", { lineHeight: "1.2" }],
      "3xl": ["28px", { lineHeight: "2" }],
      "4xl": ["36px", { lineHeight: "2.1" }],
      "5xl": ["48px", { lineHeight: "2.2" }],
      "6xl": ["60px", { lineHeight: "2.4" }],
    },
    fontFamily: {
      overpassbold: ["Overpass-bold", "sans-serif"],
      overpassblack: ["Overpass-black", "sans-serif"],
      overpassextrabold: ["Overpass-extrabold", "sans-serif"],
      overpasssemibold: ["Overpass-semibold", "sans-serif"],
      overpassregular: ["Overpass-regular", "sans-serif"],
      overpasslight: ["Overpass-light", "sans-serif"],
      overpassmedium: ["Overpass-medium", "sans-serif"],
        sans: ["Space Grotesk", "sans-serif"],
      inter: ['Inter', 'sans-serif'], 

    },
    fontWeight: {
      "extra-bold": "800",
      bold: "700",
      semibold: "600",
      medium: "500",
      normal: "400",
      light: "350",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "active"],
    },
  },
  plugins: [
    addVariablesForColors,
    addGradientBorder,
    require("@tailwindcss/typography"),
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

function addGradientBorder({ addUtilities }) {
  addUtilities({
    ".border-gradient": {
      borderImage: "linear-gradient(to right, #FFFFFF 20%, #FFFFFF 5%)",
      borderImageSlice: 1,
    },
  });
}
