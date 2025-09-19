import type { MetaFunction } from "@remix-run/node";
import Navigation from "~/components/Navigation";
import HeroSection from "~/pages/HeroSection";
import PropositoSection from "~/pages/PropositoSection";
import ClassesSection from "~/pages/ClassesSection";
import CorporateSection from "~/pages/CorporateSection";
import HolisticoSection from "~/pages/HolisticoSection";
import ContactSection from "~/pages/ContactSection";
import Footer from "~/components/Footer";
import FloatingButtons from "~/components/FloatingButtons";

export const meta: MetaFunction = () => {
  return [
    { title: "Índigo Yoga Holístico - Tu espacio de bienestar" },
    {
      name: "description",
      content:
        "Centro de yoga y bienestar integral en Rionegro. Clases de yoga, pilates, meditación, biodanza y terapias holísticas.",
    },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <PropositoSection />
      <ClassesSection />
      <CorporateSection />
      <HolisticoSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}