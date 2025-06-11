"use client";

import { Banner, Icon } from "@/once-ui/components";
import DelayRepeatLetterFX from "./DelayRepeatLetterFX";

export default function UnderDevBanner() {
  return (
    <Banner solid="danger-medium" onSolid="warning-strong">
      <Icon name="warning" size="s" />
      <DelayRepeatLetterFX
        text="Currently Under Development"
        delay={5_500}
        speed="medium"
        className="neutral-on-background-strong font-s font-strong" />
    </Banner>
  );
}