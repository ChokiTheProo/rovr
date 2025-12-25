import { Star, Heart } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "CuidaBem",
      category: "Saúde & Cuidados",
      description: "Aplicativo completo para cuidadoras de idosos. Gestão de rotinas, medicamentos, relatórios e comunicação com familiares.",
      status: "Em Desenvolvimento",
      statusColor: "bg-primary",
      rating: "5.0",
      cta: "Em breve",
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
            Cada projeto é uma experiência única, desenvolvida com tecnologia de ponta 
            e pensada para escalar como um produto digital.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor} text-primary-foreground`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Heart className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
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
          <div className="col-span-1 md:col-span-2 lg:col-span-2 rounded-2xl border border-dashed border-border/50 bg-card/30 p-8 flex items-center justify-center">
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
