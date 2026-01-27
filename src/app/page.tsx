import { Column, Badge, RevealFx } from "@/once-ui/components";
import DelayRepeatLetterFX from "./components/DelayRepeatLetterFX";
import AutoScrollTechStack from "./components/AutoScrollTechStack";
import { ShineFx } from "@once-ui-system/core";
import HoverCardAvatar from "./components/HoverCardAvatar";

export default function Home() {
  return (
    <RevealFx speed="fast" translateY={5}>
      <Column fillWidth fillHeight center padding="xs">
        <Column center maxWidth="m" gap="m" marginTop="xs">
          <Badge id="new" title="Now Hosted On My Homelab Server!" icon="computer" />
          <DelayRepeatLetterFX
            text="Hello World!"
            delay={10_000}
            speed="slow"
            className="font-display font-xl font-strong" />
          <RevealFx speed="fast" delay={0.1} translateY={2}>
            <Column fillWidth center gap="xs">
              <HoverCardAvatar />
              <ShineFx baseOpacity={0.65} variant="body-strong-xl" onBackground="brand-strong" wrap="balance" align="center" speed={5} paddingBottom="xs">
               I'm Amir an aspiring Junior Software Developer! After hours, I build my own projects. 
              </ShineFx>
              <ShineFx baseOpacity={0.75} variant="body-strong-xl" onBackground="brand-strong" wrap="balance" align="center" speed={5}>
                B.S. in Computer Science @ Brooklyn College
              </ShineFx>
              <AutoScrollTechStack />
            </Column>
          </RevealFx>
        </Column>
        <Badge id="github" icon="outlinecmd" title="My Github" href="https://github.com/amirb2607" />
      </Column>
    </RevealFx>
  );
}
