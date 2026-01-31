import { Column, Text, Row } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";
import { meta, baseURL } from "../resources/once-ui.config";
import { Button, Heading, Line, RevealFx, Animation } from "@once-ui-system/core";
import AboutCard from "../components/AboutCard";

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
          <AboutCard />
          </Column>
          <RevealFx speed="slow" translateY={10}>
            <Column fill gap="l" center>
              <Heading variant="display-strong-m">Experience</Heading>
              <Line maxWidth={14} background="info-strong"/>
              <Row horizontal="space-between" center width="s" gap="xl">
                <Text align="left" variant="display-strong-xs" paddingRight="xl">Celebrity Moving</Text>
                <Text align="center" variant="label-default-s">2022 - Present</Text>
              </Row>
              <Heading variant="display-strong-m">Education</Heading>
              <Line maxWidth={14} background="info-strong"/>
              <Text paddingBottom="xl" margin="xl"></Text>
            </Column>
          </RevealFx>
      </Column>
    </RevealFx>
  );
}