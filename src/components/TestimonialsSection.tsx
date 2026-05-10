import { motion, type Easing } from "framer-motion";
import { Star, Zap, Shield, Rocket, Users, TrendingUp, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      whyChoose: "Por que a RoVR",
      resultsTitle1: "O que muda quando ",
      resultsTitle2: "trabalhamos juntos",
      description: "Sem fake metrics, sem promessa milagrosa. Aqui você sabe o que vai receber, em quanto tempo e por quanto.",
      quote: <>
        "A gente não entrega site bonito. Entrega <span className="text-gradient font-semibold">site que funciona</span> — e <span className="text-gradient font-semibold">cuida dele depois</span>."
      </>,
      team: "EQUIPE ROVR",
      testimonials: [],
      qualities: [
        { icon: Rocket, title: "Entrega rápida", description: "Sites em 7 dias. Projetos maiores em 2-3 semanas. Sem prazo elástico.", highlight: "7-21 dias" },
        { icon: TrendingUp, title: "Risco zero pra você", description: "Você só paga depois de ver e aprovar o resultado. Ponto.", highlight: "Preview grátis" },
        { icon: Shield, title: "Contrato formal", description: "Escopo, prazo e garantias por escrito. Nada combinado só no WhatsApp.", highlight: "100% formal" },
        { icon: Users, title: "Falando com quem faz", description: "Atendimento direto comigo. Sem fila, sem ticket, sem robô.", highlight: "Direto" },
        { icon: Zap, title: "Performance de verdade", description: "Sites rápidos, leves e prontos para o Google ranquear.", highlight: "Lighthouse 90+" },
        { icon: CheckCircle, title: "Continua depois da entrega", description: "Suporte e ajustes mensais opcionais. Você nunca fica no escuro.", highlight: "Suporte ativo" },
      ],
    },
    en: {
      whyChoose: "Why RoVR",
      resultsTitle1: "What actually changes when ",
      resultsTitle2: "we work together",
      description: "No fake metrics, no miracle promises. You know exactly what you'll get, by when, and for how much.",
      quote: <>
        "We don't deliver pretty sites. We deliver <span className="text-gradient font-semibold">sites that work</span> — and <span className="text-gradient font-semibold">take care of them afterwards</span>."
      </>,
      team: "ROVR TEAM",
      testimonials: [],
      qualities: [
        { icon: Rocket, title: "Fast delivery", description: "Websites in 7 days. Bigger projects in 2-3 weeks. No elastic deadlines.", highlight: "7-21 days" },
        { icon: TrendingUp, title: "Zero risk for you", description: "You pay only after seeing and approving the result. That's it.", highlight: "Free preview" },
        { icon: Shield, title: "Formal contract", description: "Scope, deadline and guarantees in writing. Nothing settled only on WhatsApp.", highlight: "100% formal" },
        { icon: Users, title: "Talk to the maker", description: "You speak directly with me. No queue, no tickets, no bot.", highlight: "Direct" },
        { icon: Zap, title: "Real performance", description: "Fast, lightweight sites ready to rank on Google.", highlight: "Lighthouse 90+" },
        { icon: CheckCircle, title: "We stick around", description: "Optional monthly support and tweaks. You're never in the dark.", highlight: "Active support" },
      ],
    },
    es: {
      whyChoose: "Por qué RoVR",
      resultsTitle1: "Lo que cambia cuando ",
      resultsTitle2: "trabajamos juntos",
      description: "Sin métricas inventadas, sin promesas milagrosas. Aquí sabes qué recibes, cuándo y por cuánto.",
      quote: <>
        "No entregamos sitios bonitos. Entregamos <span className="text-gradient font-semibold">sitios que funcionan</span> — y <span className="text-gradient font-semibold">los cuidamos después</span>."
      </>,
      team: "EQUIPO ROVR",
      testimonials: [],
      qualities: [
        { icon: Rocket, title: "Entrega rápida", description: "Sitios en 7 días. Proyectos mayores en 2-3 semanas. Sin plazos elásticos.", highlight: "7-21 días" },
        { icon: TrendingUp, title: "Riesgo cero", description: "Pagas solo después de ver y aprobar el resultado. Punto.", highlight: "Preview gratis" },
        { icon: Shield, title: "Contrato formal", description: "Alcance, plazo y garantías por escrito. Nada cerrado solo en WhatsApp.", highlight: "100% formal" },
        { icon: Users, title: "Hablas con quien lo hace", description: "Atención directa conmigo. Sin fila, sin tickets, sin bot.", highlight: "Directo" },
        { icon: Zap, title: "Performance real", description: "Sitios rápidos, ligeros y listos para que Google los rankee.", highlight: "Lighthouse 90+" },
        { icon: CheckCircle, title: "Seguimos después", description: "Soporte y ajustes mensuales opcionales. Nunca quedas a oscuras.", highlight: "Soporte activo" },
      ],
    },
  };

  const t = content[language];

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
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t.whyChoose}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-foreground">
              {t.resultsTitle1}
            </span>
            <span className="text-gradient">
              {t.resultsTitle2}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.testimonials.map((testimonial, index) => (
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
                {t.quote}
              </p>
              <cite className="text-primary font-display font-bold text-lg not-italic">
                — {t.team}
              </cite>
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
