import { Clock, MessageCircle, FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { t } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const benefits = [
    { icon: Clock, text: t("contactsection.benefit1") },
    { icon: MessageCircle, text: t("contactsection.benefit2") },
    { icon: FileText, text: t("contactsection.benefit3") },
  ];

  const contacts = [
    { icon: Mail, label: "eurhok@gmail.com", href: "mailto:eurhok@gmail.com" },
    { icon: Mail, label: "roger1robson2@gmail.com", href: "mailto:roger1robson2@gmail.com" },
  ];

  return (
    <section id="contato" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.span 
            className="text-accent text-sm font-medium tracking-wider"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t("contactsection.tag")}
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t("contactsection.title1")}{" "}
            <span className="text-gradient">{t("contactsection.title2")}</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t("contactsection.description")}
          </motion.p>

          {/* Contact Info */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-10"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {contacts.map((contact, index) => (
              <motion.a 
                key={index} 
                href={contact.href}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.05, 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
              >
                <contact.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{contact.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="flex justify-center mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link to="/contato">
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold rounded-xl px-10 py-6 text-lg glow-primary transition-all duration-300"
                >
                  {t("contactsection.cta")}
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-2 text-muted-foreground"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                <benefit.icon className="w-5 h-5 text-primary" />
                <span className="text-sm">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
