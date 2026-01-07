import { motion } from "framer-motion";
import { 
  Users, 
  CreditCard, 
  Calendar, 
  BarChart3, 
  AlertTriangle, 
  FileText,
  Smartphone
} from "lucide-react";

const FluxenFeatures = () => {
  const features = [
    {
      icon: Users,
      title: "Cadastro de Clientes",
      description: "Gerencie todos os dados dos seus clientes e contatos em um só lugar."
    },
    {
      icon: CreditCard,
      title: "Controle de Empréstimos",
      description: "Registre e acompanhe todos os empréstimos de forma organizada."
    },
    {
      icon: Calendar,
      title: "Parcelas Automáticas",
      description: "Sistema calcula vencimentos e parcelas automaticamente."
    },
    {
      icon: BarChart3,
      title: "Dashboard Financeiro",
      description: "Visualize todos os seus números em tempo real."
    },
    {
      icon: AlertTriangle,
      title: "Controle de Inadimplência",
      description: "Identifique clientes em atraso e tome ações rápidas."
    },
    {
      icon: FileText,
      title: "Relatórios Completos",
      description: "Relatórios claros e organizados para suas análises."
    },
    {
      icon: Smartphone,
      title: "Acesso em Qualquer Lugar",
      description: "Use no celular, tablet ou computador quando precisar."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="funcionalidades" className="py-24 bg-[#0F172A] relative">
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
            Tudo que você precisa em um sistema
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Funcionalidades desenvolvidas para facilitar seu dia a dia
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#1E293B] rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-4 group-hover:bg-blue-600/20 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FluxenFeatures;
