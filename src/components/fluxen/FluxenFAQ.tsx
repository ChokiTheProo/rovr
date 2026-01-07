import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FluxenFAQ = () => {
  const faqs = [
    {
      question: "O Fluxen tem contrato?",
      answer: "Não! O Fluxen funciona como uma assinatura mensal sem contrato de fidelidade. Você pode cancelar a qualquer momento sem custos adicionais."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento diretamente pelo sistema. Não cobramos taxas de cancelamento."
    },
    {
      question: "O sistema funciona no celular?",
      answer: "Sim! O Fluxen é totalmente responsivo e funciona perfeitamente em celulares, tablets e computadores. Acesse de qualquer lugar."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Absolutamente. Utilizamos criptografia de ponta a ponta e os dados são armazenados em servidores seguros com backup diário."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é feito mensalmente via cartão de crédito ou PIX. Você receberá um email com os dados de acesso assim que o pagamento for confirmado."
    },
    {
      question: "Posso importar meus dados existentes?",
      answer: "Sim! Oferecemos suporte para importação de dados via planilhas Excel ou CSV. Nossa equipe pode ajudar você nesse processo."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0F172A] relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Fluxen
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-[#1E293B] rounded-xl border border-white/5 px-6"
              >
                <AccordionTrigger className="text-white hover:no-underline hover:text-blue-400 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FluxenFAQ;
