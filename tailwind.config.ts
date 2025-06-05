
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#191970", // Rich Navy Blue
          50: "#F0F4FF",
          100: "#E1E9FF",
          200: "#C3D3FF",
          300: "#A5BDFF",
          400: "#87A7FF",
          500: "#191970",
          600: "#003366", // Darker Navy
          700: "#002B5C",
          800: "#002252",
          900: "#001A47",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#B08D57", // Metallic Gold
          50: "#FDF8F0",
          100: "#FAF1E1",
          200: "#F5E3C3",
          300: "#F0D5A5",
          400: "#EBC787",
          500: "#B08D57",
          600: "#D4AF37", // Brighter Gold
          700: "#C19B26",
          800: "#AE8715",
          900: "#9B7304",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#2E8B57", // Emerald Green
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#2E8B57",
          600: "#00A693", // Deep Jade
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#DC3545",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F8F9FA",
          foreground: "#6C757D",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#495057",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#495057",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        scaleIn: {
          from: {
            opacity: "0",
            transform: "scale(0.9)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        countUp: {
          from: {
            transform: "translateY(20px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "count-up": "countUp 0.8s ease-out forwards",
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        cairo: ['Cairo', 'system-ui', 'sans-serif'],
        tajawal: ['Tajawal', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'travel': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'travel-hover': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #191970 0%, #003366 50%, #2E8B57 100%)',
        'gradient-primary': 'linear-gradient(135deg, #191970 0%, #2E8B57 100%)',
        'gradient-gold': 'linear-gradient(135deg, #B08D57 0%, #D4AF37 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
