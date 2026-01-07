import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Shield, Check } from "lucide-react";

const FluxenHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { label: "Total Emprestado", value: "R$ 45.230", color: "text-white" },
    { label: "Total Recebido", value: "R$ 32.850", color: "text-green-400" },
    { label: "Em Aberto", value: "R$ 12.380", color: "text-yellow-400" },
    { label: "Inadimplência", value: "R$ 2.150", color: "text-red-400" },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />

      <motion.div 
        className="container mx-auto px-6 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Controle seus empréstimos de forma{" "}
            <span className="text-green-400">simples</span>,{" "}
            <span className="text-blue-400">segura</span> e{" "}
            <span className="text-purple-400">profissional</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8"
          >
            Gerencie clientes, parcelas, recebimentos e inadimplência em um único sistema. 
            Perfeito para autônomos e pequenos negócios.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <a href="#planos">
              <Button 
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full px-8 py-6 text-lg"
              >
                Assinar por R$ 45,90/mês
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Shield className="w-4 h-4 text-blue-400" />
              Dados seguros
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Check className="w-4 h-4 text-green-400" />
              Sem taxa de adesão
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Check className="w-4 h-4 text-green-400" />
              Cancele quando quiser
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-4xl"
          >
            <div className="bg-[#1E293B] rounded-2xl p-6 border border-white/10">
              {/* Window dots */}
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#0F172A] rounded-xl p-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
                    <p className={`text-xl md:text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="flex items-end justify-between h-32 gap-2">
                {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                  <motion.div
                    key={i}
                    className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg flex-1"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FluxenHero;
