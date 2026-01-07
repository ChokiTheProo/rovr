import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield, X, Settings, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "rovr_cookie_consent";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  acceptedAt?: string;
}

const CookieConsent = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false
  });

  const content = {
    pt: {
      title: "🍪 Usamos Cookies",
      description: "Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site e personalizar conteúdo. Ao continuar navegando, você concorda com nossa",
      privacyLink: "Política de Privacidade",
      acceptAll: "Aceitar Todos",
      acceptEssential: "Apenas Essenciais",
      customize: "Personalizar",
      savePreferences: "Salvar Preferências",
      cookies: {
        essential: {
          name: "Cookies Essenciais",
          description: "Necessários para o funcionamento básico do site. Não podem ser desativados."
        },
        analytics: {
          name: "Cookies Analíticos",
          description: "Nos ajudam a entender como você usa o site para melhorar a experiência."
        },
        marketing: {
          name: "Cookies de Marketing",
          description: "Usados para exibir anúncios relevantes e medir campanhas publicitárias."
        }
      }
    },
    en: {
      title: "🍪 We Use Cookies",
      description: "We use cookies to improve your experience, analyze site traffic and personalize content. By continuing to browse, you agree to our",
      privacyLink: "Privacy Policy",
      acceptAll: "Accept All",
      acceptEssential: "Essential Only",
      customize: "Customize",
      savePreferences: "Save Preferences",
      cookies: {
        essential: {
          name: "Essential Cookies",
          description: "Required for basic site functionality. Cannot be disabled."
        },
        analytics: {
          name: "Analytics Cookies",
          description: "Help us understand how you use the site to improve the experience."
        },
        marketing: {
          name: "Marketing Cookies",
          description: "Used to display relevant ads and measure advertising campaigns."
        }
      }
    },
    es: {
      title: "🍪 Usamos Cookies",
      description: "Utilizamos cookies para mejorar tu experiencia, analizar el tráfico del sitio y personalizar contenido. Al continuar navegando, aceptas nuestra",
      privacyLink: "Política de Privacidad",
      acceptAll: "Aceptar Todos",
      acceptEssential: "Solo Esenciales",
      customize: "Personalizar",
      savePreferences: "Guardar Preferencias",
      cookies: {
        essential: {
          name: "Cookies Esenciales",
          description: "Necesarias para el funcionamiento básico del sitio. No se pueden desactivar."
        },
        analytics: {
          name: "Cookies Analíticas",
          description: "Nos ayudan a entender cómo usas el sitio para mejorar la experiencia."
        },
        marketing: {
          name: "Cookies de Marketing",
          description: "Usadas para mostrar anuncios relevantes y medir campañas publicitarias."
        }
      }
    }
  };

  const t = content[language];

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!savedConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    const consentData = {
      ...prefs,
      acceptedAt: new Date().toISOString()
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true
    });
  };

  const handleAcceptEssential = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false
    });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "essential") return; // Essential can't be toggled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 lg:left-auto lg:right-6 lg:max-w-lg z-50"
        >
          <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="p-5 pb-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{t.title}</h3>
                </div>
                <button
                  onClick={handleAcceptEssential}
                  className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.description}{" "}
                <Link 
                  to="/privacidade" 
                  className="text-primary hover:underline font-medium"
                  onClick={handleAcceptEssential}
                >
                  {t.privacyLink}
                </Link>.
              </p>

              {/* Cookie Details */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-3">
                      {/* Essential */}
                      <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-muted/50">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="font-medium text-sm text-foreground">
                              {t.cookies.essential.name}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {t.cookies.essential.description}
                          </p>
                        </div>
                        <div className="w-12 h-6 bg-primary/20 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                          <div className="w-4 h-4 bg-primary rounded-full" />
                        </div>
                      </div>

                      {/* Analytics */}
                      <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-muted/50">
                        <div className="flex-1">
                          <span className="font-medium text-sm text-foreground">
                            {t.cookies.analytics.name}
                          </span>
                          <p className="text-xs text-muted-foreground mt-1">
                            {t.cookies.analytics.description}
                          </p>
                        </div>
                        <button
                          onClick={() => togglePreference("analytics")}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.analytics 
                              ? "bg-primary/20 justify-end" 
                              : "bg-muted justify-start"
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full transition-colors ${
                            preferences.analytics ? "bg-primary" : "bg-muted-foreground/50"
                          }`} />
                        </button>
                      </div>

                      {/* Marketing */}
                      <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-muted/50">
                        <div className="flex-1">
                          <span className="font-medium text-sm text-foreground">
                            {t.cookies.marketing.name}
                          </span>
                          <p className="text-xs text-muted-foreground mt-1">
                            {t.cookies.marketing.description}
                          </p>
                        </div>
                        <button
                          onClick={() => togglePreference("marketing")}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.marketing 
                              ? "bg-primary/20 justify-end" 
                              : "bg-muted justify-start"
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full transition-colors ${
                            preferences.marketing ? "bg-primary" : "bg-muted-foreground/50"
                          }`} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="p-5 pt-0 flex flex-wrap gap-3">
              {showDetails ? (
                <>
                  <Button
                    onClick={() => setShowDetails(false)}
                    variant="ghost"
                    className="flex-1"
                  >
                    <X className="w-4 h-4 mr-2" />
                    {t.acceptEssential}
                  </Button>
                  <Button
                    onClick={handleSavePreferences}
                    className="flex-1"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    {t.savePreferences}
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => setShowDetails(true)}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    {t.customize}
                  </Button>
                  <Button
                    onClick={handleAcceptEssential}
                    variant="ghost"
                    size="sm"
                    className="flex-1"
                  >
                    {t.acceptEssential}
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    size="sm"
                    className="flex-1"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    {t.acceptAll}
                  </Button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
