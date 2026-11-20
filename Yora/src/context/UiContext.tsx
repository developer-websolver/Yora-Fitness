import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { BrandKey } from "../data/brands";

type UiContextValue = {
  leadTitle: string | null;
  videoOpen: boolean;
  brandKey: BrandKey | null;
  toast: string | null;
  openLead: (title: string) => void;
  closeLead: () => void;
  openVideo: () => void;
  closeVideo: () => void;
  openBrand: (key: BrandKey) => void;
  closeBrand: () => void;
  showToast: (message: string) => void;
};

const UiContext = createContext<UiContextValue | null>(null);

export function UiProvider({ children }: { children: ReactNode }) {
  const [leadTitle, setLeadTitle] = useState<string | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [brandKey, setBrandKey] = useState<BrandKey | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 3500);
  }, []);

  const value = useMemo<UiContextValue>(
    () => ({
      leadTitle,
      videoOpen,
      brandKey,
      toast,
      openLead: (title) => setLeadTitle(title),
      closeLead: () => setLeadTitle(null),
      openVideo: () => setVideoOpen(true),
      closeVideo: () => setVideoOpen(false),
      openBrand: (key) => setBrandKey(key),
      closeBrand: () => setBrandKey(null),
      showToast,
    }),
    [leadTitle, videoOpen, brandKey, toast, showToast],
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error("useUi must be used within UiProvider");
  return ctx;
}
