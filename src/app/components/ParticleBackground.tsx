"use client";
import { Particle } from "@/once-ui/components";

export default function ParticleBackground() {
  return (
    <Particle
      position="fixed"
      className="z-index--1"
      interactive
      density={350}
      speed={1.5}
      size="2"
      interactionRadius={15}
      color="brand-background-strong"
    />
  );
}