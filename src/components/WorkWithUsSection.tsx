import { Users, Rocket, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WorkWithUsSection = () => {
  const { language } = useLanguage();

  const benefits = language === "pt" ? [
    { icon: Rocket, title: "Projetos Inovadores", description: "Trabalhe em SaaS e MicroSaaS de ponta" },
    { icon: Users, title: "Equipe Colaborativa", description: "Ambiente de trabalho flexível e remoto" },
    { icon: Heart, title: "Crescimento", description: "Oportunidade de desenvolvimento contínuo" },
  ] : [
    { icon: Rocket, title: "Innovative Projects", description: "Work on cutting-edge SaaS and MicroSaaS" },
    { icon: Users, title: "Collaborative Team", description: "Flexible and remote work environment" },
    { icon: Heart, title: "Growth", description: "Continuous development opportunity" },
  ];

  return (
    <section id="trabalhe-conosco" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            {language === "pt" ? "Carreiras" : "Careers"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {language === "pt" ? "Trabalhe " : "Work "}
            <span className="text-gradient">{language === "pt" ? "Conosco" : "With Us"}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === "pt" 
              ? "Junte-se à nossa equipe e ajude a construir o futuro dos produtos digitais no Brasil."
              : "Join our team and help build the future of digital products in Brazil."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm text-center hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
