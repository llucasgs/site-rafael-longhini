"use client";

import { useEffect, useState } from "react";
import { ArrowBigUp } from "lucide-react";

import { site } from "@/constants/site";
import { useLanguage } from "@/contexts/LanguageContext";

export function FloatingButtons() {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 320);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div
      className="
        fixed bottom-5 right-4 z-50 flex flex-col gap-3
        sm:bottom-6 sm:right-6
      "
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={t("floatingButtons.scrollTopAriaLabel")}
        className={`
          w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
          border border-white/20 bg-[#232428]/80 backdrop-blur-sm
          text-white/60 hover:text-white hover:border-white/40
          transition-all duration-300 shadow-lg hover:scale-110
          ${showScrollTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        <ArrowBigUp size={21} aria-hidden="true" />
      </button>

      <a
        href={site.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("floatingButtons.whatsappAriaLabel")}
        className="
          flex h-11 w-11 items-center justify-center rounded-full
          bg-green-500 text-white
          shadow-[0_12px_36px_rgba(34,197,94,0.28)]
          transition-all duration-300
          hover:scale-110 hover:bg-green-400
          focus:outline-none focus-visible:ring-2
          focus-visible:ring-green-300/80
          sm:h-12 sm:w-12
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-6 w-6"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.49 0 .12 5.37.12 11.96c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.94 11.94 0 0 0 5.88 1.5h.01c6.59 0 11.96-5.36 11.96-11.96 0-3.19-1.24-6.19-3.53-8.43ZM12.09 21.85h-.01a9.93 9.93 0 0 1-5.06-1.39l-.36-.21-3.68.97.98-3.59-.23-.37a9.91 9.91 0 0 1-1.52-5.3c0-5.49 4.47-9.95 9.97-9.95a9.9 9.9 0 0 1 7.04 2.92 9.88 9.88 0 0 1 2.92 7.03c0 5.5-4.47 9.89-10.05 9.89Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </div>
  );
}
