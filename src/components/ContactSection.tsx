import { Clock, MessageCircle, FileText, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Clock, text: t("contactsection.benefit1") },
    { icon: MessageCircle, text: t("contactsection.benefit2") },
    { icon: FileText, text: t("contactsection.benefit3") },
  ];

  const contacts = [
    { icon: Mail, label: "eurhok@gmail.com", href: "mailto:eurhok@gmail.com" },
    { icon: Mail, label: "robsonvarela23@gmail.com", href: "mailto:robsonvarela23@gmail.com" },
  ];

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <span className="text-accent text-sm font-medium tracking-wider">
            {t("contactsection.tag")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t("contactsection.title1")}{" "}
            <span className="text-gradient">{t("contactsection.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {t("contactsection.description")}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {contacts.map((contact, index) => (
              <a 
                key={index} 
                href={contact.href}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
              >
                <contact.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{contact.label}</span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-10">
            <Link to="/contato">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold rounded-xl px-10 py-6 text-lg glow-primary transition-all duration-300"
              >
                {t("contactsection.cta")}
              </Button>
            </Link>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <benefit.icon className="w-5 h-5 text-primary" />
                <span className="text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
