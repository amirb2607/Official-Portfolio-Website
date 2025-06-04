"use client";

import { useEffect, useRef, useState } from "react";
import { LetterFx } from "@/once-ui/components";

interface Props {
  text: string // Text to display 
  delay?: number // Delay in milliseconds, defaults to 10000 (10 seconds)
  speed?: "fast" | "medium" | "slow"; //LetterFX speed props
}

export default function DelayRepeatLetterFX(props: Props) {
  // 1) Use a ref to hold LetterFx’s internal eventHandler. Start as `null`.
  const handlerRef = useRef<(() => void) | null>(null);
  const [toggle, setToggle] = useState(false);

  // 3) Flip `toggle` every {delay} or 10s
  useEffect(() => {
    const id = setInterval(() => {
      setToggle((prev) => !prev);
    }, props.delay || 10_000); // Defaults to 10 seconds if no delay is provided

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
      // LetterFx will invoke onTrigger with its internal eventHandler
      onTrigger={(eventHandler) => {
        handlerRef.current = eventHandler;
      }}
      speed={ props.speed || "medium"} //Defaults to medium if no speed is provided
    >
      { props.text } {/* Text to display, passed as children */} 
    </LetterFx>
  );
}
