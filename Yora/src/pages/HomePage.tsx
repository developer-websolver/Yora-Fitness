import { ContactPreview } from "../components/home/ContactPreview";
import { Hero } from "../components/home/Hero";
import { LocationMap } from "../components/home/LocationMap";
import { StatsBar } from "../components/home/StatsBar";
import { WhyYoraCarousel } from "../components/home/WhyYoraCarousel";
import { FranchiseModels } from "../components/franchise/FranchiseModels";

export function HomePage() {
  return (
    <>
      <Hero />
      <WhyYoraCarousel />
      <StatsBar />
      <FranchiseModels variant="home" />
      <ContactPreview />
      <LocationMap />
    </>
  );
}
