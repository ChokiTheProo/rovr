import { useLanguage } from "@/contexts/LanguageContext";

const BrazilFlag = () => (
  <svg width="16" height="12" viewBox="0 0 640 480" className="rounded-sm">
    <path fill="#229e45" d="M0 0h640v480H0z"/>
    <path fill="#f8e509" d="M321.4 436.1 21.5 240 321.4 43.9 621.3 240z"/>
    <circle fill="#2b49a3" cx="321.4" cy="240" r="110"/>
    <path fill="#ffffef" d="M197 227.9a115 115 0 0 1 162.4-10.6 115 115 0 0 0-162.4 10.6z"/>
  </svg>
);

const USAFlag = () => (
  <svg width="16" height="12" viewBox="0 0 640 480" className="rounded-sm">
    <path fill="#bd3d44" d="M0 0h640v480H0"/>
    <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"/>
    <path fill="#192f5d" d="M0 0h364.8v258.5H0"/>
    <marker id="us-star" markerHeight="30" markerWidth="30">
      <path fill="#fff" d="m14 0 4.3 13.3H32L21 21.6l4.3 13.3L14 26.6 2.7 35l4.3-13.4L-4 13.3h13.6z"/>
    </marker>
  </svg>
);

const SpainFlag = () => (
  <svg width="16" height="12" viewBox="0 0 640 480" className="rounded-sm">
    <path fill="#AA151B" d="M0 0h640v480H0z"/>
    <path fill="#F1BF00" d="M0 120h640v240H0z"/>
  </svg>
);

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
        <BrazilFlag />
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
        <USAFlag />
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
        <SpainFlag />
        <span>ES</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
