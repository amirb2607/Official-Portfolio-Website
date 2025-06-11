"use client";
import { Column, Text, Badge, RevealFx } from "@/once-ui/components";
import DelayRepeatLetterFX from "./components/DelayRepeatLetterFX";
import AutoScrollTechStack from "./components/AutoScrollTechStack";
import { Schema } from "@/once-ui/modules";
import { baseURL, meta, schema } from "./resources/once-ui.config";

export default function Home() {
  return (
    <>
    <Schema //SEO
        as="webPage"
        baseURL={baseURL}
        path={meta.home.path}
        title={meta.home.title}
        description={meta.home.description}
        image={`/api/og/generate?title=${encodeURIComponent(meta.home.title)}`}
        author={{
          name: schema.name,
          //url: `${baseURL}${schema.path}`,
          //image: `${baseURL}${schema.avatar}`,
        }}
      />
      <RevealFx speed="fast" translateY={5}>
        <Column fillWidth fillHeight center padding="xs">
          <Column center maxWidth="s" gap="l" marginTop="xl">
            <DelayRepeatLetterFX
              text="Hello World!"
              delay={10_000}
              speed="slow"
              className="font-display font-xl font-strong py-4" />
            <RevealFx speed="fast" delay={0.1} translateY={2}>
              <Column fillWidth center>
                <Text variant="body-strong-xl" onBackground="neutral-weak" wrap="balance" align="center" paddingBottom="xs">
                  I'm Amir an aspiring Junior Software Developer! After hours, I build my own projects. 
                </Text>
                <Text variant="body-strong-xl" onBackground="brand-strong">
                  B.S. in Computer Science @ Brooklyn College
                </Text>
              </Column>
            </RevealFx>
            <AutoScrollTechStack />
            <Badge id="temp" title="Temp❗" href="/temp1" />
          </Column>
        </Column>
      </RevealFx>
    </>
  );
}
