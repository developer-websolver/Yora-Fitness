import { brands } from "../../data/brands";
import { useUi } from "../../context/UiContext";
import { Modal } from "../ui/Modal";

export function BrandModal() {
  const { brandKey, closeBrand } = useUi();
  const brand = brandKey ? brands[brandKey] : null;
  return (
    <Modal open={Boolean(brand)} onClose={closeBrand}>
      {brand ? (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center p-2 border border-white/20 bg-obsidian-900">
              <img src={brand.logo} alt={brand.title} className="max-h-full max-w-full object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{brand.title}</h3>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
                style={{ color: brand.color, backgroundColor: `${brand.color}20` }}
              >
                {brand.badge}
              </span>
            </div>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">{brand.details}</p>
        </div>
      ) : null}
    </Modal>
  );
}
