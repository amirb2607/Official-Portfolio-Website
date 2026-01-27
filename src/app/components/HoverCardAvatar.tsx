import { Avatar, Column, HoverCard, Row, Text, Tag } from "@once-ui-system/core";
import { getPresenceStatus } from "../hooks/usePresenceStatus";

export default function HoverCardAvatar() {
  const presence = getPresenceStatus();
  return(
    <>
      <HoverCard
        placement="bottom"
        trigger={<Avatar size="xl" src="/images/personal/headshot.png" tabIndex={0} statusIndicator={{ color: presence.color }} />}
      >
        <Column padding="20" gap="20" radius="l" maxWidth={24} background="surface" border="neutral-alpha-weak">
          <Row gap="20" fillWidth vertical="center">
            <Avatar size={3} src="/images/personal/headshot.png" statusIndicator={{ color: presence.color }} />
            <Column gap="4">
              <Text variant="heading-strong-m">Amir Badrudeen</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Junior Software Developer & IT Support Specialist
              </Text>
            </Column>
          </Row>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Tech enthusiast, Investor, Trader, Entrepreneur & Lifelong Learner.
          </Text>
          <Row gap="8" wrap>
            <Tag>Full-Stack Developer</Tag>
            <Tag>IT Support</Tag>
            <Tag>Curious</Tag>
          </Row>
        </Column>
      </HoverCard>
    </>
  );
}