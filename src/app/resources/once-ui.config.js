// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://amirb.dev";

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
    title: "Amir B | Home - Personal Website",
    keywords: "Amir, Amir Badrudeen, Amir B, amirb.dev, amirb, amirdev, amirbdev, portfolio, web developer, software engineer, projects, skills, contact, apps, web apps, web applications",
    description: "Amir Badrudeen's Personal Website! Showcasing Development Projects/Apps, About & Contact Information.",
    image: "/og/home.png",
    canonical: "https://amirb.dev",
    robots: "index,follow",
    alternates: [
      { href: "https://amirb.dev", hrefLang: "en" },
    ],
  },
  about: {
    path: "/about",
    title: "Amir B | About - Personal Website",
    keywords: "Amir, Amir Badrudeen, Amir B, about, amirb.dev/about, amirb.dev, amirb, amirdev, amirbdev, web developer, software engineer, web apps, web applications",
    description: "Amir Badrudeen's About Page! Learn more about me.",
    image: "/og/home.png",
    canonical: "https://amirb.dev/about",
    robots: "index,follow",
    alternates: [
      { href: "https://amirb.dev/about", hrefLang: "en" },
    ],
  },
  projects: {
    path: "/projects",
    title: "Amir B | Projects - Personal Website",
    keywords: "Amir, Amir Badrudeen, Amir B, projects, amirb.dev/projects, amirb.dev, amirb, amirdev, amirbdev, web developer, software engineer, web apps, web applications",
    description: "Amir Badrudeen's Projects Page! Find all the projects I have and am currently working on!",
    image: "/og/home.png",
    canonical: "https://amirb.dev/projects",
    robots: "index,follow",
    alternates: [
      { href: "https://amirb.dev/projects", hrefLang: "en" },
    ],
  },
  apps: {
    path: "/apps",
    title: "Amir B | Apps - Personal Website",
    keywords: "Amir, Amir Badrudeen, Amir B, apps, amirb.dev/apps, amirb.dev, amirb, amirdev, amirbdev, web developer, software engineer, web apps, web applications",
    description: "Amir Badrudeen's Apps Page! This is where I will host various web applications I create!",
    image: "/og/home.png",
    canonical: "https://amirb.dev/apps",
    robots: "index,follow",
    alternates: [
      { href: "https://amirb.dev/apps", hrefLang: "en" },
    ],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "/public/trademark/icon_dark.svg",
  type: "website",
  description: meta.home.description,
  email: "me@amirb.dev",
  author: {
    name: "Amir Badrudeen",
    url: "https://amirb.dev/"
  }
};

// social links
const social = {
  linkedin: "https://www.linkedin.com/in/amir-bad/",
  github: "https://github.com/amirb2607",
};

export { baseURL, font, style, meta, schema, social, effects };
