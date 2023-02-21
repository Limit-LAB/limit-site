import { useState, useRef, useEffect, useCallback } from "react";

export function useBoundingClientRect() {
  const [rect, setRect] = useState<DOMRectReadOnly>();
  const ref = useRef<HTMLElement>(null);

  const handleResize = useCallback(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { ref, rect };
}