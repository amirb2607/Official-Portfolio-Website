// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://www.amirb.dev";

// Import and set font for each variant
import { Red_Hat_Display } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const primaryFont = Red_Hat_Display ({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const font = {
  primary: primaryFont,
  secondary: primaryFont,
  tertiary: primaryFont,
  code: monoFont,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light - not needed when using ThemeProvider
  neutral: "custom", // sand | gray | slate | custom :D
  brand: "violet", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "indigo", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "plastic", // flat | plastic
  border: "rounded", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "90", // 90 | 95 | 100 | 105 | 110
};

const effects = {
  mask: {
    cursor: true,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 150,
    height: 150,
    tilt: 25,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: "8",
    color: "brand-on-background-weak",
    opacity: 20,
  },
  lines: {
    display: false,
    color: "brand-alpha-weak",
    opacity: 100,
    thickness: 4,
    angle: 0,
    size: "8",
  },
  grid: {
    display: false,
    color: "brand-alpha-weak",
    opacity: 100,
    width: "2",
    height: "2",
  },
};

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "Amir B | Website",
    keywords: "Amir, Amir Badrudeen, Amir B, amirb.dev, amirb, amirdev, amirbdev, portfolio, web developer, software engineer, projects, skills, contact, apps, web apps, web applications",
    description: "Amir B's Personal Website! Showcasing development projects, skills, contact information and various web applications.",
    image: "/og/home.jpg",
    canonical: "https://amirb.dev",
    robots: "index,follow",
    alternates: [
      { href: "https://amirb.dev", hrefLang: "en" },
    ],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "",
  type: "website",
  name: "Amir B.",
  description: meta.home.description,
  email: "me@amirb.dev",
};

// social links
const social = {
  linkedin: "https://www.linkedin.com/in/amir-bad/",
};

export { baseURL, font, style, meta, schema, social, effects };
