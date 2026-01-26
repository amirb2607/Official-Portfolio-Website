"use client";
import React, { useState, useEffect } from "react";
import {
  Badge,
  Button,
  Column,
  IconButton,
  Line,
  Logo,
  Row,
  ThemeSwitcher,
  Text,
} from "@/once-ui/components";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname(); //Variable to hold current path.
  // State to hold EST (NYC) time
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" })
  );

  // Update NY time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
        hide="m"
        zIndex={9}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <Column fillWidth paddingLeft="s" >
          <Text variant="body-default-s" wrap="balance">
            America/NYC
          </Text>
        </Column>

        <Badge
          border="neutral-alpha-medium"
          background="overlay"
          vertical="center"
          gap="2"
          href="/"
        >
          <Logo size="xs" wordmark={false} />
          <Line vert height="16" />
          <Logo size="xs" icon={false} />
        </Badge>

        <Row gap="m" vertical="center">
          <Button
            id="About"
            variant={pathname === "/about" ? "primary" : "tertiary"}
            arrowIcon
            prefixIcon="person"
            href="/about"
          >
            About
          </Button>
          <Button
            id="Projects"
            variant={pathname === "/projects" ? "primary" : "tertiary"}
            arrowIcon
            prefixIcon="outlinecmd"
            href="/projects"
          >
            Projects
          </Button>
          <Button
            id="Apps"
            variant={pathname === "/apps" ? "primary" : "tertiary"}
            arrowIcon
            prefixIcon="phone"
            href="/apps"
          >
            Apps
          </Button>
        </Row>

        {/* ThemeSwitcher aligned to center */}
        <Row vertical="center">
          <ThemeSwitcher />
        </Row>

        {/* Display current local time */}
        <Column fillWidth horizontal="end" paddingRight="s">
          <Text variant="body-default-s" suppressHydrationWarning>{time}</Text>
        </Column>
      </Row>

      {/* Mobile Navbar positioned at the bottom of viewport */}
      <Row
        show="m"
        horizontal="space-around"
        vertical="center"
        padding="xs"
        paddingTop="s"
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
        <IconButton icon="home" variant={pathname === "/" ? "primary" : "ghost"} href="/" />
        <IconButton icon="person" variant={pathname === "/about" ? "primary" : "ghost"} href="/about" />
        <IconButton icon="outlinecmd" variant={pathname === "/projects" ? "primary" : "ghost"} href="/projects" />
        <IconButton icon="phone" variant={pathname === "/apps" ? "primary" : "ghost"} href="/apps" />
        <ThemeSwitcher />
      </Row>
    </>
  );
}
