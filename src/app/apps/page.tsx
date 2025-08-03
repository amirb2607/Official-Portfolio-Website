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
    //TODO: FIX REVEALFX on OGCARDS, Create OGCARD Loading State Instead of RevealFx
    <RevealFx speed="fast" translateY={5} center >
      <Column fillHeight gap="l" padding="l" paddingBottom="xl" >
        <DelayRepeatLetterFX
            text="My Web Applications!"
            delay={10_000}
            speed="slow"
            className="font-display font-m font-strong" />

        <Column center paddingBottom="l" >
          <Row gap="xl" mobileDirection="column" paddingX="xl"> 
            <OgCard ogData={{
                title: "SearxNG Private Search Engine",
                description: "A self-hosted, privacy-first search engine powered by SearxNG, Docker & Caddy on AWS EC2. Instantly search the web without tracking—perfect for developers and privacy enthusiasts.",
                image: "/images/searxng_login.png",
                faviconUrl: "/images/searxng.png",
                url: "https://search.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            />
            <OgCard ogData={{
                title: "Shiori Cloud Bookmark Manager",
                description: "A lightweight, private bookmark manager built with Shiori, Docker & Caddy on AWS EC2. Organize, tag and access your favorite links from anywhere—no external accounts required.",
                image: "/images/shiori_login.png",
                faviconUrl: "/images/shiori.png",
                url: "https://links.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            />
            <OgCard ogData={{
                title: "Wallos Subscription Tracker",
                description: "Track and manage all your recurring subscriptions in one secure dashboard. Hosted on AWS EC2 with Docker & Caddy, Wallos sends you reminders and spending summaries so you never miss a renewal.",
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

        <Column center paddingBottom="xl" marginBottom="xl">
          <Row gap="xl" mobileDirection="column" paddingX="xl"> 
            <OgCard ogData={{
                title: "Portainer Container Manager",
                description: " A self-hosted Portainer instance for private Docker container management, secured by Caddy reverse proxy on AWS EC2. Monitor logs, resource usage and container health—all behind your own authentication layer.",
                image: "/images/portainer_login.png",
                faviconUrl: "/images/portainer.png",
                url: "https://portainer.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            />
            <OgCard ogData={{
                title: "Uptime Kuma Monitoring Service",
                description: " Monitor the health and performance of your services with Uptime Kuma, Docker & Caddy on AWS EC2. Get real-time alerts, status pages and historical uptime reports—fully private and customizable.",
                image: "/images/uptime_kuma_login.png",
                faviconUrl: "/images/uptime_kuma.svg",
                url: "https://kuma.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            />
            <OgCard ogData={{
                title: "ActualBudget Personal Budget Tracker",
                description: "A self-hosted budgeting app powered by ActualBudget, Docker & Caddy on AWS EC2. Visualize your spending, set savings goals and explore interactive reports—securely on your own server.",
                image: "/images/actual_budget_demo.png",
                faviconUrl: "/images/actual_icon.png",
                url: "https://budget.amirb.dev",
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