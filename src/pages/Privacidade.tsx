import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, Share2, Cookie, Globe, Bell } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LegalPageLayout, itemVariants } from "@/components/LegalPageLayout";

const Privacidade = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Política de",
      titleHighlight: "Privacidade",
      lastUpdate: "Atualizado em Janeiro 2025",
      relatedLinks: [
        { label: "Termos de Uso", href: "/termos" },
        { label: "Perguntas Frequentes", href: "/faq" }
      ],
      intro: "A RoVR está profundamente comprometida em proteger sua privacidade e dados pessoais. Esta política descreve de forma transparente como coletamos, utilizamos, armazenamos e protegemos suas informações em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).",
      cookiesTitle: "Política de Cookies",
      cookiesText: "Utilizamos cookies para melhorar sua experiência em nossos serviços. Cookies essenciais são necessários para o funcionamento do site. Cookies analíticos nos ajudam a entender como você interage com nossos serviços para melhorá-los continuamente.",
      cookieTypes: [
        { name: "Cookies Essenciais", desc: "Necessários para funcionamento básico" },
        { name: "Cookies Analíticos", desc: "Melhoram a experiência do usuário" },
        { name: "Cookies de Preferência", desc: "Lembram suas configurações" }
      ],
      footerText: "Dúvidas sobre privacidade ou seus dados?",
      sections: [
        {
          icon: Database,
          title: "Dados que Coletamos",
          content: "Coletamos informações que você nos fornece diretamente: nome completo, email, telefone, dados de empresa e informações de uso dos nossos sistemas. Também coletamos automaticamente dados técnicos como endereço IP, tipo de navegador, sistema operacional e informações do dispositivo para melhorar nossos serviços."
        },
        {
          icon: Eye,
          title: "Como Usamos seus Dados",
          content: "Seus dados são utilizados para: fornecer e personalizar nossos serviços, processar pagamentos de forma segura, enviar comunicações importantes sobre sua conta, realizar análises para melhorar a experiência do usuário, garantir a segurança da plataforma e cumprir obrigações legais."
        },
        {
          icon: Lock,
          title: "Proteção e Segurança",
          content: "Implementamos medidas de segurança de ponta: criptografia SSL/TLS em todas as transmissões, armazenamento criptografado de dados sensíveis, autenticação de dois fatores disponível, acesso restrito a dados pessoais apenas para funcionários autorizados, monitoramento 24/7 contra ameaças e backups regulares."
        },
        {
          icon: UserCheck,
          title: "Seus Direitos (LGPD)",
          content: "Você tem direito de: acessar seus dados pessoais, solicitar correção de dados incompletos ou desatualizados, solicitar exclusão de dados (quando aplicável), revogar consentimento, solicitar portabilidade dos dados para outro fornecedor, e ser informado sobre compartilhamentos. Exerça seus direitos através do email: eurhok@gmail.com"
        },
        {
          icon: Share2,
          title: "Compartilhamento de Dados",
          content: "Não vendemos, alugamos ou comercializamos seus dados pessoais. Compartilhamos informações apenas com: processadores de pagamento (Stripe, PagSeguro), serviços de hospedagem e infraestrutura, ferramentas de análise, e autoridades legais quando exigido por lei. Todos os parceiros são obrigados contratualmente a proteger seus dados."
        },
        {
          icon: Globe,
          title: "Transferência Internacional",
          content: "Alguns de nossos prestadores de serviços podem estar localizados fora do Brasil. Nesses casos, garantimos que as transferências internacionais de dados são realizadas em conformidade com a LGPD, utilizando cláusulas contratuais padrão e verificando que os países destinatários ofereçam proteção adequada."
        },
        {
          icon: Bell,
          title: "Retenção de Dados",
          content: "Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo obrigações legais, fiscais e contratuais. Dados de conta são mantidos enquanto sua conta estiver ativa. Após exclusão da conta, dados são removidos em até 30 dias, exceto quando a retenção for legalmente exigida."
        }
      ]
    },
    en: {
      title: "Privacy",
      titleHighlight: "Policy",
      lastUpdate: "Updated January 2025",
      relatedLinks: [
        { label: "Terms of Use", href: "/termos" },
        { label: "FAQ", href: "/faq" }
      ],
      intro: "RoVR is deeply committed to protecting your privacy and personal data. This policy transparently describes how we collect, use, store and protect your information in full compliance with the General Data Protection Law (LGPD - Law No. 13,709/2018).",
      cookiesTitle: "Cookie Policy",
      cookiesText: "We use cookies to improve your experience with our services. Essential cookies are necessary for website functionality. Analytical cookies help us understand how you interact with our services to continuously improve them.",
      cookieTypes: [
        { name: "Essential Cookies", desc: "Necessary for basic functionality" },
        { name: "Analytical Cookies", desc: "Improve user experience" },
        { name: "Preference Cookies", desc: "Remember your settings" }
      ],
      footerText: "Questions about privacy or your data?",
      sections: [
        {
          icon: Database,
          title: "Data We Collect",
          content: "We collect information you provide directly: full name, email, phone, company data and usage information from our systems. We also automatically collect technical data such as IP address, browser type, operating system and device information to improve our services."
        },
        {
          icon: Eye,
          title: "How We Use Your Data",
          content: "Your data is used to: provide and personalize our services, process payments securely, send important communications about your account, perform analytics to improve user experience, ensure platform security and comply with legal obligations."
        },
        {
          icon: Lock,
          title: "Protection and Security",
          content: "We implement state-of-the-art security measures: SSL/TLS encryption on all transmissions, encrypted storage of sensitive data, two-factor authentication available, restricted access to personal data only for authorized employees, 24/7 threat monitoring and regular backups."
        },
        {
          icon: UserCheck,
          title: "Your Rights (LGPD)",
          content: "You have the right to: access your personal data, request correction of incomplete or outdated data, request deletion of data (when applicable), revoke consent, request data portability to another provider, and be informed about sharing. Exercise your rights through email: eurhok@gmail.com"
        },
        {
          icon: Share2,
          title: "Data Sharing",
          content: "We do not sell, rent or trade your personal data. We share information only with: payment processors (Stripe, PagSeguro), hosting and infrastructure services, analytics tools, and legal authorities when required by law. All partners are contractually obligated to protect your data."
        },
        {
          icon: Globe,
          title: "International Transfer",
          content: "Some of our service providers may be located outside Brazil. In these cases, we ensure that international data transfers are carried out in compliance with LGPD, using standard contractual clauses and verifying that destination countries offer adequate protection."
        },
        {
          icon: Bell,
          title: "Data Retention",
          content: "We keep your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, tax and contractual obligations. Account data is kept while your account is active. After account deletion, data is removed within 30 days, except when retention is legally required."
        }
      ]
    },
    es: {
      title: "Política de",
      titleHighlight: "Privacidad",
      lastUpdate: "Actualizado Enero 2025",
      relatedLinks: [
        { label: "Términos de Uso", href: "/termos" },
        { label: "Preguntas Frecuentes", href: "/faq" }
      ],
      intro: "RoVR está profundamente comprometida con proteger tu privacidad y datos personales. Esta política describe de forma transparente cómo recopilamos, utilizamos, almacenamos y protegemos tu información en total conformidad con la Ley General de Protección de Datos (LGPD - Ley nº 13.709/2018).",
      cookiesTitle: "Política de Cookies",
      cookiesText: "Utilizamos cookies para mejorar tu experiencia en nuestros servicios. Las cookies esenciales son necesarias para el funcionamiento del sitio. Las cookies analíticas nos ayudan a entender cómo interactúas con nuestros servicios para mejorarlos continuamente.",
      cookieTypes: [
        { name: "Cookies Esenciales", desc: "Necesarias para funcionamiento básico" },
        { name: "Cookies Analíticas", desc: "Mejoran la experiencia del usuario" },
        { name: "Cookies de Preferencia", desc: "Recuerdan tus configuraciones" }
      ],
      footerText: "¿Dudas sobre privacidad o tus datos?",
      sections: [
        {
          icon: Database,
          title: "Datos que Recopilamos",
          content: "Recopilamos información que nos proporcionas directamente: nombre completo, email, teléfono, datos de empresa e información de uso de nuestros sistemas. También recopilamos automáticamente datos técnicos como dirección IP, tipo de navegador, sistema operativo e información del dispositivo."
        },
        {
          icon: Eye,
          title: "Cómo Usamos tus Datos",
          content: "Tus datos se utilizan para: proporcionar y personalizar nuestros servicios, procesar pagos de forma segura, enviar comunicaciones importantes sobre tu cuenta, realizar análisis para mejorar la experiencia, garantizar la seguridad de la plataforma y cumplir obligaciones legales."
        },
        {
          icon: Lock,
          title: "Protección y Seguridad",
          content: "Implementamos medidas de seguridad de vanguardia: encriptación SSL/TLS en todas las transmisiones, almacenamiento encriptado de datos sensibles, autenticación de dos factores disponible, acceso restringido solo para empleados autorizados, monitoreo 24/7 contra amenazas y backups regulares."
        },
        {
          icon: UserCheck,
          title: "Tus Derechos (LGPD)",
          content: "Tienes derecho a: acceder a tus datos personales, solicitar corrección de datos incompletos, solicitar exclusión de datos (cuando aplique), revocar consentimiento, solicitar portabilidad de datos y ser informado sobre compartimientos. Ejerce tus derechos a través del email: eurhok@gmail.com"
        },
        {
          icon: Share2,
          title: "Compartir Datos",
          content: "No vendemos, alquilamos ni comercializamos tus datos personales. Compartimos información solo con: procesadores de pago (Stripe, PagSeguro), servicios de hosting e infraestructura, herramientas de análisis y autoridades legales cuando lo exija la ley. Todos los socios están obligados contractualmente a proteger tus datos."
        },
        {
          icon: Globe,
          title: "Transferencia Internacional",
          content: "Algunos de nuestros proveedores de servicios pueden estar ubicados fuera de Brasil. En estos casos, garantizamos que las transferencias internacionales se realizan en conformidad con la LGPD, utilizando cláusulas contractuales estándar y verificando que los países destino ofrezcan protección adecuada."
        },
        {
          icon: Bell,
          title: "Retención de Datos",
          content: "Mantenemos tus datos personales solo por el tiempo necesario para cumplir las finalidades para las que fueron recopilados, incluyendo obligaciones legales, fiscales y contractuales. Los datos de cuenta se mantienen mientras tu cuenta esté activa. Después de la eliminación, los datos se remueven en hasta 30 días."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <LegalPageLayout
      icon={Lock}
      title={t.title}
      titleHighlight={t.titleHighlight}
      lastUpdate={t.lastUpdate}
      accentColor="accent"
      relatedLinks={t.relatedLinks}
    >
      {/* Intro */}
      <motion.div
        variants={itemVariants}
        className="p-6 md:p-8 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent mb-8"
      >
        <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
          {t.intro}
        </p>
      </motion.div>

      {/* Sections */}
      <div className="space-y-5">
        {t.sections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/40 hover:bg-card/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <section.icon className="w-6 h-6 text-accent" />
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

      {/* Cookies Section */}
      <motion.div
        variants={itemVariants}
        className="mt-8 p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">{t.cookiesTitle}</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
          {t.cookiesText}
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {t.cookieTypes.map((cookie, index) => (
            <div 
              key={index}
              className="p-4 rounded-xl bg-muted/30 border border-border/30"
            >
              <span className="font-medium text-foreground text-sm">{cookie.name}</span>
              <p className="text-xs text-muted-foreground mt-1">{cookie.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer Note */}
      <motion.div
        variants={itemVariants}
        className="mt-12 p-8 rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent text-center"
      >
        <div className="w-14 h-14 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-4">
          <Shield className="w-7 h-7 text-accent" />
        </div>
        <p className="text-foreground font-semibold text-lg mb-2">
          {t.footerText}
        </p>
        <a
          href="mailto:eurhok@gmail.com"
          className="text-accent hover:text-accent/80 transition-colors font-medium"
        >
          eurhok@gmail.com
        </a>
      </motion.div>
    </LegalPageLayout>
  );
};

export default Privacidade;
