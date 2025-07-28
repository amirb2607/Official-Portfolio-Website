import { Column, Text, Row, Avatar, Card } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";
import { meta, baseURL } from "../resources/once-ui.config";

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
    <>
      <Column fillWidth fillHeight padding="xl" gap="l" center>
        <Card padding="l" maxWidth="m">
          <Row gap="l" vertical="center">
            <Avatar value="A" size="xl" />
            <Column gap="xs">
              <Text variant="display-strong-m">About Me</Text>
              <Text onBackground="neutral-medium" wrap="balance">
                A starter layout for the about page.
              </Text>
            </Column>
          </Row>
        </Card>
      </Column>
    </>
  );
}