"use client";
import { Row, Text, IconButton, Column } from "@/once-ui/components";
import { social } from "../resources/once-ui.config";
import styles from "../styles/Footer.module.scss";


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Column paddingTop="xl">
      <Row
        as="footer"
        position="fixed"
        background="surface"
        padding="s"
        horizontal="space-between"
        vertical="center"
        borderTop="neutral-alpha-weak"
        className={styles.footer}

      >
        <Text variant="label-default-s" onBackground="neutral-medium">
          © 2025 - {year} Amir Badrudeen - All Rights Reserved.
        </Text>
        <Row gap="s">
          {social.github && (
            <IconButton
              icon="github"
              variant="ghost"
              href={social.github}
              tooltip="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            />
          )}
          {social.linkedin && (
            <IconButton
              icon="linkedin"
              variant="ghost"
              href={social.linkedin}
              tooltip="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            />
          )}
          {social.linkedin && (
            <IconButton
              icon="mail"
              variant="ghost"
              href={social.mail}
              tooltip="Email"
              target="_blank"
              rel="noopener noreferrer"
            />
          )}
          {social.status && (
            <IconButton
              icon="status"
              variant="ghost"
              href={social.status}
              tooltip="Status"
              target="_blank"
              rel="noopener noreferrer"
            />
          )}
        </Row>
      </Row>
    </Column>
  );
}
