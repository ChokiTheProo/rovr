import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, Rocket, Clock, CreditCard, Users, Code, Zap, Headphones, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { LegalPageLayout, itemVariants } from "@/components/LegalPageLayout";

const FAQ = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Perguntas",
      titleHighlight: "Frequentes",
      lastUpdate: "Atualizado em Janeiro 2025",
      relatedLinks: [
        { label: "Termos de Uso", href: "/termos" },
        { label: "Política de Privacidade", href: "/privacidade" }
      ],
      description: "Encontre respostas rápidas para as dúvidas mais comuns sobre nossos serviços, processos de desenvolvimento e como podemos ajudar seu negócio a crescer.",
      categories: [
        { icon: Rocket, name: "Sobre a RoVR" },
        { icon: Code, name: "Desenvolvimento" },
        { icon: CreditCard, name: "Pagamentos" }
      ],
      ctaTitle: "Ainda tem dúvidas?",
      ctaText: "Nossa equipe está pronta para ajudar você a encontrar a melhor solução para seu negócio.",
      ctaButton: "Fale Conosco",
      faqs: [
        {
          icon: Rocket,
          question: "O que é a RoVR?",
          answer: "A RoVR é uma empresa de tecnologia especializada no desenvolvimento de soluções digitais escaláveis. Criamos SaaS e MicroSaaS personalizados que ajudam empresas de todos os tamanhos a modernizar seus processos e crescer de forma sustentável."
        },
        {
          icon: Code,
          question: "Quais tipos de produtos vocês desenvolvem?",
          answer: "Desenvolvemos sistemas SaaS completos e MicroSaaS focados, incluindo: Fluxen (gestão financeira empresarial), Klyexa (plataforma de saúde), CuidaBem (monitoramento de idosos), Tratamento Diário (acompanhamento médico) e Emagrio (wellness). Também criamos soluções 100% personalizadas."
        },
        {
          icon: Clock,
          question: "Quanto tempo leva para desenvolver um projeto?",
          answer: "O prazo varia conforme a complexidade: MVPs simples podem ser entregues em 2-4 semanas, sistemas de médio porte em 2-3 meses, e plataformas robustas em 4-6 meses. Realizamos uma análise detalhada antes de iniciar para garantir prazos realistas e entregas pontuais."
        },
        {
          icon: Zap,
          question: "Como funciona o processo de desenvolvimento?",
          answer: "Nosso processo é estruturado em 6 etapas: 1) Discovery - entendemos suas necessidades em profundidade, 2) Proposta técnica e comercial detalhada, 3) Desenvolvimento em sprints com entregas semanais, 4) Testes rigorosos e ajustes, 5) Deploy e treinamento da equipe, 6) Suporte contínuo pós-lançamento."
        },
        {
          icon: Headphones,
          question: "Vocês oferecem suporte após a entrega?",
          answer: "Sim! Oferecemos suporte técnico contínuo para todos os nossos produtos. Os planos incluem: suporte prioritário via WhatsApp e email, atualizações de segurança, correção de bugs, melhorias contínuas baseadas em feedback, e SLA com tempo de resposta garantido."
        },
        {
          icon: CreditCard,
          question: "Qual é o investimento para desenvolver um SaaS?",
          answer: "O investimento varia conforme escopo e funcionalidades. Trabalhamos com orçamentos transparentes após entender seu projeto. Oferecemos: avaliação inicial gratuita, proposta detalhada sem compromisso, e opções de parcelamento. Entre em contato para uma análise personalizada."
        },
        {
          icon: Users,
          question: "Vocês trabalham com startups e empresas em estágio inicial?",
          answer: "Absolutamente! Temos experiência comprovada em ajudar startups a validar ideias e construir MVPs de forma rápida e econômica. Oferecemos condições especiais para early-stage e podemos ajudar com pitch decks técnicos e documentação para investidores."
        },
        {
          icon: Zap,
          question: "É possível integrar com sistemas que já uso?",
          answer: "Sim! Desenvolvemos integrações robustas com diversos sistemas: ERPs (SAP, TOTVS, Omie), CRMs (Salesforce, HubSpot, Pipedrive), gateways de pagamento (Stripe, PagSeguro, Mercado Pago), marketplaces, sistemas de logística, e APIs customizadas."
        },
        {
          icon: MessageCircle,
          question: "Como acompanho o progresso do meu projeto?",
          answer: "Mantemos total transparência: você terá acesso a um ambiente de homologação atualizado em tempo real, reuniões semanais de acompanhamento (ou conforme sua preferência), canal direto de comunicação com a equipe, e dashboards de progresso com métricas claras."
        },
        {
          icon: Briefcase,
          question: "Vocês estão contratando?",
          answer: "Estamos sempre em busca de talentos excepcionais! Procuramos desenvolvedores full-stack, designers UI/UX, e especialistas em cloud. Oferecemos trabalho remoto, horários flexíveis e projetos desafiadores. Confira nossa página 'Trabalhe Conosco' ou envie seu portfólio!"
        }
      ]
    },
    en: {
      title: "Frequently Asked",
      titleHighlight: "Questions",
      lastUpdate: "Updated January 2025",
      relatedLinks: [
        { label: "Terms of Use", href: "/termos" },
        { label: "Privacy Policy", href: "/privacidade" }
      ],
      description: "Find quick answers to the most common questions about our services, development processes and how we can help your business grow.",
      categories: [
        { icon: Rocket, name: "About RoVR" },
        { icon: Code, name: "Development" },
        { icon: CreditCard, name: "Payments" }
      ],
      ctaTitle: "Still have questions?",
      ctaText: "Our team is ready to help you find the best solution for your business.",
      ctaButton: "Contact Us",
      faqs: [
        {
          icon: Rocket,
          question: "What is RoVR?",
          answer: "RoVR is a technology company specialized in developing scalable digital solutions. We create custom SaaS and MicroSaaS that help companies of all sizes modernize their processes and grow sustainably."
        },
        {
          icon: Code,
          question: "What types of products do you develop?",
          answer: "We develop complete SaaS systems and focused MicroSaaS, including: Fluxen (business financial management), Klyexa (health platform), CuidaBem (elderly monitoring), Tratamento Diário (medical follow-up) and Emagrio (wellness). We also create 100% customized solutions."
        },
        {
          icon: Clock,
          question: "How long does it take to develop a project?",
          answer: "Timeframe varies by complexity: simple MVPs can be delivered in 2-4 weeks, medium-sized systems in 2-3 months, and robust platforms in 4-6 months. We conduct detailed analysis before starting to ensure realistic deadlines and timely deliveries."
        },
        {
          icon: Zap,
          question: "How does the development process work?",
          answer: "Our process is structured in 6 stages: 1) Discovery - we deeply understand your needs, 2) Detailed technical and commercial proposal, 3) Development in sprints with weekly deliveries, 4) Rigorous testing and adjustments, 5) Deployment and team training, 6) Continuous post-launch support."
        },
        {
          icon: Headphones,
          question: "Do you offer support after delivery?",
          answer: "Yes! We offer continuous technical support for all our products. Plans include: priority WhatsApp and email support, security updates, bug fixes, continuous improvements based on feedback, and SLA with guaranteed response time."
        },
        {
          icon: CreditCard,
          question: "What is the investment to develop a SaaS?",
          answer: "Investment varies by scope and features. We work with transparent budgets after understanding your project. We offer: free initial evaluation, detailed no-obligation proposal, and installment options. Contact us for a personalized analysis."
        },
        {
          icon: Users,
          question: "Do you work with startups and early-stage companies?",
          answer: "Absolutely! We have proven experience helping startups validate ideas and build MVPs quickly and economically. We offer special conditions for early-stage and can help with technical pitch decks and investor documentation."
        },
        {
          icon: Zap,
          question: "Is it possible to integrate with systems I already use?",
          answer: "Yes! We develop robust integrations with various systems: ERPs (SAP, TOTVS, Omie), CRMs (Salesforce, HubSpot, Pipedrive), payment gateways (Stripe, PagSeguro, Mercado Pago), marketplaces, logistics systems, and custom APIs."
        },
        {
          icon: MessageCircle,
          question: "How do I track my project's progress?",
          answer: "We maintain full transparency: you'll have access to a staging environment updated in real-time, weekly follow-up meetings (or as you prefer), direct communication channel with the team, and progress dashboards with clear metrics."
        },
        {
          icon: Briefcase,
          question: "Are you hiring?",
          answer: "We're always looking for exceptional talent! We're seeking full-stack developers, UI/UX designers, and cloud specialists. We offer remote work, flexible hours and challenging projects. Check out our 'Work With Us' page or send your portfolio!"
        }
      ]
    },
    es: {
      title: "Preguntas",
      titleHighlight: "Frecuentes",
      lastUpdate: "Actualizado Enero 2025",
      relatedLinks: [
        { label: "Términos de Uso", href: "/termos" },
        { label: "Política de Privacidad", href: "/privacidade" }
      ],
      description: "Encuentra respuestas rápidas a las preguntas más comunes sobre nuestros servicios, procesos de desarrollo y cómo podemos ayudar a tu negocio a crecer.",
      categories: [
        { icon: Rocket, name: "Sobre RoVR" },
        { icon: Code, name: "Desarrollo" },
        { icon: CreditCard, name: "Pagos" }
      ],
      ctaTitle: "¿Aún tienes dudas?",
      ctaText: "Nuestro equipo está listo para ayudarte a encontrar la mejor solución para tu negocio.",
      ctaButton: "Contáctanos",
      faqs: [
        {
          icon: Rocket,
          question: "¿Qué es RoVR?",
          answer: "RoVR es una empresa de tecnología especializada en el desarrollo de soluciones digitales escalables. Creamos SaaS y MicroSaaS personalizados que ayudan a empresas de todos los tamaños a modernizar sus procesos y crecer de forma sostenible."
        },
        {
          icon: Code,
          question: "¿Qué tipos de productos desarrollan?",
          answer: "Desarrollamos sistemas SaaS completos y MicroSaaS enfocados, incluyendo: Fluxen (gestión financiera empresarial), Klyexa (plataforma de salud), CuidaBem (monitoreo de ancianos), Tratamento Diário (seguimiento médico) y Emagrio (wellness). También creamos soluciones 100% personalizadas."
        },
        {
          icon: Clock,
          question: "¿Cuánto tiempo toma desarrollar un proyecto?",
          answer: "El plazo varía según la complejidad: MVPs simples pueden entregarse en 2-4 semanas, sistemas medianos en 2-3 meses, y plataformas robustas en 4-6 meses. Realizamos análisis detallado antes de comenzar para garantizar plazos realistas y entregas puntuales."
        },
        {
          icon: Zap,
          question: "¿Cómo funciona el proceso de desarrollo?",
          answer: "Nuestro proceso está estructurado en 6 etapas: 1) Discovery - entendemos tus necesidades en profundidad, 2) Propuesta técnica y comercial detallada, 3) Desarrollo en sprints con entregas semanales, 4) Pruebas rigurosas y ajustes, 5) Deploy y capacitación, 6) Soporte continuo post-lanzamiento."
        },
        {
          icon: Headphones,
          question: "¿Ofrecen soporte después de la entrega?",
          answer: "¡Sí! Ofrecemos soporte técnico continuo para todos nuestros productos. Los planes incluyen: soporte prioritario por WhatsApp y email, actualizaciones de seguridad, corrección de bugs, mejoras continuas basadas en feedback, y SLA con tiempo de respuesta garantizado."
        },
        {
          icon: CreditCard,
          question: "¿Cuál es la inversión para desarrollar un SaaS?",
          answer: "La inversión varía según alcance y funcionalidades. Trabajamos con presupuestos transparentes después de entender tu proyecto. Ofrecemos: evaluación inicial gratuita, propuesta detallada sin compromiso, y opciones de financiamiento. Contáctanos para un análisis personalizado."
        },
        {
          icon: Users,
          question: "¿Trabajan con startups y empresas en etapa inicial?",
          answer: "¡Absolutamente! Tenemos experiencia comprobada ayudando startups a validar ideas y construir MVPs de forma rápida y económica. Ofrecemos condiciones especiales para early-stage y podemos ayudar con pitch decks técnicos y documentación para inversores."
        },
        {
          icon: Zap,
          question: "¿Es posible integrar con sistemas que ya uso?",
          answer: "¡Sí! Desarrollamos integraciones robustas con diversos sistemas: ERPs (SAP, TOTVS, Omie), CRMs (Salesforce, HubSpot, Pipedrive), pasarelas de pago (Stripe, PagSeguro, Mercado Pago), marketplaces, sistemas de logística, y APIs personalizadas."
        },
        {
          icon: MessageCircle,
          question: "¿Cómo acompaño el progreso de mi proyecto?",
          answer: "Mantenemos total transparencia: tendrás acceso a un ambiente de pruebas actualizado en tiempo real, reuniones semanales de seguimiento, canal directo de comunicación con el equipo, y dashboards de progreso con métricas claras."
        },
        {
          icon: Briefcase,
          question: "¿Están contratando?",
          answer: "¡Siempre buscamos talentos excepcionales! Buscamos desarrolladores full-stack, diseñadores UI/UX y especialistas en cloud. Ofrecemos trabajo remoto, horarios flexibles y proyectos desafiantes. ¡Consulta nuestra página 'Trabaja con Nosotros' o envía tu portafolio!"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <LegalPageLayout
      icon={HelpCircle}
      title={t.title}
      titleHighlight={t.titleHighlight}
      lastUpdate={t.lastUpdate}
      accentColor="primary"
      relatedLinks={t.relatedLinks}
    >
      {/* Description */}
      <motion.p 
        variants={itemVariants}
        className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg"
      >
        {t.description}
      </motion.p>

      {/* Category Pills */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {t.categories.map((cat, index) => (
          <div 
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50"
          >
            <cat.icon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{cat.name}</span>
          </div>
        ))}
      </motion.div>

      {/* FAQ Accordion */}
      <motion.div variants={itemVariants}>
        <Accordion type="single" collapsible className="space-y-4">
          {t.faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-2xl bg-card/30 backdrop-blur-sm px-6 data-[state=open]:border-primary/50 data-[state=open]:bg-card/50 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <faq.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-semibold text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pl-14 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={itemVariants}
        className="mt-16 p-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent text-center relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            {t.ctaTitle}
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {t.ctaText}
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
          >
            {t.ctaButton}
          </Link>
        </div>
      </motion.div>
    </LegalPageLayout>
  );
};

export default FAQ;
