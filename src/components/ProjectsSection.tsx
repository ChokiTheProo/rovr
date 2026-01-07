import { Star, Heart, DollarSign, TrendingUp, Users, CheckCircle, Globe, Stethoscope, Calendar, FileCheck, Shield, Zap, Clock, Loader2, Pill, Scale } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

// Import project images
import fluxenImg from "@/assets/project-fluxen.png";
import klyexaImg from "@/assets/project-klyexa.png";
import cuidabemImg from "@/assets/project-cuidabem.png";
import tratamentoImg from "@/assets/project-tratamento.png";
import emagrioImg from "@/assets/project-emagrio.png";

const ProjectsSection = () => {
  const [loading, setLoading] = useState<string | null>(null);
  const { language } = useLanguage();

  const handleSubscribe = async (product: string) => {
    setLoading(product);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { product: product.toLowerCase() }
      });

      if (error) throw error;
      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error(language === "pt" ? 'Erro ao iniciar checkout. Tente novamente.' : 'Error starting checkout. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const projectsData = {
    pt: [
      {
        title: "Fluxen",
        category: "Gestão Financeira Completa",
        description: "Sistema completo para controle de empréstimos, contas e finanças. Dashboard intuitivo com relatórios, gestão de clientes, controle de parcelas e inadimplência. Ideal para pessoas físicas e empresas que lidam com gestão financeira diariamente.",
        status: "Disponível",
        statusColor: "bg-emerald-500",
        rating: "4.9",
        price: "R$ 45,90",
        priceLabel: "/mês",
        cta: "Acessar Agora",
        featured: true,
        icon: DollarSign,
        gradient: "from-emerald-500/20 to-teal-500/20",
        link: "https://fluxenvenda.lovable.app",
        image: fluxenImg,
        differentials: [
          "✨ Interface intuitiva e moderna",
          "🌍 Disponível em Português e Inglês",
          "📊 Relatórios detalhados em PDF",
          "🔔 Alertas automáticos de inadimplência",
        ],
        features: [
          { icon: Users, text: "Gestão de Clientes" },
          { icon: TrendingUp, text: "Dashboard Completo" },
          { icon: Calendar, text: "Controle de Vencimentos" },
          { icon: Globe, text: "Disponível em Inglês" },
        ],
        highlights: [
          "Controle total de empréstimos",
          "Relatórios detalhados em PDF",
          "Alertas de inadimplência",
          "Suporte multimoeda"
        ]
      },
      {
        title: "Klyexa",
        category: "Gestão de Saúde Integrada",
        description: "Plataforma completa para hospitais, clínicas privadas e consultórios. Gerencie pacientes, exames, agenda, profissionais e caixa de forma integrada. Sistema completo de enfermagem e prontuário eletrônico.",
        status: "Disponível",
        statusColor: "bg-teal-500",
        rating: "4.8",
        price: "R$ 35,00",
        priceLabel: "/mês",
        cta: "Acessar Agora",
        featured: true,
        icon: Stethoscope,
        gradient: "from-teal-500/20 to-cyan-500/20",
        link: "https://klyexa.lovable.app",
        image: klyexaImg,
        differentials: [
          "🏥 Ideal para hospitais e clínicas",
          "📋 Prontuário eletrônico completo",
          "💰 Controle financeiro integrado",
          "👨‍⚕️ Multi-profissionais",
        ],
        features: [
          { icon: Users, text: "Cadastro de Pacientes" },
          { icon: FileCheck, text: "Gestão de Exames" },
          { icon: Calendar, text: "Agenda Integrada" },
          { icon: DollarSign, text: "Controle de Caixa" },
        ],
        highlights: [
          "Prontuário eletrônico",
          "Controle de procedimentos",
          "Relatórios clínicos",
          "Multi-profissionais"
        ]
      },
      {
        title: "CuidaBem",
        category: "Saúde & Cuidados",
        description: "Aplicativo completo para cuidadoras de idosos. Gestão de rotinas, medicamentos, relatórios e comunicação com familiares. Solução completa para quem cuida com amor.",
        status: "Disponível",
        statusColor: "bg-primary",
        rating: "5.0",
        cta: "Acessar Agora",
        icon: Heart,
        gradient: "from-primary/20 to-accent/20",
        link: "https://cuidadem-facil.lovable.app",
        image: cuidabemImg,
        differentials: [
          "❤️ Feito para cuidadoras",
          "💊 Controle de medicamentos",
          "📱 Fácil de usar",
          "👨‍👩‍👧 Comunicação com familiares",
        ],
      },
      {
        title: "Tratamento Diário",
        category: "Saúde Digestiva",
        description: "Aplicativo especializado para tratamento de gastrite e H. pylori. Acompanhe seu tratamento, medicamentos, sintomas e evolução diária. Ideal para quem busca controle e recuperação.",
        status: "Disponível",
        statusColor: "bg-orange-500",
        rating: "4.9",
        cta: "Acessar Agora",
        icon: Pill,
        gradient: "from-orange-500/20 to-amber-500/20",
        link: "https://tramentodiario.lovable.app",
        image: tratamentoImg,
        differentials: [
          "💊 Controle de medicamentos",
          "📋 Acompanhamento de sintomas",
          "📈 Evolução do tratamento",
          "🩺 Foco em gastrite e H. pylori",
        ],
      },
      {
        title: "Emagrio",
        category: "Saúde & Emagrecimento",
        description: "Aplicativo completo para sua jornada de emagrecimento. Controle de peso, alimentação, exercícios e metas. Acompanhe sua evolução e conquiste seus objetivos de forma saudável.",
        status: "Disponível",
        statusColor: "bg-green-500",
        rating: "4.8",
        cta: "Acessar Agora",
        icon: Scale,
        gradient: "from-green-500/20 to-lime-500/20",
        link: "https://emagrio-journey-unlocked.lovable.app/",
        image: emagrioImg,
        differentials: [
          "⚖️ Controle de peso",
          "🍎 Acompanhamento alimentar",
          "🏃 Registro de exercícios",
          "🎯 Metas personalizadas",
        ],
      },
    ],
    en: [
      {
        title: "Fluxen",
        category: "Complete Financial Management",
        description: "Complete system for loan, account and finance control. Intuitive dashboard with reports, customer management, installment control and delinquency. Ideal for individuals and companies dealing with daily financial management.",
        status: "Available",
        statusColor: "bg-emerald-500",
        rating: "4.9",
        price: "$9.99",
        priceLabel: "/month",
        cta: "Access Now",
        featured: true,
        icon: DollarSign,
        gradient: "from-emerald-500/20 to-teal-500/20",
        link: "https://fluxenvenda.lovable.app",
        image: fluxenImg,
        differentials: [
          "✨ Intuitive and modern interface",
          "🌍 Available in Portuguese and English",
          "📊 Detailed PDF reports",
          "🔔 Automatic delinquency alerts",
        ],
        features: [
          { icon: Users, text: "Customer Management" },
          { icon: TrendingUp, text: "Complete Dashboard" },
          { icon: Calendar, text: "Due Date Control" },
          { icon: Globe, text: "Available in English" },
        ],
        highlights: [
          "Full loan control",
          "Detailed PDF reports",
          "Delinquency alerts",
          "Multi-currency support"
        ]
      },
      {
        title: "Klyexa",
        category: "Integrated Health Management",
        description: "Complete platform for hospitals, private clinics and offices. Manage patients, exams, schedules, professionals and cash in an integrated way. Complete nursing and electronic medical record system.",
        status: "Available",
        statusColor: "bg-teal-500",
        rating: "4.8",
        price: "$9.99",
        priceLabel: "/month",
        cta: "Access Now",
        featured: true,
        icon: Stethoscope,
        gradient: "from-teal-500/20 to-cyan-500/20",
        link: "https://klyexa.lovable.app",
        image: klyexaImg,
        differentials: [
          "🏥 Ideal for hospitals and clinics",
          "📋 Complete electronic medical record",
          "💰 Integrated financial control",
          "👨‍⚕️ Multi-professionals",
        ],
        features: [
          { icon: Users, text: "Patient Registration" },
          { icon: FileCheck, text: "Exam Management" },
          { icon: Calendar, text: "Integrated Schedule" },
          { icon: DollarSign, text: "Cash Control" },
        ],
        highlights: [
          "Electronic medical record",
          "Procedure control",
          "Clinical reports",
          "Multi-professionals"
        ]
      },
      {
        title: "CuidaBem",
        category: "Health & Care",
        description: "Complete app for elderly caregivers. Routine management, medications, reports and communication with family members. Complete solution for those who care with love.",
        status: "Available",
        statusColor: "bg-primary",
        rating: "5.0",
        cta: "Access Now",
        icon: Heart,
        gradient: "from-primary/20 to-accent/20",
        link: "https://cuidadem-facil.lovable.app",
        image: cuidabemImg,
        differentials: [
          "❤️ Made for caregivers",
          "💊 Medication control",
          "📱 Easy to use",
          "👨‍👩‍👧 Family communication",
        ],
      },
      {
        title: "Daily Treatment",
        category: "Digestive Health",
        description: "Specialized app for gastritis and H. pylori treatment. Track your treatment, medications, symptoms and daily progress. Ideal for those seeking control and recovery.",
        status: "Available",
        statusColor: "bg-orange-500",
        rating: "4.9",
        cta: "Access Now",
        icon: Pill,
        gradient: "from-orange-500/20 to-amber-500/20",
        link: "https://tramentodiario.lovable.app",
        image: tratamentoImg,
        differentials: [
          "💊 Medication control",
          "📋 Symptom tracking",
          "📈 Treatment progress",
          "🩺 Focus on gastritis and H. pylori",
        ],
      },
      {
        title: "Emagrio",
        category: "Health & Weight Loss",
        description: "Complete app for your weight loss journey. Weight, diet, exercise and goal control. Track your progress and achieve your goals in a healthy way.",
        status: "Available",
        statusColor: "bg-green-500",
        rating: "4.8",
        cta: "Access Now",
        icon: Scale,
        gradient: "from-green-500/20 to-lime-500/20",
        link: "https://emagrio-journey-unlocked.lovable.app/",
        image: emagrioImg,
        differentials: [
          "⚖️ Weight control",
          "🍎 Diet tracking",
          "🏃 Exercise log",
          "🎯 Personalized goals",
        ],
      },
    ],
    es: [
      {
        title: "Fluxen",
        category: "Gestión Financiera Completa",
        description: "Sistema completo para control de préstamos, cuentas y finanzas. Panel intuitivo con informes, gestión de clientes, control de cuotas y morosidad. Ideal para personas y empresas que manejan gestión financiera diariamente.",
        status: "Disponible",
        statusColor: "bg-emerald-500",
        rating: "4.9",
        price: "$9.99",
        priceLabel: "/mes",
        cta: "Acceder Ahora",
        featured: true,
        icon: DollarSign,
        gradient: "from-emerald-500/20 to-teal-500/20",
        link: "https://fluxenvenda.lovable.app",
        image: fluxenImg,
        differentials: [
          "✨ Interfaz intuitiva y moderna",
          "🌍 Disponible en Portugués e Inglés",
          "📊 Informes detallados en PDF",
          "🔔 Alertas automáticas de morosidad",
        ],
        features: [
          { icon: Users, text: "Gestión de Clientes" },
          { icon: TrendingUp, text: "Panel Completo" },
          { icon: Calendar, text: "Control de Vencimientos" },
          { icon: Globe, text: "Disponible en Inglés" },
        ],
        highlights: [
          "Control total de préstamos",
          "Informes detallados en PDF",
          "Alertas de morosidad",
          "Soporte multimoneda"
        ]
      },
      {
        title: "Klyexa",
        category: "Gestión de Salud Integrada",
        description: "Plataforma completa para hospitales, clínicas privadas y consultorios. Gestione pacientes, exámenes, agenda, profesionales y caja de forma integrada. Sistema completo de enfermería e historial clínico electrónico.",
        status: "Disponible",
        statusColor: "bg-teal-500",
        rating: "4.8",
        price: "$9.99",
        priceLabel: "/mes",
        cta: "Acceder Ahora",
        featured: true,
        icon: Stethoscope,
        gradient: "from-teal-500/20 to-cyan-500/20",
        link: "https://klyexa.lovable.app",
        image: klyexaImg,
        differentials: [
          "🏥 Ideal para hospitales y clínicas",
          "📋 Historial clínico electrónico completo",
          "💰 Control financiero integrado",
          "👨‍⚕️ Multi-profesionales",
        ],
        features: [
          { icon: Users, text: "Registro de Pacientes" },
          { icon: FileCheck, text: "Gestión de Exámenes" },
          { icon: Calendar, text: "Agenda Integrada" },
          { icon: DollarSign, text: "Control de Caja" },
        ],
        highlights: [
          "Historial clínico electrónico",
          "Control de procedimientos",
          "Informes clínicos",
          "Multi-profesionales"
        ]
      },
      {
        title: "CuidaBem",
        category: "Salud & Cuidados",
        description: "Aplicación completa para cuidadoras de ancianos. Gestión de rutinas, medicamentos, informes y comunicación con familiares. Solución completa para quienes cuidan con amor.",
        status: "Disponible",
        statusColor: "bg-primary",
        rating: "5.0",
        cta: "Acceder Ahora",
        icon: Heart,
        gradient: "from-primary/20 to-accent/20",
        link: "https://cuidadem-facil.lovable.app",
        image: cuidabemImg,
        differentials: [
          "❤️ Hecho para cuidadoras",
          "💊 Control de medicamentos",
          "📱 Fácil de usar",
          "👨‍👩‍👧 Comunicación con familiares",
        ],
      },
      {
        title: "Tratamiento Diario",
        category: "Salud Digestiva",
        description: "Aplicación especializada para tratamiento de gastritis y H. pylori. Siga su tratamiento, medicamentos, síntomas y evolución diaria. Ideal para quienes buscan control y recuperación.",
        status: "Disponible",
        statusColor: "bg-orange-500",
        rating: "4.9",
        cta: "Acceder Ahora",
        icon: Pill,
        gradient: "from-orange-500/20 to-amber-500/20",
        link: "https://tramentodiario.lovable.app",
        image: tratamentoImg,
        differentials: [
          "💊 Control de medicamentos",
          "📋 Seguimiento de síntomas",
          "📈 Evolución del tratamiento",
          "🩺 Enfoque en gastritis y H. pylori",
        ],
      },
      {
        title: "Emagrio",
        category: "Salud & Adelgazamiento",
        description: "Aplicación completa para tu jornada de adelgazamiento. Control de peso, alimentación, ejercicios y metas. Sigue tu evolución y conquista tus objetivos de forma saludable.",
        status: "Disponible",
        statusColor: "bg-green-500",
        rating: "4.8",
        cta: "Acceder Ahora",
        icon: Scale,
        gradient: "from-green-500/20 to-lime-500/20",
        link: "https://emagrio-journey-unlocked.lovable.app/",
        image: emagrioImg,
        differentials: [
          "⚖️ Control de peso",
          "🍎 Seguimiento alimentario",
          "🏃 Registro de ejercicios",
          "🎯 Metas personalizadas",
        ],
      },
    ],
  };

  const projects = projectsData[language] || projectsData.pt;

  return (
    <section id="projetos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {language === "pt" ? "Portfólio" : language === "es" ? "Portafolio" : "Portfolio"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {language === "pt" ? "Nossos " : language === "es" ? "Nuestros " : "Our "}
            <span className="text-gradient">{language === "pt" ? "Projetos" : language === "es" ? "Proyectos" : "Projects"}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === "pt" 
              ? "Soluções SaaS prontas para uso. Tecnologia de ponta para transformar a gestão do seu negócio."
              : language === "es"
              ? "Soluciones SaaS listas para usar. Tecnología de punta para transformar la gestión de tu negocio."
              : "Ready-to-use SaaS solutions. Cutting-edge technology to transform your business management."}
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Header with image */}
              <div className={`aspect-[16/10] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                <div className="relative p-6 h-full flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor} text-white`}>
                      {project.status}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm text-foreground font-medium">{project.rating}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-background/90 border border-border/50 flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                        <span className="text-muted-foreground text-xs">{project.category}</span>
                      </div>
                    </div>
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {project.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/60 backdrop-blur-sm">
                          <feature.icon className="w-4 h-4 text-primary" />
                          <span className="text-xs text-foreground">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Differentials */}
                <div className="grid grid-cols-1 gap-2 mb-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="text-sm font-semibold text-primary mb-2">
                    🚀 {language === "pt" ? "Diferenciais" : language === "es" ? "Diferenciales" : "Differentials"}
                  </h4>
                  {project.differentials?.map((diff, idx) => (
                    <div key={idx} className="text-xs text-muted-foreground">{diff}</div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.highlights?.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <span className="text-3xl font-bold text-gradient">{project.price}</span>
                    <span className="text-muted-foreground text-sm">{project.priceLabel}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => project.link ? window.open(project.link, '_blank') : handleSubscribe(project.title)}
                      disabled={loading === project.title}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl px-6 glow-primary"
                    >
                      {loading === project.title ? (
                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" />{language === "pt" ? "Processando..." : language === "es" ? "Procesando..." : "Processing..."}</>
                      ) : project.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Project Image */}
                <div className={`md:w-1/3 aspect-video md:aspect-auto bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor} text-primary-foreground`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-background/90 border border-border/50 flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-accent text-xs font-medium tracking-wider uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm text-muted-foreground">{project.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Differentials */}
                  <div className="grid grid-cols-2 gap-2 mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <h4 className="col-span-2 text-sm font-semibold text-primary mb-2">
                      🚀 {language === "pt" ? "Diferenciais" : language === "es" ? "Diferenciales" : "Differentials"}
                    </h4>
                    {project.differentials?.map((diff, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground">{diff}</div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl px-6 glow-primary">
                        {project.cta}
                      </Button>
                    </a>
                    <Button 
                      onClick={scrollToContact}
                      variant="outline"
                      className="border-accent/50 text-accent hover:bg-accent/10"
                    >
                      {language === "pt" ? "Fale Conosco" : language === "es" ? "Contáctenos" : "Contact Us"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-8 rounded-2xl border border-dashed border-border/50 bg-card/30 p-8 flex items-center justify-center">
          <p className="text-muted-foreground text-center">
            {language === "pt" 
              ? "Mais projetos em breve. Estamos trabalhando em novas soluções incríveis!"
              : language === "es"
              ? "Más proyectos próximamente. ¡Estamos trabajando en nuevas soluciones increíbles!"
              : "More projects coming soon. We're working on amazing new solutions!"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
