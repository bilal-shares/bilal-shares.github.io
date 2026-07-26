"use client";

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
              className="flex w-full items-center justify-between gap-6 py-5 text-left sm:py-7"
              onClick={() => setOpen(active ? -1 : index)}
              aria-expanded={active}
            >
              <span className="text-base font-semibold tracking-[-0.025em] sm:text-xl">{item.question}</span>
              <span className="soft-tile grid h-9 w-9 shrink-0 place-items-center rounded-full">
                {active ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <div className="faq-panel" data-open={active}>
              <div>
                <p className="max-w-3xl pb-7 text-sm leading-7 text-muted sm:text-base">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
