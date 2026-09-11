import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Offer } from "@/components/sections/Offer";
import { Needs } from "@/components/sections/Needs";
import { ContactSection } from "@/components/sections/ContactSection";
import { Solutions } from "@/components/sections/Solutions";
import { Expertise } from "@/components/sections/Expertise";
import { Partners } from "@/components/sections/Partners";
import { ParentCompany } from "@/components/sections/ParentCompany";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Offer />
      <Needs />
      <ContactSection />
      <Solutions />
      <Expertise />
      <Partners />
      <ParentCompany />
    </>
  );
}
