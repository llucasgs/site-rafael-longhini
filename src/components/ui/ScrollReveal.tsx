"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: "none" | "sm" | "md" | "lg";
};

const delayClasses = {
  none: "delay-0",
  sm: "delay-100",
  md: "delay-200",
  lg: "delay-300",
};

export function ScrollReveal({
  children,
  className,
  delay = "none",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        delayClasses[delay],
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
