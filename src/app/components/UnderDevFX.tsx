// app/components/UnderDevFX.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { LetterFx } from "@/once-ui/components";

export default function UnderDevFX() {
  // 1) Use a ref to hold LetterFx’s internal eventHandler. Start as `null`.
  const handlerRef = useRef<(() => void) | null>(null);

  // 2) A boolean that flips every 10 seconds
  const [toggle, setToggle] = useState(false);

  // 3) Flip `toggle` every 10s
  useEffect(() => {
    const id = setInterval(() => {
      setToggle((prev) => !prev);
    }, 10_000);

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
      speed="slow"
      className="body-strong-xl"
    >
      Currently Under Development!
    </LetterFx>
  );
}
