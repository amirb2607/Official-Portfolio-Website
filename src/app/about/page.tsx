import { Column, Text, Row } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";
import { meta, baseURL } from "../resources/once-ui.config";
import {
  Button,
  Card,
  Heading,
  Line,
  List,
  ListItem,
  RevealFx,
  Tag,
} from "@once-ui-system/core";
import AboutCard from "../components/AboutCard";
import ResumeButton from "../components/ResumeButton";

const targetRoles = [
  { label: "Junior Software Developer", icon: "cmd" },
  { label: "IT Support Specialist", icon: "computer" },
];

const skillGroups = [
  {
    title: "Development",
    items: ["React/Next.js", "TypeScript", "Java", "Python", "C/C++", "Node.js", "REST APIs", "SQL"],
  },
  {
    title: "IT Support",
    items: [
      "Windows/macOS/Linux",
      "Active Directory",
      "Office 365/Google Workspace",
      "Hardware",
      "Networking",
      "Scripting/Automation",
    ],
  },
  {
    title: "Tools",
    items: ["Git/GitHub", "Jira/ServiceNow", "TeamViewer/AnyDesk", "PowerShell/Bash", "Docker", "Monitoring"],
  },
];

const experience = [
  {
    title: "IT Support Technician",
    company: "Celebrity Moving",
    location: "New Hyde Park, NY",
    dates: "Dec. 2022 - Present",
    focus: "IT Support",
    bullets: [
      "Delivered remote troubleshooting via TeamViewer and AnyDesk, resolving hardware and software issues across Windows, MacOS, and Linux platforms.",
      "Managed and resolved technical support requests efficiently via Jira Service Management and Zendesk, ensuring swift incident resolution and operational uptime.",
      "Assisted end users with basic hardware and software troubleshooting, ensuring timely resolution of support requests.",
    ],
  },
  {
    title: "Junior Software & Systems Assistant",
    company: "Celebrity Moving",
    location: "New Hyde Park, NY",
    dates: "Dec. 2024 - Present",
    focus: "Development",
    bullets: [
      "Developed and maintained warehouse database system features to improve inventory tracking, error prevention, and data accuracy, enabling faster workflows and reduced discrepancies.",
      "Assisted with hardware/software troubleshooting and system configuration, bridging support responsibilities with technical engineering solutions.",
      "Applied problem-solving and debugging skills in both physical workflows and digital systems, reinforcing habits of accuracy, reliability, and continuous improvement.",
    ],
  },
];

const education = [
  {
    school: "CUNY Brooklyn College",
    degree: "Bachelor of Science, Computer Science",
    dates: "2024",
    highlights: [
      "3x Deans List Recipient",
      "Developed PortfolioHub, an investment portfolio tracker app using React Native/Expo and Firebase.",
    ],
  },
];

const projects = [
  {
    name: "PortfolioHub Mobile App",
    outcome: "Investment: Built a full-stack portfolio tracker using React Native, Expo & Firebase",
    stack: ["React Native", "TypeScript", "Expo", "Firebase"],
    link: "/projects",
  },
  {
    name: "Portfolio Platform (amirb.dev)",
    outcome: "Built a Next.js-based portfolio using Once UI, optimized for performance, accessibility, and long-term iteration.",
    stack: ["Next.js", "Once UI", "Tailwind / CSS"],
    link: "/",
  },
];

const certifications = [
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    date: "In Progress",
  },
];

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
    <RevealFx speed="medium" translateY={5}>
      <Column fillWidth fillHeight center padding="xs">
        <Column center padding="l">
          <AboutCard />
        </Column>

        <RevealFx speed="slow" translateY={10} >
          <Column fillWidth gap="l" paddingBottom="xl" center >
            <Column gap="s" center>
              <Heading variant="display-strong-s">Open To</Heading>
              <Line maxWidth={10} background="info-strong" />
              <Text align="center" variant="body-default-m" onBackground="neutral-weak">
                Open to junior development and IT support roles, full-time roles, remote or other opportunities in NYC or surrounding area.
              </Text>
              <Row gap="xl" paddingX="xl" wrap center mobileDirection="column">
                {targetRoles.map((role) => (
                  <Tag
                    key={role.label}
                    size="l"
                    variant="info"
                    prefixIcon={role.icon}
                    label={role.label}
                    style={{ scale: "1.3" }}
                  />
                ))}
              </Row>
              
              <Row gap="s" wrap center padding="xs">
                <ResumeButton />
                <Button href="/projects" variant="tertiary" label="View Projects" size="l" />
              </Row>
            </Column>

            <Column gap="s" center>
              <Heading variant="display-strong-s">Core Skills</Heading>
              <Line maxWidth={12} background="info-strong" />
              <Column gap="s" wrap center>
                {skillGroups.map((group) => (
                  <Card key={group.title} padding="m" gap="s" maxWidth="s" center align="center">
                    <Text variant="heading-strong-s">{group.title}</Text>
                    <Row gap="xs" wrap center>
                      {group.items.map((item) => (
                        <Tag center key={item} size="s" variant="info" label={item} />
                      ))}
                    </Row>
                  </Card>
                ))}
              </Column>
            </Column>

            <Column gap="s" center>
              <Heading variant="display-strong-s">Experience</Heading>
              <Line maxWidth={14} background="info-strong" />
              <Column gap="m" maxWidth="m" center align="center">
                {experience.map((role) => (
                  <Card key={role.title} padding="m" gap="s" center align="center">
                    <Row center gap="xs" wrap>
                      <Text variant="heading-strong-s">{role.title}</Text>
                      <Tag size="s" variant="info" label={role.focus} />
                    </Row>
                    <Row horizontal="space-between" wrap gap="xs">
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {role.company}
                        {<br />}
                        {role.location}
                      </Text>
                      <Text variant="label-default-s">{role.dates}</Text>
                    </Row>
                    <List as="ul" textVariant="body-default-s" gap="4">
                      {role.bullets.map((bullet, index) => (
                        <ListItem key={`${role.title}-${index}`}>{bullet}</ListItem>
                      ))}
                    </List>
                  </Card>
                ))}
              </Column>
            </Column>

            <Column gap="s" center>
              <Heading variant="display-strong-s">Education</Heading>
              <Line maxWidth={14} background="info-strong" />
              <Column gap="m" maxWidth="m">
                {education.map((item) => (
                  <Card key={item.school} padding="m" gap="s" center>
                    <Row horizontal="space-between" wrap>
                      <Text variant="heading-strong-s">{item.degree}</Text>
                      <Text variant="label-default-s">{item.dates}</Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {item.school}
                    </Text>
                    <List as="ul" textVariant="body-default-s" gap="4">
                      {item.highlights.map((highlight, index) => (
                        <ListItem key={`${item.school}-${index}`}>{highlight}</ListItem>
                      ))}
                    </List>
                  </Card>
                ))}
              </Column>
            </Column>

            <Column gap="s" center>
              <Heading variant="display-strong-s">Projects</Heading>
              <Line maxWidth={12} background="info-strong" />
              <Column gap="s" wrap center>
                {projects.map((project, index) => (
                  <Card key={`${project.name}-${index}`} padding="m" gap="s" maxWidth="s" center>
                    <Text variant="heading-strong-s">{project.name}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {project.outcome}
                    </Text>
                    <Row gap="xs" wrap center>
                      {project.stack.map((item) => (
                        <Tag key={item} size="s" variant="info" label={item} />
                      ))}
                    </Row>
                    <Button href={project.link} variant="tertiary" prefixIcon="chevronRight"/>
                  </Card>
                ))}
              </Column>
            </Column>

            <Column gap="s" center>
              <Heading variant="display-strong-s">Certifications</Heading>
              <Line maxWidth={14} background="info-strong" />
              <List as="ul" textVariant="body-default-m" gap="4">
                {certifications.map((cert) => (
                  <ListItem key={cert.name}>
                    {cert.name}, {cert.issuer} ({cert.date})
                  </ListItem>
                ))}
              </List>
            </Column>

          </Column>
        </RevealFx>
      </Column>
    </RevealFx>
  );
}