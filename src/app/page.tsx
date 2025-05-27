import { Column, Heading, Text, Button, Logo, Badge, Line, LetterFx, Row, Avatar, Card, Icon, Media } from "@/once-ui/components";

export default function Home() {
  // TODO: FIX SITE NOT WORKING ON PC. Add Dark and Light Mode toggle
  // Fix Projects Layout!
  return (
    <Column fill>
      <Column fill center padding="xl">
        {/* Hero Section */}
        <Badge icon="sparkle">TypeScript</Badge>
        <Column maxWidth="l" horizontal="center" gap="xl" align="center" padding="xl" marginTop="l">
          <Heading variant="display-strong-xl" align="center">
            <LetterFx trigger="instant" speed="medium">
              Hello, I'm Amir B.
            </LetterFx>
          </Heading>

          <Text variant="heading-default-xl" onBackground="neutral-weak" wrap="balance" marginBottom="16" align="center">
            Welcome to my personal portfolio website.
          </Text>

          <Row gap="xl" horizontal="center" paddingBottom="xl">
            <Button
              href="#projects"
              variant="secondary"
              data-border="rounded"
              weight="default"
              prefixIcon="computer"
              arrowIcon
            >
              View Work
            </Button>
            <Button
              href="/resume.pdf"
              data-border="rounded"
              weight="strong"
              prefixIcon="sparkle"
              variant="secondary"
            >
              Resume
            </Button>
          </Row>
        </Column>

        {/* Featured Projects */}
        <Column maxWidth="xl" margin="xl" gap="l" id="projects" horizontal="center">
          <Heading variant="heading-strong-l" align="center">
            <LetterFx trigger="hover">Featured Projects</LetterFx>
          </Heading>
          <Row gap="l" wrap horizontal="center" fillWidth>
            <Card radius="l-4" direction="column" border="neutral-alpha-medium" style={{ minWidth: '300px', maxWidth: '400px' }}>
              <Media
                border="neutral-alpha-weak"
                sizes="500px"
                fillWidth
                aspectRatio="4 / 3"
                radius="l"
                alt="pic desc."
                src="/images/demo.png"
              />
              <Column fillWidth paddingX="20" paddingY="24" gap="8">
                <Text variant="body-default-xl">Title</Text>
                <Text onBackground="neutral-weak" variant="body-default-s">
                  Desc.
                </Text>
              </Column>    
            </Card>
            {/* Add more project cards here as needed */}
          </Row>
        </Column>

        {/* Tech Stack */}
        <Column maxWidth="l" marginTop="xl" gap="m" align="center" padding="xl">
          <Heading variant="heading-strong-l" align="center">
            <LetterFx trigger="hover">Tech Stack</LetterFx>
          </Heading>
          <Row gap="m" wrap horizontal="center" fillWidth>
            <Badge icon="sparkle">TypeScript</Badge>
            <Badge icon="sparkle">React</Badge>
            <Badge icon="sparkle">Node.js</Badge>
            <Badge icon="sparkle">Next.js</Badge>
            <Badge icon="sparkle">PostgreSQL</Badge>
            <Badge icon="sparkle">AWS</Badge>
          </Row>
        </Column>

        {/* Contact Section */}
        <Column maxWidth="l" marginTop="xl" marginBottom="48" gap="m" align="center" id="contact">
          <Heading variant="heading-strong-l" align="center">
            <LetterFx trigger="hover">Get in Touch</LetterFx>
          </Heading>
          <Text align="center">
            Open to new opportunities and interesting projects.
          </Text>
          <Row gap="m" horizontal="center" paddingTop="l">
            <Button href="mailto:your.email@example.com" prefixIcon="sparkle" weight="default">
              Email
            </Button>
            <Button href="https://github.com/yourusername" prefixIcon="sparkle" weight="strong">
              GitHub
            </Button>
            <Button href="https://linkedin.com/in/yourusername" prefixIcon="sparkle" weight="strong">
              LinkedIn
            </Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}