// app/components/UnderDevFX.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { LetterFx } from "@/once-ui/components";

type UnderDevFxProps = {
  text: string;
  /** Delay in milliseconds between effect triggers */
  delay?: number;
};

export default function UnderDevFX({ text, delay = 10_000 }: UnderDevFxProps) {
  // 1) Use a ref to hold LetterFx’s internal eventHandler. Start as `null`.
  const handlerRef = useRef<(() => void) | null>(null);

  // 2) A boolean that flips according to the provided delay
  const [toggle, setToggle] = useState(false);

  // 3) Flip `toggle` based on `delay`
  useEffect(() => {
    const id = setInterval(() => {
      setToggle((prev) => !prev);
    }, delay);

    return () => clearInterval(id);
  }, [delay]);

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
      speed="slow"
      className="body-strong-xl"
    >
      {text}
    </LetterFx>
  );
}
