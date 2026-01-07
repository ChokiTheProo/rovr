import { motion } from "framer-motion";
import { Shield, FileText, Scale, CheckCircle, AlertTriangle, CreditCard, RefreshCw, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LegalPageLayout, itemVariants } from "@/components/LegalPageLayout";

const Termos = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Termos de",
      titleHighlight: "Uso",
      lastUpdate: "Atualizado em Janeiro 2025",
      relatedLinks: [
        { label: "Política de Privacidade", href: "/privacidade" },
        { label: "Perguntas Frequentes", href: "/faq" }
      ],
      footerText: "Em caso de dúvidas, entre em contato conosco",
      sections: [
        {
          icon: CheckCircle,
          title: "1. Aceitação dos Termos",
          content: "Ao acessar e utilizar os serviços da RoVR, você concorda integralmente com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, recomendamos que não utilize nossos serviços. A continuidade do uso implica na aceitação automática de quaisquer atualizações futuras."
        },
        {
          icon: FileText,
          title: "2. Descrição dos Serviços",
          content: "A RoVR oferece serviços especializados de desenvolvimento de software, SaaS e MicroSaaS personalizados. Nosso portfólio inclui o Fluxen (gestão financeira empresarial), Klyexa (plataforma de gestão de saúde), CuidaBem (monitoramento de idosos), Tratamento Diário (acompanhamento médico) e Emagrio (wellness e emagrecimento)."
        },
        {
          icon: Users,
          title: "3. Uso Aceitável",
          content: "Você concorda em usar nossos serviços exclusivamente para fins legais e de acordo com estes termos. É expressamente proibido utilizar nossos serviços para atividades ilegais, fraudulentas, disseminação de malware, tentativas de acesso não autorizado ou qualquer ação que viole direitos de terceiros."
        },
        {
          icon: Shield,
          title: "4. Propriedade Intelectual",
          content: "Todo o conteúdo, código-fonte, designs, logotipos e marcas registradas são de propriedade exclusiva da RoVR ou de seus licenciadores. É expressamente proibida a reprodução, distribuição, modificação ou engenharia reversa sem autorização prévia por escrito."
        },
        {
          icon: Scale,
          title: "5. Privacidade e Proteção de Dados",
          content: "Respeitamos sua privacidade e protegemos seus dados em conformidade com a LGPD. Ao usar nossos serviços, você concorda com a coleta e uso de informações conforme descrito em nossa Política de Privacidade. Implementamos medidas robustas de segurança para proteger suas informações."
        },
        {
          icon: CreditCard,
          title: "6. Pagamentos e Assinaturas",
          content: "Os planos de assinatura são cobrados mensalmente com renovação automática. Valores atuais: Fluxen R$ 45,90/mês | Klyexa R$ 35,00/mês. Cancelamentos devem ser solicitados com antecedência mínima de 5 dias úteis antes do próximo ciclo de cobrança para evitar renovação."
        },
        {
          icon: AlertTriangle,
          title: "7. Limitação de Responsabilidade",
          content: "A RoVR não se responsabiliza por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso de nossos serviços. Nossa responsabilidade total está limitada ao valor efetivamente pago pelos serviços nos últimos 12 meses."
        },
        {
          icon: RefreshCw,
          title: "8. Modificações e Atualizações",
          content: "Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas por email com 30 dias de antecedência ou através de aviso destacado em nosso site. O uso continuado após alterações constitui aceitação dos novos termos."
        }
      ]
    },
    en: {
      title: "Terms of",
      titleHighlight: "Use",
      lastUpdate: "Updated January 2025",
      relatedLinks: [
        { label: "Privacy Policy", href: "/privacidade" },
        { label: "FAQ", href: "/faq" }
      ],
      footerText: "If you have any questions, please contact us",
      sections: [
        {
          icon: CheckCircle,
          title: "1. Acceptance of Terms",
          content: "By accessing and using RoVR's services, you fully agree to these Terms of Use. If you do not agree with any part of these terms, we recommend that you do not use our services. Continued use implies automatic acceptance of any future updates."
        },
        {
          icon: FileText,
          title: "2. Description of Services",
          content: "RoVR offers specialized custom software development, SaaS and MicroSaaS services. Our portfolio includes Fluxen (business financial management), Klyexa (health management platform), CuidaBem (elderly monitoring), Tratamento Diário (medical follow-up) and Emagrio (wellness and weight loss)."
        },
        {
          icon: Users,
          title: "3. Acceptable Use",
          content: "You agree to use our services exclusively for legal purposes and in accordance with these terms. It is expressly prohibited to use our services for illegal activities, fraud, malware dissemination, unauthorized access attempts or any action that violates third-party rights."
        },
        {
          icon: Shield,
          title: "4. Intellectual Property",
          content: "All content, source code, designs, logos and trademarks are the exclusive property of RoVR or its licensors. Reproduction, distribution, modification or reverse engineering without prior written authorization is expressly prohibited."
        },
        {
          icon: Scale,
          title: "5. Privacy and Data Protection",
          content: "We respect your privacy and protect your data in compliance with LGPD. By using our services, you agree to the collection and use of information as described in our Privacy Policy. We implement robust security measures to protect your information."
        },
        {
          icon: CreditCard,
          title: "6. Payments and Subscriptions",
          content: "Subscription plans are billed monthly with automatic renewal. Current prices: Fluxen R$ 45.90/month | Klyexa R$ 35.00/month. Cancellations must be requested at least 5 business days before the next billing cycle to avoid renewal."
        },
        {
          icon: AlertTriangle,
          title: "7. Limitation of Liability",
          content: "RoVR is not responsible for indirect, incidental, special or consequential damages arising from the use of our services. Our total liability is limited to the amount actually paid for services in the last 12 months."
        },
        {
          icon: RefreshCw,
          title: "8. Modifications and Updates",
          content: "We reserve the right to modify these terms at any time. Significant changes will be communicated by email 30 days in advance or through a prominent notice on our website. Continued use after changes constitutes acceptance of the new terms."
        }
      ]
    },
    es: {
      title: "Términos de",
      titleHighlight: "Uso",
      lastUpdate: "Actualizado Enero 2025",
      relatedLinks: [
        { label: "Política de Privacidad", href: "/privacidade" },
        { label: "Preguntas Frecuentes", href: "/faq" }
      ],
      footerText: "Si tienes dudas, contáctanos",
      sections: [
        {
          icon: CheckCircle,
          title: "1. Aceptación de los Términos",
          content: "Al acceder y utilizar los servicios de RoVR, aceptas plenamente estos Términos de Uso. Si no estás de acuerdo con alguna parte de estos términos, te recomendamos no utilizar nuestros servicios. El uso continuo implica la aceptación automática de cualquier actualización futura."
        },
        {
          icon: FileText,
          title: "2. Descripción de los Servicios",
          content: "RoVR ofrece servicios especializados de desarrollo de software, SaaS y MicroSaaS personalizados. Nuestro portafolio incluye Fluxen (gestión financiera empresarial), Klyexa (plataforma de gestión de salud), CuidaBem (monitoreo de ancianos), Tratamento Diário (seguimiento médico) y Emagrio (bienestar y adelgazamiento)."
        },
        {
          icon: Users,
          title: "3. Uso Aceptable",
          content: "Aceptas usar nuestros servicios exclusivamente para fines legales y de acuerdo con estos términos. Está expresamente prohibido utilizar nuestros servicios para actividades ilegales, fraude, diseminación de malware, intentos de acceso no autorizado o cualquier acción que viole derechos de terceros."
        },
        {
          icon: Shield,
          title: "4. Propiedad Intelectual",
          content: "Todo el contenido, código fuente, diseños, logotipos y marcas registradas son propiedad exclusiva de RoVR o sus licenciantes. Está expresamente prohibida la reproducción, distribución, modificación o ingeniería inversa sin autorización previa por escrito."
        },
        {
          icon: Scale,
          title: "5. Privacidad y Protección de Datos",
          content: "Respetamos tu privacidad y protegemos tus datos en conformidad con la LGPD. Al usar nuestros servicios, aceptas la recopilación y uso de información según lo descrito en nuestra Política de Privacidad. Implementamos medidas robustas de seguridad."
        },
        {
          icon: CreditCard,
          title: "6. Pagos y Suscripciones",
          content: "Los planes de suscripción se cobran mensualmente con renovación automática. Precios actuales: Fluxen R$ 45,90/mes | Klyexa R$ 35,00/mes. Las cancelaciones deben solicitarse con al menos 5 días hábiles de anticipación al próximo ciclo de facturación."
        },
        {
          icon: AlertTriangle,
          title: "7. Limitación de Responsabilidad",
          content: "RoVR no se responsabiliza por daños indirectos, incidentales, especiales o consecuentes derivados del uso de nuestros servicios. Nuestra responsabilidad total está limitada al monto efectivamente pagado por los servicios en los últimos 12 meses."
        },
        {
          icon: RefreshCw,
          title: "8. Modificaciones y Actualizaciones",
          content: "Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios significativos serán comunicados por email con 30 días de anticipación o mediante aviso destacado en nuestro sitio. El uso continuo después de los cambios constituye aceptación."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <LegalPageLayout
      icon={Scale}
      title={t.title}
      titleHighlight={t.titleHighlight}
      lastUpdate={t.lastUpdate}
      accentColor="primary"
      relatedLinks={t.relatedLinks}
    >
      {/* Sections */}
      <div className="space-y-5">
        {t.sections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/40 hover:bg-card/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <section.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {section.content}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <motion.div
        variants={itemVariants}
        className="mt-12 p-8 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent text-center"
      >
        <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
          <Shield className="w-7 h-7 text-primary" />
        </div>
        <p className="text-foreground font-semibold text-lg mb-2">
          {t.footerText}
        </p>
        <a
          href="mailto:eurhok@gmail.com"
          className="text-primary hover:text-primary/80 transition-colors font-medium"
        >
          eurhok@gmail.com
        </a>
      </motion.div>
    </LegalPageLayout>
  );
};

export default Termos;
