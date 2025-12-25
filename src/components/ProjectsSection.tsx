import { Star, Heart, DollarSign, TrendingUp, Users, CheckCircle, Globe, Stethoscope, Calendar, FileCheck } from "lucide-react";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Fluxen",
      category: "Gestão Financeira",
      description: "Sistema completo para controle de empréstimos, contas e finanças. Dashboard intuitivo com relatórios, gestão de clientes, controle de parcelas e inadimplência. Ideal para pessoas físicas e empresas.",
      status: "Disponível",
      statusColor: "bg-emerald-500",
      rating: "4.9",
      price: "R$ 45,90",
      priceLabel: "/mês",
      cta: "Assinar Agora",
      featured: true,
      icon: DollarSign,
      gradient: "from-emerald-500/20 to-teal-500/20",
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
      category: "Gestão de Saúde",
      description: "Plataforma para hospitais, clínicas e consultórios. Gerencie pacientes, exames, agenda, profissionais e caixa de forma integrada. Sistema completo de enfermagem.",
      status: "Disponível",
      statusColor: "bg-teal-500",
      rating: "4.8",
      price: "R$ 35,00",
      priceLabel: "/mês",
      cta: "Assinar Agora",
      featured: true,
      icon: Stethoscope,
      gradient: "from-teal-500/20 to-cyan-500/20",
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
      description: "Aplicativo completo para cuidadoras de idosos. Gestão de rotinas, medicamentos, relatórios e comunicação com familiares.",
      status: "Em Desenvolvimento",
      statusColor: "bg-primary",
      rating: "5.0",
      cta: "Em breve",
      icon: Heart,
      gradient: "from-primary/20 to-accent/20",
    },
  ];

  return (
    <section id="projetos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Nossos <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções SaaS prontas para uso. Tecnologia de ponta para transformar 
            a gestão do seu negócio.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Header with gradient */}
              <div className={`aspect-[16/10] bg-gradient-to-br ${project.gradient} relative p-6`}>
                <div className="flex items-start justify-between">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor} text-white`}>
                      {project.status}
                    </span>
                    <div className="mt-4">
                      <div className="w-16 h-16 rounded-2xl bg-background/90 border border-border/50 flex items-center justify-center mb-4">
                        <project.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>
                      <span className="text-muted-foreground text-sm">{project.category}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm text-foreground font-medium">{project.rating}</span>
                    </div>
                    <Heart className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors ml-auto" />
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2 mt-6">
                  {project.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/60 backdrop-blur-sm">
                      <feature.icon className="w-4 h-4 text-primary" />
                      <span className="text-xs text-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

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
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl px-6 glow-primary">
                    {project.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor} text-primary-foreground`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Heart className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-primary/40" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-accent text-xs font-medium tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                    {project.cta}
                  </button>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-muted-foreground">{project.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 rounded-2xl border border-dashed border-border/50 bg-card/30 p-8 flex items-center justify-center">
            <p className="text-muted-foreground text-center">
              Mais projetos em breve. Estamos trabalhando em novas soluções incríveis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
