module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "londrinasexycombrblack-10": "var(--londrinasexycombrblack-10)",
        "londrinasexycombrblack-125": "var(--londrinasexycombrblack-125)",
        londrinasexycombrfroly: "var(--londrinasexycombrfroly)",
        londrinasexycombrgallery: "var(--londrinasexycombrgallery)",
        "londrinasexycombrmine-shaft": "var(--londrinasexycombrmine-shaft)",
        londrinasexycombrred: "var(--londrinasexycombrred)",
        "londrinasexycombrred-ribbon": "var(--londrinasexycombrred-ribbon)",
        "londrinasexycombrsweet-pink": "var(--londrinasexycombrsweet-pink)",
        londrinasexycombrwhite: "var(--londrinasexycombrwhite)",
        "londrinasexycombrwhite-02": "var(--londrinasexycombrwhite-02)",
        "londrinasexycombrwhite-5": "var(--londrinasexycombrwhite-5)",
        "londrinasexycombrwhite-7": "var(--londrinasexycombrwhite-7)",
        "londrinasexycombrwhite-mine-shaft":
          "var(--londrinasexycombrwhite-mine-shaft)",
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
      },
      fontFamily: {
        "londrinasexy-com-br-roboto-regular-upper":
          "var(--londrinasexy-com-br-roboto-regular-upper-font-family)",
        "londrinasexy-com-br-semantic-heading-1":
          "var(--londrinasexy-com-br-semantic-heading-1-font-family)",
        "londrinasexy-com-br-semantic-heading-2-upper":
          "var(--londrinasexy-com-br-semantic-heading-2-upper-font-family)",
        "londrinasexy-com-br-semantic-link":
          "var(--londrinasexy-com-br-semantic-link-font-family)",
        "londrinasexy-com-br-semantic-link-underline-upper":
          "var(--londrinasexy-com-br-semantic-link-underline-upper-font-family)",
        "londrinasexy-com-br-semantic-link-upper":
          "var(--londrinasexy-com-br-semantic-link-upper-font-family)",
        "londrinasexy-com-br-semantic-strong":
          "var(--londrinasexy-com-br-semantic-strong-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
