import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { fadeInUp } from "@/hooks/useScrollAnimation";

const FAQSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const content = {
    pt: {
      tag: "Dúvidas Frequentes",
      title1: "Tire suas ",
      title2: "dúvidas",
      description: "As perguntas que mais recebemos antes de começar um projeto. Se a sua não estiver aqui, é só chamar no WhatsApp.",
      cta: "Ainda tem dúvidas? Fale conosco",
      faqs: [
        {
          q: "Preciso pagar alguma coisa para ver meu site?",
          a: "Não. Desenvolvemos uma pré-visualização completa do seu site sem nenhum custo. Você só investe se aprovar o resultado — risco zero.",
        },
        {
          q: "Em quanto tempo meu site fica pronto?",
          a: "A entrega média é de 7 dias para sites institucionais e landing pages. Projetos com blog ou funcionalidades específicas podem levar até 15 dias.",
        },
        {
          q: "E depois que o site for entregue, como funciona o suporte?",
          a: "Oferecemos suporte contínuo para atualizações, ajustes de conteúdo e dúvidas técnicas. Você nunca fica sozinho — somos parceiros de longo prazo.",
        },
        {
          q: "Vocês fazem o site responsivo (mobile)?",
          a: "Sim, 100%. Todos os nossos sites são desenvolvidos com design responsivo, otimizados para celular, tablet e desktop, e prontos para ranquear no Google.",
        },
        {
          q: "Posso pedir alterações depois de aprovar?",
          a: "Sim. Pequenos ajustes estão inclusos. Para mudanças maiores ou novas páginas, oferecemos planos de manutenção mensal a partir de valores acessíveis.",
        },
        {
          q: "Vocês emitem nota fiscal e contrato?",
          a: "Sim. Trabalhamos com contrato formal detalhando escopo, prazos e garantias, e emitimos nota fiscal. Total segurança jurídica para sua empresa.",
        },
      ],
    },
    en: {
      tag: "Frequently Asked Questions",
      title1: "Clear your ",
      title2: "doubts",
      description: "The questions we hear most before starting a project. If yours isn't here, just message us on WhatsApp.",
      cta: "Still have questions? Contact us",
      faqs: [
        {
          q: "Do I need to pay anything to see my site?",
          a: "No. We develop a full preview of your site at no cost. You only invest if you approve the result — zero risk.",
        },
        {
          q: "How long does it take to deliver my site?",
          a: "Average delivery is 7 days for corporate sites and landing pages. Projects with blog or specific features may take up to 15 days.",
        },
        {
          q: "How does support work after delivery?",
          a: "We offer ongoing support for updates, content adjustments and technical questions. You're never alone — we're long-term partners.",
        },
        {
          q: "Are the websites mobile responsive?",
          a: "Yes, 100%. All our sites are developed with responsive design, optimized for mobile, tablet and desktop, and ready to rank on Google.",
        },
        {
          q: "Can I request changes after approval?",
          a: "Yes. Small adjustments are included. For bigger changes or new pages, we offer affordable monthly maintenance plans.",
        },
        {
          q: "Do you provide invoices and contracts?",
          a: "Yes. We work with a formal contract detailing scope, deadlines and guarantees, and issue official invoices. Full legal safety for your business.",
        },
      ],
    },
    es: {
      tag: "Preguntas Frecuentes",
      title1: "Resuelve tus ",
      title2: "dudas",
      description: "Las preguntas que más recibimos antes de empezar un proyecto. Si la tuya no está aquí, escríbenos por WhatsApp.",
      cta: "¿Aún tienes dudas? Contáctanos",
      faqs: [
        {
          q: "¿Necesito pagar algo para ver mi sitio?",
          a: "No. Desarrollamos una vista previa completa sin costo alguno. Solo inviertes si apruebas el resultado — riesgo cero.",
        },
        {
          q: "¿En cuánto tiempo está listo mi sitio?",
          a: "La entrega promedio es de 7 días para sitios institucionales y landing pages. Proyectos con blog o funciones específicas pueden tardar hasta 15 días.",
        },
        {
          q: "¿Cómo funciona el soporte después de la entrega?",
          a: "Ofrecemos soporte continuo para actualizaciones, ajustes y dudas técnicas. Nunca quedas solo — somos socios de largo plazo.",
        },
        {
          q: "¿Los sitios son responsivos (móvil)?",
          a: "Sí, 100%. Todos nuestros sitios se desarrollan con diseño responsivo, optimizados para móvil, tablet y escritorio, listos para Google.",
        },
        {
          q: "¿Puedo pedir cambios después de aprobar?",
          a: "Sí. Pequeños ajustes están incluidos. Para cambios mayores o nuevas páginas, ofrecemos planes de mantenimiento mensual accesibles.",
        },
        {
          q: "¿Emiten factura y contrato?",
          a: "Sí. Trabajamos con contrato formal detallando alcance, plazos y garantías, y emitimos factura. Seguridad jurídica total.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="faq" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12 max-w-2xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium tracking-wider uppercase">{t.tag}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t.title1}</span>
            <span className="text-gradient">{t.title2}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t.description}</p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {t.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm px-6 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold rounded-xl px-8 py-6 text-lg glow-primary"
            >
              <a href="https://web.whatsapp.com/send?phone=5554991710543" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.cta}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
