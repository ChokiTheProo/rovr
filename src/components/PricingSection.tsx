import { motion } from "framer-motion";
import { Check, Globe, Newspaper, Rocket, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const PricingSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const content = {
    pt: {
      tag: "Investimento",
      title: "Planos para ",
      titleHighlight: "seu projeto",
      description: "Escolha o plano ideal para sua presença digital. Todos incluem pré-visualização gratuita — você só paga quando aprovar.",
      plans: [
        {
          name: "Site Institucional",
          description: "Perfeito para empresas que precisam de presença online profissional",
          price: "1.500",
          currency: "R$",
          period: "único",
          icon: Globe,
          popular: false,
          features: [
            "Design responsivo e moderno",
            "Até 5 páginas",
            "Formulário de contato",
            "Otimização SEO básica",
            "Integração com redes sociais",
            "15 dias de suporte",
          ],
          highlight: "Entrega em 7-10 dias",
        },
        {
          name: "Site + Blog",
          description: "Para quem quer gerar conteúdo e atrair clientes organicamente",
          price: "2.500",
          currency: "R$",
          period: "único",
          icon: Newspaper,
          popular: true,
          features: [
            "Tudo do Site Institucional",
            "Blog integrado com CMS",
            "Até 10 páginas",
            "SEO avançado + sitemap",
            "Google Analytics configurado",
            "Painel administrativo",
            "30 dias de suporte",
          ],
          highlight: "Mais vendido • Entrega em 10-15 dias",
        },
        {
          name: "Projeto Completo",
          description: "Solução digital completa com funcionalidades avançadas",
          price: "4.500",
          currency: "R$",
          period: "único",
          icon: Rocket,
          popular: false,
          features: [
            "Tudo do Site + Blog",
            "Sistema de agendamento ou e-commerce",
            "Área de membros / login",
            "Integrações com APIs",
            "Performance otimizada",
            "Deploy e configuração completa",
            "60 dias de suporte",
          ],
          highlight: "Entrega em 2-3 semanas",
        },
      ],
      cta: "Começar Agora",
      different: "Precisa de algo sob medida? Temos soluções flexíveis para cada projeto.",
      talkTeam: "Fale com nossa equipe",
    },
    en: {
      tag: "Investment",
      title: "Plans for ",
      titleHighlight: "your project",
      description: "Choose the ideal plan for your digital presence. All include a free preview — you only pay when you approve.",
      plans: [
        {
          name: "Business Website",
          description: "Perfect for companies that need a professional online presence",
          price: "299",
          currency: "$",
          period: "one-time",
          icon: Globe,
          popular: false,
          features: [
            "Responsive modern design",
            "Up to 5 pages",
            "Contact form",
            "Basic SEO optimization",
            "Social media integration",
            "15 days of support",
          ],
          highlight: "Delivery in 7-10 days",
        },
        {
          name: "Website + Blog",
          description: "For those who want to generate content and attract customers organically",
          price: "499",
          currency: "$",
          period: "one-time",
          icon: Newspaper,
          popular: true,
          features: [
            "Everything in Business Website",
            "Integrated blog with CMS",
            "Up to 10 pages",
            "Advanced SEO + sitemap",
            "Google Analytics configured",
            "Admin dashboard",
            "30 days of support",
          ],
          highlight: "Best seller • Delivery in 10-15 days",
        },
        {
          name: "Complete Project",
          description: "Complete digital solution with advanced features",
          price: "899",
          currency: "$",
          period: "one-time",
          icon: Rocket,
          popular: false,
          features: [
            "Everything in Website + Blog",
            "Scheduling system or e-commerce",
            "Members area / login",
            "API integrations",
            "Optimized performance",
            "Full deploy and configuration",
            "60 days of support",
          ],
          highlight: "Delivery in 2-3 weeks",
        },
      ],
      cta: "Get Started",
      different: "Need something custom? We have flexible solutions for every project.",
      talkTeam: "Talk to our team",
    },
    es: {
      tag: "Inversión",
      title: "Planes para ",
      titleHighlight: "tu proyecto",
      description: "Elige el plan ideal para tu presencia digital. Todos incluyen vista previa gratuita — solo pagas cuando apruebes.",
      plans: [
        {
          name: "Sitio Institucional",
          description: "Perfecto para empresas que necesitan presencia online profesional",
          price: "299",
          currency: "$",
          period: "único",
          icon: Globe,
          popular: false,
          features: [
            "Diseño responsivo y moderno",
            "Hasta 5 páginas",
            "Formulario de contacto",
            "Optimización SEO básica",
            "Integración con redes sociales",
            "15 días de soporte",
          ],
          highlight: "Entrega en 7-10 días",
        },
        {
          name: "Sitio + Blog",
          description: "Para quienes quieren generar contenido y atraer clientes orgánicamente",
          price: "499",
          currency: "$",
          period: "único",
          icon: Newspaper,
          popular: true,
          features: [
            "Todo del Sitio Institucional",
            "Blog integrado con CMS",
            "Hasta 10 páginas",
            "SEO avanzado + sitemap",
            "Google Analytics configurado",
            "Panel administrativo",
            "30 días de soporte",
          ],
          highlight: "Más vendido • Entrega en 10-15 días",
        },
        {
          name: "Proyecto Completo",
          description: "Solución digital completa con funcionalidades avanzadas",
          price: "899",
          currency: "$",
          period: "único",
          icon: Rocket,
          popular: false,
          features: [
            "Todo del Sitio + Blog",
            "Sistema de agendamiento o e-commerce",
            "Área de miembros / login",
            "Integraciones con APIs",
            "Rendimiento optimizado",
            "Deploy y configuración completa",
            "60 días de soporte",
          ],
          highlight: "Entrega en 2-3 semanas",
        },
      ],
      cta: "Comenzar Ahora",
      different: "¿Necesitas algo a medida? Tenemos soluciones flexibles para cada proyecto.",
      talkTeam: "Habla con nuestro equipo",
    },
  };

  const c = content[language];

  return (
    <section id="precos" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {c.tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">{c.title}</span>
            <span className="text-gradient">{c.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {c.description}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {c.plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-2xl border bg-gradient-to-b overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "border-primary/60 from-primary/15 via-card to-card shadow-2xl shadow-primary/20 scale-[1.02]"
                  : "border-border/50 from-card/80 to-card hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold text-center py-1.5 tracking-wider uppercase">
                  ⭐ {language === "pt" ? "Mais Popular" : language === "en" ? "Most Popular" : "Más Popular"}
                </div>
              )}

              <div className={`relative p-8 ${plan.popular ? "pt-12" : ""}`}>
                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${plan.popular ? "bg-primary/20" : "bg-muted"}`}>
                    <plan.icon className={`w-6 h-6 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-border/50">
                  <div className="flex items-baseline gap-1">
                    <span className="text-base text-muted-foreground">{plan.currency}</span>
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-accent font-medium mt-2">{plan.highlight}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <div className={`mt-0.5 p-1 rounded-full ${plan.popular ? "bg-primary/20" : "bg-muted"}`}>
                        <Check className={`w-3 h-3 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to="/contato">
                  <Button
                    className={`w-full group/btn transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    }`}
                    size="lg"
                  >
                    <span>{c.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">{c.different}</p>
          <a
            href="https://web.whatsapp.com/send?phone=5554991710543"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors font-medium inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            {c.talkTeam}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
