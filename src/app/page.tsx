import { Column, Heading, Text, Button, Logo, Badge, Line, LetterFx, Row, ThemeSwitcher } from "@/once-ui/components";

export default function Home() {
  return (
    <Column fillWidth center padding="xs">
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
          gap="2">
          <Logo size="xs" wordmark={false}/>
          <Line vert height="16" />
          <Logo size="xs" icon={false}/>
        </Badge>
        <Row gap="m" vertical="center">
          <Button id="About" variant="tertiary" arrowIcon href="#about">About</Button>
          <Button id="Projects" variant="tertiary" arrowIcon href="#projects">Projects</Button>
          <Button id="Contact"variant="tertiary" arrowIcon  href="#contact">Contact</Button>
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
        <Badge id="badge-3" title="Learn more" href="/temp"/>
      </Column>
    </Column>
  );
}
