"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <button
      type="button"
      data-theme-toggle
      className="theme-toggle"
      aria-label="Toggle color theme"
    >
      <span className="theme-toggle__icon theme-toggle__icon--moon"><Moon size={15} /></span>
      <span className="theme-toggle__icon theme-toggle__icon--sun"><Sun size={15} /></span>
      <span className="theme-toggle__label theme-toggle__label--dark">Dark</span>
      <span className="theme-toggle__label theme-toggle__label--light">Light</span>
    </button>
  );
}
