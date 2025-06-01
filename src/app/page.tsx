import { Column, Heading, Text, Button, Logo, Badge, Line, LetterFx, Row, ThemeSwitcher } from "@/once-ui/components";

export default function Home() {
  return (
    <Column fill center padding="s">
      <Row horizontal="space-between" align="center" padding="m" borderBottom="transparent">
        <Row gap="m">
          <Button href="#about" variant="secondary">About</Button>
          <Button href="#projects" variant="secondary">Projects</Button>
          <Button href="#contact" variant="secondary">Contact</Button>
        </Row>
      </Row>
      <ThemeSwitcher />
      <Column maxWidth="s" horizontal="center" gap="l" align="center" marginTop="xl">
        <Badge textVariant="code-default-s" border="neutral-alpha-medium" onBackground="neutral-medium" vertical="center" gap="16">
          <Logo icon={true} href="https://once-ui.com" size="xs" />
          <Line vert background="neutral-alpha-strong"/>
          <Text marginX="4">
            <LetterFx trigger="instant">
              An ecosystem, not a UI kit
            </LetterFx>
          </Text>
        </Badge>
        <Heading variant="display-strong-xl" marginTop="24">
          Hello World!
        </Heading>
        <Text variant="heading-default-xl" onBackground="neutral-weak" wrap="balance" marginBottom="16">
          My name is Amir and I am a software engineer.
        </Text>
        <Button id="docs" variant="secondary" href="https://docs.once-ui.com/once-ui/quick-start" data-border="rounded" weight="default" prefixIcon="copy" arrowIcon>
          Explore docs
        </Button>
      </Column>
    </Column>
  );
}
