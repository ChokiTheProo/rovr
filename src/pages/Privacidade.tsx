import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacidade = () => {
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
      title: "Política de",
      titleHighlight: "Privacidade",
      lastUpdate: "Última atualização: Dezembro 2024",
      intro: "A RoVR está comprometida em proteger sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
      cookiesTitle: "Cookies",
      cookiesText: "Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para entender como você usa nossos serviços. Você pode gerenciar suas preferências de cookies nas configurações do navegador.",
      cookieTypes: ["Cookies Essenciais", "Cookies Analíticos", "Cookies de Marketing"],
      footerText: "Dúvidas sobre privacidade?",
      sections: [
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
          content: "Você tem direito de acessar, corrigir, excluir seus dados pessoais, além de solicitar a portabilidade dos dados. Para exercer esses direitos, entre em contato pelo email: privacidade@rovr.com.br"
        },
        {
          icon: Shield,
          title: "Compartilhamento de Dados",
          content: "Não vendemos seus dados pessoais. Compartilhamos informações apenas com prestadores de serviços essenciais (processadores de pagamento, serviços de hospedagem) sob acordos de confidencialidade."
        }
      ]
    },
    en: {
      title: "Privacy",
      titleHighlight: "Policy",
      lastUpdate: "Last updated: December 2024",
      intro: "RoVR is committed to protecting your privacy. This policy describes how we collect, use and protect your personal information in compliance with the General Data Protection Law (LGPD).",
      cookiesTitle: "Cookies",
      cookiesText: "We use essential cookies for website functionality and analytical cookies to understand how you use our services. You can manage your cookie preferences in your browser settings.",
      cookieTypes: ["Essential Cookies", "Analytical Cookies", "Marketing Cookies"],
      footerText: "Questions about privacy?",
      sections: [
        {
          icon: Database,
          title: "Data We Collect",
          content: "We collect personal information such as name, email, phone and usage data from our systems. We also collect technical data such as IP address, browser type and device information."
        },
        {
          icon: Eye,
          title: "How We Use Your Data",
          content: "We use your data to: provide and improve our services, process payments, send important communications, personalize your experience and ensure platform security."
        },
        {
          icon: Lock,
          title: "Data Protection",
          content: "We implement technical and organizational security measures to protect your data, including SSL encryption, restricted access to personal data and continuous security monitoring."
        },
        {
          icon: UserCheck,
          title: "Your Rights",
          content: "You have the right to access, correct, delete your personal data, as well as request data portability. To exercise these rights, contact us at: privacidade@rovr.com.br"
        },
        {
          icon: Shield,
          title: "Data Sharing",
          content: "We do not sell your personal data. We only share information with essential service providers (payment processors, hosting services) under confidentiality agreements."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden flex flex-col">
      <Header />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <main className="container mx-auto px-6 py-12 pt-28 relative z-10 flex-1">
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
              {t.title} <span className="text-gradient">{t.titleHighlight}</span>
            </h1>
            <p className="text-muted-foreground">
              {t.lastUpdate}
            </p>
          </motion.div>

          {/* Intro */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm mb-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              {t.intro}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            className="grid gap-6"
          >
            {t.sections.map((section, index) => (
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
            <h2 className="text-xl font-semibold text-foreground mb-3">{t.cookiesTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.cookiesText}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">{t.cookieTypes[0]}</span>
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm">{t.cookieTypes[1]}</span>
              <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">{t.cookieTypes[2]}</span>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 rounded-2xl border border-accent/30 bg-accent/10 text-center"
          >
            <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-foreground font-medium">
              {t.footerText}
            </p>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacidade;
