import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.technology": "Tecnologia",
    "nav.microsaas": "Micro SaaS",
    "nav.contact": "Fale Conosco",
    "logo.tagline": "Criamos SaaS e MicroSaaS",
    
    // Hero
    "hero.tag": "Desenvolvimento SaaS & Micro SaaS",
    "hero.title1": "Transformamos",
    "hero.title2": "ideias",
    "hero.title3": "em",
    "hero.title4": "produtos digitais",
    "hero.description": "Somos especialistas em desenvolver SaaS e Micro SaaS que geram receita recorrente. Do conceito ao lançamento, criamos soluções escaláveis e prontas para o mercado.",
    "hero.cta": "Iniciar Projeto",
    "hero.portfolio": "Ver Portfólio",
    
    // About
    "about.tag": "Quem Somos",
    "about.title1": "Especialistas em",
    "about.title2": "SaaS & Micro SaaS",
    "about.description": "Somos uma equipe apaixonada por criar produtos digitais que resolvem problemas reais. Com anos de experiência em desenvolvimento de software, ajudamos empreendedores e empresas a transformar suas ideias em negócios lucrativos.",
    "about.stat1.value": "50+",
    "about.stat1.label": "Projetos Entregues",
    "about.stat2.value": "98%",
    "about.stat2.label": "Clientes Satisfeitos",
    "about.stat3.value": "5+",
    "about.stat3.label": "Anos de Experiência",
    
    // Projects
    "projects.tag": "Nossos Projetos",
    "projects.title1": "Portfólio de",
    "projects.title2": "Sucesso",
    "projects.description": "Conheça alguns dos projetos que desenvolvemos e que estão gerando resultados reais para nossos clientes.",
    
    // Tech
    "tech.tag": "Stack Tecnológico",
    "tech.title1": "Tecnologias",
    "tech.title2": "de Ponta",
    "tech.description": "Utilizamos as tecnologias mais modernas e eficientes do mercado para construir produtos escaláveis, seguros e de alta performance.",
    
    // Micro SaaS
    "microsaas.tag": "Micro SaaS",
    "microsaas.title1": "Soluções",
    "microsaas.title2": "Enxutas e Lucrativas",
    "microsaas.description": "Micro SaaS são produtos digitais focados em resolver um problema específico, com baixo custo operacional e alto potencial de receita recorrente.",
    
    // Pricing
    "pricing.tag": "Investimento",
    "pricing.title1": "Comece seu",
    "pricing.title2": "Projeto",
    "pricing.description": "Investimento inicial para transformar sua ideia em um produto digital funcional e pronto para o mercado.",
    "pricing.plan": "Starter",
    "pricing.from": "A partir de",
    "pricing.feature1": "MVP completo e funcional",
    "pricing.feature2": "Design responsivo moderno",
    "pricing.feature3": "Integração com pagamentos",
    "pricing.feature4": "Painel administrativo",
    "pricing.feature5": "Deploy e configuração",
    "pricing.feature6": "Suporte pós-lançamento",
    "pricing.cta": "Começar Agora",
    
    // Testimonials
    "testimonials.tag": "Depoimentos",
    "testimonials.title1": "O que nossos",
    "testimonials.title2": "clientes dizem",
    
    // Work With Us
    "workwithus.tag": "Trabalhe Conosco",
    "workwithus.title1": "Pronto para",
    "workwithus.title2": "começar?",
    "workwithus.description": "Vamos transformar sua ideia em um produto digital de sucesso. Entre em contato e comece sua jornada hoje.",
    "workwithus.cta": "Agendar Reunião",
    
    // Contact Section
    "contactsection.tag": "Vamos criar algo incrível juntos",
    "contactsection.title1": "Pronto para transformar",
    "contactsection.title2": "sua ideia em realidade?",
    "contactsection.description": "Seja você um empreendedor com uma visão inovadora ou uma empresa buscando expandir no mercado digital, a Revyra está pronta para tornar seu projeto realidade.",
    "contactsection.cta": "Fale Conosco",
    "contactsection.benefit1": "Resposta em 24h",
    "contactsection.benefit2": "Consultoria gratuita",
    "contactsection.benefit3": "NDA disponível",
    
    // Contact Page
    "contact.title": "Fale Conosco",
    "contact.description": "Tem um projeto em mente? Queremos ouvir sua ideia e ajudar a transformá-la em realidade.",
    "contact.name": "Nome",
    "contact.email": "E-mail",
    "contact.phone": "Telefone",
    "contact.company": "Empresa",
    "contact.message": "Mensagem",
    "contact.submit": "Enviar Mensagem",
    "contact.sending": "Enviando...",
    "contact.success": "Mensagem enviada com sucesso!",
    "contact.error": "Erro ao enviar mensagem. Tente novamente.",
    "contact.back": "Voltar ao início",
    "contact.header.tag": "Vamos criar algo incrível juntos",
    "contact.header.title1": "Pronto para transformar",
    "contact.header.title2": "sua ideia em realidade?",
    "contact.header.description": "Seja você um empreendedor com uma visão inovadora ou uma empresa buscando expandir no mercado digital, a RoVR está pronta para tornar seu projeto realidade.",
    "contact.form.title": "Envie sua mensagem",
    "contact.form.namePlaceholder": "Seu nome",
    "contact.form.emailPlaceholder": "seu@email.com",
    "contact.form.phonePlaceholder": "(11) 99999-9999",
    "contact.form.companyPlaceholder": "Nome da empresa",
    "contact.form.messagePlaceholder": "Descreva seu projeto ou ideia...",
    "contact.why.title": "Por que escolher a RoVR?",
    "contact.why.benefit1": "Resposta em 24h",
    "contact.why.benefit1Desc": "Retornamos rapidamente todas as solicitações",
    "contact.why.benefit2": "Consultoria gratuita",
    "contact.why.benefit2Desc": "Análise inicial sem compromisso",
    "contact.why.benefit3": "NDA disponível",
    "contact.why.benefit3Desc": "Protegemos suas ideias com confidencialidade",
    "contact.info.title": "Informações de contato",
    "contact.info.location": "Localização",
    "contact.info.locationValue": "Brasil",
    
    // Footer
    "footer.rights": "Todos os direitos reservados.",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Uso",
    "footer.contact": "Contato",
    "footer.faq": "FAQ",
  },
  en: {
    // Header
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.technology": "Technology",
    "nav.microsaas": "Micro SaaS",
    "nav.contact": "Contact Us",
    "logo.tagline": "We build SaaS & MicroSaaS",
    
    // Hero
    "hero.tag": "SaaS & Micro SaaS Development",
    "hero.title1": "We transform",
    "hero.title2": "ideas",
    "hero.title3": "into",
    "hero.title4": "digital products",
    "hero.description": "We specialize in developing SaaS and Micro SaaS that generate recurring revenue. From concept to launch, we create scalable, market-ready solutions.",
    "hero.cta": "Start Project",
    "hero.portfolio": "View Portfolio",
    
    // About
    "about.tag": "Who We Are",
    "about.title1": "Experts in",
    "about.title2": "SaaS & Micro SaaS",
    "about.description": "We are a team passionate about creating digital products that solve real problems. With years of software development experience, we help entrepreneurs and businesses turn their ideas into profitable ventures.",
    "about.stat1.value": "50+",
    "about.stat1.label": "Projects Delivered",
    "about.stat2.value": "98%",
    "about.stat2.label": "Satisfied Clients",
    "about.stat3.value": "5+",
    "about.stat3.label": "Years of Experience",
    
    // Projects
    "projects.tag": "Our Projects",
    "projects.title1": "Success",
    "projects.title2": "Portfolio",
    "projects.description": "Discover some of the projects we've developed that are generating real results for our clients.",
    
    // Tech
    "tech.tag": "Tech Stack",
    "tech.title1": "Cutting-Edge",
    "tech.title2": "Technologies",
    "tech.description": "We use the most modern and efficient technologies on the market to build scalable, secure, and high-performance products.",
    
    // Micro SaaS
    "microsaas.tag": "Micro SaaS",
    "microsaas.title1": "Lean and",
    "microsaas.title2": "Profitable Solutions",
    "microsaas.description": "Micro SaaS are digital products focused on solving a specific problem, with low operational costs and high recurring revenue potential.",
    
    // Pricing
    "pricing.tag": "Investment",
    "pricing.title1": "Start Your",
    "pricing.title2": "Project",
    "pricing.description": "Initial investment to transform your idea into a functional digital product ready for the market.",
    "pricing.plan": "Starter",
    "pricing.from": "Starting at",
    "pricing.feature1": "Complete functional MVP",
    "pricing.feature2": "Modern responsive design",
    "pricing.feature3": "Payment integration",
    "pricing.feature4": "Admin dashboard",
    "pricing.feature5": "Deploy and configuration",
    "pricing.feature6": "Post-launch support",
    "pricing.cta": "Get Started",
    
    // Testimonials
    "testimonials.tag": "Testimonials",
    "testimonials.title1": "What our",
    "testimonials.title2": "clients say",
    
    // Work With Us
    "workwithus.tag": "Work With Us",
    "workwithus.title1": "Ready to",
    "workwithus.title2": "get started?",
    "workwithus.description": "Let's transform your idea into a successful digital product. Get in touch and start your journey today.",
    "workwithus.cta": "Schedule Meeting",
    
    // Contact Section
    "contactsection.tag": "Let's create something amazing together",
    "contactsection.title1": "Ready to transform",
    "contactsection.title2": "your idea into reality?",
    "contactsection.description": "Whether you're an entrepreneur with an innovative vision or a company looking to expand in the digital market, Revyra is ready to make your project a reality.",
    "contactsection.cta": "Contact Us",
    "contactsection.benefit1": "24h Response",
    "contactsection.benefit2": "Free consultation",
    "contactsection.benefit3": "NDA available",
    
    // Contact Page
    "contact.title": "Contact Us",
    "contact.description": "Have a project in mind? We want to hear your idea and help turn it into reality.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.company": "Company",
    "contact.message": "Message",
    "contact.submit": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully!",
    "contact.error": "Error sending message. Please try again.",
    "contact.back": "Back to home",
    "contact.header.tag": "Let's create something amazing together",
    "contact.header.title1": "Ready to transform",
    "contact.header.title2": "your idea into reality?",
    "contact.header.description": "Whether you're an entrepreneur with an innovative vision or a company looking to expand in the digital market, RoVR is ready to make your project a reality.",
    "contact.form.title": "Send your message",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.phonePlaceholder": "(11) 99999-9999",
    "contact.form.companyPlaceholder": "Company name",
    "contact.form.messagePlaceholder": "Describe your project or idea...",
    "contact.why.title": "Why choose RoVR?",
    "contact.why.benefit1": "24h Response",
    "contact.why.benefit1Desc": "We quickly return all requests",
    "contact.why.benefit2": "Free consultation",
    "contact.why.benefit2Desc": "Initial analysis with no obligation",
    "contact.why.benefit3": "NDA available",
    "contact.why.benefit3Desc": "We protect your ideas with confidentiality",
    "contact.info.title": "Contact information",
    "contact.info.location": "Location",
    "contact.info.locationValue": "Brazil",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.contact": "Contact",
    "footer.faq": "FAQ",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "pt";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
