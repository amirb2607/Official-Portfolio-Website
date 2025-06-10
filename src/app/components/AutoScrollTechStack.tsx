"use client";
import { AutoScroll, Badge, Fade, Icon, Line, Logo, Media } from "@/once-ui/components";

export default function AutoScrollTechStack() {
  return (
    <>
    <Fade zIndex={1} to="right" fillHeight base="transparent" width="64" position="absolute" left="0" top="0"/>
    <AutoScroll speed="medium" padding="l">
      <Logo size="m" iconSrc="/tech_icons/nextjs/light.svg" wordmark={false}/>
      <Logo size="m" iconSrc="/tech_icons/typescript.svg" wordmark={false}/>
      <Logo size="m" iconSrc="/tech_icons/vercel/dark.svg" wordmark={false}/>
      <Logo size="m" iconSrc="/tech_icons/react.svg" wordmark={false}/>
      <Logo size="m" iconSrc="/tech_icons/python/python.svg" wordmark={false}/>
      <Logo size="m" iconSrc="/tech_icons/cpp.svg" wordmark={false}/>
      <Logo size="m" iconSrc="/tech_icons/java.svg" wordmark={false}/>
      <Logo size="m" iconSrc="/tech_icons/git.svg" wordmark={false}/>
    </AutoScroll>
    <Fade zIndex={1} to="left" fillHeight base="transparent" width="64" position="absolute" right="0" top="0"/>
    </>
  );
}