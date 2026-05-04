"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const PrinterCanvas = dynamic(
  () =>
    import("@/components/Three/PrinterCanvas").then((mod) => mod.PrinterCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border border-white/15 border-t-orange-400" />
      </div>
    ),
  },
);

export function IndustrialShowcase() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRenderCanvas(true);
          observer.unobserve(section);
        }
      },
      {
        rootMargin: "300px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industrial-showcase"
      aria-label={t("industrialShowcase.sectionAriaLabel")}
      className="relative overflow-hidden py-8 md:py-10 lg:py-12"
    >
      <Container>
        <ScrollReveal>
          <div
            className="
              relative mx-auto w-full max-w-3xl overflow-hidden rounded-[2rem]
              border border-white/10 bg-white/[0.035]
              shadow-[0_24px_90px_rgba(0,0,0,0.42)]
              backdrop-blur-xl
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute inset-0
                bg-[linear-gradient(rgba(255,255,255,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.024)_1px,transparent_1px)]
                bg-[size:44px_44px]
                [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute left-[-8rem] top-[-8rem]
                h-72 w-72 rounded-full bg-orange-500/12 blur-3xl
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute bottom-[-8rem] right-[-8rem]
                h-72 w-72 rounded-full bg-sky-500/12 blur-3xl
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute inset-x-0 top-0 h-px
                bg-gradient-to-r from-transparent via-white/25 to-transparent
              "
            />

            <div
              className="
                relative z-10 mx-auto h-[22rem] w-full touch-none
                md:h-[30rem]
                lg:h-[36rem]
              "
            >
              {shouldRenderCanvas && <PrinterCanvas />}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
