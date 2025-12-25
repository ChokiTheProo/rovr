import { motion, type Easing } from "framer-motion";
import { Star, Zap, Shield, Rocket, Users, TrendingUp, CheckCircle } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "A RoVR transformou completamente nossa operação. O sistema que desenvolveram reduziu nosso tempo de processamento em 70%.",
      author: "Carlos Silva",
      role: "CEO, TechStore",
      rating: 5,
    },
    {
      quote: "Profissionalismo e inovação definem a equipe RoVR. Nosso MicroSaaS gerou ROI positivo já no segundo mês.",
      author: "Ana Martins",
      role: "Fundadora, DataFlow",
      rating: 5,
    },
    {
      quote: "Entrega rápida, código limpo e suporte excepcional. Recomendo para qualquer empresa que queira escalar.",
      author: "Pedro Costa",
      role: "CTO, FastPay",
      rating: 5,
    },
  ];

  const qualities = [
    {
      icon: Rocket,
      title: "Entrega Rápida",
      description: "Do conceito ao deploy em semanas, não meses",
      highlight: "2-4 semanas",
    },
    {
      icon: TrendingUp,
      title: "ROI Garantido",
      description: "Projetos focados em resultados mensuráveis",
      highlight: "3x retorno",
    },
    {
      icon: Shield,
      title: "Código Seguro",
      description: "Práticas de segurança enterprise desde o dia 1",
      highlight: "99.9% uptime",
    },
    {
      icon: Users,
      title: "Suporte Dedicado",
      description: "Time disponível para ajustes e evoluções",
      highlight: "24/7 suporte",
    },
    {
      icon: Zap,
      title: "Alta Performance",
      description: "Sistemas otimizados para milhares de usuários",
      highlight: "<100ms latência",
    },
    {
      icon: CheckCircle,
      title: "Escalabilidade",
      description: "Arquitetura preparada para crescer com você",
      highlight: "∞ usuários",
    },
  ];

  const easeOut: Easing = [0, 0, 0.2, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Por que escolher a RoVR?</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-foreground">Resultados que </span>
            <span className="text-gradient">falam por si</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Clientes satisfeitos e projetos de sucesso. Veja o que nos diferencia no mercado de MicroSaaS.
          </p>
        </motion.div>

        {/* Qualities Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:glow-primary transition-all duration-500">
                    <quality.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <span className="font-display text-lg font-bold text-gradient">{quality.highlight}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {quality.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {quality.description}
                </p>
              </div>

              {/* Animated border */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-500"
              whileHover={{ scale: 1.03 }}
            >
              {/* Quote marks */}
              <div className="absolute top-4 right-4 font-display text-6xl text-primary/20 leading-none">"</div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    <Star className="w-5 h-5 fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-primary-foreground">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Quote */}
        <motion.div 
          className="mt-20 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm relative overflow-hidden">
            {/* Animated glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 animate-pulse" />
            
            <blockquote className="relative z-10">
              <p className="text-2xl md:text-3xl font-light text-foreground italic mb-6">
                "Não criamos apenas soluções. Criamos <span className="text-gradient font-semibold">produtos digitais</span> que crescem, 
                evoluem e geram <span className="text-gradient font-semibold">valor continuamente</span>."
              </p>
              <cite className="text-primary font-display font-bold text-lg not-italic">— EQUIPE ROVR</cite>
            </blockquote>

            {/* Floating particles */}
            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-primary/50 animate-float" />
            <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-accent/50 animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 right-10 w-1.5 h-1.5 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "0.5s" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
