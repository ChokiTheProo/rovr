import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Privacidade = () => {
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

  const sections = [
    {
      icon: Database,
      title: "Dados que Coletamos",
      content: "Coletamos informações pessoais como nome, email, telefone e dados de uso dos nossos sistemas. Também coletamos dados técnicos como endereço IP, tipo de navegador e informações do dispositivo."
    },
    {
      icon: Eye,
      title: "Como Usamos seus Dados",
      content: "Utilizamos seus dados para: fornecer e melhorar nossos serviços, processar pagamentos, enviar comunicações importantes, personalizar sua experiência e garantir a segurança da plataforma."
    },
    {
      icon: Lock,
      title: "Proteção de Dados",
      content: "Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados, incluindo criptografia SSL, acesso restrito a dados pessoais e monitoramento contínuo de segurança."
    },
    {
      icon: UserCheck,
      title: "Seus Direitos",
      content: "Você tem direito de acessar, corrigir, excluir seus dados pessoais, além de solicitar a portabilidade dos dados. Para exercer esses direitos, entre em contato pelo email: privacidade@revyra.com"
    },
    {
      icon: Shield,
      title: "Compartilhamento de Dados",
      content: "Não vendemos seus dados pessoais. Compartilhamos informações apenas com prestadores de serviços essenciais (processadores de pagamento, serviços de hospedagem) sob acordos de confidencialidade."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 border border-accent/50 mb-6">
              <Lock className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Política de <span className="text-gradient">Privacidade</span>
            </h1>
            <p className="text-muted-foreground">
              Última atualização: Dezembro 2024
            </p>
          </motion.div>

          {/* Intro */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm mb-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              A Revyra está comprometida em proteger sua privacidade. Esta política descreve como coletamos, 
              usamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            className="grid gap-6"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/30 transition-colors"
              >
                <h2 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-accent" />
                  </div>
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed pl-13">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Cookies */}
          <motion.div
            variants={itemVariants}
            className="mt-8 p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
          >
            <h2 className="text-xl font-semibold text-foreground mb-3">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para entender 
              como você usa nossos serviços. Você pode gerenciar suas preferências de cookies nas configurações do navegador.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">Cookies Essenciais</span>
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm">Cookies Analíticos</span>
              <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">Cookies de Marketing</span>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 rounded-2xl border border-accent/30 bg-accent/10 text-center"
          >
            <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-foreground font-medium">
              Dúvidas sobre privacidade?
            </p>
            <a
              href="mailto:privacidade@revyra.com"
              className="text-accent hover:underline mt-2 inline-block"
            >
              privacidade@revyra.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacidade;
