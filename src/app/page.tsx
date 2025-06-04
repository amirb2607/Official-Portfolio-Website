import { Column, Heading, Text, Badge, RevealFx} from "@/once-ui/components";
import NavBar from "@/app/components/NavBar";
import DelayRepeatLetterFX from "./components/DelayRepeatLetterFX";

export default function Home() {
  return (
    <RevealFx speed="fast" delay={0.1} translateY={10}>
      <Column fillWidth center padding="xs">
        <NavBar />
          <Column maxWidth="s" horizontal="center" gap="l" align="center" marginTop="xl">
              <Heading variant="display-strong-xl" marginTop="24">
                Hello World!
              </Heading>
              <RevealFx speed="fast" delay={0.2} translateY={3}>
                <Text variant="body-strong-xl" onBackground="neutral-weak" wrap="balance" marginBottom="16">
                  My name is Amir and I am a Junior Software Developer | B.S. in Computer Science @ Brooklyn College
                </Text>
              </RevealFx>
              <RevealFx speed="fast" delay={0.2} translateY={4} center>
                <DelayRepeatLetterFX text="Currently Under Development" delay={7_000} speed="slow" />
              </RevealFx>
              <Badge id="badge-3" title="Temp❗" href="/temp"/>
          </Column>
      </Column>
    </RevealFx>
  );
}
