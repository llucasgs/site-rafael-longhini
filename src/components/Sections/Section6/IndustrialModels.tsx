"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight, Rotate3D } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
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

type IndustrialMediaItem = {
  type: "image" | "video";
  src: string;
  altKey: string;
};

const industrialMediaItems: IndustrialMediaItem[] = [
  {
    type: "image",
    src: "/Sections/Section6/img01.jpg",
    altKey: "industrialModels.gallery.items.image01.alt",
  },
  {
    type: "image",
    src: "/Sections/Section6/img02.jpg",
    altKey: "industrialModels.gallery.items.image02.alt",
  },
  {
    type: "image",
    src: "/Sections/Section6/img03.jpg",
    altKey: "industrialModels.gallery.items.image03.alt",
  },
  {
    type: "image",
    src: "/Sections/Section6/img04.jpg",
    altKey: "industrialModels.gallery.items.image04.alt",
  },
  {
    type: "image",
    src: "/Sections/Section6/img05.jpg",
    altKey: "industrialModels.gallery.items.image05.alt",
  },
  {
    type: "video",
    src: "/Sections/Section6/vd01.mp4",
    altKey: "industrialModels.gallery.items.video01.alt",
  },
];

function Interactive3DSeal() {
  const { t } = useLanguage();

  return (
    <div
      aria-label={t("industrialModels.interactiveSeal.ariaLabel")}
      className="
        pointer-events-none absolute bottom-4 right-4 z-20
        inline-flex items-center gap-1.5 rounded-full
        border border-white/10 bg-black/30
        px-3 py-1.5
        text-slate-400 backdrop-blur-md
        transition-colors duration-300
        group-hover:border-white/15 group-hover:text-slate-300
        sm:bottom-5 sm:right-5
      "
    >
      <Rotate3D
        size={15}
        aria-hidden="true"
        className="
          shrink-0 text-slate-400
          transition-colors duration-300
          group-hover:text-sky-300
        "
      />

      <span
        className="
          text-[0.68rem] font-bold uppercase
          tracking-[0.14em] text-slate-400
          transition-colors duration-300
          group-hover:text-orange-300
        "
      >
        {t("industrialModels.interactiveSeal.label")}
      </span>
    </div>
  );
}

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
          pointer-events-none absolute inset-0
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
          pointer-events-none absolute bottom-[-6rem] right-[-6rem]
          h-56 w-56 rounded-full bg-sky-500/10 blur-3xl
        "
      />

      <div
        role="img"
        aria-label={ariaLabel}
        className="
          relative z-10 h-[18rem] w-full cursor-grab touch-none
          active:cursor-grabbing
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

      <Interactive3DSeal />
    </article>
  );
}

function IndustrialMediaCarousel() {
  const { t } = useLanguage();

  const totalMediaItems = industrialMediaItems.length;
  const repeatCount = 5;
  const middleRepeatIndex = Math.floor(repeatCount / 2);
  const initialSliderIndex = totalMediaItems * middleRepeatIndex;

  const sliderMediaItems = Array.from({ length: repeatCount }).flatMap(
    () => industrialMediaItems,
  );

  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(initialSliderIndex);
  const [isSliderTransitionEnabled, setIsSliderTransitionEnabled] =
    useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartXRef = useRef(0);
  const dragCurrentXRef = useRef(0);
  const sliderViewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSliderTransitionEnabled) return;

    const animationFrameId = requestAnimationFrame(() => {
      setIsSliderTransitionEnabled(true);
    });

    return () => cancelAnimationFrame(animationFrameId);
  }, [isSliderTransitionEnabled]);

  function showPreviousMedia() {
    setIsSliderTransitionEnabled(true);

    setSliderIndex((currentIndex) => currentIndex - 1);

    setActiveMediaIndex((currentIndex) =>
      currentIndex === 0 ? totalMediaItems - 1 : currentIndex - 1,
    );
  }

  function showNextMedia() {
    setIsSliderTransitionEnabled(true);

    setSliderIndex((currentIndex) => currentIndex + 1);

    setActiveMediaIndex((currentIndex) =>
      currentIndex === totalMediaItems - 1 ? 0 : currentIndex + 1,
    );
  }

  function handleSliderTransitionEnd() {
    const minSafeIndex = totalMediaItems;
    const maxSafeIndex = totalMediaItems * (repeatCount - 1);

    if (sliderIndex > minSafeIndex && sliderIndex < maxSafeIndex) return;

    const normalizedIndex =
      ((sliderIndex % totalMediaItems) + totalMediaItems) % totalMediaItems;

    setIsSliderTransitionEnabled(false);
    setSliderIndex(initialSliderIndex + normalizedIndex);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;

    if (target.closest("button")) return;

    dragStartXRef.current = event.clientX;
    dragCurrentXRef.current = event.clientX;

    setIsDragging(true);
    setDragOffset(0);
    setIsSliderTransitionEnabled(false);

    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!isDragging) return;

    dragCurrentXRef.current = event.clientX;

    const nextDragOffset = dragCurrentXRef.current - dragStartXRef.current;

    setDragOffset(nextDragOffset);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!isDragging) return;

    const viewportWidth = sliderViewportRef.current?.offsetWidth ?? 1;
    const dragDistance = dragCurrentXRef.current - dragStartXRef.current;
    const dragThreshold = Math.min(viewportWidth * 0.18, 90);

    setIsDragging(false);
    setDragOffset(0);
    setIsSliderTransitionEnabled(true);

    event.currentTarget.releasePointerCapture(event.pointerId);

    if (dragDistance <= -dragThreshold) {
      showNextMedia();
      return;
    }

    if (dragDistance >= dragThreshold) {
      showPreviousMedia();
    }
  }

  function handlePointerCancel() {
    if (!isDragging) return;

    setIsDragging(false);
    setDragOffset(0);
    setIsSliderTransitionEnabled(true);
  }

  return (
    <div
      className="
        relative overflow-hidden rounded-[2rem]
        border border-white/10 bg-white/[0.035]
        shadow-[0_24px_90px_rgba(0,0,0,0.42)]
        backdrop-blur-xl
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-10
          bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)]
          bg-[size:42px_42px]
          opacity-30
          [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 top-0 z-20 h-px
          bg-gradient-to-r from-transparent via-white/25 to-transparent
        "
      />

      <div
        ref={sliderViewportRef}
        aria-label={t("industrialModels.gallery.ariaLabel")}
        aria-live="polite"
        className="
          relative aspect-[1272/720] w-full cursor-grab overflow-hidden
          touch-pan-y select-none active:cursor-grabbing
        "
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onLostPointerCapture={handlePointerCancel}
      >
        <div
          className={`
            flex h-full w-full
            ${
              isSliderTransitionEnabled
                ? "transition-transform duration-500 ease-out"
                : ""
            }
          `}
          style={{
            transform: `translateX(calc(-${sliderIndex * 100}% + ${dragOffset}px))`,
          }}
          onTransitionEnd={handleSliderTransitionEnd}
        >
          {sliderMediaItems.map((media, index) => {
            const realIndex = index % totalMediaItems;
            const isActive = realIndex === activeMediaIndex;

            return (
              <div
                key={`${media.src}-${index}`}
                aria-hidden={!isActive}
                className="relative h-full w-full min-w-full overflow-hidden"
              >
                {media.type === "image" ? (
                  <Image
                    src={media.src}
                    alt={t(media.altKey)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
                    className="pointer-events-none object-cover"
                    draggable={false}
                  />
                ) : (
                  <video
                    src={media.src}
                    aria-label={t(media.altKey)}
                    className="pointer-events-none h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                )}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={showPreviousMedia}
          onPointerDown={(event) => event.stopPropagation()}
          aria-label={t("industrialModels.gallery.previousAriaLabel")}
          className="
            absolute left-3 top-1/2 z-30 inline-flex h-10 w-10
            -translate-y-1/2 items-center justify-center rounded-full
            border border-white/10 bg-black/35 text-white
            backdrop-blur-md transition-all duration-300
            hover:border-orange-400/35 hover:bg-orange-400/15
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-orange-400/70
            md:left-5 md:h-11 md:w-11
          "
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={showNextMedia}
          onPointerDown={(event) => event.stopPropagation()}
          aria-label={t("industrialModels.gallery.nextAriaLabel")}
          className="
            absolute right-3 top-1/2 z-30 inline-flex h-10 w-10
            -translate-y-1/2 items-center justify-center rounded-full
            border border-white/10 bg-black/35 text-white
            backdrop-blur-md transition-all duration-300
            hover:border-orange-400/35 hover:bg-orange-400/15
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-orange-400/70
            md:right-5 md:h-11 md:w-11
          "
        >
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </div>
    </div>
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
      id="experience"
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
        <ScrollReveal>
          <SectionTitle
            title={t("industrialModels.title")}
            description={t("industrialModels.description")}
          />
        </ScrollReveal>

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

        <ScrollReveal delay="sm">
          <div className="mt-6">
            <IndustrialMediaCarousel />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
