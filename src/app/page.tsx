import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { Offer } from "@/components/sections/Offer";
import { Needs } from "@/components/sections/Needs";
import { ContactSection } from "@/components/sections/ContactSection";
import { Expertise } from "@/components/sections/Expertise";
import { Partners } from "@/components/sections/Partners";
import { ParentCompany } from "@/components/sections/ParentCompany";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <Offer />
      <Needs />
      <ContactSection />
      <Expertise />
      <Partners />
      <ParentCompany />
    </>
  );
}
