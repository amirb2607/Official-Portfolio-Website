import { Column, Heading, Text, Button, Logo, Badge, Line, LetterFx, Row, ThemeSwitcher } from "@/once-ui/components";

export default function Home() {
  return (
    <Column fill center padding="s">
      {/* Blurred pill-shaped Navbar using Once UI props */}
      <Row
        horizontal="space-between"
        vertical="center"
        padding="xs"
        background="overlay"
        radius="full"
        gap="xl"
      >
        <Badge
          textVariant="code-default-s"
          border="neutral-alpha-medium"
          background="overlay"
          vertical="center"
          gap="16"
        >
          <Logo icon={true} href="/" size="xs" />
        </Badge>
        <Row gap="m" vertical="center">
          <Button href="#about" variant="tertiary">About</Button>
          <Button href="#projects" variant="tertiary">Projects</Button>
          <Button href="#contact" variant="tertiary">Contact</Button>
        </Row>
        {/* ThemeSwitcher aligned to center */}
        <Row vertical="center" paddingRight="m">
          <ThemeSwitcher />
        </Row>
      </Row>

      <Column maxWidth="s" horizontal="center" gap="l" align="center" marginTop="xl">
        <Heading variant="display-strong-xl" marginTop="24">
          Hello World!
        </Heading>
        <Text variant="heading-default-xl" onBackground="neutral-weak" wrap="balance" marginBottom="16">
          My name is Amir and I am a software engineer.
        </Text>
        <Button
          id="docs"
          variant="secondary"
          href="/temp"
          data-border="rounded"
          weight="default"
          prefixIcon="copy"
          arrowIcon
        >
          Explore more!
        </Button>
      </Column>
    </Column>
  );
}
