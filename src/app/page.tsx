import { Column, Text, Badge, RevealFx, Tag } from "@/once-ui/components";
import DelayRepeatLetterFX from "./components/DelayRepeatLetterFX";
import AutoScrollTechStack from "./components/AutoScrollTechStack";

export default function Home() {
  return (
    <RevealFx speed="fast" translateY={5}>
      <Column fillWidth fillHeight center padding="xs">
        <Column center maxWidth="s" gap="l" marginTop="l">
          <DelayRepeatLetterFX
            text="Hello World!"
            delay={10_000}
            speed="slow"
            className="font-display font-xl font-strong py-3" />
          <RevealFx speed="fast" delay={0.1} translateY={2}>
            <Column fillWidth center>
              <Text variant="body-strong-xl" onBackground="neutral-medium" wrap="balance" align="center" paddingBottom="xs">
                I'm Amir an aspiring Junior Software Developer! After hours, I build my own projects. 
              </Text>
              <Text variant="body-strong-xl" onBackground="brand-strong" wrap="balance" align="center">
                B.S. in Computer Science @ Brooklyn College
              </Text>
              <AutoScrollTechStack />
            </Column>
          </RevealFx>
        </Column>
        <Badge id="temp" icon="outlinecmd" title="My Github" href="https://github.com/amirb2607" />
      </Column>
    </RevealFx>
  );
}
