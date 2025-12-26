import { motion } from "framer-motion";
import { Check, Zap, Rocket, Crown, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    description: "Ideal para validar sua ideia de MicroSaaS",
    price: "4.997",
    period: "único",
    icon: Zap,
    popular: false,
    features: [
      "Landing page otimizada",
      "Sistema de autenticação",
      "Dashboard básico",
      "Integração de pagamentos",
      "Banco de dados configurado",
      "Deploy em produção",
      "30 dias de suporte",
    ],
    highlight: "Entrega em 2-3 semanas",
  },
  {
    name: "Growth",
    description: "Para MicroSaaS prontos para escalar",
    price: "9.997",
    period: "único",
    icon: Rocket,
    popular: true,
    features: [
      "Tudo do plano Starter",
      "Painel administrativo completo",
      "Sistema de planos e assinaturas",
      "Relatórios e analytics",
      "API documentada",
      "Integrações customizadas",
      "90 dias de suporte",
      "Treinamento da equipe",
    ],
    highlight: "Entrega em 4-6 semanas",
  },
  {
    name: "Enterprise",
    description: "Soluções completas e personalizadas",
    price: "Sob consulta",
    period: "",
    icon: Crown,
    popular: false,
    features: [
      "Tudo do plano Growth",
      "Arquitetura escalável",
      "Multi-tenancy",
      "White-label completo",
      "Integrações ilimitadas",
      "SLA dedicado",
      "Suporte prioritário 24/7",
      "Consultoria estratégica",
    ],
    highlight: "Projeto sob medida",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

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

const PricingSection = () => {
  const handleContact = (planName: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planName} para meu MicroSaaS. Gostaria de mais informações.`);
    window.open(`https://wa.me/5554991710543?text=${message}`, '_blank');
  };

  return (
    <section id="precos" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Investimento
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Escolha o </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Plano Ideal
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforme sua ideia em um MicroSaaS lucrativo com o plano que melhor se adapta às suas necessidades
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold rounded-full shadow-lg">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full rounded-2xl border transition-all duration-500 overflow-hidden ${
                  plan.popular
                    ? 'border-primary/50 bg-gradient-to-b from-primary/10 via-card to-card shadow-2xl shadow-primary/20'
                    : 'border-border/50 bg-card/80 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10'
                }`}
              >
                {/* Glow Effect for Popular */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                )}

                <div className="relative p-8">
                  {/* Plan Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${plan.popular ? 'bg-primary/20' : 'bg-muted'}`}>
                      <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-border/50">
                    <div className="flex items-baseline gap-1">
                      {plan.price !== "Sob consulta" && (
                        <span className="text-lg text-muted-foreground">R$</span>
                      )}
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      {plan.period && (
                        <span className="text-muted-foreground ml-1">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-sm text-accent font-medium mt-2">{plan.highlight}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`mt-0.5 p-1 rounded-full ${plan.popular ? 'bg-primary/20' : 'bg-muted'}`}>
                          <Check className={`w-3 h-3 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleContact(plan.name)}
                    className={`w-full group/btn transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg shadow-primary/25'
                        : 'bg-muted hover:bg-primary/10 text-foreground border border-border/50 hover:border-primary/50'
                    }`}
                    size="lg"
                  >
                    <span>Começar Agora</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Precisa de algo diferente? Temos soluções flexíveis para cada projeto.
          </p>
          <button
            onClick={() => handleContact("Personalizado")}
            className="text-primary hover:text-accent transition-colors font-medium inline-flex items-center gap-2"
          >
            Fale com nossa equipe
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
