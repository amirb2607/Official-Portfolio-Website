import { Column, Text } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";
import { meta, baseURL } from "../resources/once-ui.config";

export async function generateMetadata() {
  return Meta.generate({
    title: meta.about.title,
    description: meta.about.description,
    baseURL: baseURL,
    path: meta.about.path,
    canonical: meta.about.canonical,
    image: meta.about.image,
    robots: meta.about.robots,
    alternates: meta.about.alternates,
  });
}

export default function About() {
  return (
    <>
      <Column fillWidth fillHeight center>
        <Text> On The About Page! </Text>
      </Column>
    </>
  );
}