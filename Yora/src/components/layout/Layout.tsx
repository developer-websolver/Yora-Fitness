import { Outlet } from "react-router-dom";
import { useUi } from "../../context/UiContext";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LeadModal } from "./LeadModal";
import { VideoModal } from "./VideoModal";
import { BrandModal } from "./BrandModal";
import { Toast } from "../ui/Toast";

export function Layout() {
  const { toast } = useUi();
  return (
    <div className="min-h-screen flex flex-col justify-between bg-obsidian-950 text-white">
      <Header />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
      <LeadModal />
      <VideoModal />
      <BrandModal />
      <Toast message={toast} />
    </div>
  );
}
