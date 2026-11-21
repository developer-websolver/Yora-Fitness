import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { UiProvider } from "./context/UiContext";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";

import { ContactPage } from "./pages/ContactPage";
import { FranchisePage } from "./pages/FranchisePage";
import Qualeatee from "./components/brands/qualeatee";
import Cardio from "./components/brands/cardio";
import KinesisCare from "./components/brands/kinesis";
import ScrollToTop from "./components/scrollbehaviour";

export default function App() {
  return (
    <UiProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
            
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/brands/Qualeatee" element={<Qualeatee/>} />
            <Route path="/brands/Cardio" element={<Cardio/>} />
            <Route path="/brands/Kinesis" element={<KinesisCare/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UiProvider>
  );
}
