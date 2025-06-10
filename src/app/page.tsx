import { Column, Text, Badge, RevealFx } from "@/once-ui/components";
import NavBar from "@/app/components/NavBar";
import DelayRepeatLetterFX from "./components/DelayRepeatLetterFX";
import ParticleBackground from "./components/ParticleBackground";
import AutoScrollTechStack from "./components/AutoScrollTechStack";

export default function Home() {
  return (
    <RevealFx speed="fast" translateY={5}>
      <ParticleBackground />
        <Column fillWidth fillHeight center padding="xs">
          <DelayRepeatLetterFX
            text="Currently Under Development"
            delay={5_500}
            speed="medium"
            className="neutral-on-background-weak font-code font-xl font-strong pb-xs" />
          <NavBar />
          <Column center maxWidth="s" gap="l" marginTop="xl">
            <DelayRepeatLetterFX
              text="Hello World!"
              delay={10_000}
              speed="slow"
              className="font-display font-xl font-strong py-4" />
            <RevealFx speed="fast" delay={0.1} translateY={2}>
              <Column fillWidth center>
                <Text variant="body-strong-xl" onBackground="neutral-weak">
                  My name is Amir a Junior Software Developer!
                </Text>
                <Text variant="body-strong-xl" onBackground="neutral-weak">
                  B.S. in Computer Science @ Brooklyn College
                </Text>
              </Column>
            </RevealFx>
            <AutoScrollTechStack />
            <Badge id="temp" title="Temp❗" href="/temp1" />
          </Column>
        </Column>
    </RevealFx>
  );
}
