import {
  Column,
  Text,
  Heading,
  Row,
  Tag,
  Card,
  Line,
  SmartLink,
  Button,
} from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";
import { Carousel, List, ListItem } from "@once-ui-system/core";
import { baseURL } from "../../resources/once-ui.config";

const items = [
  {
    slide: "/images/projects/homelab/setup.png",
    alt: "Primary homelab shelf deployment in the basement",
  },
  {
    slide: "/images/projects/homelab/setup_2.JPG",
    alt: "Mac mini edge node and adjacent setup",
  },
  {
    slide: "/images/apps/ai/home.png",
    alt: "AI experimentation with local GPU resources on the homelab",
  },
  {
    slide: "/images/apps/searxng/searxng_login.png",
    alt: "SearXNG private search interface",
  },
];

const quickFacts = [
  {
    title: "Origin",
    body: "Built from retired gaming PC parts instead of buying dedicated lab hardware.",
  },
  {
    title: "Topology",
    body: "A three-node self-hosting setup spanning a primary Ubuntu server, an always-on M1 Mac mini edge node, and a VPS.",
  },
  {
    title: "Scale",
    body: "Over 40 services across the full environment, shared with family and a small group of close friends.",
  },
  {
    title: "Rollout",
    body: "Homelab live since August 2025, VPS since December 2025, and Mac mini node since March 3, 2026.",
  },
];

const stackTags = [
  "Docker Compose",
  "Ubuntu",
  "macOS",
  "Pangolin",
  "Beszel",
  "ZeroByte",
  "Coolify",
  "mergerfs",
  "SnapRAID",
  "OpenVPN",
];

const buildDetails = [
  "Main host: Ubuntu 24.04.4 LTS on repurposed gaming PC hardware including a Ryzen 7 3700X, GTX 1060, Gigabyte motherboard, Fractal Design Focus G ATX Mid Tower case, reused PSU, reused 250 GB SSD, and reused 1 TB internal drive.",
  "Memory was upgraded early from an undersized starting point to 32 GB once container load made the original configuration too restrictive.",
  "The GTX 1060 is still useful in this build for both Jellyfin transcoding and local AI experimentation.",
  "The physical setup is a compact basement shelf deployment for always-on infrastructure.",
  "The Mac mini edge node runs macOS 26.3.1 and stays online for lower-power, high-availability daily services such as AdGuard Home and SearXNG.",
  "The VPS runs Ubuntu 24.04.3 LTS and handles the remote access layer plus public-facing website workloads.",
];

const storageDetails = [
  "Media storage lives in a TerraMaster 4-bay DAS populated with WD Red Plus drives: two 10 TB drives, one 6 TB drive, and one 4 TB drive.",
  "The pool is combined with mergerfs and protected with SnapRAID parity, which gives the setup flexible media growth with recoverability.",
  "One 10 TB drive is dedicated to media, one 10 TB drive is reserved for parity, the 4 TB drive adds media capacity, and the 6 TB drive holds about 1.5 TB of backups with the remainder used for media.",
  "A repurposed internal 250 GB SSD handles the OS and Docker volumes, while a repurposed internal 1 TB drive stores network-storage backups and Immich photos.",
  "The primary homelab server currently stores about 5.8 TB of data, most of it media, with Immich representing a much smaller portion of the footprint.",
];

const architecturePoints = [
  "Most publicly reachable services flow through `amirb.dev` or service subdomains into a VPS-hosted Pangolin layer, then through authenticated tunnel-based access to the homelab or Mac mini.",
  "The design keeps home-network ports closed. Public access is handled through tunnel-only exposure rather than direct inbound access to the home network.",
  "Most services sit behind Pangolin authentication. Jellyfin and Immich use their own built-in application authentication for app access, while Home Assistant is intentionally LAN-only and available through home LAN or OpenVPN.",
  "Everything is deployed with Docker Compose. Coolify handles Git-based deployment for the portfolio and testing site, using branch-based workflows similar to Vercel.",
  "Docker was the right fit here because of the ecosystem around self-hosting, strong community support, and the operational simplicity of containerized services.",
];

const reliabilityDetails = [
  "Beszel is the primary monitoring layer for host health and service availability, with alerts sent to a private Discord channel so failures are visible quickly.",
  "Alerts currently cover homelab or Mac mini downtime, high CPU and RAM on the main host, backup failures, and UPS events through Home Assistant.",
  "ZeroByte is the main backup layer for container data, Docker volumes, host configuration, and the Immich photo library, with encrypted local and off-site copies to reduce recovery risk.",
  "Immich is backed up hourly locally and daily off-site, while the broader ZeroByte backups run daily. SnapRAID parity jobs also run daily for the media pool.",
  "Backup maturity is already beyond simple snapshots: encrypted backup access has been validated and individual file restores have been tested successfully.",
  "A UPS with NUT protects the main homelab from sudden power dips and loss, helping preserve data and trigger controlled shutdown behavior when battery is low.",
  "The Mac mini is also protected by UPS power, though it is not currently connected through the NUT shutdown workflow.",
];

const securityDetails = [
  "Pangolin authentication fronts remotely reachable services.",
  "OpenVPN is used for trusted remote access into the home network.",
  "There are no open inbound ports on the home network.",
  "Tunnel-only access, LAN-only SSH, fail2ban, and CrowdSec reduce exposure on the infrastructure side.",
  "Jellyfin, Immich, and Home Assistant are treated as the most production-like services because other people rely on them. Changes are backed up first, updates are timed around low usage, and testing happens when downtime will not affect users.",
];

const standoutTools = [
  {
    title: "Pangolin",
    body: "I use Pangolin on a VPS as the access layer for publicly reachable services, keeping my home network closed while still making selected apps available remotely through authenticated tunnel-based access.",
  },
  {
    title: "Beszel",
    body: "I use Beszel as the primary monitoring layer for host health and service availability, with alerts sent to a private Discord channel so failures are visible immediately.",
  },
  {
    title: "ZeroByte",
    body: "I use ZeroByte as the main backup layer for container data, volumes, and host configuration, with encrypted local and off-site copies to reduce recovery risk.",
  },
  {
    title: "Coolify",
    body: "I use Coolify to deploy my portfolio and test environment from GitHub branches with a self-hosted workflow similar to Vercel.",
  },
];

const serviceCards = [
  {
    title: "Jellyfin",
    body: "The service I use most. It replaced scattered streaming and file-based media access with a private, centralized library shared with family and a small group of close friends.",
  },
  {
    title: "Immich",
    body: "Handles photo backup and sharing for me and my family, with local hourly protection and daily off-site backup as part of the broader recovery plan.",
  },
  {
    title: "AdGuard Home",
    body: "Serves DNS for the entire home network from the always-on Mac mini so filtering and name resolution stay available even when the main homelab is down for maintenance.",
  },
  {
    title: "SearXNG",
    body: "Used daily as a private search replacement to avoid Google tracking and data harvesting, and kept on the Mac mini so it stays available during homelab restarts.",
  },
  {
    title: "Home Assistant",
    body: "Supports the household with lighting, sensors, dashboards, security, notifications, and general device control, making it one of the services that needs the most careful uptime handling.",
  },
];

const outcomes = [
  "Improved privacy by replacing more cloud-dependent habits with services I control directly.",
  "Made daily workflows more convenient across media, search, DNS, photo backup, and household services.",
  "Created a real environment for infrastructure ownership, networking knowledge, and deeper self-hosting practice.",
  "Supports over 40 services across the three-node setup and active use across roughly 10 users and 30 to 35 devices.",
  "Provides a home for personal website hosting, remote access workflows, and ongoing local AI experimentation.",
];

const lessons = [
  "The first real bottleneck was memory. The original configuration hit its limit quickly under container load, so I upgraded the system within the first month to create enough headroom for a larger daily-use stack.",
  "The project has taught me a lot about keeping self-hosted systems maintainable, improving security posture, and building more reliable backup procedures.",
  "The next backup maturity step is broader restore testing across more realistic recovery scenarios, not just encrypted access verification and individual file restores.",
];

const nextSteps = [
  "Prioritize fuller restore testing as the next reliability improvement.",
  "Improve alerting depth beyond the current Discord-driven operational signals.",
  "Tighten network segmentation further over time.",
  "If rebuilding from scratch, I would move toward lower-power hardware, a better case, a cleaner rackmount-style setup, and stronger documentation from day one.",
];

export async function generateMetadata() {
  return Meta.generate({
    title: "Homelab Infrastructure | Projects",
    description:
      "A three-node self-hosting setup built from retired gaming PC parts, an always-on Mac mini, and a VPS for remote access, monitoring, backups, and everyday infrastructure.",
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
          <Heading variant="display-strong-s">Homelab Infrastructure</Heading>
          <Text align="center" onBackground="neutral-weak" variant="body-default-m">
            A three-node self-hosting setup built from retired gaming PC parts, an always-on M1
            Mac mini edge node, and a VPS that handles remote access and public-facing workloads.
          </Text>
          <Row gap="s" wrap center>
            <SmartLink href="/projects" prefixIcon="chevronLeft">
              Back to projects
            </SmartLink>
          </Row>
          <Line maxWidth={16} background="info-strong" />
        </Column>

        <Row gap="m" wrap mobileDirection="column" vertical="start">
          <Column flex={1} minWidth={0}>
            <Card direction="column" padding="m" gap="m" fillWidth>
              <Column gap="m">
                <Carousel
                  items={items}
                  controls={false}
                  indicator="line"
                  aspectRatio="4 / 3"
                  play={{ auto: true, interval: 5000, controls: true, progress: true }}
                />
                <Column gap="xs">
                  <Text variant="heading-strong-s">Project Summary</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    I built this to avoid wasting old hardware and to make practical use of parts I
                    already owned. What started as a repurposed gaming PC quickly became a serious
                    self-hosting environment for private media, family services, monitoring,
                    backups, remote access, and public web hosting. It is also the project that has
                    pushed my infrastructure ownership, networking knowledge, and self-hosting depth
                    the furthest.
                  </Text>
                </Column>
                <Row gap="xs" wrap>
                  {stackTags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </Row>
              </Column>
            </Card>
          </Column>

          <Column flex={1} minWidth={0} gap="m">
            <Card direction="column" padding="m" gap="s">
              <Text variant="heading-strong-s">Build Story</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                The system began with a reused Fractal Design case, existing Ryzen-era gaming
                hardware, and a goal of turning idle parts into something dependable. The biggest
                early pain point was memory: the original configuration ran out of headroom quickly
                under container load, so I upgraded to 32 GB within the first month to support a
                broader daily-use stack.
              </Text>
            </Card>

            <Card direction="column" padding="m" gap="s">
              <Text variant="heading-strong-s">Operational Scope</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Across the three-node setup, the environment supports over 40 services and active
                use across roughly 10 users and 30 to 35 devices. The primary homelab server stores
                about 5.8 TB of data, most of it media, while the VPS and Mac mini carry much
                smaller operational footprints.
              </Text>
            </Card>

            <Button href="/projects" variant="tertiary" label="View all projects" size="m" />
          </Column>
        </Row>

        <Column gap="s">
          <Heading variant="heading-strong-m">At a Glance</Heading>
          <Row gap="m" wrap mobileDirection="column">
            {quickFacts.map((fact) => (
              <Card direction="column" key={fact.title} padding="m" gap="xs" flex={1} minWidth={0}>
                <Text variant="heading-strong-s">{fact.title}</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {fact.body}
                </Text>
              </Card>
            ))}
          </Row>
        </Column>

        <Column gap="s">
          <Heading variant="heading-strong-m">Platform And Storage</Heading>
          <Card direction="column" padding="m" gap="m" fillWidth align="left">
            <Text variant="body-default-m" onBackground="neutral-weak">
              The environment is intentionally split across three nodes. The main Ubuntu host does
              the heavy lifting, the Mac mini stays online for low-power edge services, and the VPS
              handles the external access layer plus public web workloads.
            </Text>
            <List as="ul" textVariant="body-default-m" gap="4" align="left">
              {buildDetails.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
            <Text variant="heading-strong-s">Storage Design</Text>
            <List as="ul" textVariant="body-default-m" gap="4" align="left">
              {storageDetails.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
          </Card>
        </Column>

        <Column gap="s">
          <Heading variant="heading-strong-m">Access And Architecture</Heading>
          <Card direction="column" padding="m" gap="m" fillWidth align="left">
            <Text variant="body-default-m" onBackground="neutral-weak">
              The access model is designed around keeping the home network closed while still making
              selected services reachable remotely. It is a practical balance between convenience,
              privacy, and minimizing exposure.
            </Text>
            <List as="ul" textVariant="body-default-m" gap="4" align="left">
              {architecturePoints.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
          </Card>
        </Column>

        <Column gap="s">
          <Heading variant="heading-strong-m">Operations And Reliability</Heading>
          <Column gap="m">
            <Card direction="column" padding="m" gap="m" fillWidth align="left">
              <Text variant="heading-strong-s">Monitoring, Backups, And Power Protection</Text>
              <List as="ul" textVariant="body-default-m" gap="4" align="left">
                {reliabilityDetails.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </List>
            </Card>

            <Card direction="column" padding="m" gap="m" fillWidth align="left">
              <Text variant="heading-strong-s">Security And Maintenance Approach</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Monthly maintenance works well for the overall environment, while shared services
                get more careful handling. The goal is not zero change. It is predictable change
                with backup coverage and low user impact.
              </Text>
              <List as="ul" textVariant="body-default-m" gap="4" align="left">
                {securityDetails.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </List>
            </Card>
          </Column>
        </Column>

        <Column gap="s">
          <Heading variant="heading-strong-m">Standout Tools</Heading>
          <Row gap="m" wrap mobileDirection="column">
            {standoutTools.map((tool) => (
              <Card direction="column" key={tool.title} padding="m" gap="s" flex={1} minWidth={0}>
                <Text variant="heading-strong-s">{tool.title}</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {tool.body}
                </Text>
              </Card>
            ))}
          </Row>
        </Column>

        <Column gap="s">
          <Heading variant="heading-strong-m">Everyday Services</Heading>
          <Row gap="m" wrap mobileDirection="column">
            {serviceCards.map((service) => (
              <Card direction="column" key={service.title} padding="m" gap="s" flex={1} minWidth={0}>
                <Text variant="heading-strong-s">{service.title}</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {service.body}
                </Text>
              </Card>
            ))}
          </Row>
        </Column>

        <Column gap="s">
          <Heading variant="heading-strong-m">Outcomes And Lessons</Heading>
          <Column gap="m">
            <Card direction="column" padding="m" gap="m" fillWidth align="left">
              <Text variant="heading-strong-s">What This Improved</Text>
              <List as="ul" textVariant="body-default-m" gap="4" align="left">
                {outcomes.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </List>
            </Card>

            <Card direction="column" padding="m" gap="m" fillWidth align="left">
              <Text variant="heading-strong-s">Key Lessons</Text>
              <List as="ul" textVariant="body-default-m" gap="4" align="left">
                {lessons.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </List>
            </Card>

            <Card direction="column" padding="m" gap="m" fillWidth align="left">
              <Text variant="heading-strong-s">Next Iteration</Text>
              <List as="ul" textVariant="body-default-m" gap="4" align="left">
                {nextSteps.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </List>
            </Card>
          </Column>
        </Column>
      </Column>
    </Column>
  );
}
