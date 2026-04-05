import { Star, Globe, TrendingUp, CheckCircle, Shield, FileText, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import blogsImg from "@/assets/project-blogs.png";

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
        title: "Blogs RoVR",
        category: "Conteúdo & Marketing",
        description: "Criamos blogs profissionais e otimizados para SEO. Conteúdo estratégico para atrair clientes, aumentar sua autoridade no mercado e gerar leads qualificados para seu negócio.",
        status: "Disponível",
        statusColor: "bg-primary",
        rating: "5.0",
        cta: "Ver Exemplo",
        featured: true,
        icon: FileText,
        gradient: "from-primary/20 to-accent/20",
        link: "https://sitesrovr.lovable.app",
        image: blogsImg,
        differentials: [
          "✍️ Conteúdo estratégico",
          "🔍 SEO otimizado",
          "📈 Aumento de tráfego",
          "🎯 Leads qualificados",
        ],
        features: [
          { icon: Globe, text: "Design Responsivo" },
          { icon: TrendingUp, text: "SEO Avançado" },
          { icon: FileText, text: "Blog com CMS" },
          { icon: Shield, text: "HTTPS & Segurança" },
        ],
        highlights: [
          "Design moderno e personalizado",
          "Painel administrativo",
          "Google Analytics integrado",
          "Performance otimizada"
        ]
      },
    ],
    en: [
      {
        title: "RoVR Blogs",
        category: "Content & Marketing",
        description: "We create professional and SEO-optimized blogs. Strategic content to attract customers, increase your market authority and generate qualified leads for your business.",
        status: "Available",
        statusColor: "bg-primary",
        rating: "5.0",
        cta: "View Example",
        featured: true,
        icon: FileText,
        gradient: "from-primary/20 to-accent/20",
        link: "https://sitesrovr.lovable.app",
        image: blogsImg,
        differentials: [
          "✍️ Strategic content",
          "🔍 SEO optimized",
          "📈 Traffic boost",
          "🎯 Qualified leads",
        ],
        features: [
          { icon: Globe, text: "Responsive Design" },
          { icon: TrendingUp, text: "Advanced SEO" },
          { icon: FileText, text: "Blog with CMS" },
          { icon: Shield, text: "HTTPS & Security" },
        ],
        highlights: [
          "Modern custom design",
          "Admin dashboard",
          "Google Analytics integrated",
          "Optimized performance"
        ]
      },
    ],
    es: [
      {
        title: "Blogs RoVR",
        category: "Contenido & Marketing",
        description: "Creamos blogs profesionales y optimizados para SEO. Contenido estratégico para atraer clientes, aumentar su autoridad en el mercado y generar leads calificados para su negocio.",
        status: "Disponible",
        statusColor: "bg-primary",
        rating: "5.0",
        cta: "Ver Ejemplo",
        featured: true,
        icon: FileText,
        gradient: "from-primary/20 to-accent/20",
        link: "https://sitesrovr.lovable.app",
        image: blogsImg,
        differentials: [
          "✍️ Contenido estratégico",
          "🔍 SEO optimizado",
          "📈 Aumento de tráfico",
          "🎯 Leads calificados",
        ],
        features: [
          { icon: Globe, text: "Diseño Responsivo" },
          { icon: TrendingUp, text: "SEO Avanzado" },
          { icon: FileText, text: "Blog con CMS" },
          { icon: Shield, text: "HTTPS & Seguridad" },
        ],
        highlights: [
          "Diseño moderno y personalizado",
          "Panel administrativo",
          "Google Analytics integrado",
          "Rendimiento optimizado"
        ]
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
              ? "Sites e blogs profissionais que desenvolvemos. Design moderno e resultados reais para cada cliente."
              : language === "es"
              ? "Sitios web y blogs profesionales que desarrollamos. Diseño moderno y resultados reales para cada cliente."
              : "Professional websites and blogs we've developed. Modern design and real results for every client."}
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-colors duration-300 hover:shadow-2xl hover:shadow-primary/20"
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
                
                {/* CTA */}
                <div className="flex items-center justify-end pt-4 border-t border-border/50">
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
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                x: 10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-colors duration-300 hover:shadow-xl hover:shadow-primary/15"
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
            </motion.div>
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
