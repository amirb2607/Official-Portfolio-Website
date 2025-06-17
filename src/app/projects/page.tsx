import { Column, Text } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";
import { meta, baseURL } from "../resources/once-ui.config";

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
      <Column fillWidth fillHeight center>
        <Text> On The Projects Page! </Text>
      </Column>
    </>
  );
}