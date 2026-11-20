import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="glass-card rounded-2xl border border-white/10 overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              className="w-full p-6 text-left flex items-center justify-between gap-4"
            >
              <span className="font-bold text-white text-sm sm:text-base">{item.question}</span>
              <CaretDown
                weight="bold"
                className={`text-crimson text-lg shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen ? (
              <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
