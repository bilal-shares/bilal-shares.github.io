"use client";

import { ChevronLeft, ChevronRight, Maximize2, Search, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { proofs, type ProofCategory } from "@/data/proofs";

const filters: Array<"All" | ProofCategory> = ["All", "Instagram", "Facebook", "YouTube"];

export function ProofGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return proofs.filter((proof) => {
      const matchesFilter = filter === "All" || proof.category === filter;
      const matchesQuery =
        !normalized ||
        proof.title.toLowerCase().includes(normalized) ||
        String(proof.id).includes(normalized) ||
        proof.category.toLowerCase().includes(normalized);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  const activeIndex = activeId === null ? -1 : filtered.findIndex((proof) => proof.id === activeId);
  const active = activeIndex >= 0 ? filtered[activeIndex] : null;

  const navigate = useCallback(
    (direction: number) => {
      if (activeIndex < 0 || filtered.length === 0) return;
      const next = (activeIndex + direction + filtered.length) % filtered.length;
      setActiveId(filtered[next].id);
    },
    [activeIndex, filtered],
  );

  // Lock the page and wire up keyboard control only while the lightbox is open.
  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
      if (event.key === "ArrowLeft") navigate(-1);
      if (event.key === "ArrowRight") navigate(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, navigate]);

  return (
    <>
      <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <label className="surface-card flex items-center gap-3 rounded-full px-4 py-3">
          <Search size={17} className="faint-text" />
          <span className="sr-only">Search proofs</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search proof number or platform"
            className="w-full bg-transparent text-sm text-[color:var(--foreground)] outline-none placeholder:text-[color:var(--faint)]"
          />
        </label>
        <div className="chip-row" role="group" aria-label="Filter proofs by platform">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className="chip"
              data-active={filter === item}
              aria-pressed={filter === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.15em] faint-text">
        <p>{filtered.length} results</p>
        <p>Tap to expand</p>
      </div>

      {filtered.length ? (
        <div className="proof-masonry">
          {filtered.map((proof) => (
            <button
              key={proof.id}
              type="button"
              className="proof-item group relative w-full overflow-hidden rounded-[1.25rem] border border-[color:var(--line)] bg-surface text-left"
              onClick={() => setActiveId(proof.id)}
            >
              <Image
                src={proof.thumb}
                alt={proof.title}
                width={480}
                height={853}
                loading="lazy"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.025]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-4 text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-[color:var(--ig-yellow)]">
                    {proof.category}
                  </span>
                  <span className="mt-1 block text-sm font-semibold">Proof {proof.id}</span>
                </span>
                <Maximize2 size={17} />
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="surface-card rounded-3xl p-12 text-center text-muted">No proofs match that search.</div>
      )}

      {active && (
        <div
          className="lightbox fixed inset-0 z-[110] grid place-items-center bg-black/95 p-3 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActiveId(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/50 text-white"
            onClick={() => setActiveId(null)}
            aria-label="Close proof"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/50 text-white sm:left-8"
            onClick={(event) => {
              event.stopPropagation();
              navigate(-1);
            }}
            aria-label="Previous proof"
          >
            <ChevronLeft size={22} />
          </button>
          <div
            key={active.id}
            className="lightbox-figure relative h-[90vh] w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={active.full} alt={active.title} fill priority className="object-contain" sizes="100vw" />
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-xs text-white/80">
              {active.category} proof {active.id} &middot; {activeIndex + 1} of {filtered.length}
            </p>
          </div>
          <button
            type="button"
            className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/50 text-white sm:right-8"
            onClick={(event) => {
              event.stopPropagation();
              navigate(1);
            }}
            aria-label="Next proof"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </>
  );
}
