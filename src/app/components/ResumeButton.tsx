"use client";

import { Button, Column, Input, Row, Dialog} from "@once-ui-system/core";
import { useState } from "react";

export default function ResumeButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="primary" label="Download Resume" size="l" weight="default" onClick={() => setIsOpen(true)}/>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Download Resume"
        description="Download my various resumes for different roles:"
      >
        <Column fillWidth gap="16" marginTop="12">
          <Row fillWidth vertical="center" gap="xl" center>
            <Button label="Software Engineering" weight="strong" href="/downloads/SE_Resume.pdf" download={true}/>
            <Button label="IT Support" weight="strong" href="/downloads/IT_Resume.pdf" download={true}/>
          </Row>
        </Column>
      </Dialog>
    </>
  );
}