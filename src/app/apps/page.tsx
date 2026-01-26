import { Column, OgCard, RevealFx, Row, Text } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";
import { meta, baseURL } from "../resources/once-ui.config";
import DelayRepeatLetterFX from "../components/DelayRepeatLetterFX";
import { Button, ScrollToTop } from "@once-ui-system/core";

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
            className="font-display font-m font-strong" 
          />

        <Column center paddingBottom="l" >
          <Row gap="xl" mobileDirection="column" paddingX="xl"> 
            <OgCard ogData={{
                title: "Private Self-Hosted AI Chatbot",
                description: "My own Private AI Chatbot, powered by Docker & Pangolin using Ollama and OpenWebUI on my Homelab Server! Interact with various AI models like Llama 3, Mistral, and more—all without leaving your browser.",
                image: "/images/apps/ai/home.png",
                faviconUrl: "/images/apps/ai/icon.png",
                url: "https://ai.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            />
            <OgCard ogData={{
                title: "Excalidraw Collaborative Whiteboard",
                description: "A self-hosted Excalidraw instance for collaborative sketching, powered by Docker & Pangolin on my private VPS! Create, share and edit drawings in real-time with friends or colleagues—no external accounts needed.",
                image: "/images/apps/excalidraw/home.png",
                faviconUrl: "/images/apps/excalidraw/icon.png",
                url: "https://excalidraw.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            />
            <OgCard ogData={{
                title: "SearxNG Private Search Engine",
                description: "A self-hosted, privacy-first search engine powered by SearxNG, Docker & Pangolin on private VPS. Instantly search the web without tracking—perfect for developers and privacy enthusiasts.",
                image: "/images/apps/searxng/searxng_login.png",
                faviconUrl: "/images/apps/searxng/searxng.png",
                url: "https://search.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            />
          </Row>
        </Column>

        <Column center paddingBottom="l" >
          <Row gap="xl" mobileDirection="column" paddingX="xl">
            <OgCard ogData={{
                title: "ActualBudget Personal Budget Tracker",
                description: "A self-hosted budgeting app powered by ActualBudget, Docker & Pangolin on my private VPS. Visualize your spending, set savings goals and explore interactive reports—securely on your own server.",
                image: "/images/actual_budget_demo.png",
                faviconUrl: "/images/actual_icon.png",
                url: "https://budget.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            /> 
            <OgCard ogData={{
                title: "Karakeep Cloud Bookmark Manager",
                description: "A self-hosted bookmark manager powered by Karakeep, Docker & Pangolin on my Homelab and VPS. Organize, tag and search your bookmarks with a sleek interface—accessible from any device, all behind your own secure authentication.",
                image: "/images/apps/karakeep/karakeep_login.png",
                faviconUrl: "/images/apps/karakeep/karakeep.png",
                url: "https://links.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            />
            <OgCard ogData={{
                title: "Wallos Subscription Tracker",
                description: "Track and manage all your recurring subscriptions in one secure dashboard. Hosted on my Homelab server with Docker & Pangolin reverse proxy. Wallos sends you reminders and spending summaries so you never miss a renewal.",
                image: "/images/apps/wallos/wallos_login.png",
                faviconUrl: "/images/apps/wallos/wallos.png",
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
                description: " A self-hosted Portainer instance for private Docker container management, secured by Pangolin reverse proxy on my private VPS. Monitor logs, resource usage and container health—all behind your own authentication layer.",
                image: "/images/apps/portainer/portainer_login.png",
                faviconUrl: "/images/apps/portainer/portainer.png",
                url: "https://portainer.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            />
            <OgCard ogData={{
                title: "Uptime Kuma Monitoring Service",
                description: " Monitor the health and performance of your services with Uptime Kuma. Get real-time alerts, status pages and historical uptime reports—fully private and customizable.",
                image: "/images/apps/uptime_kuma/uptime_kuma_login.png",
                faviconUrl: "/images/apps/uptime_kuma/uptime_kuma.svg",
                url: "https://kuma.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            />
            <OgCard ogData={{
                title: "Adguard Home Ad Blocker",
                description: "A self-hosted ad blocker powered by Adguard Home, Docker & Pangolin on my Homelab Server! Block ads, trackers and malicious sites across your entire network—no client-side configuration needed.",
                image: "/images/apps/adguard/home.png",
                faviconUrl: "/images/apps/adguard/icon.png",
                url: "https://adguard.amirb.dev",
              }} 
              direction= "column" 
              border="brand-alpha-weak"
              shadow="xl"
            />
          </Row>
          <ScrollToTop>
            <Button
              size="s"
              variant="primary"
              prefixIcon="chevronUp"
            >
              Top
            </Button>
          </ScrollToTop>
        </Column>
      </Column>
    
    </RevealFx>   
  );
}