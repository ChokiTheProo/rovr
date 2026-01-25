import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, Handshake, Mail, Send, Shield, Users, Briefcase, Target, 
  ArrowLeft, CheckCircle2, Globe, Zap, TrendingUp, Award, Star, Quote,
  Code, Palette, Megaphone, HeadphonesIcon, BarChart3, Rocket,
  Monitor, HardDrive, Wrench, Settings, Wifi, Database, Cpu, Server
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicosInternos = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    cargo: "",
    tipoServico: "",
    mensagem: ""
  });

  const content = {
    pt: {
      backHome: "Voltar ao início",
      tag: "Serviços Internos & TI",
      title1: "Soluções em",
      title2: "Tecnologia",
      description: "Oferecemos serviços completos de informática, manutenção, formatação e suporte técnico para empresas e usuários. Também buscamos parcerias estratégicas para expandir nossos serviços.",
      
      // IT Services Section
      itServicesTitle: "Serviços de Informática",
      itServicesSubtitle: "Suporte técnico completo para seu negócio",
      itServices: [
        { icon: Monitor, title: "Formatação de Computadores", description: "Reinstalação completa do sistema operacional com backup de dados" },
        { icon: Wrench, title: "Manutenção Preventiva", description: "Limpeza, atualização e otimização de hardware e software" },
        { icon: HardDrive, title: "Recuperação de Dados", description: "Recuperação de arquivos perdidos de HDs, SSDs e pendrives" },
        { icon: Cpu, title: "Upgrade de Hardware", description: "Melhoria de memória RAM, SSD e outros componentes" },
        { icon: Wifi, title: "Configuração de Redes", description: "Instalação e configuração de redes WiFi e cabeadas" },
        { icon: Server, title: "Servidores & Cloud", description: "Configuração de servidores locais e migração para nuvem" },
        { icon: Database, title: "Backup Automatizado", description: "Configuração de sistemas de backup automático" },
        { icon: Settings, title: "Suporte Remoto", description: "Assistência técnica remota para problemas urgentes" }
      ],
      
      benefits: [
        { icon: Handshake, title: "Parcerias White-Label", description: "Desenvolva projetos sob sua marca com nossa expertise técnica" },
        { icon: Users, title: "Programas de Afiliados", description: "Ganhe comissões indicando clientes para nossos serviços" },
        { icon: Briefcase, title: "Consultorias B2B", description: "Serviços personalizados para demandas corporativas" },
        { icon: Target, title: "Projetos Especiais", description: "Colaborações em projetos de grande escala e impacto" },
        { icon: Globe, title: "Parcerias Internacionais", description: "Expanda globalmente com nosso suporte técnico multilíngue" },
        { icon: Code, title: "Co-desenvolvimento", description: "Desenvolva produtos em conjunto compartilhando expertise" },
        { icon: Palette, title: "Agências de Design", description: "Parcerias para agências que precisam de desenvolvimento" },
        { icon: Megaphone, title: "Agências de Marketing", description: "Soluções técnicas para campanhas digitais" }
      ],
      partnershipsTitle: "Parcerias Estratégicas",
      servicesTitle: "Serviços Especializados",
      services: [
        { icon: Zap, title: "Desenvolvimento Ágil", description: "Sprints rápidos para entregas urgentes" },
        { icon: HeadphonesIcon, title: "Suporte Técnico Dedicado", description: "Equipe exclusiva para parceiros" },
        { icon: BarChart3, title: "Analytics & Relatórios", description: "Dashboards personalizados para seu negócio" },
        { icon: Rocket, title: "Aceleração de Startups", description: "Mentoria técnica para startups early-stage" }
      ],
      casesTitle: "Casos de Sucesso",
      casesSubtitle: "Parcerias que geraram resultados",
      cases: [
        { 
          company: "Agência Digital XYZ",
          type: "Parceria White-Label",
          result: "+150% em capacidade de entrega",
          quote: "A parceria com a RoVR nos permitiu triplicar nossa capacidade de desenvolvimento sem aumentar custos fixos.",
          author: "Diretor de Operações"
        },
        { 
          company: "Startup FinTech",
          type: "Co-desenvolvimento",
          result: "MVP em 6 semanas",
          quote: "Conseguimos lançar nosso produto no mercado em tempo recorde graças à expertise técnica da equipe.",
          author: "CEO & Fundador"
        },
        { 
          company: "Consultoria Empresarial",
          type: "Programa de Afiliados",
          result: "R$ 50k+ em comissões",
          quote: "O programa de afiliados se tornou uma fonte consistente de receita adicional para nossa consultoria.",
          author: "Sócio-Diretor"
        }
      ],
      statsTitle: "Números que Importam",
      stats: [
        { value: "30+", label: "Parceiros Ativos" },
        { value: "98%", label: "Taxa de Satisfação" },
        { value: "200+", label: "Projetos Conjuntos" },
        { value: "5+", label: "Anos de Experiência" }
      ],
      form: {
        title: "Formulário de Contato",
        subtitle: "Preencha os dados abaixo para iniciarmos uma conversa",
        name: "Nome Completo",
        namePlaceholder: "Seu nome completo",
        email: "E-mail",
        emailPlaceholder: "seu@email.com",
        company: "Empresa/Organização (opcional)",
        companyPlaceholder: "Nome da empresa",
        role: "Cargo (opcional)",
        rolePlaceholder: "Seu cargo na empresa",
        serviceType: "Tipo de Serviço",
        serviceTypePlaceholder: "Selecione o tipo de serviço",
        serviceOptions: [
          "Formatação de Computador",
          "Manutenção Preventiva", 
          "Recuperação de Dados",
          "Upgrade de Hardware",
          "Configuração de Rede",
          "Suporte Remoto",
          "Parceria White-Label", 
          "Programa de Afiliados", 
          "Consultoria B2B", 
          "Projeto Especial",
          "Outro"
        ],
        message: "Mensagem",
        messagePlaceholder: "Descreva sua necessidade ou proposta...",
        submit: "Enviar Mensagem",
        sending: "Enviando...",
        success: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        error: "Erro ao enviar mensagem. Tente novamente."
      },
      contact: {
        title: "Contato Direto",
        description: "Para assuntos urgentes ou confidenciais, entre em contato diretamente:",
        email: "rovrbr@gmail.com"
      },
      trust: {
        title: "Por que escolher a RoVR?",
        items: [
          "Atendimento rápido e personalizado",
          "Técnicos certificados e experientes",
          "Preços justos e transparentes",
          "Garantia em todos os serviços",
          "Suporte pós-atendimento incluso",
          "Confidencialidade garantida (NDA)"
        ]
      }
    },
    en: {
      backHome: "Back to home",
      tag: "Internal Services & IT",
      title1: "Technology",
      title2: "Solutions",
      description: "We offer complete computer services, maintenance, formatting, and technical support for businesses and users. We also seek strategic partnerships to expand our services.",
      
      itServicesTitle: "Computer Services",
      itServicesSubtitle: "Complete technical support for your business",
      itServices: [
        { icon: Monitor, title: "Computer Formatting", description: "Complete OS reinstallation with data backup" },
        { icon: Wrench, title: "Preventive Maintenance", description: "Cleaning, updating and optimizing hardware and software" },
        { icon: HardDrive, title: "Data Recovery", description: "Recovery of lost files from HDDs, SSDs and flash drives" },
        { icon: Cpu, title: "Hardware Upgrade", description: "RAM, SSD and other component upgrades" },
        { icon: Wifi, title: "Network Configuration", description: "WiFi and wired network installation and setup" },
        { icon: Server, title: "Servers & Cloud", description: "Local server setup and cloud migration" },
        { icon: Database, title: "Automated Backup", description: "Automatic backup system configuration" },
        { icon: Settings, title: "Remote Support", description: "Remote technical assistance for urgent issues" }
      ],
      
      benefits: [
        { icon: Handshake, title: "White-Label Partnerships", description: "Develop projects under your brand with our technical expertise" },
        { icon: Users, title: "Affiliate Programs", description: "Earn commissions by referring clients to our services" },
        { icon: Briefcase, title: "B2B Consulting", description: "Customized services for corporate demands" },
        { icon: Target, title: "Special Projects", description: "Collaborations on large-scale, high-impact projects" },
        { icon: Globe, title: "International Partnerships", description: "Expand globally with our multilingual technical support" },
        { icon: Code, title: "Co-development", description: "Build products together sharing expertise" },
        { icon: Palette, title: "Design Agencies", description: "Partnerships for agencies needing development" },
        { icon: Megaphone, title: "Marketing Agencies", description: "Technical solutions for digital campaigns" }
      ],
      partnershipsTitle: "Strategic Partnerships",
      servicesTitle: "Specialized Services",
      services: [
        { icon: Zap, title: "Agile Development", description: "Fast sprints for urgent deliveries" },
        { icon: HeadphonesIcon, title: "Dedicated Technical Support", description: "Exclusive team for partners" },
        { icon: BarChart3, title: "Analytics & Reports", description: "Custom dashboards for your business" },
        { icon: Rocket, title: "Startup Acceleration", description: "Technical mentorship for early-stage startups" }
      ],
      casesTitle: "Success Stories",
      casesSubtitle: "Partnerships that delivered results",
      cases: [
        { 
          company: "Digital Agency XYZ",
          type: "White-Label Partnership",
          result: "+150% delivery capacity",
          quote: "The partnership with RoVR allowed us to triple our development capacity without increasing fixed costs.",
          author: "Operations Director"
        },
        { 
          company: "FinTech Startup",
          type: "Co-development",
          result: "MVP in 6 weeks",
          quote: "We were able to launch our product to market in record time thanks to the team's technical expertise.",
          author: "CEO & Founder"
        },
        { 
          company: "Business Consulting",
          type: "Affiliate Program",
          result: "$10k+ in commissions",
          quote: "The affiliate program has become a consistent source of additional revenue for our consulting firm.",
          author: "Managing Partner"
        }
      ],
      statsTitle: "Numbers That Matter",
      stats: [
        { value: "30+", label: "Active Partners" },
        { value: "98%", label: "Satisfaction Rate" },
        { value: "200+", label: "Joint Projects" },
        { value: "5+", label: "Years of Experience" }
      ],
      form: {
        title: "Contact Form",
        subtitle: "Fill in the details below to start a conversation",
        name: "Full Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        company: "Company/Organization (optional)",
        companyPlaceholder: "Company name",
        role: "Position (optional)",
        rolePlaceholder: "Your position at the company",
        serviceType: "Service Type",
        serviceTypePlaceholder: "Select service type",
        serviceOptions: [
          "Computer Formatting",
          "Preventive Maintenance",
          "Data Recovery",
          "Hardware Upgrade",
          "Network Configuration",
          "Remote Support",
          "White-Label Partnership",
          "Affiliate Program",
          "B2B Consulting",
          "Special Project",
          "Other"
        ],
        message: "Message",
        messagePlaceholder: "Describe your need or proposal...",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! We'll be in touch soon.",
        error: "Error sending message. Please try again."
      },
      contact: {
        title: "Direct Contact",
        description: "For urgent or confidential matters, contact us directly:",
        email: "rovrbr@gmail.com"
      },
      trust: {
        title: "Why choose RoVR?",
        items: [
          "Fast and personalized service",
          "Certified and experienced technicians",
          "Fair and transparent pricing",
          "Warranty on all services",
          "Post-service support included",
          "Guaranteed confidentiality (NDA)"
        ]
      }
    },
    es: {
      backHome: "Volver al inicio",
      tag: "Servicios Internos y TI",
      title1: "Soluciones en",
      title2: "Tecnología",
      description: "Ofrecemos servicios completos de informática, mantenimiento, formateo y soporte técnico para empresas y usuarios. También buscamos alianzas estratégicas para expandir nuestros servicios.",
      
      itServicesTitle: "Servicios de Informática",
      itServicesSubtitle: "Soporte técnico completo para su negocio",
      itServices: [
        { icon: Monitor, title: "Formateo de Computadoras", description: "Reinstalación completa del sistema operativo con respaldo de datos" },
        { icon: Wrench, title: "Mantenimiento Preventivo", description: "Limpieza, actualización y optimización de hardware y software" },
        { icon: HardDrive, title: "Recuperación de Datos", description: "Recuperación de archivos perdidos de HDDs, SSDs y memorias USB" },
        { icon: Cpu, title: "Actualización de Hardware", description: "Mejora de memoria RAM, SSD y otros componentes" },
        { icon: Wifi, title: "Configuración de Redes", description: "Instalación y configuración de redes WiFi y cableadas" },
        { icon: Server, title: "Servidores y Cloud", description: "Configuración de servidores locales y migración a la nube" },
        { icon: Database, title: "Backup Automatizado", description: "Configuración de sistemas de respaldo automático" },
        { icon: Settings, title: "Soporte Remoto", description: "Asistencia técnica remota para problemas urgentes" }
      ],
      
      benefits: [
        { icon: Handshake, title: "Alianzas White-Label", description: "Desarrolle proyectos bajo su marca con nuestra experiencia técnica" },
        { icon: Users, title: "Programas de Afiliados", description: "Gane comisiones refiriendo clientes a nuestros servicios" },
        { icon: Briefcase, title: "Consultoría B2B", description: "Servicios personalizados para demandas corporativas" },
        { icon: Target, title: "Proyectos Especiales", description: "Colaboraciones en proyectos de gran escala e impacto" },
        { icon: Globe, title: "Alianzas Internacionales", description: "Expándase globalmente con nuestro soporte técnico multilingüe" },
        { icon: Code, title: "Co-desarrollo", description: "Desarrolle productos juntos compartiendo expertise" },
        { icon: Palette, title: "Agencias de Diseño", description: "Alianzas para agencias que necesitan desarrollo" },
        { icon: Megaphone, title: "Agencias de Marketing", description: "Soluciones técnicas para campañas digitales" }
      ],
      partnershipsTitle: "Alianzas Estratégicas",
      servicesTitle: "Servicios Especializados",
      services: [
        { icon: Zap, title: "Desarrollo Ágil", description: "Sprints rápidos para entregas urgentes" },
        { icon: HeadphonesIcon, title: "Soporte Técnico Dedicado", description: "Equipo exclusivo para socios" },
        { icon: BarChart3, title: "Analytics y Reportes", description: "Dashboards personalizados para su negocio" },
        { icon: Rocket, title: "Aceleración de Startups", description: "Mentoría técnica para startups early-stage" }
      ],
      casesTitle: "Casos de Éxito",
      casesSubtitle: "Alianzas que generaron resultados",
      cases: [
        { 
          company: "Agencia Digital XYZ",
          type: "Alianza White-Label",
          result: "+150% en capacidad de entrega",
          quote: "La alianza con RoVR nos permitió triplicar nuestra capacidad de desarrollo sin aumentar costos fijos.",
          author: "Director de Operaciones"
        },
        { 
          company: "Startup FinTech",
          type: "Co-desarrollo",
          result: "MVP en 6 semanas",
          quote: "Pudimos lanzar nuestro producto al mercado en tiempo récord gracias a la experiencia técnica del equipo.",
          author: "CEO y Fundador"
        },
        { 
          company: "Consultoría Empresarial",
          type: "Programa de Afiliados",
          result: "$10k+ en comisiones",
          quote: "El programa de afiliados se convirtió en una fuente consistente de ingresos adicionales para nuestra consultoría.",
          author: "Socio Director"
        }
      ],
      statsTitle: "Números que Importan",
      stats: [
        { value: "30+", label: "Socios Activos" },
        { value: "98%", label: "Tasa de Satisfacción" },
        { value: "200+", label: "Proyectos Conjuntos" },
        { value: "5+", label: "Años de Experiencia" }
      ],
      form: {
        title: "Formulario de Contacto",
        subtitle: "Complete los datos a continuación para iniciar una conversación",
        name: "Nombre Completo",
        namePlaceholder: "Su nombre completo",
        email: "Correo Electrónico",
        emailPlaceholder: "su@email.com",
        company: "Empresa/Organización (opcional)",
        companyPlaceholder: "Nombre de la empresa",
        role: "Cargo (opcional)",
        rolePlaceholder: "Su cargo en la empresa",
        serviceType: "Tipo de Servicio",
        serviceTypePlaceholder: "Seleccione el tipo de servicio",
        serviceOptions: [
          "Formateo de Computadora",
          "Mantenimiento Preventivo",
          "Recuperación de Datos",
          "Actualización de Hardware",
          "Configuración de Red",
          "Soporte Remoto",
          "Alianza White-Label",
          "Programa de Afiliados",
          "Consultoría B2B",
          "Proyecto Especial",
          "Otro"
        ],
        message: "Mensaje",
        messagePlaceholder: "Describa su necesidad o propuesta...",
        submit: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
        error: "Error al enviar mensaje. Intente nuevamente."
      },
      contact: {
        title: "Contacto Directo",
        description: "Para asuntos urgentes o confidenciales, contáctenos directamente:",
        email: "rovrbr@gmail.com"
      },
      trust: {
        title: "¿Por qué elegir RoVR?",
        items: [
          "Atención rápida y personalizada",
          "Técnicos certificados y experimentados",
          "Precios justos y transparentes",
          "Garantía en todos los servicios",
          "Soporte post-servicio incluido",
          "Confidencialidad garantizada (NDA)"
        ]
      }
    }
  };

  const currentContent = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error: dbError } = await supabase
        .from("contact_leads")
        .insert({
          nome: formData.nome,
          email: formData.email,
          empresa: formData.empresa || null,
          telefone: formData.cargo || null,
          mensagem: `[SERVIÇOS INTERNOS - ${formData.tipoServico}]\n\n${formData.cargo ? `Cargo: ${formData.cargo}\n\n` : ''}${formData.mensagem}`,
          status: "new"
        });

      if (dbError) throw dbError;

      try {
        await supabase.functions.invoke("send-contact-email", {
          body: {
            nome: formData.nome,
            email: formData.email,
            empresa: formData.empresa,
            mensagem: `[SERVIÇOS INTERNOS - ${formData.tipoServico}]\n\n${formData.cargo ? `Cargo: ${formData.cargo}\n\n` : ''}${formData.mensagem}`,
            isInternal: true
          }
        });
      } catch (emailError) {
        console.log("Email notification failed, but lead was saved");
      }

      toast({
        title: "✅",
        description: currentContent.form.success,
      });

      setFormData({
        nome: "",
        email: "",
        empresa: "",
        cargo: "",
        tipoServico: "",
        mensagem: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "❌",
        description: currentContent.form.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentContent.backHome}
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
              {currentContent.tag}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
              {currentContent.title1}{" "}
              <span className="text-gradient">{currentContent.title2}</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              {currentContent.description}
            </p>
          </motion.div>

          {/* IT Services Section - NEW */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12 sm:mb-16"
          >
            <div className="text-center mb-6 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />
                {currentContent.itServicesTitle}
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">{currentContent.itServicesSubtitle}</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {currentContent.itServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-1 sm:mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-12 sm:mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {currentContent.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnerships Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
              {currentContent.partnershipsTitle}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {currentContent.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/20 flex items-center justify-center mb-3 sm:mb-4">
                    <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-1 sm:mb-2">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Specialized Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
              {currentContent.servicesTitle}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {currentContent.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-1 sm:mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Cases */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 sm:mb-16"
          >
            <div className="text-center mb-6 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                {currentContent.casesTitle}
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">{currentContent.casesSubtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {currentContent.cases.map((caseItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3 sm:mb-4 mt-1">
                    <div className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-[10px] sm:text-xs font-medium">
                      {caseItem.type}
                    </div>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{caseItem.company}</h3>
                  
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    <span className="text-primary font-semibold text-sm sm:text-base">{caseItem.result}</span>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground italic mb-3 sm:mb-4 line-clamp-3">"{caseItem.quote}"</p>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-warning fill-warning" />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">— {caseItem.author}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 order-2 lg:order-1"
            >
              <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="mb-5 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">{currentContent.form.title}</h2>
                  <p className="text-sm sm:text-base text-muted-foreground">{currentContent.form.subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                        {currentContent.form.name}
                      </label>
                      <Input
                        type="text"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder={currentContent.form.namePlaceholder}
                        required
                        className="bg-background/50 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                        {currentContent.form.email}
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={currentContent.form.emailPlaceholder}
                        required
                        className="bg-background/50 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                        {currentContent.form.company}
                      </label>
                      <Input
                        type="text"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder={currentContent.form.companyPlaceholder}
                        className="bg-background/50 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                        {currentContent.form.role}
                      </label>
                      <Input
                        type="text"
                        value={formData.cargo}
                        onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                        placeholder={currentContent.form.rolePlaceholder}
                        className="bg-background/50 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                      {currentContent.form.serviceType}
                    </label>
                    <select
                      value={formData.tipoServico}
                      onChange={(e) => setFormData({ ...formData, tipoServico: e.target.value })}
                      required
                      className="w-full px-3 sm:px-4 py-2 rounded-lg bg-background/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm sm:text-base"
                    >
                      <option value="">{currentContent.form.serviceTypePlaceholder}</option>
                      {currentContent.form.serviceOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                      {currentContent.form.message}
                    </label>
                    <Textarea
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder={currentContent.form.messagePlaceholder}
                      required
                      rows={4}
                      className="bg-background/50 text-sm sm:text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                        />
                        {currentContent.form.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {currentContent.form.submit}
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            >
              {/* Direct Contact */}
              <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-accent/10 border border-accent/30">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{currentContent.contact.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{currentContent.contact.description}</p>
                <a
                  href={`mailto:${currentContent.contact.email}`}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium text-xs sm:text-sm"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  {currentContent.contact.email}
                </a>
              </div>

              {/* Trust Section */}
              <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{currentContent.trust.title}</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {currentContent.trust.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicosInternos;
