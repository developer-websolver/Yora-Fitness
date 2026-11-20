import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, ReactNode } from "react";

const fieldClass =
  "w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-xs focus:outline-none focus:border-crimson yora-contact-input";

export function FieldLabel({ children }: { children: ReactNode }) {
  return <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">{children}</label>;
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={fieldClass} {...props} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`${fieldClass} resize-none`} {...props} />;
}

export function SelectInput(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={fieldClass} {...props} />;
}
