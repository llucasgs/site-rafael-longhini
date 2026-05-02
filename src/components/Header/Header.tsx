"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { site } from "@/constants/site";

import { LanguageSelector } from "./LanguageSelector";
import { MobileMenu } from "./MobileMenu";
import { NavMenu } from "./NavMenu";

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)]
        -translate-x-1/2 transition-all duration-300
        ${scrolled ? "max-w-6xl" : "max-w-7xl"}
      `}
    >
      <Container className="px-0">
        <div
          className={`
            flex h-18 items-center justify-between rounded-full
            border px-4 backdrop-blur-xl transition-all duration-300
            md:px-6
            ${
              scrolled
                ? "border-white/10 bg-[#0b0b0f]/82 shadow-2xl shadow-black/35"
                : "border-white/8 bg-white/[0.045]"
            }
          `}
        >
          <Link
            href="/"
            aria-label={t("header.logoAriaLabel")}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
              group flex items-center gap-3 rounded-full
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-orange-400/70
            "
          >
            <span
              aria-hidden="true"
              className="
                flex h-11 w-11 items-center justify-center rounded-full
                border border-orange-400/30 bg-orange-400/10
                text-sm font-black text-orange-300
                shadow-[0_0_28px_rgba(249,115,22,0.18)]
                transition-all duration-300
                group-hover:border-orange-400/60 group-hover:bg-orange-400/15
              "
            >
              L
            </span>

            <span className="flex flex-col leading-none">
              <span className="text-sm font-extrabold tracking-[0.18em] text-white">
                LONGHINI
              </span>
              <span className="mt-1 hidden text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-slate-400 sm:block">
                Desenvolvimento Industrial
              </span>
            </span>
          </Link>

          <div className="hidden lg:block">
            <NavMenu />
          </div>

          <div className="flex items-center gap-3">
            <LanguageSelector />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
