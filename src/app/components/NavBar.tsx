"use client";
import { Badge, Button, Icon, Line, Logo, Row, ThemeSwitcher } from "@/once-ui/components";

export default function NavBar() {
  return (
    // Blurred pill-shaped Navbar using Once UI props
    // TODO: Make NavBar Sticky!
    <Row 
      horizontal="center"
      vertical="center"
      padding="xs"
      background="overlay"
      radius="full"
      gap="xl"
      hide='s' 
      // TODO: Create Smaller Mobile NavBar that will be at the bottom of the screen
      mobileDirection="column"
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
  );
}