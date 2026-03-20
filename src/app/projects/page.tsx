import {
  Column,
  Text,
  Card,
  Row,
  Tag,
  Heading,
  Line,
  SmartLink,
} from "@/once-ui/components";
import { Carousel } from "@once-ui-system/core";
import { Meta } from "@/once-ui/modules";
import { meta, baseURL } from "../resources/once-ui.config";
import DelayRepeatLetterFX from "../components/DelayRepeatLetterFX";

const projects = [
  {
    slug: "homelab-server",
    title: "Homelab Infrastructure",
    description:
      "Hybrid homelab running Ubuntu and an M1 Mac mini, hosting an assortment of services locally with a VPS-backed reverse-proxy tunnel for secure remote access.",
    tags: [
      "Docker", "Ubuntu", "Mac Mini M1", "macOS", "VPS", "Reverse Proxy", "Networking", "Self-Hosted",
    ],
    items: [
      { slide: "/images/projects/homelab/setup.png", alt: "Main Ubuntu Setup" },
      { slide: "/images/projects/homelab/setup_2.jpg", alt: "Mac Mini Edge Node and Gaming Setup" },
    ],
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: meta.projects.title,
    description: meta.projects.description,
    baseURL: baseURL,
    path: meta.projects.path,
    canonical: meta.projects.canonical,
    image: meta.projects.image,
    robots: meta.projects.robots,
    alternates: meta.projects.alternates,
  });
}

export default function Projects() {
  return (
    <Column fillWidth fillHeight center padding="xs">
      <Column fillWidth maxWidth="l" gap="l" padding="m">
        <Column gap="xs" center>
          <DelayRepeatLetterFX
            text="My Projects!"
            delay={10_000}
            speed="slow"
            className="font-display font-m font-strong"
          />
          <Text align="center" onBackground="neutral-weak">
            Built projects I use every day and keep iterating on.
          </Text>
          <Line maxWidth={14} background="info-strong" />
        </Column>

        <Column gap="m">
          {projects.map((project) => (
            <Card key={project.slug} padding="m" gap="m">
              <Row gap="m" wrap mobileDirection="column" vertical="center">
                <Column fillWidth maxWidth="s">
                  <Carousel
                    items= {project.items}
                    controls={false}
                    indicator="line"
                    aspectRatio="4 / 3"
                    play={{auto: true, interval: 5000, controls: true, progress: true}}
                  />
                </Column>
                <Column gap="s" flex={1} fillHeight>
                  <Heading variant="heading-strong-m">{project.title}</Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {project.description}
                  </Text>
                  <Row gap="xs" wrap>
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Row>
                  <Row fillWidth paddingY="s">
                    <SmartLink href={`/projects/${project.slug}`} prefixIcon="chevronRight">
                      View full breakdown
                    </SmartLink>
                  </Row>
                </Column>
              </Row>
            </Card>
          ))}
        </Column>
      </Column>
    </Column>
  );
}
