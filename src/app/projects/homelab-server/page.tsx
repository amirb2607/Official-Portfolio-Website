import { Column, Text, Heading, Row, Tag, Card, Carousel, Line } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";
import { baseURL } from "../../resources/once-ui.config";

const images = [
  { src: "/images/apps/portainer/portainer.png", alt: "Portainer containers dashboard" },
  { src: "/images/apps/adguard/home.png", alt: "AdGuard Home dashboard" },
  { src: "/images/apps/uptime_kuma/uptime_kuma_login.png", alt: "Uptime Kuma status login" },
  { src: "/images/apps/searxng/searxng.png", alt: "SearXNG search interface" },
];

export async function generateMetadata() {
  return Meta.generate({
    title: "Homelab Server | Projects",
    description:
      "Daily-driver homelab server powering self-hosted apps, monitoring, and network services.",
    baseURL: baseURL,
    path: "/projects/homelab-server",
    canonical: `${baseURL}/projects/homelab-server`,
    image: "/og/home.png",
    robots: "index,follow",
    alternates: [{ href: `${baseURL}/projects/homelab-server`, hrefLang: "en" }],
  });
}

export default function HomelabServerProject() {
  return (
    <Column fillWidth fillHeight center padding="xs">
      <Column fillWidth maxWidth="l" gap="l" padding="l">
        <Column gap="xs" center>
          <Heading variant="display-strong-s">Homelab Server</Heading>
          <Text align="center" onBackground="neutral-weak">
            My daily-driver homelab that powers core services, monitoring, and a private tool stack.
          </Text>
          <Line maxWidth={16} background="info-strong" />
        </Column>

        <Card padding="m" gap="m">
          <Carousel images={images} indicator="thumbnail" aspectRatio="16 / 9" />
          <Text variant="body-default-m" onBackground="neutral-weak">
            This server runs a curated set of self-hosted tools for privacy, uptime, and rapid
            iteration. I prioritize stability, backups, and clean observability so it feels like a
            reliable product, not a hobby box.
          </Text>
          <Row gap="xs" wrap>
            <Tag>Docker</Tag>
            <Tag>Portainer</Tag>
            <Tag>AdGuard Home</Tag>
            <Tag>Uptime Kuma</Tag>
            <Tag>SearXNG</Tag>
          </Row>
        </Card>

        <Column gap="s">
          <Heading variant="heading-strong-m">Highlights</Heading>
          <Card padding="m" gap="s">
            <Text variant="body-default-m">Always-on monitoring and alerting for services.</Text>
            <Text variant="body-default-m">Network-wide ad blocking and DNS security.</Text>
            <Text variant="body-default-m">Containerized apps with quick rollback and backups.</Text>
          </Card>
        </Column>
      </Column>
    </Column>
  );
}
