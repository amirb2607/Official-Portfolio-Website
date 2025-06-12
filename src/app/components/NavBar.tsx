"use client";
import {
  Badge,
  Button,
  IconButton,
  Line,
  Logo,
  Row,
  ThemeSwitcher,
} from "@/once-ui/components";

export default function NavBar() {
  return (
    <>
      {/* Desktop Navbar */}
      <Row
        horizontal="center"
        vertical="center"
        padding="xs"
        background="surface"
        radius="full"
        gap="xl"
        hide="s"
        zIndex={10}
      >
        <Badge
        border="neutral-alpha-medium"
        background="overlay"
        vertical="center"
        gap="2">
        <Logo size="xs" wordmark={false}/>
        <Line vert height="16" />
        <Logo size="xs" icon={false}/>
      </Badge>
      <Row gap="m" vertical="center" >
        <Button id="About" variant="tertiary" arrowIcon prefixIcon="sparkle" href="#about">About</Button>
        <Button id="Projects" variant="tertiary" arrowIcon prefixIcon="computer" href="#projects">Projects</Button>
        <Button id="Contact"variant="tertiary" arrowIcon prefixIcon="clipboard" href="#contact">Contact</Button>
      </Row>
      {/* ThemeSwitcher aligned to center */}
      <Row vertical="center" paddingRight="m">
        <ThemeSwitcher />
      </Row>
    </Row>

      {/* Mobile Navbar positioned at the bottom of viewport */}
      <Row
        show="s"
        horizontal="space-around"
        vertical="center"
        padding="xs"
        background="surface"
        gap="m"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          paddingBottom: 25,
        }}
      >
        <IconButton icon="sparkle" variant="ghost" href="#about" />
        <IconButton icon="computer" variant="ghost" href="#projects" />
        <IconButton icon="clipboard" variant="ghost" href="#contact" />
        <ThemeSwitcher />
      </Row>
    </>
  );
}
