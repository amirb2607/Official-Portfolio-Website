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
  // 1) Use a ref to hold LetterFx’s internal eventHandler. Start as `null`.
  const handlerRef = useRef<(() => void) | null>(null);
  // 2) A boolean that flips every 10 seconds
  const [toggle, setToggle] = useState(false);
  // 3) Flip `toggle` every 10s
  useEffect(() => {
    const id = setInterval(() => {
      setToggle((prev) => !prev);
    }, props.delay || 10_000);

    return () => clearInterval(id);
  }, []);
  // 4) Whenever `toggle` changes, call handlerRef.current (if non-null)
  useEffect(() => {
    if (handlerRef.current) {
      handlerRef.current();
    }
  }, [toggle]);

  return (
    <LetterFx
      trigger="custom"
      onTrigger={(eventHandler) => {
        handlerRef.current = eventHandler;
      }}
      speed={props.speed || "medium"}
      className={props.className || undefined}
    >
      {props.text}
    </LetterFx>
  );
}
