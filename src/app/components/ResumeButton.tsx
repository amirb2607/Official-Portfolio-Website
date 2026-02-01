"use client";

import { Button, Dialog, Column, Row } from "@/once-ui/components"
import { useState } from "react";

export default function ResumeButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="primary" type="button" size="l" weight="strong" onClick={() => setIsOpen(true)}>
        Resume
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Download Resume"
        description="Download my various resumes for different roles:"
      >
        <Column fillWidth gap="16" marginTop="12">
          <Row fillWidth vertical="center" gap="xl" center>
            <Button type="button" label="Software Engineering" weight="strong" href="/downloads/SE_Resume.pdf" download={true}/>
            <Button type="button" label="IT Support" weight="strong" href="/downloads/IT_Resume.pdf" download={true}/>
          </Row>
        </Column>
      </Dialog>
    </>
  );
}