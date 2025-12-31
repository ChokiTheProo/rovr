import { Users, Rocket, Heart, Send, Briefcase, Code, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const TrabalheConosco = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    area: "",
    message: ""
  });

  const benefits = language === "pt" ? [
    { icon: Rocket, title: "Projetos Inovadores", description: "Trabalhe em SaaS e MicroSaaS de ponta" },
    { icon: Users, title: "Equipe Colaborativa", description: "Ambiente de trabalho flexível e remoto" },
    { icon: Heart, title: "Crescimento", description: "Oportunidade de desenvolvimento contínuo" },
  ] : [
    { icon: Rocket, title: "Innovative Projects", description: "Work on cutting-edge SaaS and MicroSaaS" },
    { icon: Users, title: "Collaborative Team", description: "Flexible and remote work environment" },
    { icon: Heart, title: "Growth", description: "Continuous development opportunity" },
  ];

  const areas = language === "pt" ? [
    { icon: Code, title: "Desenvolvimento", description: "Frontend, Backend, Full Stack" },
    { icon: Palette, title: "Design", description: "UI/UX, Product Design" },
    { icon: Briefcase, title: "Negócios", description: "Marketing, Vendas, Gestão" },
  ] : [
    { icon: Code, title: "Development", description: "Frontend, Backend, Full Stack" },
    { icon: Palette, title: "Design", description: "UI/UX, Product Design" },
    { icon: Briefcase, title: "Business", description: "Marketing, Sales, Management" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: language === "pt" ? "Candidatura enviada!" : "Application sent!",
      description: language === "pt" 
        ? "Obrigado pelo interesse. Entraremos em contato em breve."
        : "Thank you for your interest. We'll be in touch soon.",
    });

    setFormData({ name: "", email: "", phone: "", linkedin: "", area: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="text-accent text-sm font-medium tracking-wider uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {language === "pt" ? "Carreiras" : "Careers"}
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {language === "pt" ? "Trabalhe " : "Work "}
              <span className="text-gradient">{language === "pt" ? "Conosco" : "With Us"}</span>
            </motion.h1>
            <motion.p 
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {language === "pt" 
                ? "Junte-se à nossa equipe e ajude a construir o futuro dos produtos digitais no Brasil."
                : "Join our team and help build the future of digital products in Brazil."}
            </motion.p>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm text-center hover:border-accent/50 transition-all duration-300"
              >
                <motion.div 
                  className="w-14 h-14 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="w-7 h-7 text-accent" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Areas */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-10">
              {language === "pt" ? "Áreas de Atuação" : "Areas of Work"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {areas.map((area, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  <area.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="p-8 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-center mb-2">
                {language === "pt" ? "Envie sua Candidatura" : "Submit Your Application"}
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                {language === "pt" 
                  ? "Preencha o formulário abaixo e entraremos em contato."
                  : "Fill out the form below and we'll get in touch."}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {language === "pt" ? "Nome completo" : "Full name"}
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {language === "pt" ? "Telefone" : "Phone"}
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      LinkedIn
                    </label>
                    <Input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      placeholder="https://linkedin.com/in/..."
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {language === "pt" ? "Área de interesse" : "Area of interest"}
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    required
                    className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">{language === "pt" ? "Selecione uma área" : "Select an area"}</option>
                    <option value="development">{language === "pt" ? "Desenvolvimento" : "Development"}</option>
                    <option value="design">Design</option>
                    <option value="business">{language === "pt" ? "Negócios" : "Business"}</option>
                    <option value="other">{language === "pt" ? "Outro" : "Other"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {language === "pt" ? "Conte-nos sobre você" : "Tell us about yourself"}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                    className="bg-background/50"
                    placeholder={language === "pt" 
                      ? "Sua experiência, habilidades e por que quer trabalhar conosco..."
                      : "Your experience, skills and why you want to work with us..."}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {language === "pt" ? "Enviar Candidatura" : "Submit Application"}
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrabalheConosco;
