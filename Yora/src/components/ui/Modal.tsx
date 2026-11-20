import { X } from "@phosphor-icons/react";
import type { ReactNode } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
};

export function Modal({ open, onClose, children, wide }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div
        className={`glass-card w-full p-6 sm:p-8 rounded-3xl border border-white/20 relative ${wide ? "max-w-3xl" : "max-w-md"}`}
      >
        <button type="button" onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl" aria-label="Close">
          <X weight="bold" />
        </button>
        {children}
      </div>
    </div>
  );
}
