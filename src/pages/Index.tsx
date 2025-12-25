import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechSection from "@/components/TechSection";
import MicroSaasSection from "@/components/MicroSaasSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkWithUsSection from "@/components/WorkWithUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechSection />
        <MicroSaasSection />
        <TestimonialsSection />
        <WorkWithUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
