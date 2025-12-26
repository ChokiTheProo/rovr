import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const content = {
    pt: {
      title: "Perguntas",
      titleHighlight: "Frequentes",
      description: "Encontre respostas para as dúvidas mais comuns sobre nossos serviços, processos e como podemos ajudar seu negócio.",
      ctaTitle: "Não encontrou o que procurava?",
      ctaText: "Entre em contato conosco e teremos prazer em ajudar.",
      ctaButton: "Fale Conosco",
      faqs: [
        {
          question: "O que é a RoVR?",
          answer: "A RoVR é uma empresa especializada no desenvolvimento de soluções digitais escaláveis, focada em criar SaaS e MicroSaaS personalizados que ajudam negócios a crescer e se modernizar."
        },
        {
          question: "Quais tipos de produtos vocês desenvolvem?",
          answer: "Desenvolvemos sistemas SaaS (Software as a Service) e MicroSaaS personalizados, incluindo sistemas de gestão financeira como o Fluxen e plataformas de saúde como o Klyexa. Também criamos soluções sob medida conforme as necessidades do cliente."
        },
        {
          question: "Quanto tempo leva para desenvolver um projeto?",
          answer: "O tempo de desenvolvimento varia conforme a complexidade do projeto. Projetos mais simples podem ser entregues em 2-4 semanas, enquanto sistemas mais robustos podem levar de 2-6 meses. Fazemos uma análise detalhada antes de iniciar para definir prazos realistas."
        },
        {
          question: "Como funciona o processo de desenvolvimento?",
          answer: "Nosso processo inclui: 1) Reunião inicial para entender suas necessidades, 2) Proposta comercial e técnica, 3) Desenvolvimento em sprints com entregas incrementais, 4) Testes e ajustes, 5) Deploy e treinamento, 6) Suporte contínuo após a entrega."
        },
        {
          question: "Vocês oferecem suporte após a entrega?",
          answer: "Sim! Oferecemos suporte técnico contínuo para todos os nossos produtos. Nossos planos de assinatura incluem suporte via email e WhatsApp, além de atualizações e melhorias regulares."
        },
        {
          question: "Qual é o custo para desenvolver um SaaS?",
          answer: "O investimento varia conforme a complexidade e funcionalidades desejadas. Trabalhamos com orçamentos personalizados após entender suas necessidades. Entre em contato para uma avaliação gratuita do seu projeto."
        },
        {
          question: "Vocês trabalham com startups?",
          answer: "Sim! Adoramos trabalhar com startups e temos experiência em ajudar novos negócios a validar suas ideias e construir MVPs (Minimum Viable Products) de forma rápida e eficiente."
        },
        {
          question: "É possível integrar com sistemas existentes?",
          answer: "Absolutamente! Desenvolvemos integrações com diversos sistemas, APIs e plataformas. Podemos conectar sua nova solução com ferramentas que você já utiliza, como ERPs, CRMs, gateways de pagamento e muito mais."
        },
        {
          question: "Como posso acompanhar o progresso do meu projeto?",
          answer: "Mantemos comunicação constante durante todo o desenvolvimento. Você terá acesso a um ambiente de homologação para testar as funcionalidades conforme são desenvolvidas, além de reuniões regulares de acompanhamento."
        },
        {
          question: "Vocês estão contratando?",
          answer: "Estamos sempre em busca de talentos! Se você é desenvolvedor, designer ou profissional de tecnologia, confira nossa seção 'Trabalhe Conosco' na página inicial ou envie seu currículo para nosso email."
        }
      ]
    },
    en: {
      title: "Frequently Asked",
      titleHighlight: "Questions",
      description: "Find answers to the most common questions about our services, processes and how we can help your business.",
      ctaTitle: "Didn't find what you were looking for?",
      ctaText: "Contact us and we'll be happy to help.",
      ctaButton: "Contact Us",
      faqs: [
        {
          question: "What is RoVR?",
          answer: "RoVR is a company specialized in developing scalable digital solutions, focused on creating custom SaaS and MicroSaaS that help businesses grow and modernize."
        },
        {
          question: "What types of products do you develop?",
          answer: "We develop custom SaaS (Software as a Service) and MicroSaaS systems, including financial management systems like Fluxen and health platforms like Klyexa. We also create tailored solutions according to client needs."
        },
        {
          question: "How long does it take to develop a project?",
          answer: "Development time varies according to project complexity. Simpler projects can be delivered in 2-4 weeks, while more robust systems can take 2-6 months. We do a detailed analysis before starting to set realistic deadlines."
        },
        {
          question: "How does the development process work?",
          answer: "Our process includes: 1) Initial meeting to understand your needs, 2) Commercial and technical proposal, 3) Development in sprints with incremental deliveries, 4) Testing and adjustments, 5) Deployment and training, 6) Continuous support after delivery."
        },
        {
          question: "Do you offer support after delivery?",
          answer: "Yes! We offer continuous technical support for all our products. Our subscription plans include email and WhatsApp support, plus regular updates and improvements."
        },
        {
          question: "What is the cost to develop a SaaS?",
          answer: "The investment varies according to the complexity and desired features. We work with customized budgets after understanding your needs. Contact us for a free evaluation of your project."
        },
        {
          question: "Do you work with startups?",
          answer: "Yes! We love working with startups and have experience helping new businesses validate their ideas and build MVPs (Minimum Viable Products) quickly and efficiently."
        },
        {
          question: "Is it possible to integrate with existing systems?",
          answer: "Absolutely! We develop integrations with various systems, APIs and platforms. We can connect your new solution with tools you already use, such as ERPs, CRMs, payment gateways and much more."
        },
        {
          question: "How can I track my project's progress?",
          answer: "We maintain constant communication throughout development. You will have access to a staging environment to test features as they are developed, plus regular follow-up meetings."
        },
        {
          question: "Are you hiring?",
          answer: "We are always looking for talent! If you are a developer, designer or technology professional, check out our 'Work With Us' section on the homepage or send your resume to our email."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <Header />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-accent/10 rounded-full blur-3xl" />

      <main className="container mx-auto px-6 py-12 pt-28 relative z-10 flex-1">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/50 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.title} <span className="text-gradient">{t.titleHighlight}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.description}
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div variants={itemVariants}>
            <Accordion type="single" collapsible className="space-y-4">
              {t.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm px-6 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-foreground font-semibold pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 text-center"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t.ctaTitle}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t.ctaText}
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              {t.ctaButton}
            </Link>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
