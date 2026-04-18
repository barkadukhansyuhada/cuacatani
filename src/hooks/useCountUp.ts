"use client";

import { useEffect, useState } from "react";

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

interface UseCountUpOptions {
  /** Target number to count up to */
  end: number;
  /** Duration in ms (default: 1800) */
  duration?: number;
  /** Whether to start the animation */
  start?: boolean;
}

/**
 * Animated counter hook. Returns the current display value.
 * Only starts counting when `start` is true.
 */
export function useCountUp({ end, duration = 1800, start = false }: UseCountUpOptions): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let rafId: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);

      setValue(Math.round(eased * end));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    }

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, start]);

  return value;
}
