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

  // Anti-bot: honeypot field (should remain empty)
  const [honeypot, setHoneypot] = useState("");
  
  // Anti-bot: simple math captcha
  const [captcha, setCaptcha] = useState(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    return { a, b, answer: a + b };
  });
  const [captchaInput, setCaptchaInput] = useState("");

  const regenerateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ a, b, answer: a + b });
    setCaptchaInput("");
  };

  const content = {
    pt: {
      careers: "Carreiras",
      workWith: "Trabalhe ",
      us: "Conosco",
      subtitle: "Junte-se à nossa equipe e ajude a construir o futuro dos produtos digitais no Brasil.",
      areasTitle: "Áreas de Atuação",
      formTitle: "Envie sua Candidatura",
      formSubtitle: "Preencha o formulário abaixo e entraremos em contato.",
      fullName: "Nome completo",
      phone: "Telefone",
      areaOfInterest: "Área de interesse",
      selectArea: "Selecione uma área",
      development: "Desenvolvimento",
      business: "Negócios",
      other: "Outro",
      tellUs: "Conte-nos sobre você",
      placeholder: "Sua experiência, habilidades e por que quer trabalhar conosco...",
      verification: `Verificação: Quanto é`,
      answer: "Resposta",
      submit: "Enviar Candidatura",
      captchaError: "Captcha incorreto",
      captchaErrorDesc: "Por favor, resolva a conta matemática corretamente.",
      successTitle: "Candidatura enviada!",
      successDesc: "Obrigado pelo interesse. Entraremos em contato em breve.",
      benefits: [
        { icon: Rocket, title: "Projetos Inovadores", description: "Trabalhe em SaaS e MicroSaaS de ponta" },
        { icon: Users, title: "Equipe Colaborativa", description: "Ambiente de trabalho flexível e remoto" },
        { icon: Heart, title: "Crescimento", description: "Oportunidade de desenvolvimento contínuo" },
      ],
      areas: [
        { icon: Code, title: "Desenvolvimento", description: "Frontend, Backend, Full Stack" },
        { icon: Palette, title: "Design", description: "UI/UX, Product Design" },
        { icon: Briefcase, title: "Negócios", description: "Marketing, Vendas, Gestão" },
      ],
    },
    en: {
      careers: "Careers",
      workWith: "Work ",
      us: "With Us",
      subtitle: "Join our team and help build the future of digital products in Brazil.",
      areasTitle: "Areas of Work",
      formTitle: "Submit Your Application",
      formSubtitle: "Fill out the form below and we'll get in touch.",
      fullName: "Full name",
      phone: "Phone",
      areaOfInterest: "Area of interest",
      selectArea: "Select an area",
      development: "Development",
      business: "Business",
      other: "Other",
      tellUs: "Tell us about yourself",
      placeholder: "Your experience, skills and why you want to work with us...",
      verification: "Verification: What is",
      answer: "Answer",
      submit: "Submit Application",
      captchaError: "Incorrect captcha",
      captchaErrorDesc: "Please solve the math problem correctly.",
      successTitle: "Application sent!",
      successDesc: "Thank you for your interest. We'll be in touch soon.",
      benefits: [
        { icon: Rocket, title: "Innovative Projects", description: "Work on cutting-edge SaaS and MicroSaaS" },
        { icon: Users, title: "Collaborative Team", description: "Flexible and remote work environment" },
        { icon: Heart, title: "Growth", description: "Continuous development opportunity" },
      ],
      areas: [
        { icon: Code, title: "Development", description: "Frontend, Backend, Full Stack" },
        { icon: Palette, title: "Design", description: "UI/UX, Product Design" },
        { icon: Briefcase, title: "Business", description: "Marketing, Sales, Management" },
      ],
    },
    es: {
      careers: "Carreras",
      workWith: "Trabaja ",
      us: "Con Nosotros",
      subtitle: "Únete a nuestro equipo y ayuda a construir el futuro de los productos digitales en Brasil.",
      areasTitle: "Áreas de Trabajo",
      formTitle: "Envía tu Candidatura",
      formSubtitle: "Completa el formulario a continuación y nos pondremos en contacto.",
      fullName: "Nombre completo",
      phone: "Teléfono",
      areaOfInterest: "Área de interés",
      selectArea: "Selecciona un área",
      development: "Desarrollo",
      business: "Negocios",
      other: "Otro",
      tellUs: "Cuéntanos sobre ti",
      placeholder: "Tu experiencia, habilidades y por qué quieres trabajar con nosotros...",
      verification: "Verificación: ¿Cuánto es",
      answer: "Respuesta",
      submit: "Enviar Candidatura",
      captchaError: "Captcha incorrecto",
      captchaErrorDesc: "Por favor, resuelve el problema matemático correctamente.",
      successTitle: "¡Candidatura enviada!",
      successDesc: "Gracias por tu interés. Nos pondremos en contacto pronto.",
      benefits: [
        { icon: Rocket, title: "Proyectos Innovadores", description: "Trabaja en SaaS y MicroSaaS de vanguardia" },
        { icon: Users, title: "Equipo Colaborativo", description: "Ambiente de trabajo flexible y remoto" },
        { icon: Heart, title: "Crecimiento", description: "Oportunidad de desarrollo continuo" },
      ],
      areas: [
        { icon: Code, title: "Desarrollo", description: "Frontend, Backend, Full Stack" },
        { icon: Palette, title: "Diseño", description: "UI/UX, Product Design" },
        { icon: Briefcase, title: "Negocios", description: "Marketing, Ventas, Gestión" },
      ],
    },
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-bot: check honeypot
    if (honeypot) {
      console.log("Bot detected via honeypot");
      return;
    }

    // Anti-bot: validate captcha
    if (parseInt(captchaInput) !== captcha.answer) {
      toast({
        title: content[language].captchaError,
        description: content[language].captchaErrorDesc,
        variant: "destructive",
      });
      regenerateCaptcha();
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: content[language].successTitle,
      description: content[language].successDesc,
    });

    setFormData({ name: "", email: "", phone: "", linkedin: "", area: "", message: "" });
    setCaptchaInput("");
    regenerateCaptcha();
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
              {t.careers}
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {t.workWith}
              <span className="text-gradient">{t.us}</span>
            </motion.h1>
            <motion.p 
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t.subtitle}
            </motion.p>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t.benefits.map((benefit, index) => (
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
              {t.areasTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.areas.map((area, index) => (
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
                {t.formTitle}
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                {t.formSubtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.fullName}
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
                      {t.phone}
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
                    {t.areaOfInterest}
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    required
                    className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">{t.selectArea}</option>
                    <option value="development">{t.development}</option>
                    <option value="design">Design</option>
                    <option value="business">{t.business}</option>
                    <option value="other">{t.other}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.tellUs}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                    className="bg-background/50"
                    placeholder={t.placeholder}
                  />
                </div>

                {/* Honeypot field - hidden from users, bots will fill it */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Math CAPTCHA */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.verification} {captcha.a} + {captcha.b}?
                  </label>
                  <Input
                    type="number"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    required
                    className="bg-background/50 max-w-32"
                    placeholder={t.answer}
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
                      {t.submit}
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
