import { motion } from "framer-motion";
import { Shield, FileText, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Termos = () => {
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
      title: "Termos de",
      titleHighlight: "Uso",
      lastUpdate: "Última atualização: Dezembro 2024",
      footerText: "Em caso de dúvidas, entre em contato conosco",
      sections: [
        {
          title: "1. Aceitação dos Termos",
          content: "Ao acessar e utilizar os serviços da RoVR, você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços."
        },
        {
          title: "2. Descrição dos Serviços",
          content: "A RoVR oferece serviços de desenvolvimento de software, SaaS e MicroSaaS personalizados. Nossos produtos incluem sistemas de gestão financeira (Fluxen) e gestão de saúde (Klyexa), entre outros."
        },
        {
          title: "3. Uso Aceitável",
          content: "Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes termos. É proibido usar nossos serviços para qualquer atividade ilegal, fraudulenta ou que viole direitos de terceiros."
        },
        {
          title: "4. Propriedade Intelectual",
          content: "Todo o conteúdo, código-fonte, designs e marcas registradas são de propriedade exclusiva da RoVR. É proibida a reprodução, distribuição ou modificação sem autorização prévia por escrito."
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
          content: "A RoVR não se responsabiliza por danos indiretos, incidentais ou consequenciais decorrentes do uso de nossos serviços. Nossa responsabilidade está limitada ao valor pago pelos serviços."
        },
        {
          title: "8. Modificações",
          content: "Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas por email ou através de aviso em nosso site."
        }
      ]
    },
    en: {
      title: "Terms of",
      titleHighlight: "Use",
      lastUpdate: "Last updated: December 2024",
      footerText: "If you have any questions, please contact us",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By accessing and using RoVR's services, you agree to these Terms of Use. If you do not agree with any part of these terms, you should not use our services."
        },
        {
          title: "2. Description of Services",
          content: "RoVR offers custom software development, SaaS and MicroSaaS services. Our products include financial management systems (Fluxen) and health management platforms (Klyexa), among others."
        },
        {
          title: "3. Acceptable Use",
          content: "You agree to use our services only for lawful purposes and in accordance with these terms. It is prohibited to use our services for any illegal, fraudulent activity or that violates third-party rights."
        },
        {
          title: "4. Intellectual Property",
          content: "All content, source code, designs and trademarks are the exclusive property of RoVR. Reproduction, distribution or modification without prior written authorization is prohibited."
        },
        {
          title: "5. Privacy and Data",
          content: "We respect your privacy and protect your data in accordance with our Privacy Policy. By using our services, you agree to the collection and use of information as described."
        },
        {
          title: "6. Payments and Subscriptions",
          content: "Subscription plans are billed monthly. Fluxen: R$ 45.90/month | Klyexa: R$ 35.00/month. Cancellations must be requested 5 business days in advance."
        },
        {
          title: "7. Limitation of Liability",
          content: "RoVR is not responsible for indirect, incidental or consequential damages arising from the use of our services. Our liability is limited to the amount paid for the services."
        },
        {
          title: "8. Modifications",
          content: "We reserve the right to modify these terms at any time. Significant changes will be communicated by email or through notice on our website."
        }
      ]
    },
    es: {
      title: "Términos de",
      titleHighlight: "Uso",
      lastUpdate: "Última actualización: Diciembre 2024",
      footerText: "Si tienes dudas, contáctanos",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content: "Al acceder y utilizar los servicios de RoVR, aceptas estos Términos de Uso. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestros servicios."
        },
        {
          title: "2. Descripción de los Servicios",
          content: "RoVR ofrece servicios de desarrollo de software, SaaS y MicroSaaS personalizados. Nuestros productos incluyen sistemas de gestión financiera (Fluxen) y gestión de salud (Klyexa), entre otros."
        },
        {
          title: "3. Uso Aceptable",
          content: "Aceptas usar nuestros servicios solo para fines legales y de acuerdo con estos términos. Está prohibido usar nuestros servicios para cualquier actividad ilegal, fraudulenta o que viole derechos de terceros."
        },
        {
          title: "4. Propiedad Intelectual",
          content: "Todo el contenido, código fuente, diseños y marcas registradas son propiedad exclusiva de RoVR. Está prohibida la reproducción, distribución o modificación sin autorización previa por escrito."
        },
        {
          title: "5. Privacidad y Datos",
          content: "Respetamos tu privacidad y protegemos tus datos conforme a nuestra Política de Privacidad. Al usar nuestros servicios, aceptas la recopilación y uso de información según lo descrito."
        },
        {
          title: "6. Pagos y Suscripciones",
          content: "Los planes de suscripción se cobran mensualmente. Fluxen: R$ 45,90/mes | Klyexa: R$ 35,00/mes. Las cancelaciones deben solicitarse con 5 días hábiles de anticipación."
        },
        {
          title: "7. Limitación de Responsabilidad",
          content: "RoVR no se responsabiliza por daños indirectos, incidentales o consecuentes derivados del uso de nuestros servicios. Nuestra responsabilidad está limitada al valor pagado por los servicios."
        },
        {
          title: "8. Modificaciones",
          content: "Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios significativos serán comunicados por email o mediante aviso en nuestro sitio."
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
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <main className="container mx-auto px-6 py-12 pt-28 relative z-10 flex-1">
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
              {t.title} <span className="text-gradient">{t.titleHighlight}</span>
            </h1>
            <p className="text-muted-foreground">
              {t.lastUpdate}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            {t.sections.map((section, index) => (
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
              {t.footerText}
            </p>
            <a
              href="mailto:eurhok@gmail.com"
              className="text-primary hover:underline mt-2 inline-block"
            >
              eurhok@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Termos;
