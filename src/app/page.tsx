import { Column, Text, Badge, RevealFx, Particle, Flex, Carousel } from "@/once-ui/components";
import NavBar from "@/app/components/NavBar";
import DelayRepeatLetterFX from "./components/DelayRepeatLetterFX";

export default function Home() {
  return (
    <RevealFx speed="fast" delay={0.1} translateY={10} center>
      <Flex position="relative" style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <Particle
          style={{
            position: 'fixed',
            top: -200,
            left: -250,
            right: 0,
            bottom: 0,
            width: "200vw",
            height: "100vh",
            zIndex: -1,
          }}
          className="inset-0 z-index--1"
          interactive
          density={350}
          speed={0.5}
          size="2"
          interactionRadius={100}
          color="brand-background-strong" />
        <Column fillWidth center padding="xs">
          <DelayRepeatLetterFX
            text="Currently Under Development"
            delay={7_500}
            speed="slow"
            className="neutral-on-background-weak font-code font-xl font-strong pb-xs" />
          <NavBar />
          <Column center maxWidth="s" gap="l" marginTop="xl">
            <DelayRepeatLetterFX
              text="Hello World!"
              delay={10_000}
              speed="slow"
              className="font-display font-xl font-strong py-4" />
            <RevealFx speed="fast" delay={0.2} translateY={3}>
              <Column fillWidth center>
                <Text variant="body-strong-xl" onBackground="neutral-weak">
                  My name is Amir a Junior Software Developer!
                </Text>
                <Text variant="body-strong-xl" onBackground="neutral-weak">
                  B.S. in Computer Science @ Brooklyn College
                </Text>
              </Column>
            </RevealFx>
            <Carousel
              indicator="thumbnail"
              images={[
                { src: "/images/og/home.jpg", alt: "Demo Home" },
                { src: "/images/demo.png", alt: "Demo Pic" },
              ]}
            />
            <Badge id="temp" title="Temp❗" href="/temp1" />
          </Column>
        </Column>
      </Flex>
    </RevealFx>
  );
}
