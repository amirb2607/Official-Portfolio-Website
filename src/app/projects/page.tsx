import { Column, Text } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";
import { meta, baseURL } from "../resources/once-ui.config";
import DelayRepeatLetterFX from "../components/DelayRepeatLetterFX";
import { Carousel } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: meta.projects.title,
    description: meta.projects.description,
    baseURL: baseURL,
    path: meta.projects.path,
    canonical: meta.projects.canonical,
    image: meta.projects.image,
    robots: meta.projects.robots,
    alternates: meta.projects.alternates,
  });
}

export default function Projects() {
  return (
    <>
    <Column padding="l">
      <DelayRepeatLetterFX
              text="My Projects!"
              delay={10_000}
              speed="slow"
              className="font-display font-m font-strong"
      />
      <Carousel
        controls={false}
        indicator={false}
        aspectRatio="4 / 3"
        play={{auto: true, interval: 5000, controls: true, progress: true}}
        items={[
          { slide: "/images/apps/adguard/home.png", alt: "Image 1" },
          { slide: "/images/apps/ai/home.png", alt: "Image 2" },
        ]}
      />
    </Column>
    <Column fillWidth fillHeight center>
      <Text> On The Projects Page! </Text>
    </Column>
    </>
  );
}