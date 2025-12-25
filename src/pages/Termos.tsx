import { motion } from "framer-motion";
import { ArrowLeft, Shield, FileText, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Termos = () => {
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
      title: "1. Aceitação dos Termos",
      content: "Ao acessar e utilizar os serviços da Revyra, você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços."
    },
    {
      title: "2. Descrição dos Serviços",
      content: "A Revyra oferece serviços de desenvolvimento de software, SaaS e MicroSaaS personalizados. Nossos produtos incluem sistemas de gestão financeira (Fluxen) e gestão de saúde (Klyexa), entre outros."
    },
    {
      title: "3. Uso Aceitável",
      content: "Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes termos. É proibido usar nossos serviços para qualquer atividade ilegal, fraudulenta ou que viole direitos de terceiros."
    },
    {
      title: "4. Propriedade Intelectual",
      content: "Todo o conteúdo, código-fonte, designs e marcas registradas são de propriedade exclusiva da Revyra. É proibida a reprodução, distribuição ou modificação sem autorização prévia por escrito."
    },
    {
      title: "5. Privacidade e Dados",
      content: "Respeitamos sua privacidade e protegemos seus dados conforme nossa Política de Privacidade. Ao usar nossos serviços, você concorda com a coleta e uso de informações conforme descrito."
    },
    {
      title: "6. Pagamentos e Assinaturas",
      content: "Os planos de assinatura são cobrados mensalmente. Fluxen: R$ 45,90/mês | Klyexa: R$ 35,00/mês. Cancelamentos devem ser solicitados com antecedência de 5 dias úteis."
    },
    {
      title: "7. Limitação de Responsabilidade",
      content: "A Revyra não se responsabiliza por danos indiretos, incidentais ou consequenciais decorrentes do uso de nossos serviços. Nossa responsabilidade está limitada ao valor pago pelos serviços."
    },
    {
      title: "8. Modificações",
      content: "Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas por email ou através de aviso em nosso site."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/50 mb-6">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Termos de <span className="text-gradient">Uso</span>
            </h1>
            <p className="text-muted-foreground">
              Última atualização: Dezembro 2024
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
              >
                <h2 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Note */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 rounded-2xl border border-primary/30 bg-primary/10 text-center"
          >
            <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-foreground font-medium">
              Em caso de dúvidas, entre em contato conosco
            </p>
            <Link
              to="/contato"
              className="text-primary hover:underline mt-2 inline-block"
            >
              contato@revyra.com
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Termos;
