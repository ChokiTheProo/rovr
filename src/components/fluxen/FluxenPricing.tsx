import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Check, ArrowRight } from "lucide-react";

const FluxenPricing = () => {
  const features = [
    "Clientes ilimitados",
    "Empréstimos ilimitados",
    "Relatórios completos",
    "Suporte prioritário",
    "Atualizações constantes",
    "Dashboard em tempo real",
    "Controle de inadimplência",
    "Acesso em qualquer dispositivo"
  ];

  return (
    <section id="planos" className="py-24 bg-[#0F172A] relative">
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
            Um plano simples e completo
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sem surpresas, sem taxas escondidas. Tudo que você precisa por um preço justo.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#1E293B] rounded-3xl p-8 border border-blue-500/20 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-10" />
            
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">Plano Pro</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl md:text-5xl font-bold text-white">R$45,90</span>
                <span className="text-gray-400">/mês</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Button 
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl py-6 text-lg"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <p className="text-center text-gray-500 text-sm mt-4">
              Cancele quando quiser • Sem taxa de adesão
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FluxenPricing;
