import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-secondary/50 rounded-full p-1 border border-border/50">
      <button
        onClick={() => setLanguage("pt")}
        className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 ${
          language === "pt"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <span>🇧🇷</span>
        <span>PT</span>
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <span>🇺🇸</span>
        <span>EN</span>
      </button>
      <button
        onClick={() => setLanguage("es")}
        className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 ${
          language === "es"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <span>🇪🇸</span>
        <span>ES</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
