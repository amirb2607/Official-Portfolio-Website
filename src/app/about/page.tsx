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
    <Column fillWidth fillHeight padding="xl" gap="16" center>
      <Row fillWidth fitHeight gap="16" mobileDirection="column">

        <Column paddingLeft="xl" center>
          <MatrixFx
            fillWidth
            height={24}
            colors={["brand-solid-strong"]}
            bulge={{
              type: "wave",     // S-curve diagonal flow
              duration: 6,
              intensity: 100,
              repeat: true
            }}>
            <Card padding="l" maxWidth="xs">
                <Row gap="l" vertical="center">
                  <Avatar value="A" size="xl" />
                  <Column gap="xs">
                    <Text variant="display-strong-m">Amir Badrudeen</Text>
                    <Text variant="label-default-m">America/NYC</Text>
                    <Text onBackground="neutral-medium" wrap="balance">
                      Passionate about building exciting UI/UX interfaces and enhancing user experiences. I love creating intuitive designs that make technology accessible to everyone.
                      With a keen eye for detail and a commitment to quality, I strive to deliver exceptional results in every project I undertake.
                      When I'm not coding, you can find me exploring new homelab services or playing video games.
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
            <Text variant="display-strong-m">Work Experience</Text>
          </Row>
        </Column>

      </Row>
    </Column>
  );
}