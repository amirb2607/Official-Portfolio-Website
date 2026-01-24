import { Column, Text, Row, Avatar, Card } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";
import { meta, baseURL } from "../resources/once-ui.config";
import { MatrixFx } from "@once-ui-system/core";

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
    <Column fillWidth fillHeight center>
      <Row fillWidth fitHeight mobileDirection="column">
        <Column center padding="xl">
          <MatrixFx
            colors={["brand-solid-strong"]}
            fitWidth
            bulge={{
              type: "wave",     // S-curve diagonal flow
              duration: 6,
              intensity: 100,
              repeat: true
            }}>
            <Card padding="l" maxWidth="s">
                <Row gap="l" vertical="center">
                  <Avatar size="xl" src="/images/personal/headshot.png" />
                  <Column gap="xs">
                    <Text variant="display-strong-m" wrap="balance">Amir Badrudeen</Text>
                    <Text variant="label-default-m" onBackground="neutral-medium" wrap="balance">Junior Software Developer/IT Support Specialist</Text>
                    <Text variant="label-default-m">New York City</Text>
                    <Text variant="label-default-s">English</Text>
                    <Text onBackground="neutral-medium" wrap="balance">
                      Passionate about crafting seamless UI/UX experiences and building efficient software solutions, I take pride in creating technology that’s both intuitive and accessible. With a strong foundation 
                      in Software Development and IT, I focus on designing reliable systems and interfaces that elevate user interaction while maintaining technical excellence.
                    </Text>
                    <Text onBackground="neutral-medium" wrap="balance">
                      I’m constantly exploring new self-hosted and homelab solutions, fine-tuning infrastructure for performance and reliability, and keeping up with emerging trends in business 
                      and investing. When I’m not working on code or infrastructure, you’ll usually find me gaming or experimenting with new tech ideas.
                    </Text>
                  </Column>
                </Row>
            </Card>
          </MatrixFx>
        </Column>

        <Column fill gap="16">
          <Row fill center>
            <Text variant="display-strong-m">Education</Text>
          </Row>
          <Row fill center>
            <Text variant="display-strong-m">Experience</Text>
          </Row>
        </Column>

      </Row>
    </Column>
  );
}