export function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (!element) return;

  const headerOffset = 96;

  const top =
    element.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}
