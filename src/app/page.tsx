import {
  Column,
  Badge,
  RevealFx,
  Row,
  Button,
  Card,
  Text,
  Heading,
  Line,
  Tag,
  SmartLink,
} from "@/once-ui/components";
import DelayRepeatLetterFX from "./components/DelayRepeatLetterFX";
import AutoScrollTechStack from "./components/AutoScrollTechStack";
import { List, ListItem, ShineFx } from "@once-ui-system/core";
import HoverCardAvatar from "./components/HoverCardAvatar";
import ResumeButton from "./components/ResumeButton";

const proofPoints = [
  "40+ self-hosted services",
  "3-node homelab setup",
  "10 users / 30+ devices",
  "B.S. Computer Science",
];

export default function Home() {
  return (
    <RevealFx speed="fast" translateY={5}>
      <Column fillWidth fillHeight center padding="xs">
        <Column center maxWidth="m" gap="m" marginTop="xs">
          <Badge id="new" title="Now Hosted On My Homelab Server!" icon="computer" />
          <DelayRepeatLetterFX
            text="Hello World!"
            delay={10_000}
            speed="slow"
            className="font-display font-xl font-strong"
          />
          <RevealFx speed="fast" delay={0.1} translateY={2}>
            <Column fillWidth center gap="xs">
              <HoverCardAvatar />
              <ShineFx
                baseOpacity={0.65}
                variant="body-strong-xl"
                onBackground="brand-strong"
                wrap="balance"
                align="center"
                speed={5}
                paddingBottom="xs"
              >
                I'm Amir, a junior developer focused on full-stack apps, self-hosted
                infrastructure, and practical systems that solve real problems.
              </ShineFx>
              <ShineFx
                baseOpacity={0.75}
                variant="body-strong-xl"
                onBackground="brand-strong"
                wrap="balance"
                align="center"
                speed={5}
              >
                B.S. in Computer Science @ Brooklyn College, building projects I use every day.
              </ShineFx>
              <Row gap="xs" wrap center paddingTop="xs">
                {proofPoints.map((point) => (
                  <Tag key={point}>{point}</Tag>
                ))}
              </Row>
              <AutoScrollTechStack />
              <Row center gap="s" wrap paddingTop="s">
                <Button href="/projects" label="View Projects" size="l" />
                <ResumeButton/>
              </Row>
            </Column>
          </RevealFx>
        </Column>

        <Column fillWidth maxWidth="l" gap="l" paddingTop="l" paddingBottom="xl" center>

          <Column id="featured-projects" gap="s" center>
            <Row center horizontal="center" vertical="center" gap="s" wrap>
              <Heading variant="display-strong-s">Featured Projects</Heading>
            </Row>
            <Line maxWidth={19} background="info-strong" />
            <Column gap="m" paddingX="m" fillWidth maxWidth="m">
              <Card
                direction="column"
                padding="m"
                gap="s"
                fillWidth
                center
              >
                <Text variant="heading-strong-s">Homelab Infrastructure</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  A three-node self-hosting setup built from retired gaming PC parts, an always-on
                  Mac mini edge node, and a VPS for remote access, monitoring, backups, and
                  everyday infrastructure.
                </Text>
                <Row gap="xs" wrap center>
                  <Tag>Docker Compose</Tag>
                  <Tag>Ubuntu</Tag>
                  <Tag>Mac Mini M1</Tag>
                  <Tag>VPS</Tag>
                  <Tag>Self-Hosted</Tag>
                </Row>
                <Button
                  href="/projects/homelab-server"
                  variant="tertiary"
                  prefixIcon="chevronRight"
                  label="View project"
                />
              </Card>

              <Card direction="column" padding="m" gap="s" fillWidth center>
                <Text variant="heading-strong-s">What I'm Building Right Now</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  I'm continuing to expand the homelab, improve backup and network reliability,
                  and use the stack to host and iterate on this portfolio with a more self-hosted,
                  infrastructure-first workflow.
                </Text>
                <Row gap="xs" wrap center>
                  <Tag>Homelab Iteration</Tag>
                  <Tag>Backup Testing</Tag>
                  <Tag>Networking</Tag>
                  <Tag>Portfolio Platform</Tag>
                </Row>
              </Card>
            </Column>
          </Column>

          <Column id="specialties" gap="s" center>
            <Heading variant="display-strong-s">What I Do</Heading>
            <Line maxWidth={10} background="info-strong" />
            <Column gap="xs" center>
              <List as="ul" textVariant="body-default-m" gap="4">
                <ListItem>Build full-stack web apps with clean UX and measurable outcomes.</ListItem>
                <ListItem>Automate workflows and data pipelines to reduce manual ops.</ListItem>
                <ListItem>Ship reliable IT support solutions with clear documentation.</ListItem>
                <ListItem>Collaborate cross-functionally from discovery to delivery.</ListItem>
              </List>
            </Column>
          </Column>

          <Column id="currently" gap="s" center paddingX="m">
            <Heading variant="display-strong-s">Currently</Heading>
            <Line maxWidth={14} background="info-strong" />
            <Card padding="s" gap="s" center>
              <Row gap="s" wrap vertical="center" center >
                <Badge title="Open to work" icon="sparkle" />
              </Row>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                Open to full-time roles, remote or other opportunities in NYC or surrounding area.
              </Text>
            </Card>
          </Column>

          <Column id="contact" gap="s" center>
            <Heading variant="display-strong-s">Contact</Heading>
            <Line maxWidth={14} background="info-strong" />
            <Row gap="s" wrap center >
              <SmartLink href="mailto:contact@amirb.dev" prefixIcon="mail">
                contact@amirb.dev
              </SmartLink>
              <SmartLink href="https://calendly.com/amirbadrudeen/30min" prefixIcon="calendar">
                Book time (Calendar)
              </SmartLink>
              <SmartLink href="https://linkedin.com/in/amir-bad" prefixIcon="linkedin">
                LinkedIn
              </SmartLink>
              <SmartLink href="#" prefixIcon="globe">
                Location: Queens, New York
              </SmartLink>
            </Row>
          </Column>
        </Column>
      </Column>
    </RevealFx>
  );
}
