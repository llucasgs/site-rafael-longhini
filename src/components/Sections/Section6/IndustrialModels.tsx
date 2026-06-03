"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ModelCanvas = dynamic(
  () => import("@/components/Three/ModelCanvas").then((mod) => mod.ModelCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border border-white/15 border-t-orange-400" />
      </div>
    ),
  },
);

type Vector3Tuple = [number, number, number];

type IndustrialModelCard = {
  ariaLabelKey: string;
  modelPath: string;
  rotation?: Vector3Tuple;
  fitMargin?: number;
  minDistance?: number;
  maxDistance?: number;
  cameraPosition?: Vector3Tuple;
};

function Model3DCard({
  ariaLabel,
  modelPath,
  rotation,
  fitMargin,
  minDistance,
  maxDistance,
  cameraPosition,
}: {
  ariaLabel: string;
  modelPath: string;
  rotation?: Vector3Tuple;
  fitMargin?: number;
  minDistance?: number;
  maxDistance?: number;
  cameraPosition?: Vector3Tuple;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const [shouldRenderModel, setShouldRenderModel] = useState(false);

  useEffect(() => {
    const cardElement = cardRef.current;

    if (!cardElement || shouldRenderModel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShouldRenderModel(true);
        observer.unobserve(cardElement);
      },
      {
        rootMargin: "280px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(cardElement);

    return () => observer.disconnect();
  }, [shouldRenderModel]);

  return (
    <article
      ref={cardRef}
      className="
        group relative overflow-hidden rounded-[2rem]
        border border-white/10 bg-white/[0.035]
        backdrop-blur-xl transition-all duration-300
        hover:-translate-y-1 hover:border-orange-400/25
        hover:bg-white/[0.055]
        hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)]
          bg-[size:42px_42px]
          opacity-70
          [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-[-6rem] top-[-6rem]
          h-56 w-56 rounded-full bg-orange-500/10 blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute bottom-[-6rem] right-[-6rem]
          h-56 w-56 rounded-full bg-sky-500/10 blur-3xl
        "
      />

      <div
        role="img"
        aria-label={ariaLabel}
        className="
          relative z-10 h-[18rem] w-full touch-none
          sm:h-[20rem]
          md:h-[22rem]
          lg:h-[24rem]
        "
      >
        {shouldRenderModel ? (
          <ModelCanvas
            modelPath={modelPath}
            rotation={rotation}
            fitMargin={fitMargin}
            minDistance={minDistance}
            maxDistance={maxDistance}
            cameraPosition={cameraPosition}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border border-white/15 border-t-orange-400" />
          </div>
        )}
      </div>
    </article>
  );
}

export function IndustrialModels() {
  const { t } = useLanguage();

  const modelCards: IndustrialModelCard[] = [
    {
      ariaLabelKey: "industrialModels.models.tablet.ariaLabel",
      modelPath: "/Models/Tablet/tablet-optimized.glb",
      rotation: [Math.PI / 5, -Math.PI / 5, 0],
      fitMargin: 0.8,
    },
    {
      ariaLabelKey: "industrialModels.models.glasses.ariaLabel",
      modelPath: "/Models/Glasses/glasses-optimized.glb",
      rotation: [0, -Math.PI / 1.5, 0],
      fitMargin: 0.8,
    },
    {
      ariaLabelKey: "industrialModels.models.bombaRkp.ariaLabel",
      modelPath: "/Models/BombaRkp/bomba-rkp-optimized.glb",
      rotation: [0, -Math.PI / 5, 0],
      fitMargin: 0.8,
    },
    {
      ariaLabelKey: "industrialModels.models.carTransmission.ariaLabel",
      modelPath: "/Models/CarTransmission/car-transmission-optimized.glb",
      rotation: [0, -Math.PI / 8, 0],
      fitMargin: 0.9,
    },
    {
      ariaLabelKey: "industrialModels.models.cdrTool.ariaLabel",
      modelPath: "/Models/CdrTool/cdr-tool-optimized.glb",
      rotation: [-Math.PI / 5, -Math.PI / 4, Math.PI / 5],
      fitMargin: 0.8,
    },
    {
      ariaLabelKey: "industrialModels.models.colgateCase.ariaLabel",
      modelPath: "/Models/ColgateCase/colgate-case-optimized.glb",
      rotation: [Math.PI / 2, -Math.PI / 1, -Math.PI / 1.2],
      fitMargin: 0.8,
    },
  ];

  return (
    <section
      id="industrial-models"
      aria-label={t("industrialModels.sectionAriaLabel")}
      className="relative overflow-hidden py-10 md:py-14 lg:py-18"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-8rem] top-[8rem] h-64 w-64 rounded-full bg-orange-500/7 blur-3xl animate-glow-orange" />
        <div className="absolute bottom-[5rem] right-[-10rem] h-72 w-72 rounded-full bg-sky-500/7 blur-3xl animate-glow-blue" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modelCards.map((model, index) => {
            const delay = index === 0 ? "none" : index === 1 ? "sm" : "md";

            return (
              <ScrollReveal key={model.modelPath} delay={delay}>
                <Model3DCard
                  ariaLabel={t(model.ariaLabelKey)}
                  modelPath={model.modelPath}
                  rotation={model.rotation}
                  fitMargin={model.fitMargin}
                  minDistance={model.minDistance}
                  maxDistance={model.maxDistance}
                  cameraPosition={model.cameraPosition}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
