import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const FluxenTestimonials = () => {
  const testimonials = [
    {
      quote: "O Fluxen mudou completamente a forma como gerencio meus empréstimos. Antes era tudo no papel, agora tenho controle total em tempo real.",
      name: "Carlos Mendes",
      role: "Empreendedor",
      initials: "CM"
    },
    {
      quote: "Finalmente um sistema simples de usar! Consigo ver quem está em dia e quem está atrasado em segundos. Super recomendo.",
      name: "Ana Paula Silva",
      role: "Autônoma",
      initials: "APS"
    },
    {
      quote: "A visualização do dashboard é incrível. Meu negócio cresceu muito depois que comecei a usar o Fluxen para organizar tudo.",
      name: "Roberto Santos",
      role: "Pequeno Empresário",
      initials: "RS"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-[#1E293B] relative">
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
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Histórias reais de quem usa o Fluxen no dia a dia
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#0F172A] rounded-2xl p-6 border border-white/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Quote className="w-8 h-8 text-blue-500/30 mb-4" />
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-medium">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FluxenTestimonials;
