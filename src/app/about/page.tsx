import { Column, Text, Row, Card } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";
import { meta, baseURL } from "../resources/once-ui.config";
import { Button, Heading, Line, RevealFx, ShineFx, Tag } from "@once-ui-system/core";
import HoverCardAvatar from "../components/HoverCardAvatar";

export async function generateMetadata() {
  return Meta.generate({
    title: meta.about.title,
    description: meta.about.description,
    baseURL: baseURL,
    path: meta.about.path,
    canonical: meta.about.canonical,
    image: meta.about.image,
    robots: meta.about.robots,
    alternates: meta.about.alternates,
  });
}

export default function About() {
  return (
    <RevealFx speed="medium" translateY={5}>
      <Column fillWidth fillHeight center>
          <Column center padding="l">
            <Card padding="m" maxWidth="s" radius="s-8">
              <Row gap="l" vertical="center" mobileDirection="column">
                <Column gap="xs" center>
                  <HoverCardAvatar />
                  <Row gap="xs">
                    <Button data-border="rounded" prefixIcon="github" variant="secondary" size="s" href="https://github.com/amirb2607"></Button>
                    <Button data-border="rounded" prefixIcon="linkedin" variant="secondary" size="s" href="https://github.com/amirb2607"></Button>
                    <Button data-border="rounded" prefixIcon="mail" variant="secondary" size="s" href="mailto:contact@amirb.dev"></Button>
                  </Row>
                  <Tag size="l" variant="info" prefixIcon="globe" label="New York City" />
                  <Tag size="l" variant="info" prefixIcon="lang" label="English" />
                </Column>
                <Column gap="s" center>
                  <Text variant="display-strong-l" wrap="balance">Amir Badrudeen</Text>
                  <Row gap="xs">
                    <Tag size="l" variant="info" prefixIcon="cmd" label="Junior Software Developer" />
                    <Tag size="l" variant="info" prefixIcon="computer" label="IT Support Specialist" />
                  </Row>
                  
                  <ShineFx baseOpacity={0.5} variant="body-default-m" onBackground="brand-strong" wrap="balance" align="center" speed={10} >
                    Passionate about crafting seamless UI/UX experiences and building efficient software solutions, I take pride in creating technology that’s both intuitive and accessible. With a strong foundation 
                    in Software Development and IT, I focus on designing reliable systems and interfaces that elevate user interaction while maintaining technical excellence.
                  </ShineFx>

                  <ShineFx baseOpacity={0.5} variant="body-default-m" onBackground="brand-strong" wrap="balance" align="center" speed={8} >
                    I’m constantly exploring new self-hosted and homelab solutions, fine-tuning infrastructure for performance and reliability, and keeping up with emerging trends in business 
                    and investing. When I’m not working on code or infrastructure, you’ll usually find me gaming or experimenting with new tech ideas.
                  </ShineFx>
                </Column>
              </Row>
            </Card>
          </Column>
          <RevealFx speed="slow" translateY={10}>
            <Column fill gap="l" center>
              <Heading variant="display-strong-m">Experience</Heading>
              <Line maxWidth={14} background="info-strong"/>
              <Heading variant="display-strong-m">Education</Heading>
              <Line maxWidth={14} background="info-strong"/>
              <Text paddingBottom="xl" margin="xl"></Text>
            </Column>
          </RevealFx>
      </Column>
    </RevealFx>
  );
}