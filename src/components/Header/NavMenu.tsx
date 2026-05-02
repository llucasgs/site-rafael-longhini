"use client";

import { scrollToSection } from "@/utils/scrollToSection";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { id: "about", labelKey: "header.nav.about" },
  { id: "services", labelKey: "header.nav.services" },
  { id: "expertise", labelKey: "header.nav.expertise" },
  { id: "experience", labelKey: "header.nav.experience" },
  { id: "contact", labelKey: "header.nav.contact" },
];

export function NavMenu() {
  const { t } = useLanguage();

  return (
    <nav aria-label="Navegação principal">
      <ul className="hidden items-center gap-2 lg:flex">
        {navItems.map((item) => {
          const label = t(item.labelKey);

          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollToSection(item.id)}
                aria-label={t("header.navAria.goTo", { section: label })}
                className="
                  rounded-full px-4 py-2
                  text-sm font-medium text-slate-300
                  transition-all duration-300
                  hover:bg-white/8 hover:text-white
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-orange-400/70
                "
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { navItems };
