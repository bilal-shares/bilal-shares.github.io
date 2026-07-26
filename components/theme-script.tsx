// Runs synchronously in <head>, before the browser paints, so the stored theme
// and the scroll-reveal starting state are applied with no flash of unstyled
// or un-animated content. See node_modules/next/dist/docs/01-app/02-guides/
// preventing-flash-before-hydration.md
const themeScript = `
(() => {
  const root = document.documentElement;
  const storageKey = "socialslay-theme";
  const changeEvent = "socialslay-theme-change";

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    try {
      localStorage.setItem(storageKey, theme);
    } catch {}
    window.dispatchEvent(new Event(changeEvent));
  };

  try {
    const stored = localStorage.getItem(storageKey);
    applyTheme(stored === "dark" || stored === "light" ? stored : "light");
  } catch {
    applyTheme("light");
  }

  // Enable the reveal-on-scroll starting state only when the browser can
  // actually run it. Content is never hidden without a way to bring it back.
  const canReveal =
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (canReveal) {
    root.setAttribute("data-js", "");
    // Safety net: if hydration never happens, show everything anyway.
    window.addEventListener("load", () => {
      setTimeout(() => {
        if (!root.hasAttribute("data-reveal-ready")) root.removeAttribute("data-js");
      }, 1500);
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!target.closest("[data-theme-toggle]")) return;
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
