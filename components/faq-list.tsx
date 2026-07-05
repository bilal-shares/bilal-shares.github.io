"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/site";

export function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
      {faqs.map((item, index) => {
        const active = index === open;
        return (
          <div key={item.question} data-reveal>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-8"
              onClick={() => setOpen(active ? -1 : index)}
              aria-expanded={active}
            >
              <span className="text-lg font-semibold tracking-[-0.025em] sm:text-2xl">{item.question}</span>
              <span className="soft-tile grid h-10 w-10 shrink-0 place-items-center rounded-full">
                {active ? <Minus size={17} /> : <Plus size={17} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-8 text-base leading-8 text-muted">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
