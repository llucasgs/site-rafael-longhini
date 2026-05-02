"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import { scrollToSection } from "@/utils/scrollToSection";
import { navItems } from "./NavMenu";

export function MobileMenu() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleNavigate(id: string) {
    scrollToSection(id);
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? t("header.mobile.close") : t("header.mobile.open")}
        aria-expanded={open}
        className="
          inline-flex h-10 w-10 items-center justify-center rounded-full
          border border-white/10 bg-white/5 text-slate-100
          transition-all duration-300
          hover:border-orange-400/40 hover:bg-orange-400/10
          focus:outline-none focus-visible:ring-2
          focus-visible:ring-orange-400/70
        "
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 top-0 z-40 bg-black/70 backdrop-blur-sm
          transition-opacity duration-300 lg:hidden
          ${open ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      <aside
        role="dialog"
        aria-modal="true"
        className={`
          fixed right-4 top-24 z-50 w-[calc(100%-2rem)] max-w-sm
          rounded-3xl border border-white/10 bg-[#111217]/95
          p-4 shadow-2xl shadow-black/50 backdrop-blur-xl
          transition-all duration-300 lg:hidden
          ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          }
        `}
      >
        <nav aria-label="Navegação mobile">
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const label = t(item.labelKey);

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(item.id)}
                    className="
                      flex w-full items-center justify-between rounded-2xl
                      px-4 py-4 text-left text-sm font-semibold
                      text-slate-300 transition-all duration-300
                      hover:bg-white/8 hover:text-white
                    "
                  >
                    {label}
                    <span
                      aria-hidden="true"
                      className="h-px w-8 bg-gradient-to-r from-orange-400 to-sky-400"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
