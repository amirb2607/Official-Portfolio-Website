"use client";
import { Particle } from "@/once-ui/components";

export default function ParticleBackground() {
  return (
    //TODO: make particles go across the entire screen
    <Particle
      fill
      position="fixed"
      className="inset-0 z-index--1"
      interactive
      density={350}
      speed={1}
      size="2"
      interactionRadius={25}
      color="brand-background-strong"
    />
  );
}