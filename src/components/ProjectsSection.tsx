import { Star, Heart, DollarSign, TrendingUp, Users, CheckCircle, Globe, Stethoscope, Calendar, FileCheck, MessageCircle, Shield, Zap, Clock } from "lucide-react";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  const handleSubscribe = (product: string) => {
    const whatsappNumber = "5554991710543";
    const message = encodeURIComponent(`Olá! Tenho interesse em assinar o ${product}. Gostaria de mais informações.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const projects = [
    {
      title: "Fluxen",
      category: "Gestão Financeira Completa",
      description: "Sistema completo para controle de empréstimos, contas e finanças. Dashboard intuitivo com relatórios, gestão de clientes, controle de parcelas e inadimplência. Ideal para pessoas físicas e empresas que lidam com gestão financeira diariamente.",
      status: "Disponível",
      statusColor: "bg-emerald-500",
      rating: "4.9",
      price: "R$ 45,90",
      priceLabel: "/mês",
      cta: "Assinar Agora",
      featured: true,
      icon: DollarSign,
      gradient: "from-emerald-500/20 to-teal-500/20",
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
      cta: "Assinar Agora",
      featured: true,
      icon: Stethoscope,
      gradient: "from-teal-500/20 to-cyan-500/20",
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
      differentials: [
        "❤️ Feito para cuidadoras",
        "💊 Controle de medicamentos",
        "📱 Fácil de usar",
        "👨‍👩‍👧 Comunicação com familiares",
      ],
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

                {/* Differentials */}
                <div className="grid grid-cols-1 gap-2 mb-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="text-sm font-semibold text-primary mb-2">🚀 Diferenciais</h4>
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
                      onClick={() => handleSubscribe(project.title)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl px-6 glow-primary"
                    >
                      {project.cta}
                    </Button>
                  </div>
                </div>

                {/* Contact Now Button */}
                <Button 
                  onClick={() => handleSubscribe(project.title)}
                  variant="outline"
                  className="w-full mt-4 border-accent/50 text-accent hover:bg-accent/10"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contate Agora
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CuidaBem Project */}
        <div className="grid grid-cols-1 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Project Image */}
                <div className={`md:w-1/3 aspect-video md:aspect-auto bg-gradient-to-br ${project.gradient} relative p-6 flex items-center justify-center`}>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor} text-primary-foreground`}>
                      {project.status}
                    </span>
                  </div>
                  <project.icon className="w-20 h-20 text-primary/60" />
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
                    <h4 className="col-span-2 text-sm font-semibold text-primary mb-2">🚀 Diferenciais</h4>
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
                      onClick={() => handleSubscribe(project.title)}
                      variant="outline"
                      className="border-accent/50 text-accent hover:bg-accent/10"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contate Agora
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
            Mais projetos em breve. Estamos trabalhando em novas soluções incríveis!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
