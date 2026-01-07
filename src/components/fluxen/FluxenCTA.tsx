import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FluxenCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1E293B] to-[#0F172A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-600/10 px-4 py-2 rounded-full mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Comece hoje mesmo</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Comece agora a profissionalizar seu controle de empréstimos
          </h2>
          
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de empreendedores que já transformaram sua gestão financeira com o Fluxen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#planos">
              <Button 
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full px-8 py-6 text-lg"
              >
                Assinar por R$ 45,90/mês
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FluxenCTA;
