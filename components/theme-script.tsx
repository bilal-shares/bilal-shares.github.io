const themeScript = `
(() => {
  const storageKey = "socialslay-theme";
  const changeEvent = "socialslay-theme-change";
  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem(storageKey, theme);
    } catch {}
    window.dispatchEvent(new Event(changeEvent));
  };

  try {
    const stored = localStorage.getItem(storageKey);
    const theme = stored === "dark" || stored === "light" ? stored : "light";
    applyTheme(theme);
  } catch {
    applyTheme("light");
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const button = target.closest("[data-theme-toggle]");
    if (!button) return;
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
