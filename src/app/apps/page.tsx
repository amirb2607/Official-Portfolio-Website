import { Column, OgCard, RevealFx, Row, Text } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";
import { meta, baseURL } from "../resources/once-ui.config";
import DelayRepeatLetterFX from "../components/DelayRepeatLetterFX";

export async function generateMetadata() {
  return Meta.generate({
    title: meta.apps.title,
    description: meta.apps.description,
    baseURL: baseURL,
    path: meta.apps.path,
    canonical: meta.apps.canonical,
    image: meta.apps.image,
    robots: meta.apps.robots,
    alternates: meta.apps.alternates,
  });
}

export default function Apps() {
  return (
    <RevealFx speed="fast" translateY={5} center >
      <Column fillHeight gap="l" padding="l" paddingBottom="xl" >
        <DelayRepeatLetterFX
            text="My Web Applications!"
            delay={10_000}
            speed="slow"
            className="font-display font-m font-strong" />
        <Column center paddingBottom="xl" marginBottom="xl">
          <Row gap="xl" mobileDirection="column" paddingX="xl"> 
            <OgCard ogData={{
                title: "[Private] Search Engine",
                description: "Used SearXNG, Docker & Caddy to create a private search engine using a AWS EC2 instance. [Need to be authorized to access]",
                image: "/images/searxng_login.png",
                faviconUrl: "/images/searxng.png",
                url: "https://search.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            />
            <OgCard ogData={{
                title: "[Private] Bookmark Manager",
                description: "Used Shiori, Docker & Caddy to create a private bookmark manager using a AWS EC2 instance. [Need to be authorized to access]",
                image: "/images/shiori_login.png",
                faviconUrl: "/images/shiori.png",
                url: "https://links.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            />
            <OgCard ogData={{
                title: "[Private] Subscription Tracker",
                description: "Used WallOS, Docker & Caddy to create a private subscription tracker using a AWS EC2 instance. [Need to be authorized to access]",
                image: "/images/wallos_login.png",
                faviconUrl: "/images/wallos.png",
                url: "https://wallos.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            />
          </Row>
        </Column>        
      </Column>
    </RevealFx>   
  );
}