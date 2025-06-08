"use client";

import { useEffect, useRef, useState } from "react";
import { LetterFx } from "@/once-ui/components";

interface Props {
  text: string // Text to display 
  delay?: number // Delay in milliseconds, defaults to 10000 (10 seconds)
  speed?: "fast" | "medium" | "slow"; //LetterFX speed props
  className?: string;
}

export default function DelayRepeatLetterFX(props: Props) {
  const handlerRef = useRef<(() => void) | null>(null);
  const [active, setActive] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!active || !handlerRef.current) return;

    const delay = props.delay ?? 10_000;

    timeoutRef.current = setTimeout(() => {
      handlerRef.current?.();

      intervalRef.current = setInterval(() => {
        handlerRef.current?.();
      }, delay);
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [active, props.delay]);

  return (
    <LetterFx
      trigger="custom"
      onTrigger={(eventHandler: (() => void) | null) => {
        handlerRef.current = eventHandler;
        setActive(true);
      }}
      speed={props.speed || "medium"}
      className={props.className || undefined}
    >
      {props.text}
    </LetterFx>
  );
}