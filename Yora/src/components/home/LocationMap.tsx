import { ArrowsOutSimple, Buildings, MapPin } from "@phosphor-icons/react";
import L from "leaflet";
import { useEffect, useMemo, useRef, useState } from "react";
import { brands, type BrandKey } from "../../data/brands";
import { yoraLocations } from "../../data/locations";
import { SectionHeader } from "../ui/SectionHeader";
import "leaflet/dist/leaflet.css";

const SOUTH_INDIA_CENTER: [number, number] = [14.3, 78.6];
const DEFAULT_ZOOM = 5.8;

const filters: { key: "all" | BrandKey; label: string; color?: string }[] = [
  { key: "all", label: "All Outlets" },
  { key: "ff", label: "Fitness Factory", color: "#FF1E27" },
  { key: "vivafit", label: "VivaFit Womens", color: "#84CC16" },
  { key: "cardio", label: "Cardio Pulse Lab", color: "#06B6D4" },
  { key: "sakti", label: "Sakti Female", color: "#F43F5E" },
  { key: "qualetee", label: "Qualetee Physio", color: "#F97316" },
  { key: "kinesis", label: "Kinesis Movement", color: "#A855F7" },
];

export function LocationMap() {
  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);
  const [brand, setBrand] = useState<"all" | BrandKey>("all");
  const [selected, setSelected] = useState<string | null>(null);
  const [currentZoom, setCurrentZoom] = useState(DEFAULT_ZOOM);

  const visible = useMemo(
    () => yoraLocations.filter((loc) => brand === "all" || loc.brand === brand),
    [brand],
  );

  useEffect(() => {
    if (!mapEl.current || mapRef.current) return;

    const map = L.map(mapEl.current, {
      center: SOUTH_INDIA_CENTER,
      zoom: DEFAULT_ZOOM,
      minZoom: 4,
      maxZoom: 18,
      zoomSnap: 0.1,
      scrollWheelZoom: false,
      attributionControl: false,
    });

    // Google Maps Roadmap Tiles (Exact Google Maps styling with English & local labels, roads & landmarks)
    L.tileLayer(
      "https://mt{s}.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}",
      {
        subdomains: ["0", "1", "2", "3"],
        maxZoom: 20,
        attribution: "© Google Maps",
      }
    ).addTo(map);

    layerRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;

    map.on("zoomend", () => {
      setCurrentZoom(map.getZoom());
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  const resetView = () => {
    setBrand("all");
    setSelected(null);
    if (mapRef.current) {
      mapRef.current.flyTo(SOUTH_INDIA_CENTER, DEFAULT_ZOOM, {
        duration: 1.2,
      });
    }
  };

  useEffect(() => {
    const layer = layerRef.current;
    const map = mapRef.current;
    if (!layer || !map) return;

    layer.clearLayers();

    const isZoomedIn = currentZoom >= 8 || brand !== "all" || selected !== null;

    if (!isZoomedIn) {
      // OVERVIEW VIEW: Prominent Regional Hub Badges matching reference screenshot
      // Bengaluru Hub (Red with inner white circle)
      const blrMarker = L.marker([12.9716, 77.5946], {
        icon: L.divIcon({
          className: "yora-clean-pin",
          html: `
            <div class="relative flex items-center justify-center cursor-pointer group">
              <div class="w-8 h-8 rounded-full bg-[#FF1E27] border-[3px] border-white shadow-[0_0_18px_rgba(255,30,39,0.7)] flex items-center justify-center transition-transform group-hover:scale-115">
                <div class="w-2.5 h-2.5 rounded-full bg-white shadow-sm"></div>
              </div>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        }),
        zIndexOffset: 500,
      });
      blrMarker.bindTooltip("<b>Bengaluru Hub</b><br>Fitness Factory Flagship Centers");
      blrMarker.on("click", () => {
        map.flyTo([12.91, 77.62], 11, { duration: 1 });
      });
      blrMarker.addTo(layer);

      // Chennai Hub (Lime Green with white border)
      const chnMarker = L.marker([13.0827, 80.2707], {
        icon: L.divIcon({
          className: "yora-clean-pin",
          html: `
            <div class="relative flex items-center justify-center cursor-pointer group">
              <div class="w-8 h-8 rounded-full bg-[#84CC16] border-[3px] border-white shadow-[0_0_18px_rgba(132,204,22,0.7)] flex items-center justify-center transition-transform group-hover:scale-115"></div>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        }),
        zIndexOffset: 500,
      });
      chnMarker.bindTooltip("<b>Chennai Hub</b><br>15+ Multi-Brand Facilities");
      chnMarker.on("click", () => {
        map.flyTo([13.04, 80.20], 11, { duration: 1 });
      });
      chnMarker.addTo(layer);
    } else {
      // DETAIL VIEW: Google Maps Style Teardrop Facility Pins
      visible.forEach((loc) => {
        const color = brands[loc.brand]?.color || "#FF1E27";
        const isSelected = loc.id === selected;

        const pinWidth = isSelected ? 32 : 26;
        const pinHeight = isSelected ? 42 : 34;

        const html = `
          <div class="relative flex items-center cursor-pointer group select-none">
            <div class="relative transition-transform duration-200 group-hover:scale-115 ${
              isSelected ? "scale-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]" : "drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
            }">
              <svg width="${pinWidth}" height="${pinHeight}" viewBox="0 0 24 36" fill="none">
                <path d="M12 0C5.372 0 0 5.372 0 12c0 8.8 10.4 22.8 11.3 23.9.4.5 1 .5 1.4 0C13.6 34.8 24 20.8 24 12c0-6.628-5.372-12-12-12z" fill="${color}" stroke="#ffffff" stroke-width="1.6" />
                <circle cx="12" cy="12" r="4.2" fill="#ffffff" />
              </svg>
            </div>
            ${
              isSelected
                ? `
              <div class="absolute left-full ml-2.5 top-1/2 -translate-y-1/2 bg-white/95 text-neutral-900 border border-neutral-300 font-sans px-2.5 py-1 rounded-md shadow-xl whitespace-nowrap z-50 pointer-events-none">
                <div class="text-[11px] font-bold leading-tight text-neutral-950">${loc.name}</div>
                <div class="text-[9px] text-neutral-600 font-medium">${loc.badge} • ${loc.city}</div>
              </div>
            `
                : ""
            }
          </div>
        `;

        const marker = L.marker([loc.lat, loc.lng], {
          icon: L.divIcon({
            className: "yora-clean-pin",
            html,
            iconSize: [pinWidth, pinHeight],
            iconAnchor: [pinWidth / 2, pinHeight],
          }),
          zIndexOffset: isSelected ? 1000 : 100,
        });

        marker.on("click", () => {
          setSelected(loc.id);
          map.flyTo([loc.lat, loc.lng], 13.5, { duration: 0.8 });
        });

        marker.bindTooltip(
          `<b>${loc.name}</b><br><span style="color:#555;font-size:11px;">${loc.address}</span>`,
          { direction: "top", offset: [0, -pinHeight] }
        );
        marker.addTo(layer);
      });
    }

    map.invalidateSize();
  }, [brand, selected, currentZoom, visible]);

  const handleSelectLocation = (loc: (typeof yoraLocations)[0]) => {
    setSelected(loc.id);
    if (mapRef.current) {
      mapRef.current.flyTo([loc.lat, loc.lng], 13, { duration: 1 });
    }
  };

  return (
    <section className="yora-pattern-section w-full px-4 sm:px-8 lg:px-12 py-20 border-b border-white/[0.06] bg-obsidian-950/60">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <SectionHeader eyebrow="NATIONAL NETWORK & OUTLETS" title="Explore Brand Locations" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 max-w-5xl mx-auto">
        {filters.map((item) => {
          const active = brand === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => {
                setBrand(item.key);
                setSelected(null);
                if (item.key !== "all") {
                  const brandLocs = yoraLocations.filter((l) => l.brand === item.key);
                  if (brandLocs.length > 0 && mapRef.current) {
                    if (brandLocs.length === 1) {
                      mapRef.current.flyTo([brandLocs[0].lat, brandLocs[0].lng], 11, { duration: 1 });
                    } else {
                      // Fit bounds across all locations of this brand (both Bengaluru and Chennai)
                      const bounds = L.latLngBounds(brandLocs.map((l) => [l.lat, l.lng]));
                      mapRef.current.fitBounds(bounds, { padding: [60, 60], maxZoom: 10 });
                    }
                  }
                } else {
                  resetView();
                }
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                active
                  ? "bg-crimson text-white shadow-[0_0_15px_rgba(255,30,39,0.4)]"
                  : "bg-obsidian-900 border border-white/10 text-neutral-300 hover:text-white"
              }`}
            >
              {item.color ? <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} /> : null}
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-7xl mx-auto">
        <div className="lg:col-span-8 yora-map-card rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl relative min-h-[480px] lg:min-h-[560px] flex flex-col justify-between bg-obsidian-950 p-4 sm:p-5">
          <div className="w-full flex items-center justify-between z-20 mb-3">
            <div className="px-3 py-1.5 rounded-xl bg-obsidian-900/95 border border-white/10 text-[10px] font-bold text-neutral-200 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
              INDIA NATIONAL NETWORK MAP
            </div>
            <button
              type="button"
              onClick={resetView}
              className="px-3.5 py-1.5 rounded-xl bg-obsidian-900 hover:bg-crimson text-[11px] font-bold text-white border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <ArrowsOutSimple weight="bold" />
              Reset India View
            </button>
          </div>
          <div className="relative w-full flex-grow min-h-[340px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-white/10">
            <div ref={mapEl} className="w-full h-full min-h-[340px] sm:min-h-[420px] z-10" />
          </div>
        </div>

        <div className="lg:col-span-4 yora-location-sidebar glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl flex flex-col h-auto lg:h-[560px]">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <Buildings weight="bold" className="text-crimson text-lg" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Locations Directory</h4>
            </div>
          </div>
          <div className="space-y-3 overflow-y-auto pr-1 flex-grow max-h-[420px]">
            {visible.map((loc) => {
              const color = brands[loc.brand]?.color || "#FF1E27";
              const isSelected = loc.id === selected;
              return (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => handleSelectLocation(loc)}
                  className={`w-full text-left p-3.5 rounded-2xl cursor-pointer transition-all flex items-center justify-between group ${
                    isSelected ? "bg-obsidian-800 border-2 border-white/40 shadow-lg" : "bg-obsidian-900/80 border border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="space-y-1 overflow-hidden pr-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 truncate">
                        {loc.city} • {loc.badge}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-white truncate">{loc.name}</h5>
                    <p className="text-[10px] text-neutral-400 truncate">{loc.address}</p>
                  </div>
                  <MapPin weight="bold" className="shrink-0 text-neutral-400" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
